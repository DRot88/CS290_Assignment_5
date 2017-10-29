
document.body.onload = addElements;

function addElements() {
  //create a table
  var newTable = document.createElement("table");
  var tBody = document.createElement("tbody");
  var tData;
  var tHeader;
  var row;
  var newContent;

  document.body.appendChild(newTable);
  newTable.appendChild(tBody);
  row = document.createElement("tr");   
  tBody.appendChild(row);

  for (var x = 1; x <= 4; x++) {
    tHeader = document.createElement("th");
    row.appendChild(tHeader);
    newContent = document.createTextNode("Header " + x);
    tHeader.appendChild(newContent);
  }

  for (var i = 1; i <= 3; i++) {
    row = document.createElement("tr");
    tBody.appendChild(row);
    for (var j = 1; j <= 4; j++) {
      tData = document.createElement("td"); 
      row.appendChild(tData);
      newContent = document.createTextNode(j + ", " + i);
      tData.appendChild(newContent);
    }
  }

  var up = document.createElement("button");
  var down = document.createElement("button");
  var left = document.createElement("button");
  var right = document.createElement("button");
  var markCell = document.createElement("button");

  document.body.appendChild(up);
  document.body.appendChild(down);
  document.body.appendChild(left);
  document.body.appendChild(right);
  document.body.appendChild(markCell);

  newContent = document.createTextNode("Up");
  up.appendChild(newContent);

  newContent = document.createTextNode("Down");
  down.appendChild(newContent);

  newContent = document.createTextNode("Left");
  left.appendChild(newContent);

  newContent = document.createTextNode("Right");
  right.appendChild(newContent);

  newContent = document.createTextNode("Mark Cell");
  markCell.appendChild(newContent);


}