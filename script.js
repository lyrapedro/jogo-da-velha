var game = [[0,0,0],[0,0,0],[0,0,0]];
var turno = "x";

var div = document.getElementById("jogo");
div.addEventListener("click", listener)

function listener(event) {
	if(event.target.id[0]!='c'){return}
	var i1 = event.target.id[2];
	var i2 = event.target.id[4];
	if (game[i1][i2] == 0){
		game [i1][i2] = turno;
		var f = event.target;
		var s = "imgs/"+turno+".jpg";
		colocaImg(f, s, 200, 200);
		if(turno == 'x'){
			turno = 'o';
		}else{
			turno = 'x';
		}

		if(win()){
			alert("FIM DO JOGO");
		}
	}
}

function win() {
	var i, j;
	for(i=0; i<3; i++){
		for(j=0; j<3; j++){
			if(j==0){
				if(game[i][j] == game[i][j+1] && game[i][j] == game[i][j+2]){
					return game[i][j];
				}
			}if(j==1){
				if(game[i][j-1] == game[i][j] && game[i][j] == game[i][j+1]){
					return game[i][j];
				}
			}
		}
	}
}

function colocaImg(father,src,h,w){
	var oImg = document.createElement("img");
	oImg.setAttribute('src', src);
	oImg.setAttribute('alt', 'na');
	oImg.setAttribute('height', h);
	oImg.setAttribute('width', w);
	father.appendChild(oImg);
}