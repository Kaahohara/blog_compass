
    const menuBtn = document.getElementById('menu');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    const randomSection = document.querySelector(".random");
    //Validacão do formulário
    document.getElementById("contact-form").addEventListener("submit", function (event) {

      const errorElement = document.getElementById("error-message");
      errorElement.textContent = ""; 
      errorElement.style.display = "none"; 

      const firstname = document.getElementById("firstname");
      const lastname = document.getElementById("lastname");
      const email = document.getElementById("email");
      const messageField = document.getElementById("message");
      const termos = document.getElementById("termos");

      function error(message){
        errorElement.textContent=message;
        errorElement.style.display = "block";
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

    