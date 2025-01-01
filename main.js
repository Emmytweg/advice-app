function setBackgroundAndGreeting() {
    const hour = new Date().getHours();
    const body = document.body;
    const greeting = document.getElementById('greeting');

    if (hour >= 6 && hour < 12) {
        body.add.className = 'morning';
        greeting.textContent = 'Good Morning!';
    } else if (hour >= 12 && hour < 18) {
        body.className = 'afternoon';
        greeting.textContent = 'Good Afternoon!';
    } else if (hour >= 18 && hour < 21) {
        body.className = 'evening';
        greeting.textContent = 'Good Evening!';
    } else {
        body.className = 'night';
        greeting.textContent = 'Good Night!';
    }
}

document.addEventListener('DOMContentLoaded', setBackgroundAndGreeting);

async function getAdvice() {
    const adviceBox = document.getElementById('advice-box');
    adviceBox.textContent = 'Loading...';
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        adviceBox.textContent = data.slip.advice;
    } catch (error) {
        adviceBox.textContent = 'Sorry, something went wrong. Please try again later.';
        console.error('Fetch error:', error);
    }
}