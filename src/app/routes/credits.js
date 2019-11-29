
const Credits = {
    method: "GET",
    enabled: true,
    path: "/credits",
    handler: [(req, res) => {
        res.render('credits', {message: 'Hello World!', data: req.params});
        return true;
    }]
}

export default Credits;