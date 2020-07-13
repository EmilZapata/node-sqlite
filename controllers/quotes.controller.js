const path = require("path");
const { RenderFile } = require("../utils");
const DB_PATH = path.join(__dirname + `/../data/db.json`);
const fs = require("fs");

const db = require(DB_PATH);

class QuotesController {
  async index(req, res) {
    return RenderFile("quotes", res);
  }

  async get(req, res) {
    return res.send(db);
  }

  async add(req, res) {
    const { body: quote } = req;
    const {id} = db[db.length - 1];
    quote.id = id + 1;
    db.push(quote);
    fs.writeFileSync(DB_PATH, JSON.stringify(db));
    return res.status(200).send();
  }
}

module.exports = new QuotesController();
