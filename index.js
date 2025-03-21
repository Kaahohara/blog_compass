
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
        const errorElement = document.getElementById("error-message-contact");
        const errorCard = document.getElementById("error-card-contact");
        errorElement.textContent = "";    
        errorElement.classList.remove("show");
        
        errorCard.style.display="none";

        const firstname = document.getElementById("firstname");
        const lastname = document.getElementById("lastname");
        const email = document.getElementById("email");
        const messageField = document.getElementById("message");
        const termos = document.getElementById("termos");
  
        function error(message){
          errorElement.textContent=message;   
          errorElement.classList.add("show");
        
          errorCard.style.display = "block";
          event.preventDefault();
          return;
        }
        if (firstname.value.trim() === ""){
          error("Insira o seu primeiro nome");
        }
        if (lastname.value.trim() === ""){
          error("Insira o seu último nome");
  
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ 
          error("Por favor, insira um email válido");
        }
        if (messageField.value.trim() === ""){ 
          error("Por favor, insira uma mensagem");
        }
        if (!termos.checked){ 
          error("Aceite nossa politica de privacidade");
        }
  
      });

    //   Validação do email newsletter 
    document.getElementById("newsletter-form").addEventListener("submit", function (event) {
        const errorCard = document.getElementById("error-card-newsletter");
        const errorElement = document.getElementById("error-message-newsletter");
        errorCard.style.display="none";
        errorElement.textContent = ""; 
        errorElement.classList.remove("show");
        
        const email = document.getElementById("email-newsletter");
  
        function error(message){
          errorElement.textContent=message;
          errorElement.classList.add("show");
          errorCard.style.display = "block";
          event.preventDefault();
          return;
        }
   
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ 
          error("Por favor, insira um email válido");
        }
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
            
    