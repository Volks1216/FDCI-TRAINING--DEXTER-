// Character prototype
let en = [];
let lv = [];
let newlv = [];
function Character(name, health) {
    this.name = name;
    this.health = health;
  }
  
  Character.prototype.printStats = function() {
    console.log(`${this.name} - Health: ${this.health}`);
  };
  
  // Player constructor
  function Player(name, health, level) {
    // Implement inheritance
    newlv.push(level);
    return console.log(name, health, level)
  }
  
  // Enemy constructor
  function Enemy(name, health) {
    // Implement inheritance
    en.push(health);
    return console.log(name, health);
  }
  
  // Implement levelUp method for Player
  function levelUp(level) {
      if(lv==0){
          newlv++
          return console.log("you gained a level"+newlv);
      }
  }
  // Implement attack method for Enemy
  function attack(name) {
      if(name==="Monster"){
          let attack = 100;
          if(attack>en[0]){
           result = attack>en[0];
           let EnDead = 0;
           lv.push(EnDead);
           return console.log("you killed the monster");   
          }
      }
  }
  // Create instances and demonstrate functionalities
  const player = new Player("Hero", 100, 1);
  const enemy = new Enemy("Monster", 50);
  attack("Monster");
  levelUp();
  // Demonstrate functionalities
  //player.printStats();
  //enemy.printStats();
  // Perform attacks, level up, etc.
  