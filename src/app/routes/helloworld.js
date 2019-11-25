
const Helloworld = {
    method: "GET",
    path: "/",
    enabled: true,
    handler: [(req, res) => {
        res.render('index', {message: 'Hello World!', data: req.params});
        return true;
    }]
}

export default Helloworld;