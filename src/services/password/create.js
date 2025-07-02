import chalk from 'chalk';
import handle from './handle.js';

async function createPassword(){
    console.log(chalk.green("password"))
    const password = await handle();
    console.log(chalk.green("Senha gerada com sucesso: " + password));
}

export default createPassword;