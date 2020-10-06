const photoFile = document.getElementById('photo-file');
let image = document.getElementById('photo-preview');


document.getElementById('select-image')
.onclick = function() {
    photoFile.click();
}

window.addEventListener('DOMContentLoaded', () => {
    photoFile.addEventListener('change', () => {
        //pega o arquivo na posição Zero do array e file
        let file = photoFile.files.item(0);
        //ler um arquivo
        let reader = new FileReader();
        reader.readAsDataURL(file);
        //carregando a imagem
        reader.onload = function(event) {
            
            //pegando o resultado do alvo(reader) e coloca no src
            image.src = event.target.result
        }
    })
}) 

// Selection tool

const events = {
    mouseover(){
        this.style.cursor = 'crosshair'
    },
    mousedown(){},
    mousemove(){},
    mouseup(){}
}
//keys pega as chaves de um objeto
Object.keys(events)
.forEach((eventName) => {  
    //addEventListener(mouseover , events.mouseover)
    image.addEventListener(eventName , events[eventName]  )
})