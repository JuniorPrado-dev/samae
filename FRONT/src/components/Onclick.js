export function Onclick () {
    const nav = document.querySelector('#nav');

    if (nav.style.display === 'block') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'block'
    }

}