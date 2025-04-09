import React from 'react';
import {
  Modal as RNModal,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import colors from '../../../styles/colors';
import {APP_PADDING_HORIZONTAL} from '../../../styles/globalStyles';
import {spacing} from '../../../styles/spacing';

interface ViewServiceCheckSheetModalProps {
  visible: boolean;
  onClose: () => void;
  // children?: React.JSX.Element | React.JSX.Element[] | null ;
  children?: React.ReactNode | undefined;
  visibleViewStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const Modal = (props: ViewServiceCheckSheetModalProps) => {
  return (
    <RNModal
      visible={props.visible}
      onRequestClose={props.onClose}
      style={[styles.modalView, props.style]}
      animationType="fade"
      transparent={true}>
      <View style={[{flex: 1, justifyContent: 'center'}, props.containerStyle]}>
        <TouchableOpacity
          style={styles.transparentView}
          onPress={props.onClose}
          activeOpacity={1}
        />
        <View style={[styles.contentContainer, props.visibleViewStyle]}>
          {props.children}
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  modalView: {},
  transparentView: {
    backgroundColor: colors.TRANSPARENT_BLACK,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    backgroundColor: colors.WHITE,
    // flex: 1,
    marginHorizontal: APP_PADDING_HORIZONTAL,
    marginVertical: APP_PADDING_HORIZONTAL * 2,
    borderRadius: spacing.RADIUS_12,
    padding: APP_PADDING_HORIZONTAL,
  },
});

export default Modal;
