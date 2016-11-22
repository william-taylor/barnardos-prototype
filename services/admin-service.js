
const express = require('express');
const crypto = require('crypto');
const fs = require('fs');

const loginData = JSON.parse(fs.readFileSync('./passwords.json'));
const decrypt = (text, key) => {
    const decipher = crypto.createDecipher('aes-256-ctr', key)
    let dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}

const router = express.Router();
router.post('/login', (req, res) => {
    const { usr, pwd } = req.body;
    const key = process.argv[process.argv.length-1];
    const username = decrypt(loginData.username, key);
    const password = decrypt(loginData.password, key);

    res.json({login: usr == username && pwd == password });
});

module.exports = router;