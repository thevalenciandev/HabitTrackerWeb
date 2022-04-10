function displayOutcome(divId, outcome) {
  const elm = document.getElementById(divId);
  elm.innerText = outcome;
  setTimeout(() => (elm.innerHTML = ""), 3000); // Clear message after 3 seconds
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
  const btnRemove = createBtn("Remove", onClickRemoveFunction);
  elmDiv.appendChild(btnRemove);

  return elmDiv;
}

function createBtn(text, onClickFunction) {
  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.innerText = text;
  btn.addEventListener("click", onClickFunction);
  return btn;
}

function createTable(numberOfRows, numberOfCols, fillColumnFunction, headers) {
  const table = document.createElement("table")
  
  if (headers) {
    const headerRow = document.createElement("tr")
    table.appendChild(headerRow)
    headers.forEach(h => {
      const thElm = document.createElement("th")
      thElm.innerText = h
      headerRow.appendChild(thElm)
    })
  }

  // body
  for (let i=0; i<numberOfRows; i++) {
    const row = document.createElement("tr")
    for (let j=0; j<numberOfCols; j++) {
      const col = document.createElement("td")
      fillColumnFunction(i, j, col)
      row.appendChild(col)
    }
    table.appendChild(row)
  }

  return table
}
