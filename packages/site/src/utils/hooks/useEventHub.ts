import hub from '../eventHub';
let instance:hub;
export function useEventHub(){
	if (!instance){
		instance = new hub();
	}
	return instance;
}