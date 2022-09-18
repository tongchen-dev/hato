/* eslint-disable @typescript-eslint/no-explicit-any */
export default class hub {
	private eventTable: Record<string, ((...args: any[])=>void) | null> = {};
	public on(eventName: string, cb: (...arg: any[])=>void){
		this.eventTable[eventName] = cb;
	}
	public emit(eventName: string, ...args: any[]){
		if (this.eventTable[eventName]){
			this.eventTable[eventName]?.(...args);
		}
	}
	public off(eventName: string){
		if (this.eventTable[eventName]){
			this.eventTable[eventName] = null;
		}
	}
}