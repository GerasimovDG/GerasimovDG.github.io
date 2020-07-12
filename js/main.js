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


///////// Scroll to top /////////////
const offset= 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';


const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// updateDashoffset
const updateDashoffset = () => {
	const height = document.documentElement.scrollHeight - window.innerHeight;
	const dashoffset = pathLength -  (getTop() * pathLength / height);

	scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

//onScroll
window.addEventListener('scroll', () => {
	updateDashoffset();
	if (getTop() > offset) {
		scrollUp.classList.add('scroll-up_active');
	} else {
		scrollUp.classList.remove('scroll-up_active');
	}
});

//click
const smoothScroll = (h) => {
	let i = h || 0;
	if (i > 10) {
		setTimeout(() => {
			window.scrollTo(0, i);
			smoothScroll(i - 10);
		}, 1);
	};
};
scrollUp.addEventListener('click', () => {
	smoothScroll(getTop());
});