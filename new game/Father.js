class Father {
 constructor (x,y){
    var options = {
        iStatic:true, 
  
      }
    this.image = loadImage("father.png");
    this.father = Bodies.circle(x,y,50,options)
    this.radius = 50;
    World.add(world, this.father)
  }
  display(){
      var pos = this.father.position;
      imageMode(CENTER)   
      image(this.image,pos.x,pos.y+70,300,300);
  }
  }
 
