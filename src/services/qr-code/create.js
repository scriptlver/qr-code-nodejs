import prompt from "prompt";
import promptQRCode from "../prompts/prompt-qrcode.js";


async function createQRCODE(){
    prompt.get(promptQRCode);

    prompt.start();
        

}

export default createQRCODE;