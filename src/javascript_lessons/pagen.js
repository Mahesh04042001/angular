// const o = new Object()
// const a = new Array()
// const d = new Date()
// const f1 = function () {
//   console.log('the cow jumped over the moon')
// }

// console.log('Date=' + d)
// f1()
// const o1 = Object.create({ x: 100, y: 200 })
// console.log('x=' + o1.x + 'y=' + o1.y)
// console.log(o1)
// const o2 = Object.create(null)
// const o3 = Object.create(Object.prototype) // or const o3 = {} or const o = new Object()
// console.log(o3)
// console.log(o)
// console.log(o2)
function getchild (parent) {
  if (parent == null) throw TypeError()
  return Object.create(parent)
}
// let o4 = { x: "dont't change this value" }
// console.log(o4.x)

// let p = getchild(o4)
// console.log(p)
// o4 = null
// p = getchild(o4)// Object.create(null)
// console.log(p)
// Object.prototype = 0
// console.log(Object)

const o5 = {}
o5.x = 100

console.log(o5)
const p = getchild(o5)
console.log(p)
p.y = 200
const q = getchild(p)
q.z = 300
console.log(q)
console.log('q.x+q.y+q.z' + (q.x + q.y + q.z))
console.log('p.x+p.y+p.z' + (p.x + p.y))
console.log('o5.x+o5.y+p.z' + (o5.x + o5.y))

const book = { 'main title': 'javascriipt', subtitle: 'the definite guide', for: 'all audience', author: { firstname: 'donald', surname: 'duck' } }
let len
if (book) {
  if (book.subtitles) {
    len = book.subtitle.length
    console.log(len)
  } else {
    console.log('book.subtitle undefined')
  }
}
console.log(book['main title'])
delete book['main title']
console.log(book['main title'])

const o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.x)
console.log(o6.toString)
delete o6.toString
