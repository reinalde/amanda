let index = 0;
        const items = document.querySelectorAll('.carousel-items img');
        const totalItems = items.length;
        const carousel = document.querySelector('.carousel-items');
        let autoSlide;

        function moveToNext() {
            index = (index + 1) % totalItems; 
            updateCarousel();
        }

        function moveToPrev() {
            index = (index - 1 + totalItems) % totalItems; 
            updateCarousel();
        }

        function updateCarousel() {
            const offset = -index * 100;
            carousel.style.transform = `translateX(${offset}%)`;
        }

        function startAutoSlide() {
            autoSlide = setInterval(moveToNext, 2000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlide);
        }

        // Inicia o carrossel automático
        startAutoSlide();

        // Controle por swipe (toque)
        let startX = 0;
        let endX = 0;

        document.querySelector('.carousel').addEventListener('touchstart', (e) => {
            stopAutoSlide();
            startX = e.touches[0].clientX;
        });

        document.querySelector('.carousel').addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
            startAutoSlide();
        });

        function handleSwipe() {
            if (startX - endX > 50) {
                moveToNext(); // Swipe para a esquerda
            } else if (endX - startX > 50) {
                moveToPrev(); // Swipe para a direita
            }
        }

        // Controle por clique e arraste (mouse)
        let isDragging = false;
        let startMouseX = 0;
        let endMouseX = 0;

        document.querySelector('.carousel').addEventListener('mousedown', (e) => {
            stopAutoSlide();
            isDragging = true;
            startMouseX = e.clientX;
        });

        document.addEventListener('mouseup', (e) => {
            if (isDragging) {
                endMouseX = e.clientX;
                handleSwipeMouse();
                startAutoSlide();
            }
            isDragging = false;
        });

        function handleSwipeMouse() {
            if (startMouseX - endMouseX > 50) {
                moveToNext(); // Arrastar para a esquerda
            } else if (endMouseX - startMouseX > 50) {
                moveToPrev(); // Arrastar para a direita
            }
        }