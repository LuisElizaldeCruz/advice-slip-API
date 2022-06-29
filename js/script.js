async function getData() {

    try {
        let res = await fetch("https://api.adviceslip.com/advice");
       // console.log(res);
        if (res.ok == true){

        json = await res.json();
        console.log(json.slip.id);
        console.log(json.slip.advice);

        let campoTxto = document.querySelector(".noticia");
        let idNotice = document.querySelector(".idNoticia");

        campoTxto.innerHTML = json.slip.advice;
        idNotice.innerHTML = json.slip.id;
        }
        else{
            throw{estado:res.status,estadoTexto:res.statusText};
        }
    } catch (error) {
        let mensaje;
        if(!error.statusText!==""){
            mensaje = "ocurrio un error ";
        }
        console.log(mensaje,error.estado);
    } finally {
        
    }
}

let boton = document.querySelector(".iconoContenedor");
boton.addEventListener("click", getData);

//setInterval(getData(),3000);

/*
(function loop(){
    setTimeout(function() {
       // Your logic here
       getData()
       loop();
   }, 4000);
 })();
 */