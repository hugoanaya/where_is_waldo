let MyLibrary
if (typeof document !== 'undefined') {
  MyLibrary = require('my-library').default
}

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

const waldoDoorPath = "./545186-waldo2.jpg";
const shaggyDoorPath = "./ShaggyRogers.png";
const squidwardDoorPath = "./9ded8982e60073e9ca3240f653e4fcdb.png";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const closedDoorPath = "./pngguru.com.png";

const startButton = document.getElementById('start');

const isWaldo = (door) => {
  if (door.src === waldoDoorPath){
    return true;
  }
  else {
    false;
  }
}
const isClicked = (door) => {
  if (door.src === closedDoorPath){
    return false;
  }
  else {
    return true;
  }
}
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0){
    gameOver('win');
  }
  else if (isWaldo(door)){
    gameOver();
  }
}
randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random()*numClosedDoors);
  if (choreDoor === 0){
    openDoor1 = waldoDoorPath;
    openDoor2 = shaggyDoorPath;
    openDoor3 = squidwardDoorPath;
  }
  else if (choreDoor === 1){
    openDoor2 = waldoDoorPath;
    openDoor1 = squidwardDoorPath;
    openDoor3 = shaggyDoorPath;
  }
  else {
    openDoor3 = waldoDoorPath;
    openDoor1 = shaggyDoorPath;
    openDoor2 = squidwardDoorPath;
  }
}
doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};
startButton.onclick = () => {
  if (currentlyPlaying == false) {
    startRound();
  }
};
const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

const gameOver = (status) => {
  if (status === 'win'){
    startButton.innerHTML = "You win! Play again?";
  }
  else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
};
startRound();
