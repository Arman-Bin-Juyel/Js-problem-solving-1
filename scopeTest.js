// var keyword declare outside of a function

function scopeTest() {
    if (true) {
      var varVariable = "I am var";
    }
    console.log(varVariable);
  }
  
  scopeTest();

// let keyword is not declare outside of a function  
function scopeTest() {
    if (true) {
      let varVariable = "I am let";
    }
    // console.log(letVariable);
  }
  
  scopeTest();

//   const keyword is not declare outside of a function

function scopeTest() {
    if (true) {
      let varVariable = "I am let";
    }
    // console.log(letVariable);
  }
  
//   scopeTest();
