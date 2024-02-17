const screen = document.querySelector(".calc-typed")
const typing = document.querySelector(".calc-operation")
const buttons = document.querySelectorAll(".button")

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        //se catura el valor del botón
        const pressKey = btn.textContent;
        console.log(pressKey)
        //Se borra y se establece en 0
        if (btn.id === "delete"){
            screen.textContent = "0";
            typing.textContent = "0";
            return;
        }

        //Se devuelve la screen a 0 si es estar en error
        if (btn.id === "erase"){
            if(
                typing.textContent.length === 1 ||
                typing.textContent === "Error!"
            ){
                typing.textContent = "0";
                screen.textContent = "0";
            }else{
                screen.textContent = "0";
                typing.textContent = typing.textContent.slice(0, -1);
            }
            return;
        }

        //Se evalua la información y en caso de que no se pueda se captura el error y s devuelve el error
        if (btn.id === "result"){
            try{
                screen.textContent= eval(typing.textContent);
                typing.textContent = "0";
            } catch{
                typing.textContent = "Error!"
                screen.textContent = "0";
            }
            return;
        }

        //Se reemplaza el valor por el botón apretado si está en 0 o en error, o si se adiciona el valor a la cadena
        if (screen.textContent === "0" || screen.textContent === "Error"){
            screen.textContent = pressKey;
            typing.textContent= pressKey;
        }else{
            screen.textContent = pressKey;
            typing.textContent += pressKey;
        }
    })
})