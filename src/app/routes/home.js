
const Home = {
    method: "GET",
    enabled: true,
    path: "/",
    handler: [(req, res) => {
        res.render('index', {message: 'Hello World!', data: req.params});
        return true;
    }]
}

export default Home;