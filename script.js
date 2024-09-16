
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); 

      links.forEach(link => link.classList.remove('active'));
      link.classList.add('active');

      const targetId = link.getAttribute('href').substring(1); 
      scrollToSection(targetId);
    });
  });
});

function scrollToSection(ContactMe) {
  const element = document.getElementById(ContactMe);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}