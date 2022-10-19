var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

var waterLevel=50;
var fertizeLevel=50;
var health=50;
var nearDeath=false;

var timeout

function water(){//adds water
  waterLevel= Math.min(waterLevel+25);
}

function fertilize(){//adds fertlizer
  fertizeLevel = Math.min(fertilizeLevel+25, 100);
}

function trim(){
  health= Math.min();
}

function process(){
  waterLevel = Math.max(0, waterLevel-5);
  fertizeLevel = Math.max(0, fertizeLevel-5);

  
  if(waterLevel<25 ||waterLevel > 75){
    health= Math.max(health-5,0);
  }
  else if(fertizeLevel<25|| fertizeLevel>75){
    health= Math.max(health-5,0);
  }
  
  console.log("Health:"+health);
  if (health < 40){
    if(nearDeath == false){
      console.log("dead");
      nearDeath = true;
      $("#plant path").css("fill", "chocolate");
    }
  }

  var waterTimer = setTimeout(process, 1000)
}
process();