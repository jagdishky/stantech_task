import React from 'react';
import {FlatList} from 'react-native';
import {Contact} from '../../sqlite/models/Contact';
import ContactCard from '../row/ContactCard';
import ContactNotFound from './ContactNotFound';

type ContactListProps = {
  contacts: Contact[];
  onEdit: (contact: Contact) => void;
  onDelete: (contact: Contact) => void;
  onAddContact: () => void;
  isContactsLoading: boolean;
};

const ContactList = (props: ContactListProps) => {
  return (
    <FlatList
      data={props.contacts}
      renderItem={({item, index}) => (
        <ContactCard
          contact={item}
          index={index}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      )}
      ListEmptyComponent={
        !props.isContactsLoading ? (
          <ContactNotFound onPressAddContact={props.onAddContact} />
        ) : null
      }
    />
  );
};

export default ContactList;
