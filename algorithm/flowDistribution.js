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

    // Calculate the ideal number of connections per astrologer
    const idealConnectionsPerAstrologer = Math.floor(totalUsers / totalAstrologers);

    // Distribute users among astrologers
    let remainingUsers = totalUsers;
    astrologers.forEach(astrologer => {
        const connectionsForAstrologer = astrologer.isTopAstrologer ? idealConnectionsPerAstrologer * 2 : idealConnectionsPerAstrologer;
        astrologer.connections = connectionsForAstrologer;
        remainingUsers -= connectionsForAstrologer;
    });

    // Distribute remaining users evenly among top astrologers
    if (remainingUsers > 0) {
        const topAstrologers = astrologers.filter(astrologer => astrologer.isTopAstrologer);
        topAstrologers.forEach(astrologer => {
            if (remainingUsers > 0) {
                astrologer.connections += 1;
                remainingUsers -= 1;
            }
        });
    }

    return astrologers;
};

module.exports = distributeUsers;
