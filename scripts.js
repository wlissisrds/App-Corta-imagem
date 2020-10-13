const photoFile = document.getElementById('photo-file');
let photoPreview = document.getElementById('photo-preview');
let image = new Image();


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
            photoPreview.src = event.target.result
        }
    })
}) 

// Selection tool
const selection = document.getElementById('selection-tool');

let startX, startY, relativeStartX, relativeStartY,
endX, endY, relativeEndX, relativeEndY

let starteSelection = false;
const events = {
    mouseover(){
        this.style.cursor = 'crosshair'
    },
    mousedown(){
    //     const {clientX, clientY, offsetX, offsetY} = event
    //     console.table({
    //         'client': [clientX, clientY],
    //         'offset': [offsetX, offsetY]
    //     })

            //posições dos eixos após o evento de click
            startX = clientX
            startY = clientY
            relativeStartX = offsetX
            relativeStartY = offsetY

            startSelection = true;
    },
    mousemove(){
        endX = event.clientX
        endY = event.clientY

        if(startSelection){
            
            selection.style.display = 'initial';
            selection.style.top = startY + 'px';
            selection.style.left = startX + 'px';
    
            //calculando largura e altura do quadrado
            selection.style.width = (endX - startX) + 'px'
            selection.style.height = (endY - startY) + 'px'
        }


    },
    mouseup(){
        startSelection = false;

        relativeEndX = event.layerX;
        relativeEndY = event.layerY;

        //mostrar o botao de cortar
        cropButton.style.display = 'initial'
    }
}
//keys pega as chaves de um objeto
Object.keys(events)
.forEach((eventName) => {  
    //addEventListener(mouseover , events.mouseover)
    photoPreview.addEventListener(eventName , events[eventName]  )
})

//Canvas
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');

image.onload = function() {
    const {width, height} = image;
    canvas.width = width;
    canvas.height = height;

    //limpar contexto
    ctx.clearRect(0, 0, width, height) //X, Y

    //desnhar a imagem do contexto
    ctx.drawImage(image, 0, 0);

    photo.src = canvas.toDataURL()
}


//cortar imagem
const cropButton = document.getElementById('crop-image');
cropButton.onclick = () => {
    
}
