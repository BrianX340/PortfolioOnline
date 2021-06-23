
window.onload = () => {
    if (screen.width <= 500) {
        window.location = window.location['href'] + '/mobile';
    } else {
        document.getElementById('body').style.display = 'block';
    }

    document.addEventListener('keyup', logKey);

    let registar = document.getElementById('register-form')
    registar.addEventListener('onsubmit', clearForm)
    if (document.getElementById('popup-email').textContent != '') {
        document.getElementById('popup-wrapper').style.display = 'block'
    }

}

function logKey() {
    const clave = document.getElementById('passwordregister')
    const clave2 = document.getElementById('passwordconfirm')

    const texto = document.getElementById('create_page')
    if (clave.value == clave2.value) {
        texto.style.background = 'linear-gradient(to bottom, rgb(18 255 5 / 91%) 0%, rgb(26 138 24 / 92%) 100%)';
        texto.value = 'Crear Cuenta!'
    } else {
        texto.style.background = 'linear-gradient(to bottom, rgb(255 5 5 / 91%) 0%, rgb(138 24 24 / 92%) 100%)';
        texto.value = 'Las claves no coinciden!'
    }

}

function clearForm() {
    document.getElementById('name').value = ''
    document.getElementById('lastname').value = ''
    document.getElementById('emailregister').value = ''
    document.getElementById('passwordregister').value = ''
    document.getElementById('passwordconfirm').value = ''
}

/*
<div id='popup-wrapper' class="popup-wrapper">
    <div class="popup">
        <div class="popup-close">x</div>
        <div class="popup-content">
            <h3>Bienvenido a Facebloog</h3>
            <h2></h2>
            <p>¡Gracias por registrarse!</p>
            <a id="volver" href="#" target="_blank">Volver</a>
        </div>
    </div>
</div>
*/