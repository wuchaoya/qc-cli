const exec = require('child_process').exec
const chalk = require('chalk')
const Spinner = require('cli-spinner').Spinner;

const gitUrl = 'https://github.com/wuchaoya/react-typescript-mobx';

const branch = 'dev';

function download (projectName) {
	let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch}`;
	const status = new Spinner('正在创建，请稍等...');
	status.start();
	exec(cmdStr, (error, stdout, stderr) => {
		if (error) {
			console.log(error)
			process.exit()
		}
		status.stop();
		console.log(chalk.green('\n √ 创建完成!'))
		console.log(`\n cd ${projectName} && npm install \n`)
		process.exit()
	})

	
}

module.exports = download