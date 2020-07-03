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