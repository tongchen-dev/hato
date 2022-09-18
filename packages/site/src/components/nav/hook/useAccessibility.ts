export function useAccessibility(): boolean{
	document.body.classList.add('accessibility');
	return true;
}

export function cancelAccessibility(): boolean{
	document.body.classList.remove('accessibility');
	return false;
}