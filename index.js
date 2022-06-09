alert("Welcome to our site. We're glad to have you");
//New visitor or not??
let confirmStatus = confirm(
  "Are you a new visitor? If YES, click 'okay'. If NO, click 'cancel'"
);
//declare visitors name
let visitorsName;
//get visitors name from prompt
function getName() {
  visitorsName = prompt("Please Enter your name");
}
getName();

//declare age
let age;
function runGetAge() {
  //get visitors age from prompt
  function getAge() {
    age = prompt("Please Input your age");
  }
  getAge();
  //confirm that the age prompt is not left empty or filled with a string
  if (age === null) {
    alert("You Cancelled!!");
  }
  if (age !== null) {
    while (age == 0 || isNaN(Number(age)) === true) {
      alert("Please enter a valid age");
      getAge();
      if (age === null) {
        alert("You Cancelled!!");
        break;
      }
    }
    function getDiscount() {
      const price = 1500;
      let discount;
      let newPrice;
      if (age <= 10) {
        discount = "100%";
        newPrice = price - 1500 * (100 / 100);
      } else if (age <= 18) {
        discount = "50%";
        newPrice = price - 1500 * (50 / 100);
      } else if (age <= 27) {
        discount = "20%";
        newPrice = price - 1500 * (20 / 100);
      } else if (age <= 46) {
        discount = "5%";
        newPrice = price - 1500 * (5 / 100);
      } else if (age <= 65) {
        discount = "60%";
        newPrice = price - 1500 * (60 / 100);
      } else if (age === 65) {
        discount = "50%";
        newPrice = price - 1500 * (50 / 100);
      } else {
        discount = "100%";
        newPrice = price - 1500 * (100 / 100);
      }
      if (newPrice === 0 && age > 65) {
        alert(
          `You do not have to pay! We think the activities here might be exhausting for you, and recommend you go home and rest.`
        );
      } else if (newPrice === 0) {
        alert(
          `Our Current Price is ${price} naira; but you have a discount of ${discount}. You do not have to pay!!!`
        );
      } else {
        alert(
          `Our Current Price is ${price} naira; but you have a discount of ${discount}. You are to pay only ${newPrice} naira`
        );
      }
    }

    if (isNaN(Number(age)) !== true && age !== null) {
      getDiscount();
    }
  }
}

//confirm that the name prompt is not left empty or filled with a number
if (visitorsName === null) {
  alert("You Cancelled!!");
}
if (visitorsName !== null) {
  if (isNaN(Number(visitorsName))) {
    if (confirmStatus === true) {
      alert("Name Accepted!!");
      alert(`Welcome ${visitorsName} !!`);
    } else {
      alert(`Welcome back ${visitorsName} !!`);
    }
    runGetAge();
  } else {
    while (isNaN(Number(visitorsName)) === false) {
      //this runs for an empty string too, because an emty string converted to a number gives 0; hence isNaN returns false
      alert("Please enter a valid name");
      getName();
      //enables cancellation even if user has tried inputing name severally
      if (visitorsName === null) {
        alert("You Cancelled!!");
        break;
      }
    }
    if (isNaN(Number(visitorsName)) !== false) {
      runGetAge();
    }
  }
}
