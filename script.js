 const grid = document.getElementById('grid');
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 400;
        grid.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        let drawing = false;

        canvas.addEventListener('mousedown', () => {
            drawing = true;
            ctx.beginPath();
        });

        canvas.addEventListener('mouseup', () => {
            drawing = false;
            ctx.closePath();
        });

        canvas.addEventListener('mousemove', (event) => {
            if (!drawing) return;
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
        });

        document.addEventListener('keydown' , (event) => {
            if (event.key === 'c') {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        });

        