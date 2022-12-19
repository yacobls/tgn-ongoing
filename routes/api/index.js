const express = require('express');
const router = express.Router();

const fs = require('fs');
const files = fs.readdirSync(__dirname);
files.forEach((endpoint)=>{
    if (endpoint!='index.js') {
      router.use(`/${endpoint}`, require(`./${endpoint}`));
    }
});
module.exports = router;