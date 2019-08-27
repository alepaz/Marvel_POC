const Path = require("path-parser").default;
const { URL } = require("url");
const CryptoJS = require("crypto-js");
const Axios = require("axios");
const { MARVEL_PRIV_KEY, MARVEL_PUBLIC_KEY } = require("../config/keys");
const API_URL = "http://gateway.marvel.com/v1/public/";

module.exports = app => {
  function createValues() {
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(
      ts + MARVEL_PRIV_KEY + MARVEL_PUBLIC_KEY
    ).toString();
    const API_URL = "http://gateway.marvel.com/v1/public/";
    return {
      ts,
      hash,
      API_URL
    };
  }

  app.get("/api/characters/", async (req, res) => {
    const { ts, hash, API_URL } = createValues();
    const offset = req.query.offset ? req.query.offset : 0;
    const filter = req.query.filter;
    const filterType = req.query.filterType;

    try {
      const characters = await Axios.get(`${API_URL}characters`, {
        params: {
          ts: ts,
          apikey: MARVEL_PUBLIC_KEY,
          hash: hash,
          offset: offset,
          limit: "12"
        }
      });
      res.send(characters.data);
    } catch (err) {
      console.log("Something happened");
      res.send("Error");
    }
  });

  app.get("/api/comics/", async (req, res) => {
    const { ts, hash, API_URL } = createValues();
    const offset = req.query.offset ? req.query.offset : 0;
    const filter = req.query.filter;
    const filterType = req.query.filterType;

    try {
      const comics = await Axios.get(`${API_URL}comics`, {
        params: {
          ts: ts,
          apikey: MARVEL_PUBLIC_KEY,
          hash: hash,
          offset: offset,
          limit: "12"
        }
      });
      res.send(comics.data);
    } catch (err) {
      console.log("Something happened");
      res.send("Error");
    }
  });

  app.get("/api/comics/", async (req, res) => {
    const { ts, hash, API_URL } = createValues();
    const offset = req.query.offset ? req.query.offset : 0;
    const filter = req.query.filter;
    const filterType = req.query.filterType;

    try {
      const comics = await Axios.get(`${API_URL}comics`, {
        params: {
          ts: ts,
          apikey: MARVEL_PUBLIC_KEY,
          hash: hash,
          offset: offset,
          limit: "12"
        }
      });
      res.send(comics.data);
    } catch (err) {
      console.log("Something happened");
      res.send("Error");
    }
  });

  app.get("/api/characters/:id", async (req, res) => {
    const id = req.params.id ? req.params.id : 0;

    res.send();
  });
};
