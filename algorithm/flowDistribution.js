const distributeUsers = (users, astrologers) => {
    const totalAstrologers = astrologers.length;
    const totalUsers = users.length;

    // Randomly set some astrologers as top astrologers
    astrologers.forEach(astrologer => {
        astrologer.isTopAstrologer = Math.random() < 0.3; // 30% chance of being a top astrologer
    });

    // Initialize connections to 0
    astrologers.forEach(astrologer => {
        astrologer.connections = 0;
    });

    // Randomly distribute users
    users.forEach(user => {
        const randomAstrologerIndex = Math.floor(Math.random() * totalAstrologers);
        astrologers[randomAstrologerIndex].connections += 1;
    });

    return astrologers;
};

module.exports = distributeUsers;
