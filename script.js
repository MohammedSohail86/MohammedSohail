document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded, then hide the loading screen
    setTimeout(function () {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 2000); // Adjust the duration as needed
});
