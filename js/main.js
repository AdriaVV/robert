const grid = new Muuri('.grid', {
    layout: {
        rounding: false,
    },
});


window.addEventListener('load', () => {
    grid.refreshItems().layout;
    document.getElementById('grid').classList.add('loaded-imgs');   
});

const btnScrollTop = document.querySelector('.up');

btnScrollTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});










