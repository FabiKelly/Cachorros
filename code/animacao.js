// Função para animar o cachorro
function animateDog() {
    var dog = document.getElementById("dog");
    var position = 0;
    var direction = 1;
    var maxWidth = document.documentElement.clientWidth - dog.clientWidth;

    // Função de animação
    function frame() {
        // Atualiza a posição do cachorro
        position += direction * 10; // Aumenta a quantidade de pixels para mover o cachorro

        // Verifica se o cachorro ultrapassou as bordas da janela
        if (position >= maxWidth || position <= 0) {
            // Vira o cachorro
            dog.style.transform = direction === 1 ? "scaleX(-1)" : "scaleX(1)";

            // Inverte a direção
            direction *= -1;
        }

        dog.style.left = position + "px";

        // Chama a próxima animação
        requestAnimationFrame(frame);
    }

    // Inicia a animação
    frame();
}

// Chama a função de animação quando a página carrega
window.onload = animateDog;
