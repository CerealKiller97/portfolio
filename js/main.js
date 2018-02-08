particlesJS.load('particles-js', 'assets/particlesjs-config.json')

const toggle = document.querySelector('#toggle')
const aside = document.querySelector('aside')


let showSidebar = () => {
  aside.classList.toggle('active')
}

toggle.addEventListener('click', showSidebar)