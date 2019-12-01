
const Tutorial = {
    method: "GET",
    enabled: true,
    path: "/tutorial",
    handler: [(req, res) => {
        res.render("tutorial");
        return true;
    }]
}

export default Tutorial;