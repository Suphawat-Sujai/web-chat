document.getElementById('chat').style.display = 'none';

document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener('click', () => {
        const { target } = el.dataset;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});


window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('emoji-button');
  const picker = new EmojiButton({ theme: 'dark', autoHide: false, position: 'auto-start' });
  picker.on('emoji', (emoji) => {
    document.getElementById('message-input').value += emoji;
  });

  button.addEventListener('click', () => {
    picker.togglePicker(button);
  });
});


document.querySelector('#theme-button').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});