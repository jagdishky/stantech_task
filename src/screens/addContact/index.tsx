import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../component/common/button/Button';
import AppContent from '../../component/common/container/AppContent';
import TextInput from '../../component/common/input/TextInput';
import Title from '../../component/common/text/Title';
import colors from '../../styles/colors';
import {APP_PADDING_HORIZONTAL} from '../../styles/globalStyles';
import {spacing} from '../../styles/spacing';

const AddContact = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 1}} />
      <AppContent style={styles.visibleContainer}>
        <Title>Add new contact</Title>
        <TextInput value="" onChangeText={() => {}} label="Name" />
        <TextInput value="" onChangeText={() => {}} label="Mobile no." />
        <Button
          title="Add"
          onPressButton={() => {}}
          buttonStyle={{alignSelf: 'center', width: '40%'}}
        />
      </AppContent>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  visibleContainer: {
    backgroundColor: colors.WHITE,
    padding: APP_PADDING_HORIZONTAL,
    borderTopLeftRadius: spacing.RADIUS_20,
    borderTopRightRadius: spacing.RADIUS_20,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default AddContact;
