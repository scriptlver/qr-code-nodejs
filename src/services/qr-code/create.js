import prompt from "prompt";
import promptQRCODE from '../../prompts/prompt-qrcode.js';
import handle from "./handle.js";

async function createQRCODE(){
    prompt.get(promptQRCode);

    prompt.start();
        

}

export default createQRCODE;