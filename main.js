const nicknamE = document.getElementById('nickname');
var nickname;
window.onload = () => {
    var r = new XMLHttpRequest();
    r.open('GET', 'https://discard.ralsin.ml/704037343878971424.json');
    r.onload = () => {
        var res = JSON.parse(r.response)
        document.getElementById('dpfp').setAttribute('src', 'https://cdn.discordapp.com/avatars/' + res.id + '/' + res.avatar + '?size=1024&quality=lossless');
        document.getElementById('dpfp').removeAttribute('style');
        nickname = res.username + '#' + res.discriminator;
        nicknamE.innerText = nickname;
    }
    r.send();
}
function href(name) {
    location.href = name
}
function copy() {
    setTimeout(() => nicknamE.innerText = nickname, 2e3)
    navigator.clipboard.writeText(nickname)
    nicknamE.innerText = 'Copyed :D'
}