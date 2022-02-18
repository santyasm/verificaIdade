function verificar(){
    const data = new Date()
    const anoAtual = data.getFullYear()
    const anoDeNascimento = document.getElementById("TextoAno")
    let Resultado = document.getElementById("Resultado")

    if (anoDeNascimento.value.length == 0 || anoDeNascimento.value > anoAtual) {
        alert(`[ERRO] Verifique os dados e tente novamente! Lembre-se de que estamos em ${anoAtual} 😉`)
    } else {
        const opcaoDoSexo = document.getElementsByName("RadioSexo")
        const idade = anoAtual - Number(anoDeNascimento.value)
        let genero = ""
        let img = document.getElementById("Foto")
        
        if (opcaoDoSexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade <= 12) {
                img.src = "./imagens/bebe-boy.png"
            } else if (idade < 30){
                img.src = "./imagens/teen-boy.png"               
            } else if (idade < 55) {
                img.src ="./imagens/man.png"
            } else {
                img.src ="./imagens/idoso.png"
            }

        } else {
            genero = "Mulher"
            if (idade >= 0 && idade <= 12) {
                img.src = "./imagens/bebe-girl.png"
            } else if (idade < 30){
                img.src ="./imagens/teen-girl.png"             
            } else if (idade < 55) {
                img.src ="./imagens/woman.png"
            } else {
                img.src = "./imagens/idosa.png"
            }
        }
        Resultado.style.textAlign = "center"
        Resultado.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    }
}