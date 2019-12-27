var john = {
    name: 'I am John',
    age: 24,
    isActive: true,
}

var marry = {
    name: 'I am Marry',
    age: 23,
    isActive: true,
}

var sam = {
    name: 'I am Sam',
    age: 29,
    isActive: false,
}

let users = new Map()
// console.log(typeof users);

users.set('john', john);
users.set('marry', marry);
users.set('sam', sam);

// console.log(users.size);
// console.log(users.get('sam'));
// console.log(users.keys());
// console.log(users.values());

// for (const key of users.keys()) {
//     console.log(key);
    
// }

for (const value of users.values()) {
    console.log(value.name);
    
}

// entires return iterator of key, value pair in map
for (const [key, value] of users.entries()) {
    console.log(key + ' = ' + value.name);
    
}

users.forEach((value, key) => console.log(key + ' = ' + value.name))

var arrofArr = [['one', '1'], ['two', '2'], ['three', '3']];

var newMap = new Map(arrofArr);
console.log(newMap);

for (const key of newMap.keys()) {
    console.log(key);
    
}

for (const value of newMap.values()) {
    console.log(value);
    
}

for (const [key, value] of newMap.entries()) {
    console.log(key + ' = ' + value);
    
}