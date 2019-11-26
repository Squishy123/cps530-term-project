
const HandleForm = {
    method: "GET",
    enabled: true,
    path: "/form",
    handler: [(req, res) => {
        res.render('process-form', {name: req.params.name});
        return true;
    }]
}

export default HandleForm;