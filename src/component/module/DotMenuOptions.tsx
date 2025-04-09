import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import colors from '../../styles/colors';
import {APP_PADDING_HORIZONTAL} from '../../styles/globalStyles';
import {boxShadow} from '../../styles/Mixins';
import {spacing} from '../../styles/spacing';
import {ImagesPath} from '../../utility/imagePath';
import RegularText from '../common/text/RegularText';

type optionType = {
  label: string;
  onSelect: () => void;
  labelStyle?: StyleProp<TextStyle>;
};

type ReportModalProps = {
  containerStyle?: StyleProp<ViewStyle>;
  options: optionType[];
};

const OPTION_MARGIN_RIGHT = spacing.MARGIN_12 + APP_PADDING_HORIZONTAL;

const DotMenuOptions = (props: ReportModalProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
  });
  const buttonRef = useRef<View>(null);

  const offsetX = 70;

  const toggleMenu = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    } else {
      buttonRef?.current?.measure(
        (fx: any, fy: any, width: any, height: any, px: any, py: any) => {
          const screenHeight = Dimensions.get('window').height;
          const menuHeight = spacing.HEIGHT_216; // Adjust based on your menu height

          const newMenuPosition =
            py + height + menuHeight > screenHeight
              ? {top: py - menuHeight}
              : {top: py + height - offsetX};

          setMenuPosition(newMenuPosition);
          setIsMenuVisible(true);
        },
      );
    }
  };

  const onSelectOption = (option: optionType) => {
    setIsMenuVisible(false);
    option.onSelect();
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      <TouchableOpacity ref={buttonRef} onPress={toggleMenu}>
        <Image source={ImagesPath.MENU_DOTS} style={styles.menuDots} />
      </TouchableOpacity>

      {isMenuVisible && (
        <Modal
          transparent={true}
          animationType="none"
          visible={isMenuVisible}
          onRequestClose={() => setIsMenuVisible(false)}>
          <TouchableOpacity
            activeOpacity={1}
            style={[{flex: 1}, props.containerStyle]}
            onPress={() => setIsMenuVisible(false)}>
            <View style={[styles.menuContainer, menuPosition]}>
              {props.options.map((option, index) => (
                <TouchableOpacity
                  key={option.label}
                  activeOpacity={1}
                  style={[
                    styles.menu,
                    index !== 0 && {
                      // paddingTop: 0,
                      borderBottomWidth: 0,
                    },
                  ]}
                  onPress={() => onSelectOption(option)}>
                  <RegularText
                    style={[{textAlign: 'center'}, option.labelStyle]}>
                    {option.label}
                  </RegularText>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  menuDots: {
    transform: [{rotate: '90deg'}],
    width: spacing.WIDTH_20,
    height: spacing.WIDTH_20,
    tintColor: colors.GREY_600,
  },
  menuContainer: {
    position: 'absolute',
    // paddingVertical: spacing.PADDING_12,
    backgroundColor: colors.WHITE,
    ...boxShadow(colors.GREY_900, undefined, spacing.RADIUS_6, 0.1),
    borderRadius: spacing.RADIUS_8,
    width: '20%',
    right: OPTION_MARGIN_RIGHT,
  },
  menu: {
    paddingHorizontal: spacing.PADDING_10,
    paddingTop: spacing.PADDING_6,
    paddingBottom: spacing.MARGIN_6,
    borderBottomWidth: spacing.WIDTH_1,
    borderColor: colors.GREY_300,
  },
});

export default DotMenuOptions;
