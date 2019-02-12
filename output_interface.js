module.exports = {
    display
}

function display(resultantArray, indent = 4){
    let hyphens = "-".repeat(indent);
    let spaces = " ".repeat(indent);

    for(let [level, name] of resultantArray){
        if(level === 0){
            console.log();
            console.log(hyphens + name)
        }
        else{
            console.log(spaces.repeat(level) + "|");
            console.log(spaces.repeat(level) + hyphens + name)
        }
    }
}