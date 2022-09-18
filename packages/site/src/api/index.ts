import axios from 'axios';
import type {AxiosInstance} from 'axios';
import { scope } from './types/api';

const record:Record<scope, unknown> = {
	'EventLine': undefined,
	'Contribution': undefined
};
export class ApiBase {
	public instance: AxiosInstance;
	constructor(){
		// 
		this.instance = axios.create({
			baseURL: `${import.meta.env.VITE_API_SERVER}/${import.meta.env.VITE_API_VERSION}`
		});
		this.instance.interceptors.response.use((value)=>{
			return value.data;
		});
	}
}

export async function useApi<T>(scope: scope): Promise<T>{
	// 
	if (record[scope]){
		return record[scope] as T;
	}
	const modules = Object.values(import.meta.glob('./lib/**/*.ts'));
	for (const module of modules){
		const value = await module();
		const key = Object.keys(value)[0];
		record[key as scope] = new value[key];
	}
	return record[scope] as T;
}