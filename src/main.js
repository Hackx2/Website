const nicknamE = document.getElementById('nickname');
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

var nickname;

window.onload = () => {
    var r = new XMLHttpRequest();
    r.open('GET', 'https://raw.githubusercontent.com/Hackx2/Website/main/require/707228048864444477.json');
    r.onload = () => {
        var res = JSON.parse(r.response)
        nickname = res.username + '#' + res.discriminator;
        nicknamE.innerText = nickname;
    }
    r.send();
}
function meow() {
    setTimeout(() => nicknamE.innerText = nickname, 2e3)
    navigator.clipboard.writeText(nickname)
    nicknamE.innerText = 'Copyed :D'
}

function href(name) {
    location.href = name
}

menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
  });
  
  menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });






