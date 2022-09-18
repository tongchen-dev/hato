import { ApiBase } from '@/api';
import { contributionEventLineRequestBody, contributionGetRequestParam } from '@/api/types/contirbution';

export class Contribution extends ApiBase{
	private prefix = '/contribution';
	constructor(){
		super();
	}
	async event_line(body: contributionEventLineRequestBody){
		return await this.instance.post(`${this.prefix}/event-line`, body);
	}
	async getContribution(
		param: contributionGetRequestParam
	){
		return await this.instance.get(`${this.prefix}/`, {
			params: param
		});
	}

}