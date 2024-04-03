

export default function Login(event){
    event.preventDefault()
    async function getAllUsers(){

    
    try {
        await fetch('https://fakestoreapi.com/users')

    } catch(error) {
        console.error(error)
    }
}
}