function showMenu() {
  console.log("----- SMART VENDING MACHINE MENU -----");
  console.log("1. Chips - Rs.20");
  console.log("2. Chocolate - Rs.30");
  console.log("3. Juice - Rs.40");
  console.log("4. Biscuits - Rs.15");
  console.log("5. Water - Rs.10");
}

function buyItem(choice, money) {
  let name = "";
  let price = 0;

  if (choice == 1) {
    name = "Chips";
    price = 20;
  } else if (choice == 2) {
    name = "Chocolate";
    price = 30;
  } else if (choice == 3) {
    name = "Juice";
    price = 40;
  } else if (choice == 4) {
    name = "Biscuits";
    price = 15;
  } else {
    name = "Water";
    price = 10;
  }

  if (money < price) {
    alert("Not enough balance! " + name + " costs Rs." + price);
    return false;
  }
  else{
  let change = money - price;
  if (change == 0) {
    alert("You bought " + name + ". Exact amount, no change.");
  } else {
    alert("You bought " + name + ". Your change is Rs." + change);
  }
  return true;
}
}

function countdown() {
  for (let i = 3; i >= 1; i--) {
    console.log(i);
  }
  console.log("Your item is ready!");
}

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j + " ";
    }
    console.log(row);
  }
}

function startMachine() {
  let again = true;

  while (again == true) {
    showMenu();

    let choice = Number(prompt("Enter item number (1-5):"));
    let money = Number(prompt("Enter how much money you have:"));

    if (isNaN(choice) || choice < 1 || choice > 5) {
      alert("Invalid item number!");
    }
    else if (isNaN(money) || money < 0) {
      alert("Invalid amount! Please enter a positive number.");
    }
    else {
      let success = buyItem(choice, money);
      if (success) {
        countdown();
        printPattern(choice);
      }
    }

    again = confirm("Do you want to buy something else?");
  }

  console.log("Thank you, visit again!");
}