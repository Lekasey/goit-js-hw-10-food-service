import styles from './styles.css'
import menuTemplate from './templates/template-menu.hbs';
import menu from './menu.json'

// разметка 
const menuListRef = document.querySelector('.js-menu')
const markup = menuTemplate(menu);
menuListRef.insertAdjacentHTML('beforeend', markup)

// 