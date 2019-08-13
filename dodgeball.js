"use restrict";
//this is the array of objects arrayofpeople

const arrOfPeople = [
  {
    id: 1,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 2,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 3,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 4,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 5,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 6,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 7,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  }
];
//this is the arrays listOfPlayers   blueTeam redTeam
const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];
//this is the class player and its objects
class Player {
  constructor(id, name, age, skillSet, placeBorn) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.team = null;
  }
  //pushing objects inside of the empty array
  joinblueteam(blueTeam) {
    this.blueTeam = [];
    player.blueTeam.push(this);
  }
  joinredteam(redTeam) {
    this.redTeam = redTeam;
    player.redTeam.push(this);
  }
}
//adding new itens to objects
class blueTeammate {
  constructor(id, name, age, skillSet, placeBorn, mascot, teamColor) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.mascot = mascot;
    this.teamColor;
  }
}
class redTeammate {
  constructor(id, name, age, skillSet, placeBorn, mascot, teamColor) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.mascot = mascot;
    this.teamColor;
  }
}
//array of people being manipulated
const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  arrOfPeople.map(person => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function() {
      makePlayer(person.id);
      listElement.removeChild(li);
    });
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    listElement.append(li);
  });
};
//making players
const makePlayer = id => {
  // console.log(`li ${id} was clicked!`);
  const players = document.getElementById("players");

  arrOfPeople.filter(person => {
    console.log(person.team !== null);
  });

  // const findPlayer = arrOfPeople.filter(person => !person.team)

  const findPlayer = arrOfPeople.find(person => {
    return person.id == id;
  });
  // console.log(findPlayer);
  const positionIndex = arrOfPeople.indexOf(findPlayer);
  // console.log(positionIndex);

  const newPlayer = new Player(
    findPlayer.id,
    findPlayer.name,
    findPlayer.age,
    findPlayer.skillSet,
    findPlayer.placeBorn
  );
  console.log(newPlayer);

  listOfPlayers.push(newPlayer);
  arrOfPeople.splice(positionIndex, 1);
  console.log(newPlayer.name);
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newPlayer.name));
  players.append(li);

  // createElement.

  const buttonBlue = document.createElement("button");
  buttonBlue.innerHTML = "makeblue";

  buttonBlue.addEventListener("click", function(e) {
    const show = this.parentElement;
    console.log(this);
    console.log("BLUE", newPlayer);
    // const bluePlayer = new blueTeammate(newPlayer)
    // console.log("blue team:", blueTeammate)
    // Player.joinblueteam(newPlayer)
    // blueTeam.push(newPlayer);
    newPlayer.team = "blue";
    makeBlue(newPlayer.id);
    console.log(blueTeam);
    console.log(show);
  });

  li.appendChild(buttonBlue);
  // need to make a button here//
  const buttonRed = document.createElement("button");
  buttonRed.innerHTML = "makered";

  buttonRed.addEventListener("click", function(e) {
    const dealWithIt = this.parentElement;
    console.log(this);
    console.log("red", newPlayer);
    newPlayer.team = "red";
    makeRed(newPlayer.id);
    console.log(redTeam);
    console.log(dealWithIt);
  });
  li.appendChild(buttonRed);
};

const makeRed = id => {
  const red = document.getElementById("red");
  const hereLi = document.createElement("li");
  console.log("id:", id);
  const checkHere = listOfPlayers.find(person => {
    return person.id == id;
  });
  console.log("checkHere", checkHere.name);
  hereLi.appendChild(
    document.createTextNode(checkHere.name + " - " + checkHere.skillSet)
  );
  red.append(checkHere);

  red.addEventListener("click", function() {
    makePlayer(person.id);
    listElement.removeChild(li);
  });
};

const makeBlue = id => {
  const blue = document.getElementById("blue");
  const showLi = document.createElement("li");
  console.log("id:", id);
  const found = listOfPlayers.find(person => {
    // console.log(person)
    return person.id == id;
  });
  console.log("found", found.name);
  showLi.appendChild(
    document.createTextNode(found.name + " - " + found.skillSet)
  );
  blue.append(showLi);

  blue.addEventListener("click", function() {
    makePlayer(person.id);
    listElement.removeChild(li);
  });
};
