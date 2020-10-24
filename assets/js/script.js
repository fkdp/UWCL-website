const uwcl = (function() {
  function scrollToElement(elementId) {
    const yOffset = 150;  // header height - make dynamic to cover small screen sizes
    const element = document.getElementById(elementId);
    
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }

  return {
    scrollToElement: scrollToElement
  };
})();
