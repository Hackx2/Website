const nicknamE = document.getElementById('nickname');
var nickname;
window.onload = () => {
    var r = new XMLHttpRequest();
    r.open('GET', 'https://raw.githubusercontent.com/Hackx2/Website/main/707228048864444477.json');
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






