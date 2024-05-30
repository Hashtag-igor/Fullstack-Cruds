import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [showUsers, setShowUsers] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [formKey, setFormKey] = useState(0);


  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
        setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, name, age })
      });
  
      if (response.ok) {
        alert('Usuário adicionado com sucesso!');
        setName("");
        setEmail("");
        setAge("");
        // Faça alguma ação após adicionar o usuário ao banco de dados
        setFormKey(prevKey => prevKey + 1);
        fetchData()
      } else {
        alert('Ocorreu um erro ao adicionar o usuário.');
        // Faça alguma ação para lidar com o erro
      }
      } catch (error) {
        alert('Ocorreu um erro ao processar a solicitação.');
        // Faça alguma ação para lidar com o erro
      }
  };


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div style={{backgroundColor: "#011F26"}}>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "auto", padding: "90px 0"}}>
        <form key={formKey} style={{display: 'flex', flexDirection: "column", gap: "20px 0"}} onSubmit={handleSubmit}>
            <h1>Criar novo usuário</h1>
            <div style={{display: "flex", flexDirection: 'column', gap: "4px 0"}}>
              <label>Name:</label>
              <input style={{paddingLeft: "3px"}} minLength={3} type="text" onChange={(e) => setName(e.target.value)} required/>
            </div>
            <div style={{display: "flex", flexDirection: 'column', gap: "4px 0"}}>
              <label>Email:</label>
              <input style={{paddingLeft: "3px"}} minLength={9} type="email" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div style={{display: "flex", flexDirection: 'column', gap: "4px 0"}}>
              <label>Age:</label>
              <input style={{paddingLeft: "3px"}} type="number" min="0" max="120" onChange={(e) => setAge(e.target.value)} required />
            </div>
            <input style={{backgroundColor: "#DEEFE7", border: "2px solid #c6ddd2", cursor: "pointer"}} type="submit"/>
        </form>
      </div>

      <div style={{backgroundColor: "white", padding: "30px 0"}}>
        <button style={{background: "#011F26", color: "white", border: "1px solid #DEEFE7", borderRadius: "8px", padding: "10px", marginLeft: "60px", cursor: "pointer", marginBottom: "20px"}} onClick={() => setShowUsers(!showUsers)}>Mostrar Usuários</button>
        <div>
          {showUsers && (
            <div style={{display: 'flex', justifyContent: "space-evenly", width: "90%", margin: "auto", flexWrap: "wrap", gap: "12px 0"}}>
              {users.map((user, i) => (
                <div style={{border: "1px solid #011F26", marginBottom: "10px", padding: "4px 8px", borderRadius: "8px"}} key={i}>
                  <p style={{color: "#011F26"}}>Nome: {user.name}</p>
                  <p style={{color: "#011F26"}}>Email: {user.email}</p>
                  <p style={{color: "#011F26"}}>Idade: {user.age}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
