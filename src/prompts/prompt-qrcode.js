import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Digite o texto ou URL para gerar o QR Code:"),
        pattern: /^.+$/,
        message: chalk.red.italic("O texto ou URL não pode estar vazio!"),
        required: true,
    },
    {
        name:"type",
        description: chalk.yellow.bold("Escolha o tipo de QR Code (1 - NORMAL, 2 - TERMINAL):"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 ou 2"),
        required: true,
    }
];

export default promptQRCode;