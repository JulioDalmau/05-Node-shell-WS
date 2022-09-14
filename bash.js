const commands = require ("./commands");

process.stdout.write('prompt > '); //hoaaaa 
process.stdin.on('data', function (data) {

    let comand = data.toString().trim()
    let arr = comand.split(" ")
    console.log(comand)
    // if(arr > 1) arr.slice(1)
    console.log(arr) 
        
    commands.date(comand)
    commands.pwd(comand)
    commands.ls(comand)
    commands.echo(arr)
    // commands.cat(arr)
    commands.head(arr)

    process.stdout.write("\npropmpt > ");

})


