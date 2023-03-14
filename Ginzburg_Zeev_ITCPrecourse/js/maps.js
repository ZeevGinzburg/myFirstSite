const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const citiesMaps = document.querySelectorAll(".citiesmps");
let currentselection = 0;


prevBtn.addEventListener('click', function(){
    citiesMaps[currentselection].classList.remove("active");
    currentselection--;
    citiesMaps[currentselection].classList.add("active");
    nextBtn.disabled = false;
    if (currentselection === 0) {
        prevBtn.disabled = true;
    }
}
);
nextBtn.addEventListener('click', function(){
    citiesMaps[currentselection].classList.remove("active");
    currentselection++; 
    citiesMaps[currentselection].classList.add('active');
    prevBtn.disabled = false;
    if (citiesMaps.length === currentselection + 1) {
        nextBtn.disabled = true;
    }
    console.log(citiesMaps);
    console.log(currentselection);

}
);