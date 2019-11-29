const Home = {
  method: "GET",
  enabled: true,
  path: "/",
  handler: (req, res) => {
    res.render("index");
    return true;
  }
};

export default Home;
