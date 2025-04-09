import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {spacing} from '../../styles/spacing';
import {ImagesPath} from '../../utility/imagePath';
import Button from '../common/button/Button';

type ContactNotFoundProps = {
  onPressAddContact: () => void;
};

const ContactNotFound = (props: ContactNotFoundProps) => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.img} source={ImagesPath.NOT_FOUND} />
      <Button
        buttonStyle={styles.btn}
        onPressButton={props.onPressAddContact}
        title="Add Contact"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  img: {
    width: spacing.FULL_SCREEN_WIDTH - spacing.WIDTH_105,
    height: spacing.HEIGHT_216,
  },
  btn: {
    marginTop: spacing.MARGIN_20,
  },
});

export default ContactNotFound;
