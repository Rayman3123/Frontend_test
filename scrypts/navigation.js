const goTopBtn = document.querySelector(".scroll_top");
const category_0 = document.getElementById("category_0");
const category_1 = document.getElementById("category_1");
const category_2 = document.getElementById("category_2");
const category_0_scroll = document.getElementById("category_0_scroll");
const category_1_scroll = document.getElementById("category_1_scroll");
const category_2_scroll = document.getElementById("category_2_scroll");
const footer_category_0 = document.getElementById("footer_category_0");
const footer_category_1 = document.getElementById("footer_category_1");
const footer_category_2 = document.getElementById("footer_category_2");


const product_date = document.querySelectorAll(".product_date")

// возврат в  начало страницы
window.addEventListener("scroll", checkHeight) 

function checkHeight() {
    if (window.scrollY > 300) {
        goTopBtn.style.display = "flex"
    } else {
        goTopBtn.style.display = "none"
    }
}

goTopBtn.addEventListener("click", goTop)

function goTop() {
    window.scrollTo({
        top:0, behavior: "smooth"
    })

} 

// Перемещение по категориям
category_0.addEventListener("click", function(){
    category_0_scroll.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
});

category_1.addEventListener("click", function(){
    category_1_scroll.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
});

category_2.addEventListener("click", function(){
    category_2_scroll.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
});



footer_category_0.addEventListener("click", function(){
    category_0_scroll.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
});

footer_category_1.addEventListener("click", function(){
    category_1_scroll.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
});

footer_category_2.addEventListener("click", function(){
    category_2_scroll.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
});