const Installation = {
    method: "GET",
    enabled: true,
    path: "/installation",
    handler: [(req, res) => {
        res.render('installation', { message: 'Hello World!', data: req.params });
        return true;
    }]
}

export default Installation;