var myApp = {
  mainMessage : "welcome to my app",

  mainGreeting() {
  console.log("hey! welcome to my app!");
  }
};

myApp.module1 = {
  saySomething(message){
    console.log(myApp.mainMessage, message, 'second file');
  },

  doSomething(){
    console.log('called do something from module 1');
  }
};

myApp.module2 = {
  doSomethingElse(){
    console.log('called do something from module 2');
  }
};

(() =>{
  myApp.mainGreeting();
  myApp.module1.saySomething('sup!');

  function myFunc(){
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }
})();
