const express = require("express") ;
const router = express.Router();
const {fetchLeetcodeProfile} = require("../Services/LeetcodeServices.js");
const cache = require("../Utils/Cache.js");

router.get('/:username', async (req, res) => {

    const username = req.params.username;

    // caching
    const cached = cache.get(username);
    if (cached) return res.json(cached);

    try {
        const userData = await fetchLeetcodeProfile(username);
    
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }

        cache.set(username, userData);
        res.json(userData);
    } 
    catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

module.exports = router;