const $emojis = document.getElementById('emojis')
const emojis = []


for (let i = 127750; i < 127800; i++) {
  emojis.push(`<p style="text-align: center;">
  <span style="font-size: 5rem;">&#${i};</span><br>
  <code>${i}</code>
</p>`);
}


$emojis.innerHTML += emojis.join('')