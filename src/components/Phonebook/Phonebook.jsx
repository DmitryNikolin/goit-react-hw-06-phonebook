import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

import Filter from '../Filter/Filter';

const Phonebook = () => {

  return (
    <>
      <ContactForm />

      { <ContactList>
          <Filter />
        </ContactList>
      }
    </>
  );
};

export default Phonebook;
