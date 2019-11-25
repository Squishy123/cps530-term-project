const path = require('path');
const glob = require('glob');

import combineParsed from '../../app/middlewares/general/combineParsed';
import sendPayload from '../../app/middlewares/general/sendPayload';

function packageMiddle(middle) {
    return async function (req, res, next) {
        try {
            let fn = await middle(req, res);
            if (fn instanceof Error)
                throw fn;

            if (next) next();
        } catch (err) {
            return res.send({ error: err.message });
        }
    };
}

export default class RouteLoader {
    constructor(server, opts) {
        this.server = server;
        this.opts = {
            dir: opts.dir
                ? opts.dir
                : path.join(__dirname, '../../routes/HTTPRoutes'),
            verbose: opts.verbose ? opts.verbose : true,
            strict: opts.strict ? opts.strict : false,
        };

        if (opts.binds) this.binds = opts.binds;
        this.loadedRoutes = [];
    }

    loadObject(routeObject) {
        //check if route is already taken
        let exist = this.loadedRoutes.find(function (r) {
            return (
                r.path === routeObject.path && r.method === routeObject.method
            );
        });
        if (exist) {
            if (this.opts.verbose)
                throw (
                    new Error(`HTTPRouteLoader Error: Route already taken`)
                );
            return;
        }

        if(!routeObject.enabled) {
            console.log(
                `Disabled HTTP route ${routeObject.method} ${
                routeObject.path
                }`
            );
            return;
        }

        if (routeObject.handler) {
            //check if arr of middleware
            if (Array.isArray(routeObject.handler)) {
                //add parser
                routeObject.handler.unshift(packageMiddle(combineParsed));

                //add payload sender
                routeObject.handler.push(packageMiddle(sendPayload));

                for (let i = 0; i < routeObject.handler.length; i++) {
                    routeObject.handler[i] = packageMiddle(routeObject.handler[i].bind(this));
                }
            } else {
                routeObject.handler = [
                    packageMiddle(combineParsed.bind(this)),
                    packageMiddle(routeObject.handler.bind(this)),
                    packageMiddle(sendPayload.bind(this))
                ];
            }
            //http method
            if (routeObject.method === 'GET')
                this.server.get(routeObject.path, routeObject.handler);
            else if (routeObject.method === 'HEAD')
                this.server.head(routeObject.path, routeObject.handler);
            else if (routeObject.method === 'POST')
                this.server.post(routeObject.path, routeObject.handler);
            else if (routeObject.method === 'PUT')
                this.server.put(routeObject.path, routeObject.handler);
            else if (routeObject.method === 'DELETE')
                this.server.delete(routeObject.path, routeObject.handler);
            else {
                throw (
                    new Error(
                        `HTTPRouteLoader Error: Route method ${
                        routeObject.method
                        } is invalid`
                    )
                );
                return;
            }

            //add to loaded Routes
            this.loadedRoutes.push(routeObject);

            //verbose
            if (this.opts.verbose) {
                console.log(
                    `Success: Added new HTTP route ${routeObject.method} ${
                    routeObject.path
                    }`
                );
            }
        } else {
            //verbose
            if (this.opts.verbose) {
                throw (
                    `Error: No Handler found for ${routeObject.method} ${
                    routeObject.path
                    }`
                );
            }
        }

        return routeObject;
    }

    loadObjects(routeObjects) {
        if (!this.opts.dir && plugins.length > 0) {
            //load all routes
            routeObjects.forEach(function (route, i) {
                //strict check
                if (!loadObject(route) && this.opts.strict) return;
            });
            return;
        }
    }

    loadDir(dir) {
        //check if dir exists
        if (!dir && !this.opts.dir) {
            throw (
                new Error(`HTTPRouteLoader Error: No directory specified`)
            );
            return;
        }

        //load objects
        glob.sync(dir ? dir + '/**/*.js' : this.opts.dir + '/**/*.js').forEach(
            function (file) {
                let routeObject = require(file).default;
                //strict check
                if (!this.loadObject(routeObject) && this.opts.strict) return;
            }.bind(this)
        );
    }
}