// Collapsible section functionality
document.addEventListener('DOMContentLoaded', function () {
    const collapsible = document.querySelector('.collapsible');
    const content = document.querySelector('.content');

    collapsible.addEventListener('click', function () {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
