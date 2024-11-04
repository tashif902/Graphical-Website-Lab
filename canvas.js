const canvas = document.getElementById('ghostCanvas');
    const ctx = canvas.getContext('2d');
    let opacity = 0; // Start with 0 opacity (fully invisible)
    let fadingIn = true; // To track if we're fading in or out
    let xPos = Math.random() * (window.innerWidth - canvas.width);
    let yPos = Math.random() * (window.innerHeight - canvas.height);


    // Function to draw the ghost
    function drawGhost() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame


      // Body (arc with semi-circle for the top)
      ctx.globalAlpha = opacity; // Apply the fading effect
      ctx.beginPath();
      ctx.arc(50, 50, 30, Math.PI, 0, false); // Half circle for head
      ctx.lineTo(80, 100); // Right side
      //ctx.quadraticCurveTo(65, 90, 50, 100); // Bottom middle
      //ctx.quadraticCurveTo(35, 90, 20, 100); // Bottom left


      ctx.quadraticCurveTo(70, 90, 60, 100);
      ctx.quadraticCurveTo(50, 90, 40, 100);
      ctx.quadraticCurveTo(30, 90, 20, 100);


      ctx.lineTo(20, 50); // Left side
      ctx.closePath();
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.stroke();


      // Draw the eyes
      ctx.beginPath();
      ctx.arc(40, 45, 5, 0, 2 * Math.PI); // Left eye
      ctx.arc(60, 45, 5, 0, 2 * Math.PI); // Right eye
      ctx.fillStyle = 'black';
      ctx.fill();


      // Draw the open mouth (oval for the "oooooo" effect)
      ctx.beginPath();
      ctx.ellipse(50, 65, 5, 10, 0, 0, 2 * Math.PI); // Ellipse for open mouth
      ctx.fillStyle = 'black';
      ctx.fill();
    }


    // Function to animate the opacity and position
    function animateGhost() {
      if (fadingIn) {
        opacity += 0.01; // Increase opacity
        if (opacity >= 1) {
          fadingIn = false; // Start fading out
        }
      } else {
        opacity -= 0.01; // Decrease opacity
        if (opacity <= 0) {
          fadingIn = true; // Start fading in
          // Move ghost to new random location after fade out
          xPos = Math.random() * (window.innerWidth - canvas.width);
          yPos = Math.random() * (window.innerHeight - canvas.height);
          canvas.style.left = xPos + 'px';
          canvas.style.top = yPos + 'px';
        }
      }


      drawGhost(); // Draw ghost with updated opacity
      requestAnimationFrame(animateGhost); // Continue the animation loop
    }


    // Initialize the animation
    canvas.style.left = xPos + 'px';
    canvas.style.top = yPos + 'px';
    animateGhost();
