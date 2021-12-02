const canvas = document.getElementById("canvas1");
const ctx= canvas.getContext('2d');
var color_all='white'
canvas.width= window.innerWidth;
canvas.height=window.innerHeight;
let particlesArray;
//get mouse position


let mouse = {
    x: null,
    y:null,
    radius: ((canvas.height/125)*(canvas.width/125)) //how interactive the mouse is, on the net
}
window.addEventListener('mousemove',
    function(event){
            mouse.x=event.x;
            mouse.y=event.y;
    }
);
class Particle {
    constructor(x,y,directionX,directionY,size, color) {
        this.x=x;
        this.y=y;
        this.directionX=directionX;
        this.directionY=directionY;
        this.size=size;
        this.color=color;
    }
    //method to draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.size, 0, Math.PI*2, false);
        ctx.fillStyle= color_all;
        ctx.fill();
    }
    //check partice position, check particle position, move the particle, draw the particle
    update() {
        //check if particle is still within canvas
        if(this.x > canvas.width || this.x <0) {
            this.directionX= -this.directionX;
        }
        if(this.y > canvas.height || this.y < 0) {
            this.directionY= -this.directionY;
        }
        //check collision detection -mouse position/ particle position
        let dx = mouse.x - this.x;
        let dy = mouse.y -this.y;
        let distance =Math.sqrt(dx*dx+dy*dy)
        if(distance < mouse.radius + this.size) {
            if(mouse.x < this.x && this.x <canvas.width-this.size*10) {
                this.x+=10;
            }
            if (mouse.x > this.x && this.x > this.size*10) {
                this.x -=10;
            }
            if(mouse.y < this.y && this.y <canvas.width-this.size*10) {
                this.y += 10;
            }
            if(mouse.y > this.y && this.y > this.size*10) {
                this.y-=10;
            }
        }
        //move particle
        this.x += this.directionX;
        this.y +=this.directionY;
        //draw particle
        this.draw();
    }
}

//create particle array
function init() {
    particlesArray = []
    let numberOfParticles = (canvas.height*canvas.width)/48777; // how many lines are formed
    for (let i =0; i< numberOfParticles*1.5; i++) {
        let size= (Math.random()*5)+1;
        let x= (Math.random()*((innerWidth-size*2)-(size*2))+ size*2);
        let y= (Math.random()*((innerHeight-size*2)-(size*2))+ size*2);
        let directionX = (Math.random()*4)-2.5;
        let directionY = (Math.random()*4)-2.5;
        let color = color_all;

        particlesArray.push(new Particle(x,y,directionX,directionY, size, color));
    }
}


//check if parzicles are close enough to draw a line between them
function connect() {
    let opacityValue=1;
    for (let a=0; a< particlesArray.length; a++) {
        for (let b=a; b<particlesArray.length; b++) {
            let distance= (( particlesArray[a].x - particlesArray[b].x)
            * (particlesArray[a].x - particlesArray[b].x))
            +((particlesArray[a].y - particlesArray[b].y)*(particlesArray[a].y-particlesArray[b].y));
            if (distance<(canvas.width/7)*(canvas.height/7)) {
                ctx.strokeStyle='rgba(2,255,255,'+ opacityValue +')';
                opacityValue=1;
                ctx.lineWidth=1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();


            }
        }
    }
}


//animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth, innerHeight);

    for (let i =0; i < particlesArray.length; i++) {
        particlesArray[i].update();

    }
    connect();
}

//resize event
window.addEventListener('resize',
    function(){
        canvas.width=innerWidth;
        canvas.height=innerHeight;
        mouse.radius=((canvas.height/125)*(canvas.height/125)); // how interactive is the window based on the mouse-movement
        init();
    }
);


//mouse out event
window.addEventListener('mouseout',
function(){
    mouse.x=undefined;
    mouse.y=undefined;
});



    


init();
animate();

