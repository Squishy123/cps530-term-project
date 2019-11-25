
const Helloworld = {
    method: "GET",
    path: "/",
    enabled: true,
    handler: [(req, res) => {
        req.payload = { message: 'Hello World!', data: req.params};
    }]
}

export default Helloworld;