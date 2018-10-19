
// UTILa area
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
canvas.style.backgroundColor = "rgba(0, 0, 0, 1)";

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const touch = {
    x: innerWidth/2,
    y: innerHeight/2
}

//Update color,number of Particles, maxRadius here (Some Color Presets Available. Just Uncomment 1 of them)
//const colors = ['#5F698D', '#6791A7', '#6CB7C1', '#60D7D0', '#5DEFDF']
// const colors = ['#EB6896', '#C36894', '#836890', '#46698D', '#0F6A8B']
const colors = ['#EB6896', '#C36894', '#836890', '#46698D', '#0F6A8B']
const numOfParticles = 50;
const maxRadius = 5;

// Event Listeners

//Mouse event
addEventListener('mousemove', function(event) {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

//Touch event
addEventListener('touchmove', function (e) {
    // stop touch event
    e.stopPropagation();
    e.preventDefault();

    // translate to mouse event
    var mEvent = document.createEvent('MouseEvent');
    mEvent.initMouseEvent('mousemove', true, true, window, e.detail, 
                 e.touches[0].screenX, e.touches[0].screenY, 
                 e.touches[0].clientX, e.touches[0].clientY, 
                 false, false, false, false, 
                 0, null);
    dispatchEvent(mEvent);
}, false);

//Screen resize
addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Particle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.radians = Math.random() * Math.PI *2;
    this.velocity = Math.random()* 0.05 + 0.01;
    this.distanceFromCenter = randomIntFromRange(50,150);
    this.lastMouse = {
        x: x,
        y: y
    }

    this.draw = function(lastPoint) {
        c.beginPath()
        // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        // c.fillStyle = this.color
        // c.fill()
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath()
    }
    
    this.update = function() {
        const lastPoint = {
            x: this.x,
            y: this.y
        }
        //To Move point
        this.radians += this.velocity;
        this.radians %= Math.PI *2;

        //Drag effect
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05 ;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05 ;
        
        //Circular Motion
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
        
        this.draw(lastPoint);
    }
}



// Implementation
let particles = [];
function init() {
    particles = [];

    for (let i = 0; i < numOfParticles; i++) {
        const radius = (Math.random() * maxRadius) + 1;
        particles.push( new Particle( canvas.width/2, canvas.height/2, radius, randomColor(colors)));
    }
    console.log(particles);
    
}
renderCount = 0;
// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    // c.clearRect(0, 0, canvas.width, canvas.height)

    if((renderCount++) % 2 == 0) {
        c.fillStyle = 'rgba(0, 0, 0, 0.1)';
        c.fillRect(0,0, canvas.width, canvas.height);
    }
    // c.fillStyle = 'rgba(0, 0, 0, 0.07)';
    // c.fillRect(0,0, canvas.width, canvas.height);
    particles.forEach(particle => {
     particle.update();
    });
}

init()
animate()