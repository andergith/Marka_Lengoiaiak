        // Obtener el canvas y su contexto
        const canvas = document.getElementById("pongCanvas");
        const ctx = canvas.getContext("2d");

        // Definir las paletas y la pelota
        const paddleWidth = 250;
        const paddleHeight = 60;
        let paddle1Y = (canvas.height - paddleHeight) / 2;
        let paddle2Y = (canvas.height - paddleHeight) / 2;
        const ballSize = 100;
        let ballX = canvas.width / 2;
        let ballY = canvas.height / 2;
        let ballSpeedX = 5;
        let ballSpeedY = 2;

        // Dibujar el elemento en el canvas
        function draw() {
            // Limpiar el canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dibujar las paletas
            ctx.fillStyle = "#000";
            ctx.fillRect(0, paddle1Y, paddleWidth, paddleHeight);
            ctx.fillRect(canvas.width - paddleWidth, paddle2Y, paddleWidth, paddleHeight);

            // Dibujar la pelota
            ctx.beginPath();
            ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2);
            ctx.fillStyle = "#000";
            ctx.fill();
            ctx.closePath();

            // Actualizar la posición de la pelota
            ballX += ballSpeedX;
            ballY += ballSpeedY;

            // Rebote en la parte superior e inferior
            if (ballY + ballSize > canvas.height || ballY - ballSize < 0) {
                ballSpeedY = -ballSpeedY;
            }

            // Rebote en las paletas
            if (
                (ballX - ballSize < paddleWidth && ballY > paddle1Y && ballY < paddle1Y + paddleHeight) ||
                (ballX + ballSize > canvas.width - paddleWidth && ballY > paddle2Y && ballY < paddle2Y + paddleHeight)
            ) {
                ballSpeedX = -ballSpeedX;
            }

            // Mover la paleta del jugador 2 hacia la pelota
            if (ballY > paddle2Y + paddleHeight / 2) {
                paddle2Y += 2;
            } else {
                paddle2Y -= 2;
            }

            // Evitar que las paletas salgan de la pantalla
            paddle1Y = Math.max(0, Math.min(canvas.height - paddleHeight, paddle1Y));
            paddle2Y = Math.max(0, Math.min(canvas.height - paddleHeight, paddle2Y));

            // Pausar el juego
            // requestAnimationFrame(draw);
        }

        // Capturar eventos del teclado para mover la paleta del jugador 1
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowUp" && paddle1Y > 0) {
                paddle1Y -= 10;
            } else if (e.key === "ArrowDown" && paddle1Y < canvas.height - paddleHeight) {
                paddle1Y += 10;
            }
        });

        // Llamar a la función de dibujo repetidamente
        setInterval(draw, 20);