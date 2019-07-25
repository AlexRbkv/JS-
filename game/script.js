function createField() {

	let field = document.createElement('div');
	document.body.appendChild(field);
	field.classList.add('field');
	for (let i = 0; i < 15; i++) {
		let excel = document.createElement('div');
		field.appendChild(excel);
		excel.classList.add('excel');
	}
	let excel = document.getElementsByClassName('excel');
	let x = 1,
		y = 15;
	for (let i = 0; i < excel.length; i++) {
		if (x>4) {
			x=1;
			y--;
		}
		excel[i].setAttribute('posX', x);
		excel[i].setAttribute('posY', y);
		excel[i].classList.add(i);
		excel[i].innerHTML = i+1;
		x++;
	}
}

createField();