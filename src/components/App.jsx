import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';

import { useState} from 'react';

export default function App () {

  //  Фильтрация элементов в инпуте 

  const [filters, setFilter] = useState('');

  const filterUsers = users.filter(user => user.toLowerCase().include(filters.toLowerCase()))

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
  return prevUsers.filter(users => users.id !== userId)
})
}

  return (
    <div>
      <h1>Phonebook</h1>
     <ContactForm onAdd={addUser}/>
     <SearchBox filters={filters} onFilter={setFilter}/>
     <ContactList users={filterUsers} onDelete={handleDelete}/>
    </div>
      
  );
};

  