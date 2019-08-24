#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('../lib/files');
const inquirer  = require('../lib/inquirer');
const download = require('../lib/github');

clear();
console.log(
	chalk.yellow(
		figlet.textSync('QC-CLI', { horizontalLayout: 'full' })
	)
);

if (files.directoryExists('.git')) {
	console.log(chalk.red('Already a git repository!'));
	process.exit();
}


const run = async () => {
	const credentials = await inquirer.askGithubCredentials();
	if (credentials.type === 'pc react+typescript+mobx+less') {
		download(credentials.name)
		return false
	}
	console.log(chalk.yellow(	'敬请期待！'));
}

run();