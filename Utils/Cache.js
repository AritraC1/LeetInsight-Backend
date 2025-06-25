const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 300 }); // 5 mins TTL

module.exports = cache;