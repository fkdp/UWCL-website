const uwcl = (function() {
  const HIDDEN_CLASS_NAME = 'hidden';
  const MOBILE_MENU_ID = 'mobile-menu';
  const HEADER_ID = 'header';
  const START_TRANSITION_CLASS = 'start';
  
  let sections;
  let sectionsToshow;

  document.addEventListener("DOMContentLoaded", init);
  
  function init() {
    sections = document.getElementsByTagName('section');
    sectionsToshow = sections.length;

    setTimeout(() => {  
      checkSectionPositions();
    }, 0);

    window.addEventListener('scroll', checkSectionPositions);
  }
  

  function checkSectionPositions() {
    console.log('check');
    const innerHeight = (window.innerHeight || document.documentElement.clientHeight) * 0.8;

    Array.prototype.forEach.call(sections, section => {
      if (
        isElementInViewport(section, innerHeight) &&
        !section.classList.contains(START_TRANSITION_CLASS)
      ) {
        section.classList.add(START_TRANSITION_CLASS);
        sectionsToshow--;
      }
    });

    if (!sectionsToshow) {
      window.removeEventListener('scroll', checkSectionPositions);
    }
  }

  function isElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();

    return rect.top <= viewportHeight;
  }

  function changeElementVisibility(element, visibility) {
    if (element) {
      if (visibility) {
        element.classList.remove(HIDDEN_CLASS_NAME);
      } else {
        element.classList.add(HIDDEN_CLASS_NAME);
      }
    }
  }

  function handleModalBackdropClick(e, modalId) {
    if (e.currentTarget === e.target) {
      closeModal(modalId);
    }
  }

  function handleMenuClick(elementId) {
    closeMobileMenu();
    scrollToElement(elementId);
  }

  function scrollToElement(elementId) {
    const yOffset = document.getElementById(HEADER_ID).getBoundingClientRect().height;
    const element = document.getElementById(elementId);
    
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }

  function openModal(modalId) {
    const element = document.getElementById(modalId);

    changeElementVisibility(element, true);
    setTimeout(function() {
      element.classList.add(START_TRANSITION_CLASS);
    }, 0);
  }

  function closeModal(modalId) {
    const element = document.getElementById(modalId);

    changeElementVisibility(element, false);
    element.classList.remove(START_TRANSITION_CLASS);
  }

  function openMobileMenu() {
    const element = document.getElementById(MOBILE_MENU_ID);

    changeElementVisibility(element, true);
    setTimeout(function() {
      element.classList.add(START_TRANSITION_CLASS);
    }, 0);
  }

  function closeMobileMenu() {
    const element = document.getElementById(MOBILE_MENU_ID);

    changeElementVisibility(element, false);
    element.classList.remove(START_TRANSITION_CLASS);
  }

  return {
    handleMenuClick: handleMenuClick,
    handleModalBackdropClick: handleModalBackdropClick,
    openModal: openModal,
    closeModal: closeModal,
    openMobileMenu: openMobileMenu,
    closeMobileMenu: closeMobileMenu,
    init: init,
  };
})();
