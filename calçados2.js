$(function () {
    $(".menu-link").click(function () {
        $(".menu-link").removeClass("is-active");
        $(this).addClass("is-active");
    });

    $(".main-header-link").click(function () {
        $(".main-header-link").removeClass("is-active");
        $(this).addClass("is-active");
    });

    $(".search-bar input").on("keyup", function () {
        var searchTerm = $(this).val().toLowerCase();
        $(".searchable-item").removeClass("highlight");
        $(".searchable-item").each(function () {
            var textToSearch = $(this).text().toLowerCase();
            if (textToSearch.includes(searchTerm)) {
                $(this).addClass("highlight");
            }
        });
    });

    $(document).ready(function () {
        $(".status-button:not(.open)").on("click", function (e) {
            $(".overlay-app").addClass("is-active");
        });
        $(".pop-up .close").click(function () {
            $(".overlay-app").removeClass("is-active");
        });
    });

    $(".status-button:not(.open)").click(function () {
        $(".pop-up").addClass("visible");
    });

    document.addEventListener("DOMContentLoaded", function () {
        const productsWrapper = document.getElementById("productsWrapper");
        productsWrapper.addEventListener("wheel", function (event) {
            productsWrapper.scrollLeft += event.deltaY;
            event.preventDefault();
        });
    });

    $(".search-bar input")
        .focus(function () {
            $(".header").addClass("wide");
        })
        .blur(function () {
            $(".header").removeClass("wide");
        });

    // Função para carregar o GSAP e o ScrollTrigger de forma assíncrona
    $.getScript("https://cdn.skypack.dev/gsap@3.12.0", function () {
        // Registra o ScrollTrigger com o GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Define a variável --base para 0
        gsap.set('section', { '--base': 0 });

        // Aplica a animação de mudança de --base ao rolar a página horizontalmente
        gsap.to('section', {
            '--base': 320,
            ease: 'none',
            scrollTrigger: {
                horizontal: true,
                scrub: true,
                scroller: 'ul',
            },
        });

        // Seleciona todos os itens li
        const ITEMS = document.querySelectorAll('li');

        // Para cada item li, aplica as animações de saturação ao rolar a página horizontalmente
        ITEMS.forEach((ITEM) => {
            gsap
                .timeline()
                .set(ITEM, { '--sat': 0 })
                .to(ITEM, {
                    '--sat': 100,
                    scrollTrigger: {
                        trigger: ITEM,
                        start: 'left 75%', // Centralizado
                        end: 'center center', // Centralizado
                        horizontal: true,
                        scrub: true,
                        scroller: 'ul',
                    },
                })
                .fromTo(
                    ITEM,
                    { '--sat': 100 },
                    {
                        '--sat': 0,
                        scrollTrigger: {
                            trigger: ITEM,
                            end: 'right 25%', // Centralizado
                            start: 'center center', // Centralizado
                            horizontal: true,
                            scrub: true,
                            scroller: 'ul',
                        },
                    }
                );
        });
    });

    // Encontre todos os botões "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Adicione um evento de clique a cada botão
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Encontre o elemento select dentro do card do produto clicado
    const colorSelect = button.parentElement.querySelector('select[name="color"]');
    const selectedColor = colorSelect.value; // Obtenha a cor selecionada

    // Crie um objeto com os detalhes do produto, incluindo a cor selecionada
    const productDetails = {
      name: button.dataset.name,
      price: button.dataset.price,
      color: selectedColor
    };

    // Agora você pode fazer algo com as informações do produto, como adicionar ao carrinho
    addToCart(productDetails);
  });
});

// Função para adicionar o produto ao carrinho (simulada para este exemplo)
function addToCart(product) {
  // Aqui você pode implementar a lógica real para adicionar o produto ao carrinho
  console.log('Produto adicionado ao carrinho:', product);
}

// Captura o elemento select de cor
const colorSelect = document.getElementById('color');

// Adiciona um event listener para o evento change
colorSelect.addEventListener('change', function() {
  const selectedColor = this.value; // Obtém a cor selecionada

  // Define a cor da borda do botão de seleção de cor com base na cor selecionada
  this.style.borderColor = selectedColor;
});



    

    $(".status-button:not(.open)").click(function () {
        $(".pop-up").addClass("visible");
    });

    document.addEventListener("DOMContentLoaded", function () {
        const addToCartButtons = document.querySelectorAll(".add-to-cart");
        const cartItemsContainer = document.querySelector(".cart-items");
        const cartTotalElement = document.getElementById("cart-total");
        let cartTotal = 0;

        addToCartButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const itemName = button.dataset.name;
                const itemPrice = parseFloat(button.dataset.price);
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <img src="img/4330.png" alt="Descrição da imagem" style="width: 40px; height: 40px;">
                    <span>${itemName}</span>
                    <span>R$ ${itemPrice.toFixed(2)}</span>
                `;
                cartItemsContainer.appendChild(cartItem);
                cartTotal += itemPrice;
                cartTotalElement.textContent = `R$ ${cartTotal.toFixed(2)}`;
            });
        });
    });

    const toggleButton = document.querySelector('.dark-light');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
});
