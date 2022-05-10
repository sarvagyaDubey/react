export default function UserList({contacts}) {
    return (
      <div>
        {contacts.map((contact) => (
          <div  key={contact.pincode}>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.password}</p>
            <p>{contact.city}</p>
            <p>{contact.pincode}</p>
          </div>
        ))}
      </div>
    );
  }