export default function ContactList({contacts, setContacts}) {

    const removeContact = phoneNumber => {

        return e => {
            setContacts(contacts.filter(contact => contact.phoneNumber !== phoneNumber))
        }
    }

    return (
        <div className = "row">
            {contacts.map((contact, index) => {
                return (
                    <ul>
                        <li className="list-group-item active">Contacto {index + 1}</li>
                        <li className="list-group-item">{contact.name}</li>
                        <li className="list-group-item">{contact.lastName}</li>
                        <li className="list-group-item">{contact.phoneNumber}</li>
                        <li className="list-group-item">{contact.address},{contact.postalCode},{contact.city}</li>
                        <li className="list-group-item">
                        <button className="btn btn-warning"  onClick = {removeContact(contact.phoneNumber)}>Eliminar</button>
                        </li>
                        
                        
                    </ul>
                )
            })}
        </div>
    )
        
    



}