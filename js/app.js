// Nedräknare
const parisDate = new Date('2025-11-08T00:00:00');
const timerElement = document.getElementById('timer');

function updateCountdown() {
  const now = new Date();
  const diff = parisDate - now;

  if(diff <= 0){
    timerElement.textContent = "I'm in Paris!";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerElement.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Lista över destinations
const destinations = ['London', 'Edinburgh', 'Amsterdam'];

document.getElementById('showDestinations').addEventListener('click', () => {
  const container = document.getElementById('destinationsList');
  // Rensa tidigare lista
  container.innerHTML = '';

  const list = document.createElement('ul');
  destinations.forEach(dest => {
    const li = document.createElement('li');
    li.textContent = dest;
    list.appendChild(li);
  });

  container.appendChild(list);
});
