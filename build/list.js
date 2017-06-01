const items = require('../snippets/snippets.json');

const output = Object.values(items).map((item) => { 
    return '| ' + item.prefix + ' | ' + item.description + ' | '; 
}).join("\n");

console.info(output + "\n");
