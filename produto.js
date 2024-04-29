$(function () {
    $(".menu-link").click(function () {
     $(".menu-link").removeClass("is-active");
     $(this).addClass("is-active");
    });
   });
   
   $(function () {
    $(".main-header-link").click(function () {
     $(".main-header-link").removeClass("is-active");
     $(this).addClass("is-active");
    });
   });
   
   // Adiciona um evento de digitação na barra de pesquisa
   $(".search-bar input").on("keyup", function () {
     // Captura o valor digitado na barra de pesquisa e converte para minúsculas
     var searchTerm = $(this).val().toLowerCase();
   
     // Remove todas as classes de destaque dos itens
     $(".searchable-item").removeClass("highlight");
   
     // Verifica cada item para ver se ele contém o termo de pesquisa
     $(".searchable-item").each(function () {
         var textToSearch = $(this).text().toLowerCase();
   
         // Se o item contém o termo de pesquisa, adiciona a classe de destaque
         if (textToSearch.includes(searchTerm)) {
             $(this).addClass("highlight");
         }
     });
   });
   $(document).ready(function() {
     // Evento de clique no botão "Comprar" nos cards de aplicativos
     $(".comprar-button").on("click", function() {
       // Mostrar o pop-up ao clicar no botão "Comprar"
       $(".popup").addClass("show-popup");
     });
   
     // Evento de clique no botão de fechar o pop-up
     $(".close-popup").on("click", function() {
       // Fechar o pop-up ao clicar no botão de fechar
       $(".popup").removeClass("show-popup");
     });
   });
   
   const dropdowns = document.querySelectorAll(".dropdown");
   dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
     e.stopPropagation();
     dropdowns.forEach((c) => c.classList.remove("is-active"));
     dropdown.classList.add("is-active");
    });
   });
   
   $(".search-bar input")
    .focus(function () {
     $(".header").addClass("wide");
    })
    .blur(function () {
     $(".header").removeClass("wide");
    });
   
    $(function () {
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
     const addToCartButtons = document.querySelectorAll(".add-to-cart");
     const cartItemsContainer = document.querySelector(".cart-items");
     const cartTotalElement = document.getElementById("cart-total");
     const popupCartTotalElement = document.getElementById("popup-cart-total");
     const cartPopup = document.querySelector(".cart-popup");
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
             popupCartTotalElement.textContent = `R$ ${cartTotal.toFixed(2)}`;
         });
     });
   
     const cartButton = document.querySelector(".cart-button");
     const closePopupButton = document.querySelector(".close-popup");
   
     cartButton.addEventListener("click", function () {
         cartPopup.classList.add("show-popup");
     });
   
     closePopupButton.addEventListener("click", function () {
         cartPopup.classList.remove("show-popup");
     });
   });
   document.addEventListener('DOMContentLoaded', function () {
     const cartButton = document.querySelector('.cart-button');
     const cartPopup = document.getElementById('cartPopup');
     const closePopup = cartPopup.querySelector('.close');
   
     // Adiciona um evento de clique ao botão "Card"
     cartButton.addEventListener('click', function () {
         // Exibe o pop-up
         cartPopup.style.display = 'block';
     });
   
     // Adiciona um evento de clique ao botão de fechar o pop-up
     closePopup.addEventListener('click', function () {
         // Fecha o pop-up
         cartPopup.style.display = 'none';
     });
   });
   
   $(document).ready(function () {
       $(".open-popup1").click(function () {
           $(".pop-up").addClass("visible");
       });
   
       $(".pop-up .close").click(function () {
           $(".pop-up").removeClass("visible");
       });
   });
   
   document.addEventListener('DOMContentLoaded', function () {
     const cartButton = document.querySelector('.cart-button');
     const cartPopup = document.getElementById('cartPopup');
     const closePopup = cartPopup.querySelector('.close');
     const cartTab = cartPopup.querySelector('.cart-tab');
     const cartItems = cartTab.querySelector('.cart-items');
     const cartTotal = cartTab.querySelector('#cart-total');
   
     // Itens do carrinho (pode ser um array de objetos com nome e preço)
     let cartItemsData = [];
   
     // Adiciona um evento de clique ao botão "Card"
     cartButton.addEventListener('click', function () {
         // Exibe o pop-up
         cartPopup.style.display = 'block';
         // Atualiza os itens do carrinho e a soma total
         updateCart();
     });
   
     // Adiciona um evento de clique ao botão de fechar o pop-up
     closePopup.addEventListener('click', function () {
         // Fecha o pop-up
         cartPopup.style.display = 'none';
     });
   
     // Função para atualizar os itens do carrinho e a soma total
     function updateCart() {
         // Limpa os itens do carrinho e a soma total anteriores
         cartItems.innerHTML = '';
         cartTotal.textContent = 'R$ 0,00';
   
         // Verifica se há itens no carrinho
         if (cartItemsData.length === 0) {
             cartItems.innerHTML = '<p>Carrinho vazio</p>';
             return;
         }
   
         // Adiciona cada item do carrinho ao pop-up
         let total = 0;
         cartItemsData.forEach(item => {
             const itemElement = document.createElement('div');
             itemElement.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
             cartItems.appendChild(itemElement);
             total += item.price;
         });
   
         // Atualiza a soma total
         cartTotal.textContent = `R$ ${total.toFixed(2)}`;
     }
   
     // Exemplo de adição de itens ao carrinho (pode ser um evento de clique em botões "Adicionar ao Carrinho")
     const addToCartButton = cartPopup.querySelector('.add-to-cart');
     addToCartButton.addEventListener('click', function () {
         // Adiciona um item fictício ao carrinho
         cartItemsData.push({ name: 'Exemplo', price: 50 });
         // Atualiza o carrinho ao adicionar um item
         updateCart();
     });
   });
    
    $(".pop-up .close").click(function () {
     $(".pop-up").removeClass("visible");
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
   
   document.addEventListener('DOMContentLoaded', function () {
    const comprarButtons = document.querySelectorAll('.content-button');
    const popUps = document.querySelectorAll('.pop-up');

    comprarButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetPopupId = this.getAttribute('id').replace('comprar-', 'pop-up-');
            const targetPopup = document.getElementById(targetPopupId);

            if (targetPopup) {
                targetPopup.classList.add('visible');
            }
        });
    });

    popUps.forEach(popup => {
        const closeButton = popup.querySelector('.close');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                popup.classList.remove('visible');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const comprarButtons = document.querySelectorAll('.comprar-button');
    const popUps = document.querySelectorAll('.pop-up');

    comprarButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = button.dataset.target;
            const targetPopup = document.getElementById(targetId);

            if (targetPopup) {
                targetPopup.classList.add('visible');
            }
        });
    });

    popUps.forEach(popup => {
        const closeButton = popup.querySelector('.close-popup');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                popup.classList.remove('visible');
            });
        }
    });
});



   $(document).ready(function() {
    // Evento de clique para o botão de calçados
    $("#comprar-calcados").click(function() {
        // Abre o pop-up de calçados
        $("#pop-up-calcados").addClass("visible");
    });

    // Evento de clique para o botão de luvas
    $("#comprar-luvas").click(function() {
        // Abre o pop-up de luvas
        $("#pop-up-luvas").addClass("visible");
    });

    // Outros eventos de clique para diferentes tipos de produtos
});

   const toggleButton = document.querySelector('.dark-light');
   
   toggleButton.addEventListener('click', () => {
     document.body.classList.toggle('light-mode');
   });