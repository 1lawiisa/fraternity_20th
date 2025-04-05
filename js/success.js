document.addEventListener('DOMContentLoaded', function() {
    const h2 = document.querySelector('.write-main h2');
    if (h2) {
        h2.innerHTML = h2.innerHTML.replace(
            /(view page source|ctrl\+U)/gi,
            '<span>$1</span>'
        );
    }
});
