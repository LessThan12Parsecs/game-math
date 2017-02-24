window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        p = particle.create(width/2,height/2,10,-Math.PI/4*Math.random()*5+1),
        friction = vector.create(0.15,0);
        //friction2 = 0.95;
    update();

    function update() {
        context.clearRect(0,0,width,height);
        //Real friction
        friction.setAngle(p.velocity.getAngle());
        if(p.velocity.getLength()>friction.getLength()){
            p.velocity.substractFrom(friction);
        }
        else{
            p.velocity.setLength(0);
        }
        p.update();
        // p.velocity.setLength(p.velocity.getLength()*friction2);
        context.beginPath();
        context.arc(p.position.getX(),p.position.getY(),10,0,Math.PI*2,false);
        context.fill();


        requestAnimationFrame(update);
    }
};