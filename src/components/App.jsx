import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';

import { useState} from 'react';

export default function App () {

 const [filters, setFilter] = useState('');

// Массив пользователей добавим их с помощью сеттера

  const [users, setUsers] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ])

// А здесь уже добавляем новых пользователей в форму

 const addUser = (newUser) => {
  setUsers((prevUsers) => {
    return [...prevUsers, newUser];
  });
 };

//  удаляем пользователя
const handleDelete = (userId) => {
setUsers( prevUsers => {
  const updateUsers = prevUsers.filter(users => users.id !== userId);
  return updateUsers;
})
}
 //  Фильтрация элементов в инпуте 

 const filterUsers = users.filter(user => user.name.toLowerCase().includes(filters))

  return (
    <div>
      <h1>Phonebook</h1>
     <ContactForm onSubmit={addUser}/>
     <SearchBox filters={filters} onFilter={setFilter}/>
     <ContactList users={filterUsers} onDelete={handleDelete}/>
    </div>
      
  );
};

  