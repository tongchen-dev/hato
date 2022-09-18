import { ApiBase } from '@/api';
import { getAllEventLine } from '@/api/types/event-line';

export class EventLine extends ApiBase{
	private prefix = '/event-line';
	constructor(){
		super();
	}
	async getAll(): Promise<getAllEventLine> {
		return this.instance.get(this.prefix);
	}
}