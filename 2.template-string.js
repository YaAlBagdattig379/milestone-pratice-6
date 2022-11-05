// example of dynamic template string
//..1...
const school = {
    name:'narail prathamic school',
    ests: 1990,
    rooms: 8,
    teachers: 6,
    students: 120,
    membersNames:['balam','palam','khalam','janam'],
    grants:{
        name: 'tunir ma',
        age: 30,
        money: 400,
    },
    isWaterTubewel: true
} 
// taking by temlate-string-Object 
//..1 nested object property by template-string
console.log(`nested object property:- ${school.grants.name}`);
//..2 object property arrary element by template-string
console.log(`object property arrary element:- ${school.membersNames[2]}`);
//..3 object property name all-string
console.log(`The school name is ${school.name}. `)
