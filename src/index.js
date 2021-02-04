import styles from './styles.css'
import menuTemplate from './templates/template-menu.hbs';
import menu from './menu.json'


const menuListRef = document.querySelector('.js-menu')
const markup = menuTemplate(menu);
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const bodyRef = document.querySelector('body')
const themeBtnRef = document.querySelector('#theme-switch-toggle')

menuListRef.insertAdjacentHTML('beforeend', markup)
prevVisitCheck()

themeBtnRef.addEventListener('change', (e) => {
    if (themeBtnRef.checked) {
        
        bodyRef.classList.add(Theme.DARK)
        bodyRef.classList.remove(Theme.LIGHT)
        localStorage.setItem('checkbox-position', JSON.stringify(themeBtnRef.checked))
        localStorage.setItem('saved-theme', Theme.DARK)
    }
    else {
        bodyRef.classList.add(Theme.LIGHT)
        bodyRef.classList.remove(Theme.DARK)
        localStorage.setItem('checkbox-position', JSON.stringify(themeBtnRef.checked))
        localStorage.setItem('saved-theme', Theme.LIGHT)
    }
})

function prevVisitCheck() {
    const savedCheckboxPos = localStorage.getItem('checkbox-position');
    const parsedCheckboxPos = JSON.parse(savedCheckboxPos)
    if (savedCheckboxPos) {
        themeBtnRef.checked = parsedCheckboxPos        
    }

    const savedTheme = localStorage.getItem('saved-theme')
    if (savedTheme) {
        bodyRef.classList.add(savedTheme)
    }
}
