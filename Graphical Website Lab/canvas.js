const canvas = document.getElementById('flickerCanvas');
        const ctx = canvas.getContext('2d');
        
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

       
        const numLights = 100;

        
        const lights = [];

       
        class Light {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 3 + 2; 
                this.color = `hsl(${Math.random() * 360}, 100%, 80%)`; 
                this.flickerIntensity = Math.random() * 0.3 + 0.1; 
                this.brightness = Math.random(); 
            }

            
            update() {
                
                this.brightness = Math.random() * this.flickerIntensity;
            }

           
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.brightness;
                ctx.fill();
                ctx.globalAlpha = 1; 
            }
        }

        
        function generateLights() {
            for (let i = 0; i < numLights; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                lights.push(new Light(x, y));
            }
        }

      
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); 

            
            lights.forEach(light => {
                light.update();
                light.draw();
            });

            requestAnimationFrame(animate); 
        }

        
        generateLights();
        animate();
