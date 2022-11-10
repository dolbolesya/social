const express = require('express');

const router = express.Router();
const path = require('path');

router.use('/api', (req, res) => {
    res.json({
        message: "backend express"
    })
})

module.exports = router;