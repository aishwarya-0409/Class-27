class Chain{
   constructor(bodyA,bodyB,length,stiffness){
       var options = {
      bodyA : bodyA,
      bodyB : bodyB,
      length : length,
      stiffness : stiffness
       }
    this.chain = Constraint.create(options)
      World.add(world,this.chain)

   }
   display(){
    var point1 = this.chain.bodyA.position
    var point2 = this.chain.bodyB.position
    stroke(0);
    strokeWeight(4);
    line(point1.x,point1.y,point2.x,point2.y)
   }
}
