const { encode, decode} = require('./index');

describe('encode Id', () => {
    it('input corporate\'s id and salt should return hash Id', (done) => {
        const expected = "vnwj0ezogr";
        const organizationId = 10;
        const salt = "Y6pFBFYxVAQQfqP6ZXHN7SXVYExUKeMgnn4VtLqa";
        const actual = encode(salt, organizationId);
        expect(actual).toEqual(expected);
        done();
    })

    it('input corporate\'s id, salt and length should return hash Id', (done) => {
        const expected = "873plvnwj0ezogre02kq";
        const organizationId = 10;
        const salt = "Y6pFBFYxVAQQfqP6ZXHN7SXVYExUKeMgnn4VtLqa";
        const length = 20;
        const actual = encode(salt, organizationId, length);
        expect(actual).toEqual(expected);
        done();
    })
})

describe('decode Id', () => {
    it('input corporate\'s hash id and salt should return Id', (done) => {
        const expected = null;
        const organizationId = "873plvnwj0ezogre02kq";
        const salt = "Y6pFBFYxVAQQfqP6ZXHN7SXVYExUKeMgnn4VtLqa";
        const actual = decode(salt, organizationId);
        expect(actual).toEqual(expected);
        done();
    })
    
    it('input corporate\'s hash id, salt and length should return Id', (done) => {
        const expected = 10;
        const organizationId = "873plvnwj0ezogre02kq";
        const salt = "Y6pFBFYxVAQQfqP6ZXHN7SXVYExUKeMgnn4VtLqa";
        const length = 20;
        const actual = decode(salt, organizationId, length);
        expect(actual).toEqual(expected);
        done();
    })
})