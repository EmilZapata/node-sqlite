const { RenderFile } = require("../utils");

class HomeController {
  async index(req, res) {
    return RenderFile("home", res);
  }

  async about(req, res) {
    return RenderFile("about", res);
  }
}

module.exports = new HomeController();
