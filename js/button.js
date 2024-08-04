document.addEventListener('DOMContentLoaded', function () {
    const chaseButton = document.getElementById('choicebtn2');
    
    // Function to move the button to a random position
    function moveButton() {
        const maxWidth = window.innerWidth - chaseButton.offsetWidth;
        const maxHeight = window.innerHeight - chaseButton.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);
        
        chaseButton.style.left = `${randomX}px`;
        chaseButton.style.top = `${randomY}px`;
    }

    // Move button initially to a random position
    moveButton();

    // Function to move the button away from the cursor
    function moveAwayFromCursor(event) {
        const maxWidth = window.innerWidth - chaseButton.offsetWidth;
        const maxHeight = window.innerHeight - chaseButton.offsetHeight;
        
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        let newX = mouseX + (Math.random() > 0.5 ? 100 : -100);
        let newY = mouseY + (Math.random() > 0.5 ? 100 : -100);
        
        if (newX < 0) newX = 0;
        if (newX > maxWidth) newX = maxWidth;
        if (newY < 0) newY = 0;
        if (newY > maxHeight) newY = maxHeight;
        
        chaseButton.style.left = `${newX}px`;
        chaseButton.style.top = `${newY}px`;
    }

    // Add mouseover event to move the button away from the cursor
    chaseButton.addEventListener('mouseover', moveAwayFromCursor);

    // Set timeout to hide the button after 1 minute
    setTimeout(() => {
        chaseButton.style.display = 'none';
    }, 60000); // 60000 milliseconds = 1 minute6
});
