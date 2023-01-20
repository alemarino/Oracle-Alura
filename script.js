var encriptador = document.getElementById('encriptador');
var desencriptador = document.getElementById('desencriptador');
var copiador = document.getElementById('copiador');

function encriptar() {

    var textoNuevo = document.getElementById("mensaje").value;
    var textoCodificado = "";

    for (let index = 0; index < textoNuevo.length; index++) {

        switch (textoNuevo[index]) {

            case 'e':
                textoCodificado = textoCodificado + "enter";
                break;
            case 'i':
                textoCodificado = textoCodificado + "imes";
                break;
            case 'a':
                textoCodificado = textoCodificado + "ai";
                break;
            case 'o':
                textoCodificado = textoCodificado + "ober";
                break;
            case 'u':
                textoCodificado = textoCodificado + "ufat";
                break;                    
            default:
                textoCodificado = textoCodificado + textoNuevo[index];
        }

    }
    
    document.getElementById("img").style.display = "none";
    document.getElementById('dondePegar').style.display = "block";
    document.getElementById("dondePegar").value = textoCodificado;

    document.getElementById("textoDer").innerHTML = "";
    document.getElementById('copiador').style.display = "block";

    }



function desencriptar(){

    var textoNuevo = document.getElementById("mensaje").value;
    var textoDecodificado = "";
    var indexDeco = 0;
    
    console.log("textoDecodificado: " + textoDecodificado);
    console.log("indexDeco: " + indexDeco);    

    while (indexDeco < textoNuevo.length) {        
        
        console.log("textoDecodificado: " + textoDecodificado);
        console.log("indexDeco: " + indexDeco);  
        console.log("textoNuevo.length: " + textoNuevo.length);  
        console.log("textoNuevo.[indexDeco]: " + textoNuevo[indexDeco]);  
        
        var condicionSwitch = textoNuevo[indexDeco];

        switch (condicionSwitch) {

            case 'e':
                //La letra "e" es convertida para "enter"
                if (textoNuevo[indexDeco] == "e" && textoNuevo[indexDeco + 1] == "n" && textoNuevo[indexDeco + 2] == "t" && textoNuevo[indexDeco + 3] == "e" &&   
                      textoNuevo[indexDeco + 4] == "r"){
                    
                     textoDecodificado = textoDecodificado + "e";                  
                     indexDeco=indexDeco+5;     
                     console.log("textoDecodificado (E): " + textoDecodificado);
                     console.log("indexDeco: " + indexDeco);  
                  
                    } 
                break;

            case 'i':
                //La letra "i" es convertida para "imes"
                if (textoNuevo[indexDeco] == "i" && textoNuevo[indexDeco + 1] == "m" && textoNuevo[indexDeco + 2] == "e" && textoNuevo[indexDeco + 3] == "s"){
            
                     textoDecodificado = textoDecodificado + "i";                     
                     indexDeco = indexDeco + 4;
                     console.log("textoDecodificado  (I): " + textoDecodificado);
                     console.log("indexDeco: " + indexDeco);  
                     
                    } 
                break;

            case 'a':
                //La letra "a" es convertida para "ai"
                if (textoNuevo[indexDeco] == "a" && textoNuevo[indexDeco + 1] == "i"){
            
                    textoDecodificado = textoDecodificado + "a";                    
                    indexDeco = indexDeco + 2;
                    console.log("textoDecodificado (A): " + textoDecodificado);
                    console.log("indexDeco: " + indexDeco);  

                   }
                break;

            case 'o':
                //La letra "o" es convertida para "ober"
                if (textoNuevo[indexDeco] == "o" && textoNuevo[indexDeco + 1] == "b" && textoNuevo[indexDeco + 2] == "e" && textoNuevo[indexDeco + 3] == "r"){
            
                    textoDecodificado = textoDecodificado + "o";                    
                    indexDeco = indexDeco + 4;
                    console.log("textoDecodificado (O): " + textoDecodificado);
                    console.log("indexDeco: " + indexDeco);  

                   }
                break;

            case 'u':
                //La letra "u" es convertida para "ufat"
                if (textoNuevo[indexDeco] == "u" && textoNuevo[indexDeco + 1] == "f" && textoNuevo[indexDeco + 2] == "a" && textoNuevo[indexDeco + 3] == "t"){
            
                    textoDecodificado = textoDecodificado + "u";                    
                    indexDeco = indexDeco + 4;
                    console.log("textoDecodificado (U): " + textoDecodificado);
                    console.log("indexDeco: " + indexDeco);  
                    
                   }
                break;   

            default:
                textoDecodificado = textoDecodificado + textoNuevo[indexDeco];
                indexDeco = indexDeco + 1;
                console.log("textoDecodificado (DEFAULT): " + textoDecodificado);
                console.log("indexDeco: " + indexDeco);                  
        }
      
    }


    document.getElementById("img").style.display = "none";
    document.getElementById('dondePegar').style.display = "block";
    document.getElementById("dondePegar").value = textoDecodificado;

    document.getElementById("textoDer").innerHTML = "";
    document.getElementById('copiador').style.display = "block";

}

function copiar(){    
    document.execCommand('copy');
}

encriptador.addEventListener('click', encriptar, true);
desencriptador.addEventListener('click', desencriptar, true);
copiador.addEventListener('click', copiar, true);

