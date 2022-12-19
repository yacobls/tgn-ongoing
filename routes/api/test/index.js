const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.send({message:"Hello test !"});
})
router.get('/data',(req, res) => {
    res.send({message:"Hello test data!"});
})
module.exports = router