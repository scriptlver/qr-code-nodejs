import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";


async function createQRCODE(){
    prompt.get(promptQRCode, handle);

}    

prompt.start();

export default createQRCODE;
