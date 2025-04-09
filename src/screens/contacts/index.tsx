import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppContainer from '../../component/common/container/AppContainer';
import AppHeader from '../../component/common/header/AppHeader';
import AddEditContactModal from '../../component/modal/AddEditContactModal';
import ConfirmationModal from '../../component/modal/ConfirmationModal';
import ContactList from '../../component/module/ContactList';
import {fetchContacts, removeContact} from '../../redux/slices/contacts.slice';
import {AppDispatch, RootState} from '../../redux/store';
import {Contact} from '../../sqlite/models/Contact';

const Contacts = () => {
  const [showAddEditContactModal, setShowAddEditContactModal] = useState(false);
  const [shwoConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact>();

  const dispatch = useDispatch<AppDispatch>();
  const {contacts, loading: isContactsLoading} = useSelector(
    (state: RootState) => state.contacts,
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const onCloseAddEditModal = () => {
    setShowAddEditContactModal(false);
    setSelectedContact(undefined);
  };

  const onPressAddContact = () => {
    setShowAddEditContactModal(true);
  };
  const onEditContact = (contact: Contact) => {
    setSelectedContact(contact);
    setShowAddEditContactModal(true);
  };
  const onDeleteContact = (contact: Contact) => {
    setSelectedContact(contact);
    setShowConfirmationModal(true);
  };

  const onOptDeleteContact = () => {
    dispatch(removeContact(selectedContact?.id as any));
    setShowConfirmationModal(false);
    setSelectedContact(() => undefined);
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <AppContainer>
      <AppHeader
        onPressAdd={onPressAddContact}
        hideAddIcon={contacts.length ? false : true}
      />
      <ContactList
        contacts={contacts}
        onEdit={onEditContact}
        onDelete={onDeleteContact}
        onAddContact={onPressAddContact}
        isContactsLoading={isContactsLoading}
      />
      <AddEditContactModal
        isVisible={showAddEditContactModal}
        onClose={onCloseAddEditModal}
        editContactData={selectedContact}
      />
      <ConfirmationModal
        isVisible={shwoConfirmationModal}
        onClose={closeConfirmationModal}
        message={`You want to delete ${selectedContact?.fullname || ''}`}
        onConfirm={onOptDeleteContact}
      />
    </AppContainer>
  );
};

export default Contacts;
