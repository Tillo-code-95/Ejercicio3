import {useState} from "react";
import './App.css';
import ContactList from "./components/ContactList";
import NewContactForm from "./components/NewContactForm"


function App() {

  const initialState = [
    {name : "Federico", lastName:"Garcia Lorca", address:"Calle X", city:"Grananda", postalCode : 27009, phoneNumber:756432124},
    
    {name : "Miguel", lastName:"Hernandez", address:"Calle X", city:"Madrid", postalCode : 27344, phoneNumber:758877893},
  
    {name : "Manuel", lastName:"Alberti", address:"Calle Y", city:"Cadiz", postalCode : 27455, phoneNumber:731245434}
  ];




  const[contacts, setContacts] = useState(initialState)

  
  




  return (
    <div className="container">
      <h2 className = "my-4">Agenda</h2>
      <ContactList contacts = {contacts} setContacts = {setContacts}/>

      <h2 className = "my-4">Nuevo contacto</h2>
      <NewContactForm setContacts = {setContacts} />
    </div>
  );
}

export default App;
