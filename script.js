// Select all elements with the class 'case-study-card'
document.querySelectorAll('.case-study-card').forEach(link => {
    link.addEventListener('click', (event) => {
        // Get the href attribute from the clicked link
        const targetUrl = link.getAttribute('href');

        // Ensure href exists and is not empty
        if (targetUrl) {
            // Navigate to the URL
            window.location.href = targetUrl;
        } else {
            console.error('Link does not have a valid href attribute!');
        }
    });
});
