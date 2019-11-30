const Credits = {
  method: "GET",
  enabled: true,
  path: "/credits",
  handler: [
    (req, res) => {
      res.render("credits");
      return true;
    }
  ]
};

export default Credits;
