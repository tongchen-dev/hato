import { createInterface } from 'readline';
import processCli from './process';

const rl = createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line',(line)=>{
	if (line === 'exit;'){
		rl.close();
		console.log('bye~');
	} else {
		processCli(line);
	}
});
