#!/usr/bin/env node
import { Command } from "commander/esm.mjs";
const program = new Command();
import {websiteTypes,messageTypes} from "./utils/types.js"
import showMessage from "./lib/showMessage.js"
import fetchData from "./lib/fetchData.js"
import printTable from "./lib/printTable.js"

program
  .version("1.0.0")
  .description("This is a cli app to get details about upcoming programming contests")

program
  .usage('[options1, options2...]', 'shows details about upcoming contests')
  .option(`-cf, --codeforces`, "Upcoming contests on Codeforces",websiteTypes.CODEFORCES)
  .option(`-cc, --codechef`, "Upcoming contests on Codechef",websiteTypes.CODECHEF)
  .option(`-tc, --topcoder`, "Upcoming contests on Top Coder",websiteTypes.TOP_CODER)
  .option(`-ac, --atcoder`, "Upcoming contests on At Coder",websiteTypes.AT_CODER)
  .option(`-cs, --csacademy`, "Upcoming contests on CS Academy",websiteTypes.CS_ACADEMY)
  .option(`-hr, --hackerrank`, "Upcoming contests on Hacker Rank",websiteTypes.HACKERRANK)
  .option(`-he, --hackerearth`, "Upcoming contests on Hacker Earth",websiteTypes.HACKEREARTH)
  .option(`-ks, --kickstart`, "Upcoming contests on Google Kickstart",websiteTypes.KICK_START)
  .option(`-lc --leetcode`, "Upcoming contests on Leetcode",websiteTypes.LEETCODE)
  .option(`-a --all`, "Upcoming contests on all platforms",websiteTypes.ALL)
  
  program.parse(process.argv);
  const options=program.opts();
  const keys=Object.keys(options);
  if(keys.length===0){
    showMessage("Too few arguments provided",messageTypes.ERROR);
    showMessage("Type <contests -h> to get list of all commands",messageTypes.SUCCESS);
  }
  else{
    for(let key in options){
      fetchData(options[key]).then(response=>{
        printTable(response.data,options[key]);
        // console.log(response.data);
      }).catch(error=>{
        showMessage(error,messageTypes.ERROR);
      })
    }
  }


