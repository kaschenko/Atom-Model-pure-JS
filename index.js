class Electron {
    currentAngle = 0;
    currentPAngle = 0
    currentPVerticalAngle = 0
    radius = 100;
    baseX = 200;
    baseY = 200;
    init() {
        this.createCanvas()
        this.setCanvasSize()
        setInterval(() => {
            this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
            this.circle()
            this.pOrbit()
            this.pOrbitVertical()
            this.nucleus()
        }, 50)

        window.addEventListener('resize', () => {
            this.setCanvasSize()
        })
    }
    createCanvas() {
        this.cnv = document.createElement('canvas')
        this.ctx = this.cnv.getContext(`2d`)
        this.ctx.fillStyle = 'blue';
        document.body.appendChild(this.cnv)
    }

    setCanvasSize() {
        this.w = this.cnv.width = innerWidth
        this.h = this.cnv.height = innerHeight
    }

    circle() {

        this.vx = 400 + Math.cos( this.currentAngle) * this.radius
        this.vy = 150 + Math.sin(this.currentAngle) * this.radius

        this.ctx.fillRect(this.baseX + this.vx, this.baseY + this.vy, 5, 5)
        this.currentAngle += 0.1
    }
    pOrbit() {
        this.pvx = 400 + 200 * Math.cos(this.currentPAngle) / (1 + Math.pow(Math.sin(this.currentPAngle), 2))
        this.pvy = 150 + 200 * Math.sin(this.currentPAngle) * Math.cos(this.currentPAngle) / (1 + Math.pow(Math.sin(this.currentPAngle), 2))


        this.ctx.fillRect(this.baseX + this.pvx, this.baseY + this.pvy, 5, 5)
        this.currentPAngle += 0.1
    }
    pOrbitVertical() {
        this.pvx = 400 + - 200 * Math.sin(this.currentPVerticalAngle) * Math.cos(this.currentPVerticalAngle) / (1 + Math.pow(Math.sin(this.currentPVerticalAngle), 2))
        this.pvy = 150 + 200 * Math.cos(this.currentPVerticalAngle) / (1 + Math.pow(Math.sin(this.currentPVerticalAngle), 2))


        this.ctx.fillRect(this.baseX + this.pvx, this.baseY + this.pvy, 5, 5)
        this.currentPVerticalAngle += 0.1
    }
    nucleus() {
        this.ctx.fillStyle = 'white'
        this.ctx.beginPath();
        this.ctx.arc(605, 355, 10, 0, Math.PI*2)
        this.ctx.fill()
    }
}

window.onload = () => {
    new Electron().init()
}