import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import RegularText from '../text/RegularText';
import Title from '../text/Title';
import { spacing } from '../../../styles/spacing';
import colors from '../../../styles/colors';
import { APP_PADDING_HORIZONTAL } from '../../../styles/globalStyles';
import { ImagesPath } from '../../../utility/imagePath';

type AppHeaderProps = {
  onPressAdd: () => void;
  hideAddIcon?: boolean;
};

const AppHeader = (props: AppHeaderProps) => {
  return (
    <View style={styles.mainContainer}>
      <Title style={styles.title}>Contacts</Title>
      {props.hideAddIcon != true ? (
        <TouchableOpacity onPress={props.onPressAdd}>
          <Image source={ImagesPath.ADD_ICON} style={styles.plucIcon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.APP_BACKGROUND,
    paddingHorizontal: APP_PADDING_HORIZONTAL,
    paddingVertical: spacing.PADDING_12,
    justifyContent: 'center',
    minHeight: spacing.HEIGHT_56,
    marginTop: spacing.MARGIN_16
  },
  title: {
    position: 'absolute',
    width: spacing.FULL_WIDTH,
    textAlign: 'center',
  },
  plucIcon: {
    width: spacing.WIDTH_24,
    height: spacing.WIDTH_24,
    backgroundColor: colors.THEME,
    borderRadius: spacing.RADIUS_30,
    alignSelf: 'flex-end',
  },
});

export default AppHeader;
