import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import css from '../../src/components/App.module.css';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.formContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
