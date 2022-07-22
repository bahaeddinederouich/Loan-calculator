let loan = document.querySelector(".am");
let interest = document.querySelector(".in");
let years = document.querySelector(".te");
let calculate = document.querySelector(".btn");
let fullAmount = document.querySelector(".outemi");
let perMonth = document.querySelector(".outtotal");
let interestAmount = document.querySelector(".outamount");

calculate.addEventListener("click", genearate);

function genearate() {
  let num = 0;
  // console.log(parseFloat(loan.value));
  // console.log(parseFloat(interest.value));
  fullAmount.innerHTML = `$ ${(num =
    parseFloat(loan.value) +
    parseFloat(loan.value) * parseFloat(interest.value))}`;
  let numtwo = parseFloat(years.value) * 12;
  // console.log(numtwo);
  // console.log(num / numtwo);
  perMonth.innerHTML = `$ ${num / numtwo}`;
  // perMonth.innerHTML = `$ ${ * 12}`;
  interestAmount.innerHTML = `$ ${num - parseFloat(loan.value)}`;
}
