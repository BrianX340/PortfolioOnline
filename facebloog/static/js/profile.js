window.onload = () => {

    recivir_profile()

}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}




function recivir_profile() {

    let entry = {
        'user': 'ok'
    };

    fetch(`${window.origin}/consulta-profile`,
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
                /*aca tomamos toda la informaciond del usuario y los introducimos en el document*/
                document.getElementById('name').innerHTML = capitalize(data['name'])
                document.getElementById('lastname').innerHTML = capitalize(data['lastname'])
                document.getElementById('email').innerHTML = capitalize(data['email'])
                document.getElementById('cantpost').innerHTML = data['posts']
                document.getElementById('cantcoment').innerHTML = data['coments']
                console.log(data)
                if (data['profile_photo'] != 'none') {
                    let perfil_foto = data['profile_photo']
                    let imagen_html = document.getElementById('profile-image')
                    imagen_html.style.backgroundImage = `url(${window.origin}/downloader/${perfil_foto})`;
                } else {
                    document.getElementById('profile-image').style.display = 'none'
                    document.getElementById('formuploadphoto').style.display = 'flex'
                }
            })
                .catch(function (error) {
                    console.log("Fetch error: " + error);
                });
        })
}