import React, {useEffect, useState} from 'react';
import Modal from '../common/modal/Modal';
import Title from '../common/text/Title';
import {StyleSheet} from 'react-native';
import TextInput from '../common/input/TextInput';
import Button from '../common/button/Button';
import {spacing} from '../../styles/spacing';
import {isInputEmpty, validateMobileNumber} from '../../utility/validation';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {Contact} from '../../sqlite/models/Contact';
import {
  createContact,
  editContact,
  fetchContacts,
} from '../../redux/slices/contacts.slice';

type AddEditContactModalProps = {
  isVisible: boolean;
  editContactData?: Contact;
  onClose: () => void;
};

const AddEditContactModal = (props: AddEditContactModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {loading: isContactLoading} = useSelector(
    (state: RootState) => state.contacts,
  );

  const [fullname, setFullname] = useState(
    props.editContactData?.fullname || '',
  );
  const [phone, setPhone] = useState(props.editContactData?.phone || '');
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);

  useEffect(() => {
    if (props.isVisible && props.editContactData) {
      setFullname(props.editContactData?.fullname);
      setPhone(props.editContactData?.phone);
    }
  }, [props.editContactData, props.isVisible]);

  useEffect(() => {
    validateFields();
  }, [fullname, phone]);

  const validateFields = () => {
    const mobileValidation = validateMobileNumber(phone);
    const fullNameValidation = isInputEmpty(fullname);

    if (!mobileValidation.success || !fullNameValidation.success)
      return setIsBtnEnabled(false);
    setIsBtnEnabled(true);
  };

  const onSubmit = async () => {
    if (props.editContactData) {
      await dispatch(
        editContact({id: props.editContactData.id, fullname, phone}),
      );
    } else {
      await dispatch(createContact({fullname, phone}));
    }
    dispatch(fetchContacts());
    closeModal();
  };

  const closeModal = () => {
    setFullname('');
    setPhone('');
    setIsBtnEnabled(false);
    props.onClose();
  };

  return (
    <Modal visible={props.isVisible} onClose={() => closeModal()}>
      <Title style={styles.title}>
        {props.editContactData ? 'Edit' : 'Add'} Contact
      </Title>
      <TextInput
        value={fullname}
        onChangeText={setFullname}
        placeHolder="Full name"
        mainViewStyle={{marginTop: spacing.MARGIN_14}}
      />
      <TextInput
        value={phone}
        onChangeText={setPhone}
        keyboardType="number-pad"
        placeHolder="Mobile number"
        maxChar={10}
      />
      <Button
        title={props.editContactData ? 'Update Contact' : 'Add Contact'}
        onPressButton={onSubmit}
        disabled={!isBtnEnabled}
        fetching={isContactLoading}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});

export default AddEditContactModal;
