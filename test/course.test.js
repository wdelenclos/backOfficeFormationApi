const User = require('../user.js');

let unvalidUser = new User('jerome','','bueno','1');
let validUser = new User('jerome.bueno@hotmail.fr','jerome','bueno','22');

let unvalidUserNameEmpty = new User('dylan','','','1');
let unvalidUserNameNull = new User('dylan',null,null,'1');
let unvalidUserAge = new User('jerome.bueno@hotmail.fr','jerome','bueno','12');

let firstnameNull = new User('dylan@gmail.com',null,'settbon','13');
let firstnameEmpty = new User('dylan@gmail.com','','settbon','13');
let lastnameNull = new User('dylan@gmail.com','dylan',null,'13');
let lastnameEmpty = new User('dylan@gmail.com','dylan','','13');

test('not valid email', () => {
    expect(unvalidUser.isValidEmail()).toBe(false);
});

test('valid email', () => {
    expect(validUser.isValidEmail()).toBe(true);
});

test('not valid name empty or null', () => {
    expect(unvalidUserNameEmpty.isValidName()).toBe(false);
    expect(unvalidUserNameNull.isValidName()).toBe(false);
});

test('valid name', () => {
    expect(validUser.isValidName()).toBe(true);
});
test('valid age', () => {
    expect(validUser.isValidName()).toBe(true);
});

test('not valid age', () => {
    expect(unvalidUserAge.isValidAge()).toBe(false);
});

test('not valid user', () => {
    expect(unvalidUser.isValid()).toBe(false);
});

test('valid user', () => {
    expect(validUser.isValid()).toBe(true);
});

test('not valid user firstname null', () => {
    expect(firstnameNull.isValid()).toBe(false);
});
test('not valid user firstname empty', () => {
    expect(firstnameEmpty.isValid()).toBe(false);
});

test('not valid user lastname null', () => {
    expect(lastnameNull.isValid()).toBe(false);
});
test('not valid user lastname null', () => {
    expect(lastnameEmpty.isValid()).toBe(false);
});