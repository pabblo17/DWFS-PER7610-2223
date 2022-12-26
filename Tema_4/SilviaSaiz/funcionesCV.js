window.onload = function () {
    var check = document.getElementById("check");
    check.addEventListener("click", function () {
        var estilo = document.getElementById("Estilo");
        if (check.checked) {
            estilo.href = 'StyleClaro.css';
        }
        else {
            estilo.href = 'StyleOscuro.css';
        }
    })

    function logHtmlElements(container, text_to_log, tab) {
        let elementsOnContainer = container.childNodes;
        if (elementsOnContainer.length > 0) {
            elementsOnContainer.forEach(element => {
                text_to_log += "\n" + tab + element.nodeName;
                console.loglogHtmlElements(element, text_to_log, tab + "     ");
            })
        }
        return text_to_log;
    }

    function GetElementosStr(elemento, tabulacion = "") {
        console.log(tabulacion + elemento.nodeName + "\n")
        let elementosHijos = elemento.childNodes;
        elementosHijos.forEach(element => {
            GetElementosStr(element, tabulacion + "\t");
        })
    }

    GetElementosStr(document.querySelector("body"));
}



