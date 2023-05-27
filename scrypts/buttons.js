// покупка
const buy_button = document.getElementById("buy_button");

buy_button.addEventListener("click", myFunction)

function myFunction() {
    alert("Вы сделали покупку!");
  }

// Смена темы
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const nav = document.querySelector(".navbar")
const footer = document.querySelector(".footer_categories_container")
const popup = document.querySelector(".popup")

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        nav.style.background = "#f5f5f5";
        footer.style.background = "#f5f5f5";
        popup.style.background = "white";
    }else{
        body.style.background = '#333333';
        body.style.color = 'white';
        body.style.transition = '2s';
        nav.style.background = "#171717";
        footer.style.background = "#171717";
        popup.style.background = "#171717";
    }
});

function TurnDark () {

}