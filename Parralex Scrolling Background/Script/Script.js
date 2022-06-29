const canvas = document.getElementById('Parralex');
const ctx = canvas.getContext('2d');
var GameSpeed = 15;
const CANVAS_WIDTH = canvas.width = 1400;
const CANVAS_HEIGHT = canvas.height = 900;

var audio = new Audio('Retro Samurai v0_4.mp3');
audio.play();
const BackGroundImageLayer0 = new Image();
BackGroundImageLayer0.src = "./BgLayers/b1.png";

const BackGroundImageLayer1 = new Image();
BackGroundImageLayer1.src = "./BgLayers/b2.png";

const BackGroundImageLayer2 = new Image();
BackGroundImageLayer2.src = "./BgLayers/b3.png";

const BackGroundImageLayer3 = new Image();
BackGroundImageLayer3.src = "./BgLayers/b4.png";

const BackGroundImageLayer4 = new Image();
BackGroundImageLayer4.src = "./BgLayers/b5.png";

const BackGroundImageLayer5 = new Image();
BackGroundImageLayer5.src = "./BgLayers/b6.png";

const BackGroundImageLayer6 = new Image();
BackGroundImageLayer6.src = "./BgLayers/b7.png";



window.addEventListener('load', function() {
    const Slider = document.getElementById('Slider');
    Slider.value = GameSpeed;
    const ShowGameSpeed = document.getElementById('ShowGameSpeed');
    ShowGameSpeed.innerHTML = GameSpeed;
    Slider.addEventListener('change', function(e) {
        GameSpeed = e.target.value
        ShowGameSpeed.innerHTML = e.target.value
    })


    class BackgroundLayer {
        constructor(image, SpeedModifier) {
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            this.image = image;
            this.SpeedModifier = SpeedModifier;
            this.speed = GameSpeed * this.speed
        }
        update() {
            this.speed = GameSpeed * this.SpeedModifier;
            if (this.x <= -this.width) {
                this.x = 0;
            }
            this.x = this.x - this.speed
        }

        draw() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
        }
    }

    const BackgroundLayer0 = new BackgroundLayer(BackGroundImageLayer0, 0.2);
    const BackgroundLayer1 = new BackgroundLayer(BackGroundImageLayer1, 0.4);
    const BackgroundLayer2 = new BackgroundLayer(BackGroundImageLayer2, 0.6);
    const BackgroundLayer3 = new BackgroundLayer(BackGroundImageLayer3, 0.8);
    const BackgroundLayer4 = new BackgroundLayer(BackGroundImageLayer4, 1);
    const BackgroundLayer5 = new BackgroundLayer(BackGroundImageLayer5, 1.2);
    const BackgroundLayer6 = new BackgroundLayer(BackGroundImageLayer6, 1.4);


    const GameObject = [BackgroundLayer0, BackgroundLayer1, BackgroundLayer2,
        BackgroundLayer3, BackgroundLayer4, BackgroundLayer5, BackgroundLayer6

    ];

    function Render() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        GameObject.forEach(object => {
            object.update();
            object.draw();
        });
        //GameFrame--;
        requestAnimationFrame(Render);
    }
    Render();
})