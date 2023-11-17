const name = 'SBAI Abdessamad';

(async () => {
    const chalk = await import('chalk');
    console.log('Hello there, my name is '+chalk.default.blue(name)+' 😊, and this is my last projects:');
    console.log(chalk.default.green('=> Sushi Restaurant Landing Page: ') + 'https://github.com/Abdusbai/sushi-sbai.git');
    console.log(chalk.default.green('=> Book Reading Tracker Web App: ') + 'https://github.com/Abdusbai/read-logix.git');
    console.log(chalk.default.green('=> To Do List: ') + 'https://github.com/Abdusbai/todo-list.git');
    console.log(chalk.default.green('Contact me: ') + 'sbai.itsd@gmail.com');
  })();