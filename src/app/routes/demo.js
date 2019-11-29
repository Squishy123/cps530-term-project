const Demo = {
  method: "GET",
  enabled: true,
  path: "/demo",
  handler: (req, res) => {
    res.render("demo");
    return true;
  }
};

export default Demo;
