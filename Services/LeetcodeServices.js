const axios = require("axios");

async function fetchLeetcodeProfile(username) {
    const query = {
        query: `
            query {
                matchedUser(username: "${username}") {
                    username
                    profile {
                        realName
                        userAvatar
                    }
                    languageProblemCount {
                        languageName
                        problemsSolved
                    }
                    badges {
                        id
                        name
                        icon
                        creationDate
                    }
                }
            }
        `,
        variables: {
            username
        }
    };

    const response = await axios.post(
        'https://leetcode.com/graphql',
        query,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );

    return response.data.data.matchedUser;
}

module.exports = { 
    fetchLeetcodeProfile 
};
