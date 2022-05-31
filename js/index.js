document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, "");
});

function confirmar() {
    document.getElementById("nomeConf").value = document.getElementById("nome").value
    document.getElementById("emailConf").value = document.getElementById("email").value
    document.getElementById("nascConf").value = document.getElementById("nasc").value
    document.getElementById("mensagemConf").innerHTML = document.getElementById("mensagem").value
    var instance = M.Modal.getInstance(document.getElementById("modalForm"));
    instance.open();
}

$(document).ready(function() {
    $('.sidenav').sidenav({
        edge: 'right'
    });
    $('.tabs').tabs();

    $('.materialboxed').materialbox();

    $('.nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000);
    });

});

function changeImage() {
    srcAtual = document.getElementById("gifVelhinho").src;
    if (srcAtual.includes("img/gifVelhinho.gif")) {
        document.getElementById("gifVelhinho").src = "img/gifVelhinhoParado.png"
    } else {
        document.getElementById("gifVelhinho").src = "img/gifVelhinho.gif"

    }
}