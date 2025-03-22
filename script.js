function redirectToInstagram() {
    window.location.href = 'https://www.instagram.com/lyrical.love_/';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
      'Love is timeless.',
      'Words heal, hearts feel.',
      'Music is love in sound.',
      'Your heart knows the way, follow it.',
      'Where words fail, love speaks.'
    ];
  
    const container = document.getElementById('quotesContainer');
    quotes.forEach(quote => {
      const card = document.createElement('div');
      card.className = 'quote-card';
      card.textContent = quote;
      container.appendChild(card);
    });
  });
  
