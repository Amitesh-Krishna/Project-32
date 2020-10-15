class SlingShot{

    constructor(bodyA,pointB) {
        
        stroke(color(48,22,8));
        var options = 
        {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:3

        }

        this.posA = bodyA.position;
        this.posB = pointB;
        this.connection = Constraint.create(options);
        World.add(world,this.connection);

    }

    fly(){
        this.connection.bodyA = null;
    }

    attach(body){
        this.connection.bodyA = body;
    }

    display(){
        if(this.connection.bodyA){
            line(this.posA.x,this.posA.y,this.posB.x,this.posB.y);
        }
    }
}