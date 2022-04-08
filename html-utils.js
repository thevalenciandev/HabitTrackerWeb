function displayOutcome(divId, outcome) {
  const elm = document.getElementById(divId);
  elm.innerText = outcome;
  setTimeout(() => (elm.innerHTML = ""), 3000); //Remove after 3 seconds
}

function createListElement(e, elmType, getListElmFunction, addElmFunction, removeElmFunction) {
  // Create wrapping div for the element
  const elmDiv = document.createElement("div");
  elmDiv.id = e;

  // Label to show element
  const lbl = document.createElement("label");
  lbl.innerText = e;
  elmDiv.appendChild(lbl);

  // A button to allow editing
  const btnEdit = document.createElement("button");
  btnEdit.setAttribute("type", "button");
  btnEdit.innerText = "Edit";
  btnEdit.addEventListener("click", () => {
    removeElmFunction(e);
    const newE = document.getElementById("l" + elmType).value();
    addElmFunction(newE);
    displayOutcome("outcomeAction-" + elmType, "Sucessfully edited! 🎉");
  });
  elmDiv.appendChild(btnEdit);

  // And a button to allow removing
  const btnAdd = document.createElement("button");
  btnAdd.setAttribute("type", "button");
  btnAdd.innerText = "Remove";
  btnAdd.addEventListener("click", () => {
    removeElmFunction(e);
    displayOutcome("outcomeAction-" + elmType, "Sucessfully removed! 🎉");
    populateList(
      elmType,
      getListElmFunction,
      addElmFunction,
      removeElmFunction
    ); // Refresh list again
  });

  elmDiv.appendChild(btnAdd);
  return elmDiv;
}
