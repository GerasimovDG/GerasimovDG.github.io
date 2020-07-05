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



//слайдер фото
let images = document.querySelectorAll('.photo-block__img');
let current = 0;
console.dir(images);

function slider() {
	for (let image of images) {
		console.dir(image);
		image.classList.add('opacity0');
	}
	images[current].classList.remove('opacity0');
}

document.querySelector('.btn-slider_right').onclick = function() {
	current = (++current) % images.length;
	slider();
}
document.querySelector('.btn-slider_left').onclick = function() {
	current = (--current) % images.length;
	console.log(current);
	current = current === -1 ? images.length-1 : current;
	slider();
}