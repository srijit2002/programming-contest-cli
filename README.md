# Programming-contest-cli
This is a node js based CLI tool that provides information about upcoming popular programming contests on various popular websites.
This tool uses <br/>
  * [kontest api](https://kontests.net/) for information
  * [commander](https://github.com/tj/commander.js/) for managing user-input
  * [chalk](https://www.npmjs.com/package/chalk) and [figlet](https://github.com/patorjk/figlet.js) for UI
  
  # How to install
  **Requirements**
  * [Git](https://git-scm.com/)
  * Latest version of [Node js](https://nodejs.org/en/) and [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)<br/>
  
  **At first clone the repository by pasting the following command in your `powershell` window then press `enter`**
  ```js
  git clone https://github.com/srijit2002/programming-contest-cli.git
  ```
Now open `powershell` / `command prompt` or `windows teminal` in the cloned folder (you can press and hold shift key and then click the right mouse button to open powershell in current directory)
<br/>Now paste the following code in powershell window and press enter
```js
npm install
```
Now the tool is ready to use but the tool will only work in the current folder, to use it global paste the folllowing code in `terminal` /  `powershell` / `cmd` and then press enter

```js
npm link
```
# How to use

    contests [options]
    
    options
    -V  or --version |   for current version
    -a  or --all |  Shows infomation about all the upcoming contests
    -h  or --help |  lists all available commands 
    -cf or --codeforces |  Shows infomation about all the upcoming contests on Codeforces
    -lc or --leetcode |  Shows infomation about all the upcoming contests on Leetcode
    -tc or --topcoder |  Shows infomation about all the upcoming contests on Top Coder
    -ac or --atcoder |  Shows infomation about all the upcoming contests on At Coder
    -cs or --csacademy |  Shows infomation about all the upcoming contests on CS Academy
    -hr or --hackerrank |  Shows infomation about all the upcoming contests on Hackerrank
    -he or --hackerearth |  Shows infomation about all the upcoming contests on Hackerearth
    -ks or --kickstart |  Shows infomation about all the upcoming contests on Google Kickstart
    -cc or --codechef |  Shows infomation about all the upcoming contests on Codechef
## Examples
* Get information about the contests of a particular site 
```js
contests -cf
```
or

```js
contests --codeforces
```
![Demo image](https://i.ibb.co/LdB3VBM/codeforces.png)
* Get information about multiple contests of specific websites at once
```js
  contests --codeforces --codechef --leetcode
```
![Demo image](https://i.ibb.co/JpMsGfD/multiple.png)

# Supported Websites
   * [Codeforces](https://codeforces.com/)
   * [Codechef](https://www.codechef.com/)
   * [Leetcode](https://leetcode.com/)
   * [Top Coder](https://www.topcoder.com/)
   * [At Coder](https://atcoder.jp/)
   * [CS Academy](https://csacademy.com/)
   * [Hackerrank](https://www.hackerrank.com/)
   * [Hackerearth](https://www.hackerearth.com/)
   * [Kickstart](https://codingcompetitions.withgoogle.com/kickstart)
   
# Contribute
It will be very good if these features can be implemented in this app - 
- Filter the contests according to a provided date
- Show the output data in table format
- Give it a good name XD <br/>
So, if you can add any of these features(not the last one XD) or find a new bug then please create a new issue.
