import hub from '../utils/eventHub';
let instance:hub;
export function useEventHub(){
	if (!instance){
		instance = new hub();
	}
	return instance;
}