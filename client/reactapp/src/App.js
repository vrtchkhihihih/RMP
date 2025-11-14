

const clients = [{
  id:1, name:"Ivanov"
}, {
  id:2, name:"Petrov"
}, {
  id:3, name:"Ivanov2"
}]
export const App = () => {
  const getClients = clients.map(client => {
    <>
    <li>{clients.id}</li>  
    <li>{clients.name}</li> 
    </>

  }
  
  )
  return (
    <ul>{getClients}</ul>
  )
}
