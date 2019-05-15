const funct = require('./functions');

// sum

test('adds 2 +2 to aqual 4', () => {
    expect(funct.add(2, 2)).toBe(4);
});

test('adds 2 +2 to aqual 4', () => {
    expect(funct.add(2, 2)).not.toBe(5);
});

// true / false

test('IsNul', () => {
    expect(funct.isNull()).toBeNull();
});

test('checkFalsy', () => {
    expect(funct.checkFalsy(0)).toBeFalsy();
});

test('checkFalsy', () => {
    expect(funct.checkFalsy(undefined)).toBeFalsy();
});

test('Check user name and lastname', () => {
    expect(funct.createUser()).toEqual ({
        firstName: "Tanos",
        lastName: "vech"
    });
});

test('User fetch', async () => {
    expect.assertions(1);
    const data = await fun.fetchUser();
    expect(data.popularity).toEqual('36.08');
})

