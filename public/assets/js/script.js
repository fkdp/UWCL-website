const uwcl = (function() {
  const HIDDEN_CLASS_NAME = 'hidden';

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

  function scrollToElement(elementId) {
    const yOffset = 150;  // header height - make dynamic to cover small screen sizes
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

  return {
    scrollToElement: scrollToElement,
    handleModalBackdropClick: handleModalBackdropClick,
    openModal: openModal,
    closeModal: closeModal,
  };
})();
