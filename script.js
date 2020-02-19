var fight = document.querySelector(".fight");

function startFight() {
  fight.innerHTML = "";
  document.body.querySelector(".reset").innerHTML = "";
  var warriors = [
    {
      name: "Bob",
      damage: 2,
      health: 10,
      warrior: true,
      type: "fire"
    },
    {
      name: "Mavis",
      damage: 2,
      health: 10,
      warrior: true,
      type: "ice"
    },
    {
      name: "Morty",
      damage: 4,
      health: 10,
      warrior: true,
      type: "fire"
    }
  ];

  var dragonHealth = 15;
  var dragonElement = document.createElement("div");
  var warrior = document.createElement("warrior");
  var trialElement = document.createElement("trialElement");
  dragonElement.innerHTML = "The dragon's Health is: " + dragonHealth;

  function buttonWarrior(warList) {
    var warrior = document.createElement("button");
    warrior.innerHTML = warList.name + "'s health is: " + warList.health;
    warrior.addEventListener("click", trial);
    function trial() {
      attackDragon(warList.damage, warList.type, warList, warrior);
    }
    fight.appendChild(warrior);
  }

  function attackDragon(damage, type, object, element) {
    if (type === "fire") {
      dragonHealth = dragonHealth - (damage - 1);
    } else if (type === "ice") {
      dragonHealth = dragonHealth - (damage + 1);
    } else {
      dragonHealth = dragonHealth - damage;
    }

    var dragonsAttack = Math.floor(Math.random() * 2 + 1);

    object.health = object.health - dragonsAttack;
    element.innerHTML = object.health - dragonsAttack;

    if (object.health <= 0) {
      element.innerHTML = "Player is dead";
      warrior.removeEventListener("click", trialElement);
    } else {
      element.innerHTML = object.name + "'s health is: " + object.health;
    }

    dragonElement.innerHTML = "The dragon's health is: " + dragonHealth;

    if (dragonHealth <= 0) {
      document.body.querySelector(".reset").innerHTML =
        "The dragon has been defeated! You should play again!";
      dragonElement.innerHTML =
        "The dragon's health is 0. The dragon is dead.";
      document.body
        .querySelector(".reset")
        .addEventListener("click", function() {
          startFight();
        });
    } else if (
      warriors[0].health <= 0 &&
      warriors[1].health <= 0 &&
      warriors[2].health <= 0
    ) {
      document.body.querySelector(".reset").innerHTML =
        "You lost to a dragon. To play again refresh the program.";
      document.body
        .querySelector(".reset")
        .addEventListener("click", function() {
          startFight();
        });
    } 
  } 

  for (var i = 0; i < warriors.length; i++) {
    buttonWarrior(warriors[i]);
  }

 fight.appendChild(dragonElement);
} 

startFight();