import { exit } from 'process';

/**
 * example.
 * 
 * USE DATABASE;
 * CREATE staff FIELD id:inc,name:string,age:number;
 * INSERT name,age value 'GaoNeng',18;
 * SELECT * from staff;
 * SELECT name,age from staff;
 * DROP staff;
 * DROP DATABASE;
 * PRIMARY DATABASE.staff field
 */
const KEYWORD:Record<string, number> = {
	'FIELD': 1,
	'INC': 1,
	'TABLE': 1,
	'USE': 1,
	'INSERT': 1,
	'QUERY': 1,
	'DROP': 1,
	'STRING': 1,
	'NUMBER': 1,
	'BOOLEAN': 1,
	'OBJECT': 1,
	'PRIMARY': 1,
};
const action:Record<string, any> = {
	'USE': useTree,
	'CREATE': tableTree,
	'INSERT': insertTree
};
function getCommand(line:string): [string,number]{
	return [line.slice(0,line.indexOf(' ')), Number(line.indexOf(' '))];
}
function useTree(line: string){
	return {
		command: 'USE',
		database: line.replace(';','')
	};
}
function tableTree(args: string): Record<string, Record<string, never> | string>{
	const arg = args.split(' ');
	let keyword = '';
	const tree:Record<string, Record<string, never> | string> = {command: 'TABLE'};
	for (const key in arg) {
		if (KEYWORD[arg[key]] && Number(key) === 0){
			console.error(`Has error near by ${args}`);
			exit(1);
		} else {
			if (KEYWORD[arg[key]]){
				keyword = arg[key];
				tree[keyword] = {};
			} else {
				if (keyword){
					const fieldArray = arg[key].split(',');
					const data = fieldArray;
					data.forEach((v,i:number)=>{
						const arr = v.split(':');
						const [name,type] = [arr[0],arr[1]];
						(tree[keyword as string] as Record<string,string>)[name] = type;
						if (i === 1){
							tree['PRIMARY'] = arr[0];
						}
					});
				}
			}
		}
	}
	return tree;
}
function insertTree(args: string): Record<string, Record<string, never> | string>{
	//
	const getField = (s: string) => {
		return /(.*\w,\w*)/gim.exec(s)?.[0];
	};
	const getData = (s: string) => {
		return /value (.*)/gim.exec(s)?.[1];
	};
	const field = getField(args)?.split(',');
	const data = getData(args)?.split(',');
	const tree: Record<string, Record<string, never> | string> = {command: 'INSERT', data:{}};
	if (field && data){
		field.forEach((v,i)=>{
			(tree as Record<string,Record<string,string>>)['data'][v] = data[i];
		});
	}
	return tree;
}
function selectTree(args: string){
	//
	const getField = (s: string) => {
		return / (.*,.*) from/gim.exec(s)?.[1];
	};
	const getTable = (s: string) => {
		return /from (\w*)/gim.exec(s)?.[1];
	}
	const [field,table] = [getField(args)?.split(','), getTable(args)];
	if (field){
		// 
	}
}
export default function abstractTree(line:string){
	const [command,idx] = getCommand(line);
	line = line.slice(idx+1).replace(';', '');
	console.log(action?.[command]?.(line));
}