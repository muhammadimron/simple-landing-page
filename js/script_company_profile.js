// Sidenav Mobile Collapse

const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);


// Slider

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    duration: 600,
    interval: 3000
});


// Clients Parallax

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);


// Portofolio Gallery

const material_box = document.querySelectorAll('.materialboxed');
M.Materialbox.init(material_box);


// Smooth Scroll

const scroll_spy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll_spy, {
    scrollOffset: 50
});