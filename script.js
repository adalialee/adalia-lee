<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Get all links with the class 'scroll-link'
    const links = document.querySelectorAll('.navBar a');

    // Add a click event listener to each link
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Get the target section's id from the link's href
        const targetId = this.getAttribute('href').substring(1);

        // Find the target section by its id
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          // Calculate the offset from the top of the page to the target section
          const offsetTop = targetSection.getBoundingClientRect().top;

          // Scroll to the target section smoothly
          window.scrollTo({
            top: offsetTop + window.scrollY,
            behavior: 'smooth', // Use smooth scrolling
          });
        }
      });
    });
  });
</script>