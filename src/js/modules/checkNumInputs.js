const checkNumInputs = (selector) => {
	const numInpits = document.querySelectorAll(selector);

	numInpits.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '');
		});
	});
};

export default checkNumInputs;