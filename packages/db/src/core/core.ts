import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

interface dbConfig {
	database: string;
}
export class db{
	private config?: dbConfig;
	private database: string;
	private dataPath: string;
	private databasePath: string;
	constructor(config?: dbConfig){
		this.config = config;
		this.database = config?.database || 'hato';
		this.dataPath = resolve(__dirname + '../../../data');
		this.databasePath = this.dataPath + '\\' + this.database;
		if (!existsSync(this.dataPath + '\\' + this.database)){
			mkdirSync(this.databasePath);
		}
	}
	public use(target: string, condition: string[]): void | any[]{

	}
}
new db();