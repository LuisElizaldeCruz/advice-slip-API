
//let campoTxto = document.querySelector(".noticia");



async function getData() {

    try {
        let res = await fetch("https://api.adviceslip.com/advice");
        json = await res.json();
        console.log(json.slip.id);
        console.log(json.slip.advice);

        /*     
         const li = document.createElement("p");
             li.className = "notice";
             li.textContent=json.slip.advice;
             li.insertAdjacentElement("afterend",campoTxto);
             console.log(json.slip.advice);
             */
       let campoTxto = document.querySelector(".noticia");
       let idNotice = document.querySelector(".idNoticia");
        campoTxto.innerHTML = json.slip.advice;
        idNotice.innerHTML= json.slip.id;


    } catch (error) {

    } finally {

    }
}

//let boton = document.querySelector(".iconoContenedor");

//boton.addEventListener("click",getData);

//setInterval(getData(),3000);

(function loop(){
    setTimeout(function() {
       // Your logic here
       getData()
       loop();
   }, 4000);
 })();