
let persons = [{ "name":"A", "salary":1200 }, { "name":"B", "salary": 1500 }];

persons.forEach(item => item.salary += 1000);

console.log(persons) 

    const arr = [1, 2, 3, 4, 5];

arr.forEach((element, index) => {
  arr[index] = element + 10;
});

console.log(arr);
