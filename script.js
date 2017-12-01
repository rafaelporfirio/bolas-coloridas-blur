var tempo = [10, 15];
var tamanho = [10, 20, 30, 50];
var cores = ["#840c55", "#76074c", "#4d0a49", "#b91668", "#af1655", "#840a40", "#a4125c", "#b2142c", "#760a2e", "#c81c48", "#ae1539", "#7d0849", "#F9D423", "#EDE574", "#FC913A" ];
var quantidade = 100;
var opacidade = [0.25, 0.50, 1];

function criarBolas(){

	var container = document.getElementById("container");
	var bola = document.createElement("bola");
		container.appendChild(bola);
		bola.className = "bola";
	var randomTempo = tempo[Math.floor(Math.random() * tempo.length)];
	var randomTamanho = tamanho[Math.floor(Math.random() * tamanho.length)];
	bola.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
	bola.style.left = Math.random() * quantidade + "%";
	bola.style.top = Math.random() * quantidade + "%";
	bola.style.opacity = opacidade[Math.floor(Math.random() * opacidade.length)];
	bola.style.animation = "bola " + randomTempo + "s ease-out";
	bola.style.width = bola.style.height = randomTamanho + "px";
	bola.addEventListener("animationend", remover);
}

function remover(e){
	container.removeChild(e.target);
}

window.setInterval(criarBolas, 1000 / 5);