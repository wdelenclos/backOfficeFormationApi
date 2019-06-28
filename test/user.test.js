const User = require('../user.js');

let unvalidTeacherRoles = new User('dylan.settbon@hotmail.fr','dylan','settbon','student','22',true);
let unvalidTeacherAge = new User('dylan.settbon@hotmail.fr','dylan','settbon','teacher','16',true);
let unvalidTeacherCard = new User('dylan.settbon@hotmail.fr','dylan','settbon','teacher','19',false);
let validTeacher = new User('dylan.settbon@hotmail.fr','dylan','settbon','teacher','22',true);
let unvalidStudentRole = new User('dylan.settbon@hotmail.fr','dylan','settbon','teacher','19',true);
let validStudent = new User('dylan.settbon@hotmail.fr','dylan','settbon','student','22',true);
let unvalidUser = new User('dylan.settbon@hotmail.fr','dylan','settbon','customer','22',true);
let unvalidStudentEmail = new User('dylan','dylan','settbon','student','22',true);
let unvalidFirstnameNull = new User('dylan.settbon@hotmail.fr',null,'settbon','student','22',true);
let unvalidLastnameNull = new User('dylan.settbon@hotmail.fr','dylan',null,'student','22',true);
let unvalidFirstnameEmpty= new User('dylan.settbon@hotmail.fr','','settbon','student','22',true);
let unvalidLastnameEmpty = new User('dylan.settbon@hotmail.fr','dylan','','student','22',true);


test('not valid Teacher role', () => {
    expect(unvalidTeacherRoles.isValidTeacher()).toBe(false);
});

test('not valid age', () => {
    expect(unvalidTeacherAge.isValidTeacher()).toBe(false);
});

test('not valid id card', () => {
    expect(unvalidTeacherCard.isValidTeacher()).toBe(false);
});

test('valid teacher', () => {
    expect(validTeacher.isValidTeacher()).toBe(true);
});

test('not valid Student role', () => {
    expect(unvalidStudentRole.isValidStudent()).toBe(false);
});

test('valid student', () => {
    expect(validStudent.isValidStudent()).toBe(true);
});

test('not valid role user', () => {
    expect(unvalidUser.isValidRoles()).toBe(false);
});

test('valid role user', () => {
    expect(validStudent.isValidRoles()).toBe(true);
});

test('not valid email', () => {
    expect(unvalidStudentEmail.isValidEmail()).toBe(false);
});

test('valid email', () => {
    expect(validTeacher.isValidEmail()).toBe(true);
});

test('not valid firstname null', () => {
    expect(unvalidFirstnameNull.isValidName()).toBe(false);
})
test('not valid lastname null', () => {
    expect(unvalidLastnameNull.isValidName()).toBe(false);
});

test('not valid firstname empty', () => {
    expect(unvalidFirstnameEmpty.isValidName()).toBe(false);
})
test('not valid lastname empty', () => {
    expect(unvalidLastnameEmpty.isValidName()).toBe(false);
});