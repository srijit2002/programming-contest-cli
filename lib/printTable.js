import chalk from "chalk";

const printRow=(key,value)=>{
    console.log(chalk.green(key)+": "+chalk.white(value));
}
let val="";
for(let i=0;i<50;i++)val+="-";
const printLine=()=>{
    console.log(val);
}
const printTable=(contests)=>{
    contests?.forEach(({name,url,start_time,duration,in_24_hours}) => {
        console.log();
        printLine();
        console.log();
        printRow("Name",name);
        console.log(chalk.green("URL")+": "+chalk.blue(url));
        printRow("Start Time",start_time);
        printRow("Duration",duration);
        console.log(chalk.green("In 24 Hours")+": "+chalk.redBright(in_24_hours));
    });
}

export default printTable;