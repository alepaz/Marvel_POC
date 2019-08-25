require('dotenv').config();

const prod = {
  MARVEL_PRIV_KEY: process.env.MARVEL_PRIV_KEY,
  MARVEL_PUBLIC_KEY: process.env.MARVEL_PUBLIC_KEY
};

console.log(prod)

// prod.js - production keys here!!!
module.exports = prod;
