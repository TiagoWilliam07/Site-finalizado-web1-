

document.addEventListener('DOMContentLoaded', function() {
    // Variáveis globais
    const carousel = document.querySelector('.carousel'); // Container do carrossel
    const items = document.querySelectorAll('.carousel-item'); // Itens do carrossel
    const indicators = document.querySelectorAll('.carousel-indicator'); // Indicadores do carrossel
    const totalItems = items.length; // Total de itens no carrossel
    let currentIndex = 0; // Índice do item atualmente ativo
    let isAnimating = false; // Flag para evitar múltiplas animações simultâneas
    
    // Inicialização
    function init() {// Função de inicialização do carrossel
        // Definir item inicial como ativo
        updateActiveItem(); // Atualizar item ativo
        
        // Adicionar event listeners
        document.querySelector('.prev-btn').addEventListener('click', prevSlide); // Botão anterior
        document.querySelector('.next-btn').addEventListener('click', nextSlide);// Botão próximo
        
        // Adicionar event listeners para indicadores
        indicators.forEach((indicator, index) => { // Loop através dos indicadores
            indicator.addEventListener('click', () => { // Adicionar listener de clique
                if (currentIndex !== index && !isAnimating) { // Verificar se não está animando
                    goToSlide(index); // Ir para o slide correspondente
                }
            });
        });
        
        // Adicionar event listeners para os itens (clique nas imagens)
        items.forEach((item, index) => { // Loop através dos itens
            item.addEventListener('click', () => { // Adicionar listener de clique
                if (currentIndex !== index && !isAnimating) { // Verificar se não está animando
                    goToSlide(index); // Ir para o slide correspondente
                }
            });
        });
        
        // Adicionar suporte para swipe em dispositivos móveis
        let touchStartX = 0; // Posição inicial do toque
        let touchEndX = 0; // Posição final do toque
        
        document.querySelector('.carousel-container').addEventListener('touchstart', e => { // Início do toque
            touchStartX = e.changedTouches[0].screenX; //   Obter posição inicial do toque
        }, false); // Fim do listener
        
        document.querySelector('.carousel-container').addEventListener('touchend', e => { // Fim do toque
            touchEndX = e.changedTouches[0].screenX; // Obter posição final do toque
            handleSwipe(); //   Lidar com o swipe
        }, false);
        
        function handleSwipe() {
            if (touchEndX < touchStartX - 50) { //  
                // Swipe para esquerda
                nextSlide();
            } else if (touchEndX > touchStartX + 50) { //
                // Swipe para direita
                prevSlide();
            }
        }
        
        // Iniciar autoplay
        startAutoplay(); // Iniciar autoplay do carrossel
    }
    
    // Autoplay
    let autoplayInterval; // Intervalo de autoplay
    
    function startAutoplay() { // Função para iniciar o autoplay
        autoplayInterval = setInterval(() => { //   Definir intervalo
            nextSlide();
        }, 5000); // Mudar slide a cada 5 segundos
    }
    
    function stopAutoplay() { //
        clearInterval(autoplayInterval); //
    }
    
    // Pausar autoplay quando o mouse estiver sobre o carrossel
    document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoplay); //  
    document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoplay); //
    
    // Navegação
    function prevSlide() {  // Função para slide anterior
        if (isAnimating) return; // Evitar múltiplas animações
        
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Calcular índice anterior
        updateCarousel(); // Atualizar carrossel
    }
    
    function nextSlide() { // Função para próximo slide
        if (isAnimating) return; // Evitar múltiplas animações
        
        currentIndex = (currentIndex + 1) % totalItems; // Calcular próximo índice
        updateCarousel(); // Atualizar carrossel
    }
    
    function goToSlide(index) { // Função para ir para um slide específico
        if (isAnimating || currentIndex === index) return; // Evitar múltiplas animações ou se já estiver no slide
        
        currentIndex = index; // Atualizar índice atual
        updateCarousel(); //    Atualizar carrossel
    }
    
    // Atualizar carrossel
    function updateCarousel() { // Função para atualizar o carrossel
        isAnimating = true; // Definir flag de animação
        
        // Rotacionar o carrossel
        carousel.style.transform = `rotateY(${-currentIndex * 100}deg)`;
        
        // Atualizar classes ativas
        updateActiveItem();
        
        // Definir tempo de animação
        setTimeout(() => {
            isAnimating = false;
        }, 1000); // Corresponde à duração da transição CSS
    }
    
   
    function updateActiveItem() { // Função para atualizar o item ativo
        // Atualizar itens
        items.forEach((item, index) => { //
            if (index === currentIndex) {
                item.classList.add('active'); //
            } else {
                item.classList.remove('active'); //
            }
        });
        
        // Atualizar indicadores
        indicators.forEach((indicator, index) => { //
            if (index === currentIndex) {
                indicator.classList.add('active'); //
            } else {
                indicator.classList.remove('active'); //
            }
        });
    }
    
    
    // Inicializar
    init();
    
    
   
});
