const canvas = document.getElementById("arbol");
const context = ctx = canvas.getContext('2d');
const framesPerSecond = 10;
const width =  canvas.width ;
const height  = canvas.height ;
const BACKGROUND_COLOR = "black";
const blockHeight  = (height-40) / 10;
const aleatorio = (inferior, superior)  => {
    numPosibilidades = superior - inferior;
    aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
  }


const  dame_color_aleatorio = () => {
    var hexadecimal = new Array(
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    );
    color_aleatorio = "#";
    for (i = 0; i < 6; i++) {
      posarray = aleatorio(0, hexadecimal.length);
      color_aleatorio += hexadecimal[posarray];
    }
    return color_aleatorio;
  };



const  drawTree = () => {
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle  = "green";
    context.moveTo(width/2, +20);
    context.lineTo(width - 30, height - 70);
    context.stroke();
  
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle  = "green";
    context.moveTo(width/2, +20);
    context.lineTo(30, height - 70);
    context.stroke();


    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle  = "green";
    context.moveTo(+30, height - 70);
    context.lineTo(width - 30, height - 70);
    context.stroke();

    context.beginPath();
    context.lineWidth = 60;
    context.strokeStyle  = "#804000";
    context.lineCap = "#804000";
    context.moveTo(width/2 - 60, height - 40);
    context.lineTo(width/2 + 60, height - 40);
    context.stroke();
    
};

const drawDecoration = (color, x, y, r) => {
    context.strokeStyle = color;
    context.fillStyle  = color;
    context.lineWidth = 3;
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
};


const drawDecorations = () =>  {
    let contBlocks = 1;
    let calculoDeBloques = 1 
    for( let numOfDecorations = 1 ; numOfDecorations < 10; numOfDecorations ++){
        
        for(let dec = 0; dec < calculoDeBloques; dec++)
        { 
            if(dec == 0){
                drawDecoration(dame_color_aleatorio(), width/2, blockHeight * numOfDecorations , 2);
            }
            else
            {
                drawDecoration(dame_color_aleatorio(), width/2 - dec * 8 , blockHeight * numOfDecorations , 2);
                drawDecoration(dame_color_aleatorio(), width/2 + dec * 8, blockHeight * numOfDecorations , 2);
            }
        }
        calculoDeBloques =  calculoDeBloques + 3;
        contBlocks++ ; 
    }
   
}


const update = () => {
    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.width, canvas.height, BACKGROUND_COLOR);
    drawTree();
    drawDecorations();
    

    console.log("Actualizando arbol");
}




setInterval(update, 1000 / framesPerSecond);