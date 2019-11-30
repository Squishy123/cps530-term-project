const fetch = require("node-fetch");

const DemoSearch = {
  method: "GET",
  enabled: true,
  path: "/demo/search",
  handler: [
    //call to api
    async (req, res) => {
      let results = await fetch(
        `https://api.datamuse.com/words?rel_syn=${req.params.search}`
      ).then(r => r.json());
      res.render("demo", { word: req.params.search, results: results });
      return true;
    }
  ]
};

export default DemoSearch;
