# Marvel Proof of Concept

Tool consuming Marvel's API to display heroes, comics and stories

---

## 👋 Intro
[Link on Heroku](https://poc-marvel.herokuapp.com/)
This project uses a backend and frontend layout
BFF: -Nodejs server with Express, this app serves the static files for the UI and is an intermediate to retrieve data from Marvel API, looking to don't expose the secret API key on the frontend
UI: -App using react, redux, on production this app will be served by BFF, that's why we are not going to need to deal with CORS or JWT to simulate this on development We have an HTTP proxy middleware to recognize the endpoints of the BFF on the same domain/port. 

## 🚀 Getting Started

#### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/alepaz/marvel_poc

# Move upload directory to download dependencies
cd marvel_poc/bff

yarn install

cd marvel_poc/marvel_poc_ui

yarn install

```
#### 2. Create file for keys

```bash
# File: create the file bff/config/dev.js and define the following keys for development, you can copy from bff/config/prod.js, on prod we are going to use environment variables
    MARVEL_PRIV_KEY: "###",
    MARVEL_PUBLIC_KEY: "###"

# run
yarn run dev //on bff directory this will run both ui and bff thanks to concurrently
```
---

## 👊 contributors

* **Alejandro Paz**

