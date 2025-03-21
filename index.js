
    const menuBtn = document.getElementById('menu');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    // Altera a categoria dos produtos
    document.addEventListener("DOMContentLoaded", () => {
        const tabs = document.querySelectorAll(".tab");
        const productSections = document.querySelectorAll(".products");

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
    
                const category = tab.dataset.category || "random";
            
                productSections.forEach(section => {
                    section.classList.remove("products-active");
                });
    
                const actual_container = document.querySelector(`.products.${category}`);
                if (actual_container) {
                    actual_container.classList.add("products-active");
                }
                if (category === "random") {
                    randomProducts(actual_container);
                } 
            });
        });
      //Embaralha os produtos
      const container = document.querySelector(".products.random");
      const viewMore = document.getElementById("view-more");
      let status = false; 
  
      function randomProducts(container) {
          const allProducts = Array.from(container.children);
          const shuffledProducts = [...allProducts];
  
          for (let i = shuffledProducts.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
          }
  
          container.innerHTML = "";
          shuffledProducts.forEach(product => container.appendChild(product));
  
      }
  
      function alterProductsQuantity() {
          const products = container.querySelectorAll(".product-image");
          products.forEach((product, index) => {
              if (status || index < 3) {
                  product.style.display = "block"; 
              } else {
                  product.style.display = "none";
              }
          });
  
          viewMore.textContent = status ? "View less >>>" : "View more >>>";
      }
  
      viewMore.addEventListener("click", () => {
          status = !status; 
          alterProductsQuantity();
      });
  
      randomProducts(container);
  });
    
    //Validacão do formulário
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        const messageElement = document.getElementById("message-contact");
        const messageCard = document.getElementById("card-contact");
    
        messageElement.textContent = "";
        messageElement.classList.remove("show", "error", "success");
        messageCard.style.display = "none";
    
        const firstname = document.getElementById("firstname");
        const lastname = document.getElementById("lastname");
        const email = document.getElementById("email");
        const messageField = document.getElementById("message");
        const termos = document.getElementById("termos");
    
        function message(message, isError = true) {
            messageElement.textContent = message;
            messageElement.classList.add("show");
    
            messageCard.style.display = "block";
            messageCard.classList.remove("error", "success");
            messageCard.classList.add(isError ? "error" : "success");
    
            event.preventDefault();
        }
    
        if (firstname.value.trim() === "") {
            message("Insira o seu primeiro nome");
            return;
        }
        if (lastname.value.trim() === "") {
            message("Insira o seu último nome");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            message("Por favor, insira um email válido");
            return;
        }
        if (messageField.value.trim() === "") {
            message("Por favor, insira uma mensagem");
            return;
        }
        if (!termos.checked) {
            message("Aceite nossa política de privacidade");
            return;
        }
    
        message("Mensagem enviada com sucesso!", false);
    });
    

    //   Validação do email newsletter 
    document.getElementById("newsletter-form").addEventListener("submit", function (event) {
        const messageCardNewsletter = document.getElementById("card-newsletter");
        const messageElementNewsletter = document.getElementById("message-newsletter");
    
        messageElementNewsletter.textContent = "";
        messageElementNewsletter.classList.remove("show", "error", "success");
        messageCardNewsletter.style.display = "none";
    
        const email = document.getElementById("email-newsletter");
    
        function messageNewsletter(text, isError = true) {
            messageElementNewsletter.textContent = text;
            messageElementNewsletter.classList.add("show");
    
            messageCardNewsletter.style.display = "block";
            messageCardNewsletter.classList.remove("error", "success");
            messageCardNewsletter.classList.add(isError ? "error" : "success");
    
                event.preventDefault();
    
        }
    
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            messageNewsletter("Por favor, insira um email válido");
            return;
        }
    
        messageNewsletter("E-mail registrado com sucesso!", false);
       
    });
    // dropdown do menu
  document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");
  });

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
      const button = dropdown.querySelector(".dropbtn");

      button.addEventListener("click", function (event) {
          event.preventDefault(); 

          dropdowns.forEach((item) => {
              if (item !== dropdown) {
                  item.classList.remove("open");
              }
          });

          dropdown.classList.toggle("open");
      });
  });

  document.addEventListener("click", function (event) {
      const isClickInsideMenu = menuButton.contains(event.target) || mobileMenu.contains(event.target);
      const isClickInsideDropdown = [...dropdowns].some(dropdown => dropdown.contains(event.target));

      if (!isClickInsideMenu) {
          mobileMenu.classList.remove("open");
      }

      if (!isClickInsideDropdown) {
          dropdowns.forEach((dropdown) => {
              dropdown.classList.remove("open");
          });
      }
  });
});
// Aumenta ou diminui a quantidade do produto
document.querySelectorAll(".product-text").forEach(product => {
    const quantity = product.querySelector(".quantity");
    const decrease = product.querySelector(".decrease");
    const increase = product.querySelector(".increase");

    decrease.addEventListener("click", () => {
        let quantity_item = parseInt(quantity.innerText);
        if (quantity_item > 1) {
            quantity.innerText = quantity_item - 1;
        }
    });

    increase.addEventListener("click", () => {
        let quantity_item = parseInt(quantity.innerText);
        quantity.innerText = quantity_item + 1;
    });
});
            
    