
// Change header after scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar')
    header.classList.toggle('sticky', window.scrollY > 20)
})


// Drop-down menu
let fixed = document.querySelector('body')
let menuBtn = document.querySelector('.menu-btn i')
let navbar = document.querySelector('.navbar .menu')
let navigationItems = document.querySelectorAll('.navbar .menu li a')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active'),
        navbar.classList.toggle('active')
    fixed.classList.toggle('active')
})

navigationItems.forEach(item => {
    item.addEventListener('click', () => {
        menuBtn.classList.remove('active'),
            navbar.classList.remove('active')
        fixed.classList.remove('active')
    }
    )
}
)

// Show scroll button
let scrollBtn = document.querySelector('.scroll-up-btn')
window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('show', window.scrollY > 500)
})

// Click on scroll button
scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

// Download CV btn
const url = 'https://docs.google.com/document/d/1z54lgR95rEVLlgcDuvSlyhGrPNMyMLHS/edit?usp=sharing&ouid=114395312632112414496&rtpof=true&sd=true'

if (document.querySelector('.download-btn')) {
    const downloadBtn = document.querySelector('.download-btn').addEventListener('click', () => {
        window.open(url, '_blank');

    })}

