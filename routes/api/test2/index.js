const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.send({message:"Hello test2 !"});
})
router.get('/data',(req, res) => {
    res.send({message:"Hello test2 data!"});
})
module.exports = router