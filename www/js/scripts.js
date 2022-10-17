var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

var waterLevel;
var fertizelevel;
var health;

function water(){//adds water
  waterLevel+=10;
}

function fertilize(){//adds fertlizer
  fertizelevel+=10;
}

function trim(){
  health+=10;
}

function process(){
  if(waterLevel<50 ||waterlevel > 70){
    health-=20
  }
}