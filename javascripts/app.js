//Project name: Mars Rover Kata
//Developer: Mateus Cavalcanti Felix Oliveira
//Contact: mateus.cfoliveira@gmail.com
//github.com/thebinaryfelix
//Company: Ironhack - Madrid
//Date: Feb, 27 - 2018
//Version: 1.01

var spirit = {
  name: "Spirit Rover",
  nickname: "S",
  direction: "N", //defaul direction: "N". Other valid directions: "S", "E", "W"
  posLine: 0,
  posCol: 0,
  travelLog: []
};

var opportunity = {
  name: "Opportunity Rover",
  nickname: "O",
  direction: "N", //defaul direction: "N". Other valid directions: "S", "E", "W"
  posLine: 1,
  posCol: 0,
  travelLog: []
};

var curiosity = {
  name: "Curiosity Rover",
  nickname: "C",
  direction: "N", //defaul direction: "N". Other valid directions: "S", "E", "W"
  posLine: 2,
  posCol: 0,
  travelLog: []
};

var planetMars = [
  ["Spirit Rover",null,null,null,null,null,"Frozen Water",null,null,null],
  ["Opportunity Rover",null,null,"Crater",null,null,null,null,"Crashed Satellite",null],
  ["Curiosity Rover", null, null, null, null, null, null, null, null, null],
  [null, null, null, "Alien Ship", null, null, "Crater", null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  ["Volcano",null,null,"Crater",null,"Red Tesla Roadster",null,"Crater",null,null],
  [null, "Crashed Satellite", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, "Fossil Bacteria", null, null, null, null],
  [null, null, "Alien Ship", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, "Crater", null, null, "Alien Base"]
];

/*
Creating a matrix with randomly positioned obstacles:

1. Create X objects named: obs1, obs2, ... , obsX. X is the total number of different obstacles you want;
2. Assign a name for each obstacle, example: var obs1 = {name: "Frozen Water"} and Also do this for a null object!
3. Assign a number for each obstacle: var obs1 = {name: "Frozen Water", indexNum: 001};
4. Reset planetMars to a null matrix;
5. Create a function called fillPlanetObstacles()

Function fillPlanetObstacles(){
  1. Create a For loop to run through the matrix index numbers;
  2. Inside the For loop:
    3. Generate a random number between 0 and X;
    4. Round the number;
    5. In the current index, get the number generated and write in the matrix the obstacle correspondent to its index number;
    6. Optional but more adequate: include a function to fill null spaces more often than filling with obstacles (create a probability function);
}

6. end
*/

function moveForward() {
  document.getElementById("logConsole").innerHTML = "moveForward was called!";

  var myRobot = document.getElementById("rovers").value;
  myRobot = eval(myRobot);

  var okToMove;

  switch (myRobot.direction) {
    case "N":
      if (myRobot.posLine === 0) {
        document.getElementById("logConsole").innerHTML =
          "You have reached the edge of the World!";
        console.log("You have reached the edge of the World!");
      } else {
        okToMove = checkObstacle(planetMars, myRobot.posLine - 1, null);
        if (okToMove === null) {
          myRobot.posLine -= 1;
          currentDir(planetMars, myRobot, myRobot.posLine + 1, null);
        } else {
          //obstacle ahead! Show obstacle
          document.getElementById("logConsole").innerHTML =
            "Stop! You found: " + okToMove;
          console.log("Stop! You found: " + okToMove);
        }
      }
      break;

    case "E":
      if (myRobot.posCol === 9) {
        document.getElementById("logConsole").innerHTML =
          "You have reached the edge of the World!";

        console.log("You have reached the edge of the World!");
      } else {
        okToMove = checkObstacle(planetMars, null, myRobot.posCol + 1);
        if (okToMove === null) {
          myRobot.posCol += 1;
          currentDir(planetMars, myRobot, null, myRobot.posCol - 1);
        } else {
          //obstacle ahead! Show obstacle
          document.getElementById("logConsole").innerHTML =
            "Stop! You found: " + okToMove;
          console.log("Stop! You found: " + okToMove);
        }
      }
      break;

    case "S":
      if (myRobot.posLine === 9) {
        document.getElementById("logConsole").innerHTML =
          "You have reached the edge of the World!";

        console.log("You have reached the edge of the World!");
      } else {
        okToMove = checkObstacle(planetMars, myRobot.posLine + 1, null);
        if (okToMove === null) {
          myRobot.posLine += 1;
          currentDir(planetMars, myRobot, myRobot.posLine - 1, null);
        } else {
          //obstacle ahead! Show obstacle
          document.getElementById("logConsole").innerHTML =
            "Stop! You found: " + okToMove;
          console.log("Stop! You found: " + okToMove);
        }
      }
      break;

    case "W":
      if (myRobot.posCol === 0) {
        document.getElementById("logConsole").innerHTML =
          "You have reached the edge of the World!";

        console.log("You have reached the edge of the World!");
      } else {
        okToMove = checkObstacle(planetMars, null, myRobot.posCol - 1);
        if (okToMove === null) {
          myRobot.posCol -= 1;
          currentDir(planetMars, myRobot, null, myRobot.posCol + 1);
        } else {
          //obstacle ahead! Show obstacle
          document.getElementById("logConsole").innerHTML =
            "Stop! You found: " + okToMove;
          console.log("Stop! You found: " + okToMove);
        }
      }
      break;
  }
  travelLog(myRobot);
  editWorld();
}

function moveBackwards() {
  document.getElementById("logConsole").innerHTML = "moveBackwards was called!";

  var myRobot = document.getElementById("rovers").value;
  myRobot = eval(myRobot);

  switch (myRobot.direction) {
    case "N":
      if (myRobot.posLine === 9) {
        document.getElementById("logConsole").innerHTML =
          "You have reached the edge of the World!";

        console.log("You have reached the edge of the World!");
      } else {
        okToMove = checkObstacle(planetMars, myRobot.posLine + 1, null);
        if (okToMove === null) {
          myRobot.posLine += 1;
          currentDir(planetMars, myRobot, myRobot.posLine - 1, null);
        } else {
          //obstacle ahead! Show obstacle
          document.getElementById("logConsole").innerHTML =
            "Stop! You found: " + okToMove;
          console.log("Stop! You found: " + okToMove);
        }
      }
      break;

    case "E":
      if (myRobot.posCol === 0) {
        document.getElementById("logConsole").innerHTML =
          "You have reached the edge of the World!";

        console.log("You have reached the edge of the World!");
      } else {
        okToMove = checkObstacle(planetMars, null, myRobot.posCol - 1);
        if (okToMove === null) {
          myRobot.posCol -= 1;
          currentDir(planetMars, myRobot, null, myRobot.posCol + 1);
        } else {
          //obstacle ahead! Show obstacle
          document.getElementById("logConsole").innerHTML =
            "Stop! You found: " + okToMove;
          console.log("Stop! You found: " + okToMove);
        }
      }
      break;

    case "S":
      if (myRobot.posLine === 0) {
        document.getElementById("logConsole").innerHTML =
          "You have reached the edge of the World!";

        console.log("You have reached the edge of the World!");
      } else {
        okToMove = checkObstacle(planetMars, myRobot.posLine - 1, null);
        if (okToMove === null) {
          myRobot.posLine -= 1;
          currentDir(planetMars, myRobot, myRobot.posLine + 1, null);
        } else {
          //obstacle ahead! Show obstacle
          document.getElementById("logConsole").innerHTML =
            "Stop! You found: " + okToMove;
          console.log("Stop! You found: " + okToMove);
        }
      }
      break;

    case "W":
      if (myRobot.posCol === 9) {
        document.getElementById("logConsole").innerHTML =
          "You have reached the edge of the World!";

        console.log("You have reached the edge of the World!");
      } else {
        okToMove = checkObstacle(planetMars, null, myRobot.posCol + 1);
        if (okToMove === null) {
          myRobot.posCol += 1;
          currentDir(planetMars, myRobot, null, myRobot.posCol - 1);
        } else {
          //obstacle ahead! Show obstacle
          document.getElementById("logConsole").innerHTML =
            "Stop! You found: " + okToMove;
          console.log("Stop! You found: " + okToMove);
        }
      }
      break;
  }
  travelLog(myRobot);
  editWorld();
}

function turnLeft() {
  document.getElementById("logConsole").innerHTML = "turnLeft was called!";
  console.log("turnLeft was called!");

  var myRobot = document.getElementById("rovers").value;
  myRobot = eval(myRobot);

  switch (myRobot.direction) {
    case "N":
      myRobot.direction = "W";
      break;

    case "E":
      myRobot.direction = "N";
      break;

    case "S":
      myRobot.direction = "E";
      break;

    case "W":
      myRobot.direction = "S";
      break;
  }
  travelLog(myRobot);
}

function turnRight() {
  document.getElementById("logConsole").innerHTML = "turnRight was called!";

  var myRobot = document.getElementById("rovers").value;
  myRobot = eval(myRobot);

  switch (myRobot.direction) {
    case "N":
      myRobot.direction = "E";
      break;

    case "E":
      myRobot.direction = "S";
      break;

    case "S":
      myRobot.direction = "W";
      break;

    case "W":
      myRobot.direction = "N";
      break;
  }
  travelLog(myRobot);
}

function receiveCommand() {
  var myRobot = document.getElementById("rovers").value;
  myRobot = eval(myRobot);

  var commands = document.getElementById("roverCommandLine").value;

  var n = commands.length;

  for (var comIndex = 0; comIndex < n; comIndex++) {
    if (commands[comIndex] === "r" || commands[comIndex] === "R") {
      turnRight();
    } else if (commands[comIndex] === "l" || commands[comIndex] === "L") {
      turnLeft();
    } else if (commands[comIndex] === "f" || commands[comIndex] === "F") {
      moveForward();
    } else if (commands[comIndex] === "b" || commands[comIndex] === "B") {
      moveBackwards();
    } else {
      document.getElementById("logConsole").innerHTML =
        "Movement interrupted due to invalid command input.";
      break;
    }
  }
  document.getElementById("commandline").reset();
}

function travelLog(myRobot) {
  myRobot.travelLog.push(myRobot.posLine);
  myRobot.travelLog.push(myRobot.posCol);
}

function currentDir(planetTerrain, myRobot, roverPosLine, roverPosCol) {
  //"roverPosLine" and "roverPosCol" are the NEW positions taken by the rover

  if (roverPosLine !== null && roverPosCol === null) {
    //Update matrix line
    planetTerrain[myRobot.posLine][myRobot.posCol] = myRobot.name;
    planetTerrain[roverPosLine][myRobot.posCol] = null;
  } else if (roverPosCol !== null && roverPosLine === null) {
    //Update matrix column
    planetTerrain[myRobot.posLine][myRobot.posCol] = myRobot.name;
    planetTerrain[myRobot.posLine][roverPosCol] = null;
  }
}

function checkObstacle(planetTerrain, roverPosLine, roverPosCol) {
  //"roverPosLine" and "roverPosCol" are the NEW positions taken by the rover

  var myRobot = document.getElementById("rovers").value;
  myRobot = eval(myRobot);

  if (roverPosLine != null && roverPosCol == null) {
    if (planetTerrain[roverPosLine][myRobot.posCol] == null) {
      return null;
    } else {
      return planetTerrain[roverPosLine][myRobot.posCol];
    }
  } else if (roverPosCol != null && roverPosLine == null) {
    if (planetTerrain[myRobot.posLine][roverPosCol] == null) {
      return null;
    } else {
      return planetTerrain[myRobot.posLine][roverPosCol];
    }
  }
}

function showTravelLog() {

  var table = document.getElementById("world");

  var myRobot = document.getElementById("rovers").value;
  myRobot = eval(myRobot);

  var row, travelRow, travelCol;

  console.log(myRobot.travelLog.length);
  console.log(myRobot.travelLog);

  for(row  = 0 ; row < myRobot.travelLog.length-2 ; row++){
      travelRow = myRobot.travelLog[row];
      travelCol = myRobot.travelLog[row+1];
      row++;
      
      table.rows[travelRow].cells[travelCol].innerHTML = myRobot.nickname;
  }
}

function createWorld(planetTerrain) {
  var table = document.getElementById("world");
  var tr, td, tn, indexRow, indexCol;

  for (indexRow = 0; indexRow < planetTerrain.length; indexRow++) {
    tr = document.createElement("tr");
    for (indexCol = 0; indexCol < planetTerrain[indexRow].length; indexCol++) {
      td = document.createElement("td");
      if (planetMars[indexRow][indexCol] !== null) {
        tn = document.createTextNode(planetMars[indexRow][indexCol]);
        td.appendChild(tn);
      } else {
        tn = null;
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function editWorld() {
  var table = document.getElementById("world");
  var indexRow, indexCol;

  for (indexRow = 0; indexRow < 10; indexRow++) {
    for (indexCol = 0; indexCol < 10; indexCol++) {
      table.rows[indexRow].cells[indexCol].innerHTML =
        planetMars[indexRow][indexCol];
    }
  }
}
