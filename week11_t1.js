let user = {
    name: 'Tae',
    gender: 'male'
};

let changeName = function (user, newname) {
    let newUser = user;
    newUser.name = newname;
    return newUser;
}

let user2 = changeName(user, 'Tae-Hyun');
if (user !== user2) {
    console.log('유저 정보가 변경되었음!');
}
console.log(user.name, user2.name);
console.log(user === user2);