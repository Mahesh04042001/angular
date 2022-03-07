/* eslint-disable no-new-object */
const cody = new Object()
cody.living = true
cody.age = 33
cody.gender = 'male'
cody.getgender = function () { return cody.gender }
console.log(cody.getgender())
console.log(cody)

const myobject = new Object()
myobject['0'] = 't'
myobject['1'] = 'o'
myobject['2'] = 'o'
console.log(myobject)

const mystring = new String('foo')
console.log(mystring)

const person = function (living, age, gender) {
  this.living = living
  this.age = age
  this.gender = gender
  this.getgender = function () { return this.gender }
}
const smith = new person(true, 33, 'male')
console.log(smith)
console.log(this.getgender)

const myNumber = new Number(23)
const myString = new String('male')
const myBoolean = new Boolean(false)
const myObject = new Object()
const myArray = new Array('foo', 'bar')
const myFunction = new Function('x', 'y', 'return x*y')
const myDate = new Date()
const myRegExp = new RegExp('\bt[a-z]+\b')
const myError = new Error('Sorry!')
console.log(myNumber.constructor)
console.log(myString.constructor)
console.log(myBoolean.constructor)
console.log(myObject.constructor)
console.log(myArray.constructor)
console.log(myFunction.constructor)
console.log(myDate.constructor)
console.log(myRegExp.constructor)
console.log(myError.constructor)
