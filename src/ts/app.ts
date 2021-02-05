import "../assets/sass/style.scss";

/**
 * Document
 */
const d = document;
/** */
/** */
/** */
/** */
const $ = (id:string) =>{
    let e  = d.getElementById(id);
    
    const setText = (text:string) => {
        if (!e )return;
        e.innerText = text.toString();
    };
    return {
        setText,
        element:e
    }
}

