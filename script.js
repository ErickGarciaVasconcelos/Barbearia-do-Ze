// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', () => {

  // --- Lógica para navegação suave (scroll) ---
  // Seleciona todos os links de navegação que apontam para uma seção da página (começam com '#')
  const navLinks = document.querySelectorAll('a[href^="#"]');

  // Adiciona um "listener" de clique para cada um desses links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Impede o comportamento padrão do link (salto instantâneo)

      const targetId = this.getAttribute('href').substring(1); // Pega o ID da seção (ex: 'inicio')
      const targetElement = document.getElementById(targetId); // Encontra o elemento com o ID correspondente

      if (targetElement) {
        // Rola a página suavemente até o elemento
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Lógica para o botão de agendamento via WhatsApp ---
  // A função é reutilizável para múltiplos botões de agendamento
  const setupWhatsappButton = (buttonSelector) => {
    const button = document.querySelector(buttonSelector);
    if (button) {
      button.addEventListener('click', () => {
        // Define o número de telefone da barbearia (com o código do país + DDD)
        const phoneNumber = '5511999999999'; 

        // Define a mensagem inicial que o cliente vai enviar
        const message = 'Olá, gostaria de agendar um horário!';

        // Cria a URL do WhatsApp para abrir a conversa
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Abre uma nova janela/aba com a URL do WhatsApp
        window.open(whatsappUrl, '_blank');
      });
    }
  };

  // Chama a função para configurar o botão da seção de preços
  setupWhatsappButton('.btn-agendar');

  // Chama a função para configurar o botão da chamada final
  setupWhatsappButton('.btn-final');


  // --- Lógica para o menu Hamburger (para telas menores) ---
  const hamburgerButton = document.querySelector('.hamburger');
  const menuList = document.querySelector('.menu');

  if (hamburgerButton && menuList) {
    hamburgerButton.addEventListener('click', () => {
      const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true' || false;
      hamburgerButton.setAttribute('aria-expanded', !isExpanded);
      menuList.classList.toggle('is-open');
    });

    // Fecha o menu se um link for clicado (para mobile)
    menuList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerButton.setAttribute('aria-expanded', 'false');
        menuList.classList.remove('is-open');
      });
    });
  }

});
