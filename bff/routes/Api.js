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
    const { offset = 0, filter, filterBy } = req.query;

    try {
      let params = {
        ts: ts,
        apikey: MARVEL_PUBLIC_KEY,
        hash: hash,
        offset: offset,
        limit: "12"
      };
      switch (filterBy) {
        case "name":
          params = { ...params, nameStartsWith: filter };
          break;
        case "comic":
          // this should be comic id and it can be separated by comma
          params = { ...params, comics: filter };
          break;
        case "story":
          // this should be story id and it can be separated by comma
          params = { ...params, stories: filter };
          break;
        default:
          break;
      }

      const characters = await Axios.get(`${API_URL}characters`, {
        params
      });
      res.send(characters.data);
    } catch (err) {
      console.log("Something happened");
      res.send("Error");
    }
  });

  app.get("/api/characters/:id", async (req, res) => {
    const { ts, hash, API_URL } = createValues();
    const { id } = req.params;

    try {
      let params = {
        ts: ts,
        apikey: MARVEL_PUBLIC_KEY,
        hash: hash,
      };

      const characters = await Axios.get(`${API_URL}characters/${encodeURIComponent(id)}`, {
        params
      });
      res.send(characters.data);
    } catch (err) {
      console.log("Something happened", err);
      res.send("Error");
    }
  });

  app.get("/api/comics/", async (req, res) => {
    const { ts, hash, API_URL } = createValues();
    const { offset = 0, filter, filterBy } = req.query;

    try {
      let params = {
        ts: ts,
        apikey: MARVEL_PUBLIC_KEY,
        hash: hash,
        offset: offset,
        limit: "12"
      };
      switch (filterBy) {
        case "name":
          params = { ...params, titleStartsWith: filter };
          break;
        case "characters":
          // this should be characters id and it can be separated by comma
          params = { ...params, characters: filter };
          break;
        case "story":
          // this should be story id and it can be separated by comma
          params = { ...params, stories: filter };
          break;
        default:
          break;
      }

      const comics = await Axios.get(`${API_URL}comics`, {
        params
      });
      res.send(comics.data);
    } catch (err) {
      console.log("Something happened");
      res.send("Error");
    }
  });

  app.get("/api/stories/", async (req, res) => {
    const { ts, hash, API_URL } = createValues();
    const { offset = 0, filter, filterBy } = req.query;

    try {
      let params = {
        ts: ts,
        apikey: MARVEL_PUBLIC_KEY,
        hash: hash,
        offset: offset,
        limit: "12"
      };
      if (filterBy === "characters") {
        // this should be characters id and it can be separated by comma
        params = { ...params, characters: filter };
      }

      const stories = await Axios.get(`${API_URL}stories`, {
        params
      });
      res.send(stories.data);
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
