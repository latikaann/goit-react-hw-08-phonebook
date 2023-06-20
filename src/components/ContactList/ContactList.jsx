import React, { useEffect } from 'react';
import css from '../ContactList/ContactList.module.css';
import ContactListItem from './ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/contacts/selectors';
import Spinner from 'components/Spinner/Spinner';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts) || [];
  const filter = useSelector(getFilter);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    return <div className={css.titleNotFound}>Error loading contacts.</div>;
  }

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {filteredContacts.length === 0 ? (
            <h2 className={css.titleNotFound}>Contacts not found :(</h2>
          ) : (
            <ul className={css.contactsList}>
              {filteredContacts.map(contact => (
                <ContactListItem
                  key={contact.id}
                  name={contact.name}
                  phone={contact.phone}
                  id={contact.id}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default ContactList;
