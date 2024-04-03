

export default function Login(event){
    event.preventDefault()
    async function getAllUsers(){    
    try {
        await fetch('https://fakestoreapi.com/users')
        .then(response => response.json())
        .then(result=>console.log(result))

    } catch(error) {
        console.error(error)
    }
}
}