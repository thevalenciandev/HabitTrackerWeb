function displayOutcome(divId, outcome) {
  const elm = document.getElementById(divId);
  elm.innerText = outcome;
  setTimeout(() => (elm.innerHTML = ""), 3000); //Remove after 3 seconds
}

function createListElement(e, onClickRemoveFunction) {
  // Create wrapping div for the element
  const elmDiv = document.createElement("div");
  elmDiv.id = e;

  // Label to show element
  const lbl = document.createElement("label");
  lbl.innerText = e;
  elmDiv.appendChild(lbl);

  // And a button to allow removing
  const btnAdd = createRemoveBtn(onClickRemoveFunction);
  elmDiv.appendChild(btnAdd);

  return elmDiv;
}

function createRemoveBtn(onClickRemoveFunction) {
  const btnAdd = document.createElement("button");
  btnAdd.setAttribute("type", "button");
  btnAdd.innerText = "Remove";
  btnAdd.addEventListener("click", onClickRemoveFunction);
  return btnAdd;
}

