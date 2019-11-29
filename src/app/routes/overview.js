const Overview = {
  method: "GET",
  enabled: true,
  path: "/overview",
  handler: (req, res) => {
    res.render("overview");
    return true;
  }
};

export default Overview;
