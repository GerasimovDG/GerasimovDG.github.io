function copyText(event) {
	const tag = event.target;
	let range = document.createRange(),
	selection = window.getSelection();
    // Очищаем выделение от предыдущей информации
    selection.removeAllRanges();
    // Выделяем весь контент в параграфе contentHolder.
    range.selectNodeContents(tag);
    // Добавляем диапазон в выделение.
    selection.addRange(range);

    try {  
    	// Копируем выделенное в буфер обмена.
    	document.execCommand('copy');
    	// Можем очистить выделение.
    	selection.removeAllRanges();

    	tag.classList.add("successCopy");
    	setTimeout(() => {
    		tag.classList.remove("successCopy");
    	}, 1500);
	} catch(err) {  
		console.log('Oops, unable to copy');  
	}  
}


// слайдер фото
let current = 0;
function slider(images) {
	for (let image of images) {
		console.dir(image);
		image.classList.add('opacity0');
	}
	images[current].classList.remove('opacity0');
}

function sliderRight(images) {
	current = (++current) % images.length;
	slider(images);
}
function sliderLeft(images) {
	current = (--current) % images.length;
	current = current === -1 ? images.length-1 : current;
	slider(images);
}

document.querySelectorAll('.btn-slider').forEach( btn => {
	btn.onclick = function() {
		let images = [];


		let current = 0;
		btn.parentNode.childNodes.forEach( elem => {
			console.log(elem.localName)
			if (elem.localName === 'img') {
				images.push(elem);
			}
		});
		console.log(btn.parentNode.childNodes);
		console.log(images);

		if (btn.className.includes('btn-slider_right')) {
			sliderRight(images);
		} else if (btn.className.includes('btn-slider_left')) {
			sliderLeft(images);
		}
	}
});


