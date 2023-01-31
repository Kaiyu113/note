// //封装一个函数，取任意三个数里面的最小值/no 三目运算
// function smallNum(a, b, c) {
//   let min = 0;
//   if (a < b) {
//     min = a;
//   } else {
//     min = b;
//   }
//   if (min > c) {
//     min = c;
//   }
//   return min;
// }
// //console.log(smallNum(6, 3, 7));
// //不同性别 不同身高体重 测出ibm
// function testBMI(height, weight, gender) {
//   const BMI = weight / (height * height);
//   console.log(BMI);
//   let result = "";
//   if (gender === "women") {
//     if (BMI < 18.5) {
//       result = "skinny";
//     } else {
//       if (BMI < 25) {
//         result = "normal";
//       } else if (BMI < 30) {
//         result = "overweight";
//       } else {
//         result = "fat";
//       }
//     }
//   } else {
//     if (BMI < 18) {
//       result = "skinny";
//     } else {
//       if (BMI < 23) {
//         result = "normal";
//       } else if (BMI < 27) {
//         result = "overweight";
//       } else {
//         result = "fat";
//       }
//     }
//   }
//   return result;
// }
// console.log(testBMI(1.74, 56, "women"));

//闰年：4倍数 不是100的倍数 400的倍数算/要求如果是闰年
//输出xxx是闰年，不是闰年，xxx不是闰年。不是数字类型数据 不做处理
// var arr = [2012, 2022, 2018, "hello", true, 1998, 2000];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     if (arr[i] % 4 === 0) {
//       if (arr[i] % 400 === 0) {
//         console.log(arr[i] + " is leap year");
//       } else if (arr[i] % 100 !== 0) {
//         console.log(arr[i] + " is leap year");
//       }
//     } else {
//       console.log(arr[i] + " isn't leap year");
//     }
//   }
// }
// var arr = ["hi", "payment", "money", "friend"];
// var word = "hi, did you eat?";
// function noWords(arr, str) {
//   for (let i = 0; i < arr.length; i++) {
//     if (str.indexOf(arr[i]) !== -1) {
//       console.log("找到了");
//       break;
//     } else {
//       console.log("没找到");
//     }
//   }
// }
// noWords(arr, word);
//首字母大写

// const word = ["you", "can", "you", "up", "name", "home"];
// function upperCase(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = word[i][0].toUpperCase() + word[i].substring(1);
//   }
//   let newWord = newArr.join(" ");
//   return newWord;
// }
// console.log(upperCase(word));
//let arr = [1, 33, 44, 2, 352, 55];
//冒泡排序 优化从大到小
// function bableSort(arr) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     for (let i = 0; i < arr.length - 1 - j; i++) {
//       if (arr[i] < arr[i + 1]) {
//         let box = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = box;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bableSort(arr));
//去重
//let arr = [1, 4, 5, 8, 12, 3, 23, 23, 5, 23, "h", 34, 23];
// function noDup(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     //let sliceArr = arr.slice(i + 1);
//     console.log(`-----${arr[i]}`);
//     //console.log(`${arr}`);
//     for (let j = i + 1; j < arr.length; j++) {
//       //console.log(arr[j]);

//       if (arr[j] === arr[i]) {
//        // console.log(`------just spliced----${arr}`);
//         arr.splice(j, 1);
//         j--;
//         i--;
//       }
//     }
//   }

//   return arr;
// }
//数组去重 倒序循环
// function noDup(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(i);
//     console.log(`-----${arr[i]}`);
//     for (let j = arr.length - 1; j > i; j--) {
//       //   //console.log(arr[j]);
//       if (arr[j] === arr[i]) {
//         //     // console.log(`------just spliced----${arr}`);
//         arr.splice(j, 1);
//       }
//     }
//   }
//   return arr;
// }
// console.log(noDup(arr));
//使用set去重
//console.log([...new Set(arr)]);
//合并
// const arr = [1, 2, 3, 33];
// const arr2 = [4, 5, 33, 6];
// function concat(arr, arr1) {
//   const a = arr.concat(arr1);
//   const noRepeat = [];
//   for (let i = 0; i < a.length; i++) {
//     if (noRepeat.indexOf(a[i]) === -1) {
//       noRepeat.push(a[i]);
//     }
//   }
//   return noRepeat;
// }
// console.log(concat(arr, arr2));
//特殊字符
// var emailReg = /^\w+@\w+([-]\w+)*(\.\w+)+$/;
// const input = "kymma113@1-13.com";
// if (emailReg.test(input)) {
//   console.log("true");
// } else {
//   console.log("false");
// }

//如果是true变成false,如果是false变成true
//new
// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const ll = new Student("ll", 23);
// console.log(ll);
// //function _new() {}
// //_new(constructor, perem1, perem2);
// let fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "apple",
//   "orange",
//   "orange",
//   "apple",
//   "apple",
//   "orange",
//   "orange",
// ];

