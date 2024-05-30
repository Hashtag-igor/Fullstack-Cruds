import { useState, useEffect } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([])
  const [showUsers, setShowUsers] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados para o backend usando uma requisição POST
    // usando a biblioteca axios ou fetch.

    if (!name || !email) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const user = {
      name,
      email
    };
  
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
  
      if (response.ok) {
        alert('Usuário adicionado com sucesso!');
        // Faça alguma ação após adicionar o usuário ao banco de dados
        GetUsers();
      } else {
        alert('Ocorreu um erro ao adicionar o usuário.');
        // Faça alguma ação para lidar com o erro
      }
    } catch (error) {
      alert('Ocorreu um erro ao processar a solicitação.');
      // Faça alguma ação para lidar com o erro
    }

    setName("")
    setEmail("")
  };

  const GetUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setUsers(data);
      } else {
        console.log("Nenhum usuário encontrado."); // Ou qualquer outra ação que você queira tomar
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };
  

  useEffect(() => {
    GetUsers();
  }, [])


  return (
    <div style={{marginBottom: "50px"}}>
      <form style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "80px", gap: "10px 0"}} onSubmit={handleSubmit}>
        <h1>Criar Usuário</h1>
        <label>
          <strong>Name:</strong>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            minLength={3}
            style={{border: '1px solid #213547', borderRadius: "6px", padding: "10px 5px", paddingLeft: "6px", fontSize: "14px", marginLeft: "10px"}}
          />
        </label>
        <label>
          <strong>Email:</strong>
          <input
            type="email"
            minLength={9}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            style={{border: '1px solid #213547', borderRadius: "6px", padding: "10px 5px", paddingLeft: "6px", fontSize: "14px", marginLeft: "10px"}}
          />
        </label>
        <button type="submit" style={{margin: "40px 0 70px 0"}}>Submit</button>
        <br />
      </form>

      <button style={{margin: "0 0 40px 0"}} onClick={() => setShowUsers(!showUsers)}>Show Users</button>
        <div>
          {showUsers && (
            <div style={{display: 'flex', justifyContent: "space-evenly", width: "90%", margin: "auto", flexWrap: "wrap", gap: "12px 0"}}>
              {users.map((user, i) => (
                <div style={{border: "1px solid black", marginBottom: "10px", padding: "0 5px"}} key={i}>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  );
};

export default UserForm;