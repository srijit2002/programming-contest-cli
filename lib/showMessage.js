import {messageTypes} from "../utils/types.js"
import chalk from "chalk"

const showMessage=(message,messageType)=>{
    if(messageType===messageTypes.ERROR){
        console.log(chalk.redBright(message));
    }
    else if(messageType===messageTypes.SUCCESS){
        console.log(chalk.green(message));
    }
    else{
        console.log(message);
    }
}
export default showMessage;