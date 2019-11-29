const Overview = {
  method: "GET",
  enabled: true,
  path: "/overview",
  handler: (req, res) => {
    res.render("overview", { message: "Hello World!", data: req.params });
    return true;
  }
};

export default Overview;
