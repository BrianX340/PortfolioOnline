
window.onload = () => {
    if (screen.width <= 500) {
        window.location = window.location['href'] + '/mobile';
    } else {
        document.getElementById('body').style.display = 'block';
    }

    document.addEventListener('keydown', event => {
        if (event.key=='Enter'){
            elementId = event.path[0].getAttribute('id')
            if (elementId == 'name'){
                document.getElementById('lastName').focus()
            } else if (elementId == 'lastName'){
                document.getElementById('username').focus()
            } else if (elementId == 'emailRegister'){
                document.getElementById('username').focus()
            } else if (elementId == 'username'){
                document.getElementById('passwordregister').focus()
            } else if(elementId == 'passwordregister'){
                document.getElementById('passwordconfirm').focus()
            } else if (elementId == 'passwordconfirm'){
                name = document.getElementById('name').value
                lastName = document.getElementById('lastName').value
                email = document.getElementById('emailRegister').value
                username = document.getElementById('username').value
                password = document.getElementById('passwordregister').value
                if ( name && lastName && username && passwordregister){
                    registrarUsuario({ email, name, lastName, username, password })
                }
            }
            event.preventDefault()
        }
    })

    document.addEventListener('click', event =>{
        elementId = event.path[0].getAttribute('id')
        if (elementId=='crearCuenta'){
            name = document.getElementById('name').value
            lastName = document.getElementById('lastName').value
            username = document.getElementById('username').value
            password = document.getElementById('passwordregister').value
            if ( name && lastName && username && password){
                registrarUsuario({ email:'brianx340', name, lastName, username, password })
            }
        } else if (elementId=='volver'){
            quitarPopup()
        }
    })

}


function clearForm() {
    document.getElementById('name').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('emailRegister').value = ''
    document.getElementById('username').value = ''
    document.getElementById('passwordregister').value = ''
    document.getElementById('passwordconfirm').value = ''
}


function registrarUsuario(user){
    fetch('https://serverless-660nscdk6-brianx340.vercel.app/api/Auth/register', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        clearForm()
        if (data.status == 'ok'){
            crearPopup('Bienvenido a Facebloog','Su cuenta se ha creado satisfactoriamente.')
        } else if (data.status == 'error'){
            crearPopup('Ops! ha ocurrido un error',data.content)
        }
    })
}

function crearPopup(titulo,mensaje){
    document.getElementById('contMessage').innerHTML = "<div id='popup-wrapper' class='popup-wrapper'><div class='popup'><div class='containerClose'><div class='popup-close'>x</div></div><div class='popup-content'><h3>TITULO</h3><h2></h2><p>MENSAJE</p><div class='backContainer'><a id='volver' target='_blank'>Volver</a></div></div></div></div>".replace('TITULO', titulo).replace('MENSAJE', mensaje)
    document.getElementById('popup-wrapper').style.display = 'flex'
}

function quitarPopup(){
    document.getElementById('contMessage').innerHTML = ""
}

/*
<div id='popup-wrapper' class='popup-wrapper'>
    <div class='popup'>
        <div class='popup-close'>x</div>
        <div class='popup-content'>
            <h3>Bienvenido a Facebloog</h3>
            <h2></h2>
            <p>¡Gracias por registrarse!</p>
            <a id='volver' href='#' target='_blank'>Volver</a>
        </div>
    </div>
</div>
*/