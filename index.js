
const hashids = require("hashids");

const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
const encode = function (salt, id, length = 10) {
    const hash = new hashids(salt, length, alphabet);
    return hash.encode(id);
}
const decode = function (salt, id, length) {
    const hash = new hashids(salt, length, alphabet);
    return hash.decode(id).length? hash.decode(id)[0] : null;
}

module.exports = {
    encode,
    decode
}