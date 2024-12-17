var slideIndex = 1;
var columnIndex = 1;

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
   
}



function showColumn(n) {
    var i;
    var column = document.getElementsByClassName("column");
    
    if (n > column.length - 4) {columnIndex = 1}
    if (n < 1) {columnIndex = column.length - 4}
    for (i = 0; i < column.length; i++) {
        column[i].style.display = "none";
    }
    column[columnIndex].style.display = "block";
    column[columnIndex].style.width = "";
    column[columnIndex].style.height = ""; // Reset height
    column[columnIndex].style.marginTop = ""; // Reset margin-top

    column[columnIndex+1].style.display = "block";
    column[columnIndex+1].style.width = "300px";
    column[columnIndex+1].style.height = "150px"; // Set height for the previous left corner slide
    column[columnIndex+1].style.marginTop = "70px"; // Set margin-top
    if (columnIndex + 1 < column.length) {
        document.getElementById('name').innerText = column[columnIndex + 1].children[0].alt;
    } else {
        document.getElementById('name').innerText = "";
    }


    column[columnIndex - 1].style.display = "block";
    column[columnIndex - 1].style.width = "";
    column[columnIndex - 1].style.height = ""; // Reset height
    column[columnIndex - 1].style.marginTop = ""; // Reset margin-top

    column[columnIndex + 2].style.display = "block";
    column[columnIndex + 2].style.width = "";
    column[columnIndex + 2].style.height = ""; // Reset height
    column[columnIndex + 2].style.marginTop = ""; // Reset margin-top

    column[columnIndex + 3].style.display = "block";
    column[columnIndex + 3].style.width = "";
    column[columnIndex + 3].style.height = ""; // Reset height
    column[columnIndex + 3].style.marginTop = ""; // Reset margin-top
}

// Show the first 5 columns on page load
document.addEventListener("DOMContentLoaded", function() {
    showColumn(columnIndex);
    showSlides(slideIndex); // Ensure the caption is set on page load
});

function currentSlide(n) {
    showSlides(slideIndex = n);
    showColumn(columnIndex = n);
    
}

function plusSlides(n) {
    if (slideIndex + n < 1 || slideIndex + n > 20) {
        return;
    }
    showSlides(slideIndex += n);
    showColumn(columnIndex += n);
    
}

    document.addEventListener("DOMContentLoaded", function() {
        const columns = document.querySelectorAll('.column img');
        columns.forEach(column => {
            column.addEventListener('click', function() {
                document.getElementById('name').innerText = this.alt;
            });
        });
    });



function display() {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = "1";
    }
}

function hide() {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = "0";
    }
}
document.addEventListener('mousemove', function(e) {
    var cursor = document.getElementById('circleCursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.style.right = e.pageX + 'px';
    cursor.style.bottom = e.pageY + 'px';
    
});

