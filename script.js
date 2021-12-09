var main = function() {
    $('.more-btn').on('click',() => {
      $(event.currentTarget).siblings('.more-menu').toggle();
    });
  
    $('.share').on('click', () => {
      $('.share-menu').addClass('active').toggle();
    });
  };
  
  $(document).ready(main);