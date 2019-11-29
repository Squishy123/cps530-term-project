const Installation = {
  method: "GET",
  enabled: true,
  path: "/installation",
  handler: [
    (req, res) => {
      res.render("installation");
      return true;
    }
  ]
};

export default Installation;
