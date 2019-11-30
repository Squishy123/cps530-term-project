const Conclusion = {
    method: "GET",
    enabled: true,
    path: "/conclusion",
    handler: [
      (req, res) => {
        res.render("conclusion");
        return true;
      }
    ]
  };
  
  export default Conclusion;
  