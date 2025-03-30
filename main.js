
document.addEventListener("DOMContentLoaded", function () {
    // адаптивне меню
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // поява фільтрів
    const filterBtn = document.querySelector(".filter-btn");
    const filterContainer = document.querySelector(".filter-container");

    filterBtn.addEventListener("click", function () {
        filterContainer.classList.toggle("show-filters");
    });

    // закриття фільтрів
    const cancelBtn = document.querySelector(".cancel-btn");
    cancelBtn.addEventListener("click", function () {
        filterContainer.classList.toggle("show-filters");
    })
});

// акордеон faq

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isActive = content.style.display === 'block';

        document.querySelectorAll('.accordion-content').forEach(item => {
            item.style.display = 'none';
        });

        content.style.display = isActive ? 'none' : 'block';
    });
});



