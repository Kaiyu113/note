//the constructor
function Student(name, age) {
  this.name = name;
  this.age = age;
}
//the new keyword
const a = new Student("kaiyu", 25);
console.log(a);
//create a _new keyword
function _new() {
  console.log(arguments);
  //create a obj
  const obj = {};
  //get the constructor
  const constructor = [].shift.call(arguments);
  //use obj call the constructror function
  constructor.apply(obj, arguments);
  //inheritance the original prototype
  obj.__proto__ = constructor.prototype;
  return obj;
}
const b = _new(Student, "kaiyu", 25);
console.log(b);
