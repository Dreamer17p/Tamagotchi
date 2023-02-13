const healthButton = document.getElementById("health");
const feedButton = document.getElementById("feed");
const playButton = document.getElementById("play");
const sleepButton = document.getElementById("sleep");
const hungerButton = document.getElementById("hunger");
const imagen =  document.getElementById("mario");
const startgame = document.getElementById("start").addEventListener("click", () => {
  life() 
})

function life() {

  // Variables de vida
  health = 100;
  hunger = 100;

  alert("Se comienza el juego")


  healthButton.textContent = health;
  hungerButton.textContent = hunger;

  function startlife() {
    let intervalos = setInterval(() => {
      hunger = hunger-10;
      health = health-10;
      healthButton.textContent = health;
      hungerButton.textContent = hunger;
      if (health <= 0 || hunger <= 0) {
        alert("Ha muerto, fin del juego");
        clearInterval(intervalos);
        healthButton.textContent = 0;
        hungerButton.textContent = 0;
      }
    }, 3000);
    return intervalos;
  }

  //jugar
  playButton.addEventListener("click", function() {
  hunger -=20
  health -= 10
  hungerButton.textContent = hunger;
  healthButton.textContent = health;
  imagen.src = "./images/marioplay.png";
  setInterval(() => {
    imagen.src = "./images/super-mario-transparent-background-20.png"
  }, 3000);
});

  //Comer
  feedButton.addEventListener("click", function() {
    if (hunger === 100) {
        hunger = 100
        hungerButton.textContent = hunger;
    }
    else {
        hunger +=10;
        hungerButton.textContent = hunger;
    }
  imagen.src = "./images/mario_eating_watermelon_by_thomasdafoestudios_ddn8ixe-fullview.png";
  setInterval(() => {
    imagen.src = "./images/super-mario-transparent-background-20.png"
  }, 2000);
  });

  // Dormir
  sleepButton.addEventListener("click", function() {
    if (hunger === 100 && health === 100) {
        health = 100
        hunger = 100
        hungerButton.textContent = hunger;
        healthButton.textContent = health;
    }
    else {
        hunger -=10
        health += 15
        hungerButton.textContent = hunger;
        healthButton.textContent = health;
    }
  healthButton.textContent = health;
  hungerButton.textContent = hunger;
  imagen.src = "./images/1102181-middle.png";
  setInterval(() => {
    imagen.src = "./images/super-mario-transparent-background-20.png"
  }, 3000);
  });

  startlife()
}