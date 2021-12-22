const { Router } = require("express");

const fs = require("fs");
const path = require("path");

const router = new Router();

fs.readdirSync(`${__dirname}/`).forEach((file) => {
  const extname = path.extname(file);
  const basename = path.basename(file, extname);

  if (file.indexOf(".js") >= 0 && basename !== "index") {
    const { route } = require(`./${basename}`);

    router.use(`/${basename}`, route);
  }
});

exports.routeConfig = router;