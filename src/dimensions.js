export const outerWidth = (el) => {
	console.log('outerWidth')
	let width = el.offsetWidth;
	console.log('el.offsetWidth:', el.offsetWidth)
	const style = getComputedStyle(el);

	width += parseInt(style.marginLeft) + parseInt(style.marginRight);
	return width;
};
