const star=function(c,st){
	if(st===0){

		return"";
	}
	return c+star(c,st-1)
};

const connect=function(ch, spaceC,stringC,n){
if(n===0){
	return "";
}
console.log(star(' ',spaceC)+star(ch,stringC));
connect(ch,spaceC-1, stringC+2, n-1);
};
const triangle=function(ch, n){
	connect(ch, n-1,1,n);
}


const reverse=function(ch,c){
	const looper = function(n){
		if (n===0)
			return;
		console.log(star(' ', c-n+1)+star(ch, 2*n-1));
		looper(n-1);
	}
	return looper(c);
};
const printDiamond=function(ch,height){
	triangle(ch, Math.round(height/2));
	reverse(ch, Math.round(height/2)-1);
}

printDiamond('$', 12);



//with loop

const Diamondloop = function(x, string) {
	if(x % 2 === 0) {
		x = x - 1;
	}
	const character = function(n, char) {
		let a = '';
		for(let i = 0; i < n; i++) {
			a = a + char;
		}
		return a;
	};
	let spaceNum = (x-1)/2;
	let stringNum = 1;
	for(let i = 1; i <= x; i++){
		console.log(character(spaceNum, ' ') + character(stringNum, string));
		if(i <= x/2) {
			spaceNum = spaceNum -1;
			stringNum = stringNum + 2;
		} else {
			spaceNum = spaceNum + 1;
			stringNum = stringNum - 2;
		}
	}
};