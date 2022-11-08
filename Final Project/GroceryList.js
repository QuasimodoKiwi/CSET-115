let history = [];

function showEverything(thing) {
  let oldList = document.getElementById("displayList");
  oldList.innerHTML = "";
  let completeList = document.getElementById("displayList");
  thing.onclick = function () {
    strikeOut(thing);
  };
  for (let i = 0; i < history.length; i++) {
    let appendAll = document.createElement("button");
    completeList.append(appendAll);
    appendAll.innerHTML = history[i];
  }
}

let strikeList = [];

function strikeOut(thing) {
  let groceryList = document.getElementById("displayList");
  thing.classList.add("strike");
  thing.onclick = function () {
    removeStrike(thing);
  };
  strikeList.push(thing.innerHTML);
  let item = strikeList.indexOf(thing.innerHTML);
  if (item > -1) {
    groceryList.splice(item, 1);
  }
}
function removeStrike(thing) {
  thing.classList.remove("strike");
  thing.onclick = function () {
    strikeOut(thing);
  };
  groceryList.push(thing);
  let item = strikeList.indexOf(thing.innerHTML);
  if (item > -1) {
    groceryList.splice(item, 1);
  }
}

function showListPurchased() {
  let completeList = document.getElementById("displayList");
  completeList.innerHTML = "";
  for (let i = 0; i < strikeList.length; i++) {
    let appendItem = document.createElement("button");
    appendItem.classList.add("btnList");
    appendItem.innerHTML = strikeList[i];
    displayList.appendChild(appendItem);
  }
}

function showListToPurchase() {
  let remainingList = document.getElementById("displayList");
  remainingList.innerHTML = "";
  for (let i = 0; i < remainingList.length; i++) {
    let appendItem = document.createElement("button");
    appendItem.classList.add("btnList");
    appendItem.innerHTML = strikeList[i];
    displayList.appendChild(appendItem);
  }
}

function groceryAdd() {
  let groceryList = document.getElementById("displayList");
  let appendItem = document.createElement("button");
  appendItem.onclick = function () {
    strikeOut(this);
  };
  let getItem = document.getElementById("addBox").value;
  history.push(getItem);
  appendItem.append(getItem);
  appendItem.classList.add("btnList");
  groceryList.appendChild(appendItem);
}
