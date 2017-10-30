/**************************************************************
** Author: Daniel Rotenberg
** Date: 10/29/2017
** Description: This javascript file creates a table on a blank
                HMTL file, and adds interactivity by allowing
                users to traverse the table and highlight cells.
**************************************************************/

  var newTable = document.createElement("table");
  var tBody = document.createElement("tbody");
  var tData;
  var tHeader;
  var row;
  var newContent;
  var currentRow;
  var currentCol;

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
      tData.id = "Row" + i + "_Column" + j;
      tData.className = "unselected";
      newContent = document.createTextNode(j + ", " + i);
      tData.appendChild(newContent);
      if(tData.textContent == "1, 1") {
        tData.className = "selected";
        currentRow = 1;
        currentCol = 1;
      }      
    }
  }

  var up = document.createElement("button");
  var down = document.createElement("button");
  var left = document.createElement("button");
  var right = document.createElement("button");
  var markCell = document.createElement("button");
  var pageBreak = document.createElement("br");

  document.body.appendChild(pageBreak);

  document.body.appendChild(up);
  up.id = "up";
  up.style.backgroundColor = "lightgreen";
  up.style.fontWeight = "bold";
  up.addEventListener("click", function() {
    var currentCell = document.getElementsByClassName("selected");
    if (currentCell[0].parentNode.previousSibling.firstChild.tagName == "TH") {
      return;
    } else {
      currentRow -= 1;      
      currentCell[0].className = "unselected";
      var newCell = document.getElementById("Row" + currentRow + "_Column" + currentCol);
      newCell.className = "selected";
      toggleStyle();
    }
  });

  pageBreak = document.createElement("br");
  document.body.appendChild(pageBreak);

  document.body.appendChild(down);
  down.id = "down";
  down.style.backgroundColor = "lightgreen";
  down.style.fontWeight = "bold";
  down.addEventListener("click", function() {
    var currentCell = document.getElementsByClassName("selected");
    if (currentCell[0].parentNode.nextSibling != null) {
      currentRow += 1;      
      currentCell[0].className = "unselected";
      var newCell = document.getElementById("Row" + currentRow + "_Column" + currentCol);
      newCell.className = "selected";
      toggleStyle();
    } else {
      return;
    }
  });  

  pageBreak = document.createElement("br");
  document.body.appendChild(pageBreak);

  document.body.appendChild(left);
  left.id = "left";
  left.style.backgroundColor = "lightgreen";
  left.style.fontWeight = "bold";
  left.addEventListener("click", function() {
    var currentCell = document.getElementsByClassName("selected");
    if (currentCell[0].previousSibling != null) {
      currentCol -= 1;      
      currentCell[0].className = "unselected";
      var newCell = document.getElementById("Row" + currentRow + "_Column" + currentCol);
      newCell.className = "selected";
      toggleStyle();
    } else {
      return;
    }
  });    

  pageBreak = document.createElement("br");
  document.body.appendChild(pageBreak);

  document.body.appendChild(right);
  right.id = "right";
  right.style.backgroundColor = "lightgreen";
  right.style.fontWeight = "bold";
  right.addEventListener("click", function() {
    var currentCell = document.getElementsByClassName("selected");
    if (currentCell[0].nextSibling != null) {
      currentCol += 1;      
      currentCell[0].className = "unselected";
      var newCell = document.getElementById("Row" + currentRow + "_Column" + currentCol);
      newCell.className = "selected";
      toggleStyle();
    } else {
      return;
    }
  });   

  pageBreak = document.createElement("br");
  document.body.appendChild(pageBreak);

  document.body.appendChild(markCell);
  markCell.id = "markCell";  
  markCell.style.backgroundColor = "yellow";
  markCell.style.fontWeight = "bold";
  markCell.addEventListener("click", function() {
    var currentCell = document.getElementsByClassName("selected");
    currentCell[0].style.backgroundColor = "yellow";
  });

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

  document.body.style.backgroundColor = "#E6F2FC";
  toggleStyle();

  function toggleStyle() {

  var unselected = document.getElementsByClassName("unselected");
  for (var i = 0; i < unselected.length; i++) {
    unselected[i].style.border = "solid 1px black";
  }

  var selected = document.getElementsByClassName("selected");
  selected[0].style.border = "solid 3px red";        

  }
  