// const fn = (arr) => {
//   const maxFruits = ["", 0];
//   arr.sort();
//   for (let i = 0; i < arr.length; i++) {
//     if (maxFruits[0] !== arr[i]) {
//       console.log(arr[i]);
//       const filtered = arr.filter((f) => f === arr[i]);
//       if (filtered.length > maxFruits[1]) {
//         maxFruits[0] = arr[i];
//         maxFruits[1] = filtered.length;
//       }
//     }
//   }
//   return maxFruits;
// };

// const fn = (arr) => {
//   const freq = arr.reduce((acc, cur) => {
//     acc[cur] ? acc[cur]++ : (acc[cur] = 1);
//     return acc;
//   }, {});
//   console.log(freq);
//   const sorted = Object.keys(freq).sort((a, b) => freq[b] - freq[a])[0];
//   return [sorted, freq[sorted]];
// };

// // function fn(arr) {
// //   const store = {};
// //   arr.forEach((num) => (store[num] ? (store[num] += 1) : (store[num] = 1)));
// //   return [
// //     Object.keys(store).sort((a, b) => store[b] - store[a])[0],
// //     store[Object.keys(store).sort((a, b) => store[b] - store[a])[0]],
// //   ];
// // }

// //{a:2, b:2, c:3, d:2}
// console.log(fn(fruits));

// let fruits = ["apple", "banana", "orange", "apple", "orange", "orange"];

// function solution(arr) {
//   let result = [];
//   let maxItem = -1;

//   for (let i = 0; i < arr.length; i++) {
//     if (
//       maxItem < Object.keys(arr).filter((key) => arr[key] === arr[i]).length
//     ) {
//       maxItem = Object.keys(arr).filter((key) => arr[key] === arr[i]).length;
//       result = [];
//       result.push(arr[i], maxItem);
//     }
//   }

//   return result;
// }

// console.log(solution(fruits));
//不能用sort
//const arr = [22, 34, 66, 657, 344, 99, 343];
//const returnRank = 3;
//recursion methods
// let max;
// const set = new Set(arr);
// function fn(arr, num) {
//   if (num !== 0) {
//     max = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     set.delete(max);
//     num--;
//     fn([...set], num);
//   }
//   return max;
// }

// let [l, r] = [0, 0];
// const set = new Set(arr);
// let stack = 0;
// function fn(arr, num) {
//   while (l < arr.length) {
//     for (let i = l + 1; i < arr.length; i++) {
//       if (arr[l] < arr[i]) {
//         stack = arr[i];
//         arr[i] = arr[l];
//         arr[l] = stack;
//       } else {
//         continue;
//       }
//     }
//     if (l === num - 1) {
//       break;
//     } else {
//       l++;
//     }
//   }
//   console.log(arr);
//   return arr[num - 1];
// }
// console.log(fn(arr, 2));

// function nthlargest(arra, highest) {
//   var x = 0,
//     y = 0,
//     z = 0,
//     temp = 0,
//     tnum = arra.length,
//     flag = false,
//     result = false;

//   while (x < tnum) {
//     y = x + 1;
//     console.log("whileXturn " + x);
//     if (y < tnum) {
//       for (z = y; z < tnum; z++) {
//         console.log(x, z);

//         if (arra[x] < arra[z]) {
//           temp = arra[z];
//           arra[z] = arra[x];
//           arra[x] = temp;
//           flag = true;
//         } else {
//           continue;
//         }
//       }
//     }
//     console.log(flag);
//     if (flag) {
//       flag = false;
//     } else {
//       x++;
//       if (x === highest) {
//         result = true;
//       }
//     }
//     if (result) {
//       break;
//     }
//   }

//   return arra[highest - 1];
// }

// console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));

//input
// let data = [1, 2, 3, 4, 5];

// const obj = { value: [] };
// let output = data.reduce((acc, pre) => {
//   obj.value.push(pre);
//   acc.push(obj);
//   return acc;
// }, []);

// console.log(output);

//output
// [
//     {
//         value:[1,2,3]
//     },
//     {
//         value:[1,2,3]
//     }
// ]
const company = [
  {
    id: 123456,
    name: "Jack",
    department: "FrontEnd",
  },
  {
    id: 123457,
    name: "Jane",
    department: "BackEnd",
  },
  {
    id: 123458,
    name: "Jacy",
    department: "FrontEnd",
  },
];
//const objF={department:"FrontEnd",memebers:[]}
//const objB={department:"BackEnd",memebers:[]}
const arr = [];
let flag = false;
for (let i of company) {
  //console.log(i);
  if (arr.length === 0) {
    arr.push({ department: i.department, memebers: [i.id] });
    continue;
  }
  for (let j of arr) {
    //console.log(j);
    if (j.department === i.department) {
      j.memebers.push(i.id);
      flag = true;
      break;
    }
  }
  if (!flag) {
    arr.push({ department: i.department, memebers: [i.id] });
  }
}
console.log(arr);
