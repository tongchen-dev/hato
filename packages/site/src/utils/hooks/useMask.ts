const maskElement = document.createElement('div');
maskElement.classList.add('mask');
interface maskEvent{
    click: (e:Event) => void;
}

function eventProcess(event: maskEvent){
	const keys = Object.keys(event);
	for (const k of keys) {
		maskElement.addEventListener(k, (e) => {
			(event as unknown as Record<string,(ev: Event)=>void>)[k](e);
		});
	}
}

export function useMask(insertTo: HTMLElement | null, event: maskEvent){
	if (insertTo === null){
		insertTo = document.body;
	}
	if (insertTo.contains(maskElement)){
		useDestoryMask();
	}
	if (insertTo.parentElement === document.body){
		insertTo.appendChild(maskElement);
	} else{
		document.insertBefore(insertTo, maskElement);
	}
	eventProcess(event);
}

export function useDestoryMask(){
	maskElement.remove();
}