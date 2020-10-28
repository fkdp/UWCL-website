const uwcl = (function() {
  const HIDDEN_CLASS_NAME = 'hidden';
  const MOBILE_MENU_ID = 'mobile-menu';
  const HEADER_ID = 'header';

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
    changeElementVisibility(document.getElementById(modalId), true);
  }

  function closeModal(modalId) {
    changeElementVisibility(document.getElementById(modalId), false);
  }

  function openMobileMenu() {
    changeElementVisibility(document.getElementById(MOBILE_MENU_ID), true);
  }

  function closeMobileMenu() {
    changeElementVisibility(document.getElementById(MOBILE_MENU_ID), false);
  }

  return {
    handleMenuClick: handleMenuClick,
    handleModalBackdropClick: handleModalBackdropClick,
    openModal: openModal,
    closeModal: closeModal,
    openMobileMenu: openMobileMenu,
    closeMobileMenu: closeMobileMenu,
  };
})();
