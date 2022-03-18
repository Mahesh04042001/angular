//  debugging

//     'console.log'-normal logging
//     console.info-similar to console.log
//     console.error-used for throwing / handling errors (changes look of logs in console + gives a stacktrace)
//     console.warn-similar to 'console.log but used for warnings (only UI difference than previous)'
// console.table-useful to use when we have data in array of objects where the object have same keys, it formates it in a nice table.
const people = [
  { name: "jhone", cool: true, country: "canada" },
  { name: "scott", cool: true, country: "usa" },
  { name: "jimmy", cool: false, country: "rajapalayam" },
];
//people.forEach is enumerable.
people.forEach((person, index) => {
  console.table(index, person.name, person.cool, person.country);
});
// console.count-counts how many times,may a function is run
