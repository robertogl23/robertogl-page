import "../assets/sass/style.scss";
const title = document?.getElementById("header-title");
let cont = 0
setInterval(() => {
   
    if(cont == 3) {
        cont = 1
        title?.classList.remove(`txt-color-3`)
        title?.classList.add(`txt-color-${cont}`)
        return
    };
    cont +=1;
    title?.classList.remove(`txt-color-${cont -1 }`)
    title?.classList.add(`txt-color-${cont}`)
    


},3000)
