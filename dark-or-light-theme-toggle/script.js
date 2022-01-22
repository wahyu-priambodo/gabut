const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const title = document.getElementById('title');
const container = document.querySelector('.container');
const box = document.querySelector('.box');

const changeTheme = () => {
    const sunDown = sun.classList.toggle('sunGoDown');
    moon.classList.toggle('moonGoDown');
    box.classList.toggle('removeBoxShadow');
    title.classList.toggle('titleAtDark');
    container.classList.toggle('darkBackground');
    if (sunDown) {
        title.textContent = 'Dark';
        sun.classList.remove('sunGoUp');
        moon.classList.remove('moonGoUp');
    } else {
        title.textContent = 'Light';
        sun.classList.add('sunGoUp');
        moon.classList.add('moonGoUp');
    }

};

sun.addEventListener('click', changeTheme);
moon.addEventListener('click', changeTheme);