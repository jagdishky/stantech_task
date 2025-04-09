import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import colors from '../../../styles/colors';
import { FONT_FAMILY, FONT_SIZE } from '../../../styles/typography';

const RegularText = (props: TextProps) => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.GREY_900,
    fontFamily: FONT_FAMILY.PRIMARY_REGULAR,
    fontSize: FONT_SIZE.NORMAL
  },
});

export default RegularText;
