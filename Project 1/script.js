
    const btn = document.getElementById('toggle');

    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });

    document.getElementById('github').onclick = () => {
      window.open('https://github.com/abdullahdalo-dev', '_blank');
    };
