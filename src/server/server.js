const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

import RouteLoader from './modules/routeLoader';
import connectMongo from './modules/connectMongo';

//load env vars
if (process.env.NODE_ENV == 'development')
    require('custom-env').env('dev');

if (process.env.NODE_ENV == 'production')
    require('custom-env').env('prod');

let server = express();

// allow cross origin requests
server.use(cors());
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
server.use(bodyParser.json());

//add react view support
server.set('view engine', 'jsx');
server.set('views', path.join(__dirname, '../app/views'));
server.engine('jsx', require('express-react-views').createEngine());

//add static support
server.use('/static', express.static(path.join(__dirname, '../app/static')));

(async function () {
    try {
        //connect to mongodb
        //await connectMongo();

        //setup nodemailer
        //let transporter = initTransporter();

        //load all routes
        let routeLoader = new RouteLoader(server, {
            dir: path.join(__dirname, '../app/routes'),
            verbose: true,
            strict: true,
            binds: {
                //transporter: transporter
            },
        });
        await routeLoader.loadDir();

        server.listen(3000, function () {
            console.log(`${server.name} listening at http://localhost:3000`);
        });
    } catch (err) {
        console.error(err);
    }

})();