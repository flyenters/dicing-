
function setup() {
  createCanvas(800, 500);
  
  plant1= new Plant
  plant2= new Plant
  plant3= new Plant
  plant4= new Plant
  plant5= new Plant
  
}



function draw() {
  background (255, 202, 138);
  
  plant1.grow()
  plant2.grow()
  plant3.grow()
  plant4.grow()
  plant5.grow()
  
}

class Plant {
  
  constructor(){ // similar to setup()
    
    this.x = random(0, 300)
    this.plantHeight = 470
    this.xPos = random(0, 800)
    this.plantSpeed = random(0.1, 2)
    
    this.osc = new p5.Oscillator("triangle")
    this.osc.amp(.25)
    this.osc.start()
    
     this.osc2 = new p5.Oscillator("sine")
    this.osc2.amp(.23)
    this.osc2.start()
    
    
    this.osc3 = new p5.Oscillator("saw")
    this.osc3.amp(.21)
    this.osc3.start()
  }
  
  grow(){
    
    this.osc.freq(this.plantHeight + this.x)
    this.osc2.freq(this.xPos-this.plantSpeed)
    this.osc3.freq(this.plantSpeed)
    
    this.plantHeight = this.plantHeight - this.plantSpeed
    stroke(this.x)
    line(this.xPos, height - this.x, this.xPos, this.plantHeight+10)
    
    
    noStroke()
    for(let i=10; i<40; i++){
    square(this.xPos, this.plantHeight, i)
    }
    
  }
  
}