
const clicking = document.querySelectorAll('h4');

clicking.forEach(function(click) {
    click.addEventListener('click', function() {
        const img = click.querySelector('img');
        const p = click.nextElementSibling;

        if (p.style.display === 'none' || p.style.display === '') {
            p.style.display = 'block';
            img.src = './assets/images/icon-minus.svg'; // Change to minus icon
        } else {
            p.style.display = 'none';
            img.src = './assets/images/icon-plus.svg'; // Change back to plus icon
        }
    });
});


/*
const clicking = document.querySelectorAll('h4');


clicking.forEach(function(click) {
    click.addEventListener('click', function() {
        if (click.nextElementSibling.style.display === 'none' || click.nextElementSibling.style.display === '') {
            click.nextElementSibling.style.display = 'block';
        } else {
            click.nextElementSibling.style.display = 'none';
        }
        console.log('p clicked');
    });
}); */