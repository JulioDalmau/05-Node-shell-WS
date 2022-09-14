const fs = require('fs');


const pwd = (dataInput) => {
    
    if(dataInput === 'pwd')
    process.stdout.write(process.cwd());
      
}

const date = (dataInput) => {

    if(dataInput === 'date')
    process.stdout.write(Date());
       
}

const ls = (dataInput) => {

    if(dataInput === 'ls') 
    fs.readdir(".", function(err, files){    
        if(err) throw err;
        
        files.forEach( file => process.stdout.write(( `${file}` )+`\n` ) ) 
        process.stdout.write("\npropmpt > ");
    });
}

const echo = (dataInput) => {
    
    if(dataInput[0] === 'echo') {
        
        let noEcho = dataInput.slice(1);
    
        noEcho.forEach( (str) => process.stdout.write(`${str} `));
    
    }
              
}

const cat = (dataInput) => {
    
        fs.readFile(dataInput[1], (err, data) => {
            if (err) throw err;
            process.stdout.write(data);

        })
    
              
}

const head = (dataInput) => {
    
        fs.readFile(dataInput[1], 'utf-8', (err, data) => {
            if (err) throw err;
            let lines = data.split("\n");
            // data.slice(0,6)
            let data2 = lines.slice(0,6)
            process.stdout.write(data2);

        })
    
              
}


module.exports = {
    pwd, date, ls, echo, cat, head
}




   