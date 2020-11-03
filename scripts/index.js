const saludo = () => {
    console.log("hola compañeros");
}

document.addEventListener("click", e => {
    console.log(e.target);

    if (e.target.id === "hola"){
        saludo();
    }
});