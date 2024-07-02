window.onload = function(){

    const textToWrite = "Luis Gonzalez Sanchez"
    const autowriteTextElement = document.getElementById('autowrite-text');
    const commands = document.getElementById("command")

    let index = 0;

    const interval = setInterval(function(){
        autowriteTextElement.textContent +=textToWrite[index];
        index++;

        if(index === textToWrite.length){
         clearInterval(interval)
        }
    }, 20);
}