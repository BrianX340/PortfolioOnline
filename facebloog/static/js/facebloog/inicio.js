window.onload = () => {
    recivir_post()





    document.addEventListener('click', function (e) {
        if (e['path']['0']['className'] == 'delete') {
            let postid = e['target']['attributes']['0']['value']
            borrarPost(postid)
        }
    })

    document.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            mensajetipo = e.path[0].getAttribute('mensajetipo')

            /* Aca separamos por tipo de mensaje */
            if (mensajetipo == 'posteo') {
                submit_post(e)
                recivir_post()
            } else if (mensajetipo == 'comentario') {
                submit_commentario(e)
                recivir_post()
            }


        }

    })
}



function submit_post(e) {
    let posteo = document.getElementById("queestaspensando");
    let message = posteo.textContent;
    let entry = {
        message: message
    };
    fetch(`${window.origin}/crear-facebloogpost`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(entry),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json"
        })
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log(`Looks like there was a problem. Status code: ${response.status}`);
                return;
            }
            response.json().then(function (data) {
                /*console.log(data);*/
            });
        })
        .catch(function (error) {
            console.log("Fetch error: " + error);
        });
    /*aca limpiamos el campo*/
    posteo.innerText = ''
}

function submit_commentario(e) {
    /*id del post*/
    let idpost = e.path[0].getAttribute('id')
    /*seleccionamos el post*/
    let posteo = document.getElementById(idpost.toString());
    /*comentario a postear*/
    let texto = posteo.innerText;
    let entry = {
        'idpost': idpost,
        'texto': texto
    };

    fetch(`${window.origin}/crear-facebloogcomments`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(entry),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json"
        })
    })
        .then(function (response) {

            if (response.status !== 200) {
                console.log(`Looks like there was a problem. Status code: ${response.status}`);
                return;
            }
            response.json().then(function (data) {

                /*console.log(data);*/
            });
        })
        .catch(function (error) {
            console.log("Fetch error: " + error);
        });

    /*aca limpiamos el campo*/
    posteo.innerText = ''

}


function recivir_post() {


    let entry = {
        'post': 'data_comment'
    };

    fetch(`${window.origin}/consulta-posteos`,
        {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(entry),
            cache: "no-cache",
            headers: new Headers({
                "content-type": "application/json"
            })
        })
        .then(function (response) {

            if (response.status !== 200) {
                console.log(`Looks like there was a problem. Status code: ${response.status}`);
                return;
            }
            response.json().then(function (data) {
                /*aca tomamos todo el texto html con comentarios y posteos y los introducimos en el document*/
                document.getElementById('bloques').innerHTML = data['bloque']
                document.getElementById('profileimage').innerHTML = "<div style='background-image: url(WINDOWSORIGIN/downloader/URLIMG)'>".replace('URLIMG', data['imagename']).replace('WINDOWSORIGIN', window.origin)
            });

        })
        .catch(function (error) {
            console.log("Fetch error: " + error);
        });

}

function borrarPost(postid) {
    let entry = {
        'postdelete': postid
    };

    fetch(`${window.origin}/borrar-facebloogpost`,
        {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(entry),
            cache: "no-cache",
            headers: new Headers({
                "content-type": "application/json"
            })
        })
        .then(function (response) {

            if (response.status !== 200) {
                console.log(`Looks like there was a problem. Status code: ${response.status}`);
                return;
            }
            response.json().then(function (data) {
                if (data['post'] == 'deleted') {
                    recivir_post()
                }
            });

        })
        .catch(function (error) {
            console.log("Fetch error: " + error);
        });
}






