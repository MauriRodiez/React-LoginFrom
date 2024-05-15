
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

  //Motramos solo le nombre del usuario con un alert
  alert(`Bienvenido: ${userName}`)
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
