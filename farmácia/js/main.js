var x = document.getElementById('nav');
x.style.display = 'none'

function myFunction() {
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else if( x.style.display === 'none') {
        x.style.display = 'block';
    }
}



