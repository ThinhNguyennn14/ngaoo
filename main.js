   document.addEventListener("DOMContentLoaded", function() {
       const navLinks = document.querySelectorAll('.nav-menu a');
       const sections = document.querySelectorAll('section');

       navLinks.forEach(link => {
           link.addEventListener('click', function(event) {
               event.preventDefault(); 
               const targetId = this.getAttribute('data-target');

               sections.forEach(section => {
                   section.classList.add('hidden');
               });
               const targetSection = document.getElementById(targetId);
               if (targetSection) {
                   targetSection.classList.remove('hidden');
               }
           });
       });
   });
   