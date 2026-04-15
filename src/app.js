import "bootstrap";
import "./style.css";

  function generarCarta() {
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits = [
      { symbol: '♥', color: '#c0392b' },
      { symbol: '♦', color: '#c0392b' },
      { symbol: '♠', color: '#1a1a1a' },
      { symbol: '♣', color: '#1a1a1a' }
    ];
 
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const label = rank + suit.symbol;
 
    document.querySelector('.card').style.color = suit.color;
    document.getElementById('tl').textContent = label;
    document.getElementById('center').textContent = suit.symbol;
    document.getElementById('br').textContent = label;
  }
 document.getElementById('btn').addEventListener('click', generarCarta);
  window.onload = generarCarta;