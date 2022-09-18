import { getAllEventLine } from './event-line';

export interface contributionEventLineResponse{
    code: 400 | 200;
    message: string;
    data: getAllEventLine['data'][];
}
export interface contributionEventLineRequestBody{
    title: string,
	type: string,
	publish_datetime: string,
	payload: {
		author: {
			name: string,
			email: string,
		},
		data: {
			eventLine: {
				date: string,
				eventName: string
			}[],
			file: never[],
		}
	}
}

export interface contributionGetRequestParam{
    contributors: string;
    filter: 'not-pass' | 'is-pass' | 'all'
}