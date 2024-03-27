var lua = document.querySelector(".lua")
var sol = document.querySelector(".sol")
var input_campo = document.querySelector(".input_campo")
var resultado = document.querySelector(".resultado")
var body = document.querySelector("body")
var footer = document.querySelector("footer")
var items_lefting = document.querySelector(".items_lefting")
var all = document.querySelector(".all")

input_campo.addEventListener("keydown", () => {
    if (event.key === "Enter") {
        if (lua.classList.contains("luaselecionada") == true) {
            var novoElemento = document.createElement("div")
            resultado.appendChild(novoElemento)
            novoElemento.setAttribute("class", "faixa")
            var circulocheck = document.createElement("p")
            novoElemento.appendChild(circulocheck)
            circulocheck.setAttribute("class", "check")
            var texto = document.createElement("p")
            novoElemento.appendChild(texto)
            texto.setAttribute("class", "texto")
            texto.innerHTML = input_campo.value
            var excluirfaixa = document.createElement("img")
            novoElemento.appendChild(excluirfaixa)
            excluirfaixa.setAttribute("src", "images/icon-cross.svg")
            excluirfaixa.setAttribute("class", "excluirfaixa")
            input_campo.value = ""
        } else {
            var novoElemento = document.createElement("div")
            resultado.appendChild(novoElemento)
            novoElemento.setAttribute("class", "faixa faixaclean")
            var circulocheck = document.createElement("p")
            novoElemento.appendChild(circulocheck)
            circulocheck.setAttribute("class", "check")
            var texto = document.createElement("p")
            novoElemento.appendChild(texto)
            texto.setAttribute("class", "texto")
            texto.innerHTML = input_campo.value
            var excluirfaixa = document.createElement("img")
            novoElemento.appendChild(excluirfaixa)
            excluirfaixa.setAttribute("src", "images/icon-cross.svg")
            excluirfaixa.setAttribute("class", "excluirfaixa excluirfaixaclean")
            input_campo.value = ""
        }
    }
    var resultado_array = [...resultado.children]
    items_lefting.innerHTML = `${resultado_array.length} items left`
    resultado_array.forEach((el => {
        el.addEventListener("click", () => {
            el.classList.add("faixaSelecionada")
            if (el.classList == "faixa faixaSelecionada") {
                el.lastElementChild.classList.remove("excluirfaixa")
            }
        })
        el.addEventListener("dblclick", () => {
            if (el.contains(event.target)) {
                el.classList.remove("faixaSelecionada")
                if (el.classList == "faixa") {
                    el.lastElementChild.classList.add("excluirfaixa")
                }
            }
        })
    }))
    var excluirfaixa = document.querySelectorAll(".excluirfaixa")
    var excluirfaixa_array = [...excluirfaixa]

    excluirfaixa_array.forEach((el => {
        el.addEventListener("click", () => {
            el.parentNode.parentNode.removeChild(el.parentNode)

            var AvoDoEVT = evt.target.parentNode.parentNode.removeChild(evt.target)
        })
    }))
    var check = document.querySelectorAll(".check")
    var check_array = [...check]
    check.forEach((el => {
        el.addEventListener("click", () => {
            if (el.classList === "check") {
                el.classList.add("checkselecionado")
                el.nextSibling.classList.add("textocortado")
            } else {
                el.classList.remove("checkselecionado")
                el.nextSibling.classList.remove("textocortado")
            }
        })
    }))

    var resultado_array_final = resultado.childNodes
    var faixa = document.querySelectorAll(".faixa")
    all.addEventListener("click", () => {
        all.classList.add("all_selecionado")
        if (all.classList.contains("all_selecionado") == true) {
            faixa.forEach((el => {
                el.classList.toggle("faixaSelecionada")
            }))
            items_lefting.innerHTML = ` ${faixa.length + 1} Items selecionados`
        }
    })



    lua.addEventListener("click", () => {
        sol.classList.add("solselecionado")
        lua.classList.remove("luaselecionada")
        lua.setAttribute("hidden", "hidden")
        sol.removeAttribute("hidden", "hidden")
        body.classList.add("bodyclean")
        input_campo.classList.add("input_campo_clear")
        footer.classList.add("footer_clean")
        faixa.forEach((el => {
            el.classList.add("faixaclean")
        }))
        excluirfaixa_array.forEach((el => {
            el.classList.add("excluirfaixaclean")
        }))
    })
    sol.addEventListener("click", () => {
        lua.classList.add("luaselecionada")
        sol.classList.remove("solselecionado")
        sol.setAttribute("hidden", "hidden")
        lua.removeAttribute("hidden", "hidden")
        body.classList.remove("bodyclean")
        input_campo.classList.remove("input_campo_clear")
        footer.classList.remove("footer_clean")
        faixa.forEach((el => {
            el.classList.remove("faixaclean")
        }))


    })
}
)

// var resultado_array_final = resultado.childNodes


// all.addEventListener("click", () => {
//     all.classList.toggle("all_selecionado")
//     if (all.classList.contains("all_selecionado") == true) {
//         faixa.classList.add("faixaSelecionada")

//     } else {
//         console.log("erro")
//         console.log(resultado_array_final)
//     }
// })