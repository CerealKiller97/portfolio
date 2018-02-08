particlesJS.load('particles-js', 'assets/particlesjs-config.json')

const toggle = document.querySelector('#toggle')
const aside = document.querySelector('aside')
const loader = document.querySelector('#loader')

let showSidebar = () => {
  aside.classList.toggle('active')
}

setTimeout(() => {
  loader.classList.add('opacity')
}, 3000)

setTimeout(() => {
  loader.classList.add('done')
}, 4000)

toggle.addEventListener('click', showSidebar)