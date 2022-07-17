const meow = "HackTheAir#1098"
const id = nickname

var img = document.createElement("img");

function copy() {
    navigator.clipboard.writeText(meow)
    document.querySelector('#nickname').textContent = 'copied!!';
    src="icons/gamebanana.png"
    setTimeout(function(){
        document.querySelector('#nickname').textContent = 'Discord';
        src="icons/gamebanana.png"
        img.src="icons/discord.svg"
    }, 1000);
} // ngl this is kinda gay

function change() {
    src="icons/gamebanana.png"
    document.querySelector('#nickname').textContent = 'copied!!';
    
}

function href(name) {
    location.href = name
}

function shiz(){
    href="https://twitter.com/AnimatesHack"
}

