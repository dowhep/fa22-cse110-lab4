let student = {
  greeting: function() { console.log('Hello!'); },
};

student.greeting();

function printNums() {
  console.log(1);
  setTimeout(function() { console.log(2); }, 1000);
  setTimeout(function() { console.log(3); }, 0);
  console.log(4);
}

printNums();