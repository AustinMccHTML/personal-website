
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - header.offsetHeight,
                behavior: "smooth"
            });
        });
    });
});

// Image Hover
document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('hoverImage');
  
    image.addEventListener('mouseover', function() {
      addBorder(image);
    });
  
    image.addEventListener('mouseout', function() {
      removeBorder(image);
    });
  
    function addBorder(element) {
      element.classList.add('image-hover-border');
    }
  
    function removeBorder(element) {
      element.classList.remove('image-hover-border');
    }
  });
  