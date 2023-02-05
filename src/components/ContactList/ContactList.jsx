import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/slices/contacts';

import styles from './ContactList.module.css';

const ContactList = ({ children }) => {
  const filtersContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const contactsList = filtersContacts(contacts, filter);

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={styles.contacts}>
        <h2>Contacts</h2>
        {children}
        <ul>
          {contactsList.map(({ name, number, id }) => (
            <li key={id}>
              <p>
                <span>{name} : </span>
                {number}
              </p>
              <button type="button" onClick={() => deleteItem(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
