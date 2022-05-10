import UserForm from "./Component/Q1"
import { useState } from "react";
import UserList from "./Component/Q1.1"
function App() {
  const [contacts, updateContacts] = useState([]);

  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };
  return (
    <div className="App">
      <UserForm  addContact={addContact}></UserForm>
      <UserList contacts={contacts} ></UserList>
     </div>
  );
}
export default App