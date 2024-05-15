
import { useState } from 'react'
import './App.css'

function App() {

  // Estado para cada input
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  //Manejador d evento para cada input
  const onchangeUserName = (e) => setUserName(e.target.value)
  const onChangePassword = (e) => setPassword(e.target.value)

  // Manejador para submit
const onsubmitForm = (e) => {
  //evitar que se recargue la pagina y el valor por defecto
  e.preventDefault();

  //validar valores
  const isUsernameValid = validateUserName(userName)
  const isPasswordValid = validatePassword(password)

  if(!isPasswordValid || !isUsernameValid ){
    alert("alguno de los datos ingresados no son correctos")
  } else{
    //Motramos solo le nombre del usuario con un alert
  alert(`Bienvenido: ${userName}`)
  }  
}

  // Funcion para validar ue no tenga espacios en blanco y un minimo de tres caracteres
  const validateUserName = (userName) => {
    //eliminar espacios en blanco
    const withoutSpaces = userName.trim()
    //validamos la extension
    if(withoutSpaces.length > 2){
      return true
    } else{
      return false
    }
  }

  // Funcion para validar en el password la extension y que haya algun numero
  const validatePassword = (password) => {
    //eliminar espacios en blanco
    const withoutSpaces = password.trim()
    //separamos el string para recorrerlo y verificar que hay un numero
    const passwordArray = withoutSpaces.split("")
    //some retorna true si al menos una de las iteraciones es verdadera
    const hasNumber = passwordArray.some((character) => {
      //si el valor es Nan, no es un numero
      if(isNaN(character)){
        return false
      }else{
        return true
      }
    })

  // Validamos la extension y que haya al menos un numero
  if (withoutSpaces.length > 5 && hasNumber) {
    return true;
    } else {
    return false;
    }

  }
  
  return (
    <div className='App'>
      <h3>Iniciar sesión</h3>
      <form onSubmit={onsubmitForm}>
        <input 
          type="text"
          placeholder='Nombre de usuario'
          value={userName}
          onChange={onchangeUserName} 
        />
        <input 
          type="password"
          placeholder='Password'
          value={password}
          onChange={onChangePassword} 
        />
        <button type='submit'>enviar</button>
      </form>
    </div>
  )
}

export default App
