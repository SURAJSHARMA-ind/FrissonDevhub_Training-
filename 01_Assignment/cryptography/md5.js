const Db = {
    username: "",
    password: ""
}

function submitForm() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    console.log(username)
    console.log(password)

    let hashedPassword = md5(password)

    Db.username = username
    Db.password = hashedPassword

    console.log(Db)
}

const signin = () => {
    let username = document.getElementById('Susername').value
    let password = document.getElementById('Spassword').value
    console.log(username)
    console.log(password)

    let hashedPassword = md5(password)
    if (hashedPassword === Db.password && username === Db.username) {
        confirm('User Signin')
    }
    else {
        alert('Wrong Credentials')
    }

}
