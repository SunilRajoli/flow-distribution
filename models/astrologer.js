const { v4: uuidv4 } = require('uuid');

class Astrologer {
    constructor(name, isTopAstrologer = false) {
        this.id = uuidv4();
        this.name = name;
        this.connections = 0;
        this.isTopAstrologer = isTopAstrologer;
    }
}

module.exports = Astrologer;
