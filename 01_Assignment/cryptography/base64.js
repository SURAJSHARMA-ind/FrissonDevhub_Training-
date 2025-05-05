
const Db = {
    username: "",
    password: ""
}

function submitForm() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    console.log(username)
    console.log(password)

    let bytes = utf8.encode(password);
    let encoded = base64.encode(bytes);

    Db.username = username
    Db.password = encoded

    console.log(Db)
}

const signin = () => {
    let username = document.getElementById('Susername').value
    let password = document.getElementById('Spassword').value
    console.log(username)
    console.log(password)

    let decodePassword = base64.decode(Db.password)
    if (password === decodePassword && username === Db.username) {
        confirm('User Signin')
    }
    else {
        alert('Wrong Credentials')
    }

}

