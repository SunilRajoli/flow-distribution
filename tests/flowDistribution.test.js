const distributeUsers = require('../algorithm/flowDistribution');
const Astrologer = require('../models/astrologer');
const User = require('../models/user');

test('Even distribution of users among astrologers', () => {
    const astrologers = [new Astrologer('A1'), new Astrologer('A2'), new Astrologer('A3')];
    const users = Array.from({ length: 9 }, (_, i) => new User(`User ${i + 1}`));

    const result = distributeUsers(users, astrologers);
    expect(result[0].connections).toBe(3);
    expect(result[1].connections).toBe(3);
    expect(result[2].connections).toBe(3);
});

test('Distribution with top astrologer preference', () => {
    const astrologers = [new Astrologer('A1', true), new Astrologer('A2'), new Astrologer('A3')];
    const users = Array.from({ length: 10 }, (_, i) => new User(`User ${i + 1}`));

    const result = distributeUsers(users, astrologers);
    expect(result[0].connections).toBe(4);
    expect(result[1].connections).toBe(3);
    expect(result[2].connections).toBe(3);
});
