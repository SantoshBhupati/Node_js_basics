const fs= require('fs');

const textIn=fs.readFileSync('./txt/input.txt','utf-8');

console.log(textIn);
const textout=`This is what konow about avocoda ${textIn}.\n Created on ${Date.now}`;
fs.writeFileSync('./txt/ouput.txt',textout);
// const mess="Hello World";
// console.log(mess);