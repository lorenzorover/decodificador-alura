mostrarInicio();

function criptografar() {
    let mensagem = conferirMensagem();

    mensagem = converterMensagem(mensagem, 'e', 'enter');
    mensagem = converterMensagem(mensagem, 'i', 'imes');
    mensagem = converterMensagem(mensagem, 'a', 'ai');
    mensagem = converterMensagem(mensagem, 'o', 'ober');
    mensagem = converterMensagem(mensagem, 'u', 'ufat');

    document.getElementById("mensagemConvertida").textContent = mensagem;
}

function descriptografar() {
    let mensagem = conferirMensagem();

    mensagem = converterMensagem(mensagem, 'enter', 'e');
    mensagem = converterMensagem(mensagem, 'imes', 'i');
    mensagem = converterMensagem(mensagem, 'ai', 'a');
    mensagem = converterMensagem(mensagem, 'ober', 'o');
    mensagem = converterMensagem(mensagem, 'ufat', 'u');

    document.getElementById("mensagemConvertida").textContent = mensagem;
}

function mostrarCriptografia() {
    document.getElementById("saidaLimpo").style.display = "none";
    document.getElementById("saidaMensagem").style.display = "block";
}

function copiarMensagem() {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {

            let copiarTexto = document.getElementById("mensagemConvertida").textContent;
            navigator.clipboard.writeText(copiarTexto);
        }
      });
}

function mostrarInicio() {
    document.getElementById("mensagemConvertida").textContent = "";

    document.getElementById("saidaMensagem").style.display = "none";
    document.getElementById("saidaLimpo").style.display = "block";
}

function converterMensagem(mensagem, letra, novaLetra) {

    mensagem = mensagem.replace(new RegExp(letra, 'g'), novaLetra);

    return mensagem;
}

function conferirMensagem() {
    let mensagem = document.querySelector(".text-area").value;
    mensagem = mensagem.toLocaleLowerCase();
    if (mensagem.trim() === "") { /* trim remove o espaço da mensagem apenas durante o if*/
        mostrarInicio();
    } else {
        mostrarCriptografia();
        return mensagem;
    }
    return null;
}