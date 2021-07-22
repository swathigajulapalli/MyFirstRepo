console.log('This is my first Program!!!!')

let name = 'Swathi'
let age = 35
let percentage = 100.0
let isPass = true
let study = undefined
let selectColor = null

const school = 'Kidzee'

console.log(name)
console.log(age+percentage+isPass)
// alert('Helloo World!!')

// name = 'Gajulapalli'  //can not reassign constant values

//************Objects***********

person = {
    fname : 'Swathi',
    age : 35
};

console.log(person)
console.log(person.fname)
console.log(person[age])

let colors = ['red','yellow','green',2,false]
colors[5] = 'orange'
console.log(colors)
console.log(colors[1])


function calsquare(num){
    return num * num; 
}

console.log(calsquare(4))

console.log("Swathi\fhow\tare you")

//Strings are immutable, so can't change the string value
name[0] = 'G'

console.log(name)

name = 'Gwathi'

console.log(name)

var myarray = [[1,2,3],[4,5,6],[[7,8,9],[10,11,12]]];
console.log(myarray[1][2]);
console.log(myarray[2][0]);
console.log("============Push..adds element to Array @ the end ===========");
myarray.push(['swathi','G']);
console.log(myarray)
console.log("============Pop..removes the last element from Array===========");
var removedelement = myarray.pop();
console.log(removedelement);
console.log("============Shift..removes the first element from Array===========");

console.log("============UnShift..adds element to the beginning of the Array===========");