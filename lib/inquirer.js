const inquirer   = require('inquirer');
const files      = require('./files');

module.exports = {
	
	askGithubCredentials: () => {
		const questions = [
			{
				name: 'name',
				type: 'input',
				message: '输入您的项目名:',
				validate: function( value ) {
					if (value.length) {
						return true;
					} else {
						return '请输入您的项目名!';
					}
				}
			},
			{
				name: 'type',
				type: 'list',
				message: '请选择项目类型:',
				choices: [
					"pc react+typescript+mobx+less",
					"mobile react+typescript+mobx+less",
					"pc vue+typescript+mobx+less",
					'mobile vue+typescript+mobx+less'
				]
			}
		];
		return inquirer.prompt(questions);
	},
}