function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.getElementById("foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade <= 12) {
                img.src = "../imagens/bebe-boy.png"
            } else if (idade < 30){
                img.src = "../imagens/teen-boy.png"               
            } else if (idade < 55) {
                img.src ="../imagens/man.png"
            } else {
                img.src ="../imagens/idoso.png"
            }
            }else {
            genero = "Mulher"
            if (idade >= 0 && idade <= 12) {
                img.src = "../imagens/bebe-girl.png"
            } else if (idade < 23){
                img.src ="../imagens/teen-girl.png"             
            } else if (idade < 55) {
                img.src ="../imagens/woman.png"
            } else {
                img.src = "../imagens/idosa.png"
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    }
}