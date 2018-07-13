class Player{
  constructor(){
    this.hp = 100;
    this.mp = 50;
    this.attack = 30;
    this.defense = 5;
    this.status = 'alive';
  }
}

class Archer extends Player{
  constructor(name){
    super(name);
    this.name = name;
    this.mp -= 25;
    this.attack -= 3;
    this.defense += 10;

  }
}

class BlackMage extends Player {
  constructor(name) {
    super(name);
    this.name = name;
    this.hp -= 40;
    this.mp += 80;
    this.attack -= 25;
    this.defense -= 5;

  }
}

class Knight extends Player {
  constructor(name) {
    super(name);
    this.name = name;
    this.hp += 50;
    this.mp -= 40;
    this.attack += 50;
    this.defense += 10;

  }
}

class Nbaplayer{
  constructor(name){
    this.name = name
    this.passing = 50;
    this.shooting = 50;
    this.dunking = 50;
    this.defense = 50;

  }
}


function updateScreen(player){
  var playerName = document.createElement('h1');
  var pass = document.createElement('p');
  var shoot = document.createElement('p');
  var dunk = document.createElement('p');
  var def = document.createElement('p');

  var name = document.createTextNode(player.name);
  var passing = document.createTextNode('Passing Rating: ' + player.passing);
  var shooting = document.createTextNode('Shooting Rating: '+ player.shooting);
  var dunking = document.createTextNode('Athleticism: ' + player.dunking);
  var defense = document.createTextNode('Defensive Rating: ' + player.defense);

  playerName.appendChild(name);
  pass.appendChild(passing);
  shoot.appendChild(shooting);
  dunk.appendChild(dunking);
  def.appendChild(defense);

  var x = document.getElementById('characters');
  x.appendChild(playerName);
  x.appendChild(pass);
  x.appendChild(shoot);
  x.appendChild(dunk);
  x.appendChild(def);
};


class Sharpshooter extends Nbaplayer{
  constructor(name){
    super(name);
    this.passing -= 20;
    this.shooting += 40;
    this.dunking -= 30;
    this.defense -= 30;

    updateScreen(this);

  }
}

class Slasher extends Nbaplayer{
  constructor(name) {
    super(name);
    this.passing += 10;
    this.shooting -= 40;
    this.dunking +=40;
    this.defense += 40;

    updateScreen(this);

  }
}

class Playmaker extends Nbaplayer{
  constructor(name) {
    super(name);
    this.passing += 40;
    this.shooting -= 10;
    this.dunking += 20;
    this.defense -= 10;

    updateScreen(this);

  }


}
