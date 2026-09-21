const realDB = require('../data/real-db.json');
module.exports = (req, res) => res.json({ simulated: true, data: realDB });
