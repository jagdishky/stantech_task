import {Image, StyleSheet, View} from 'react-native';
import globalStyle from '../../styles/globalStyles';
import {spacing} from '../../styles/spacing';
import {FONT_SIZE} from '../../styles/typography';
import {ImagesPath} from '../../utility/imagePath';
import Button from '../common/button/Button';
import Modal from '../common/modal/Modal';
import RegularText from '../common/text/RegularText';
import Title from '../common/text/Title';

type ConfirmationModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmBtnText?: string;
  closeBtnText?: string;
  message?: string;
  isLoading?: boolean;
};

const ConfirmationModal = (props: ConfirmationModalProps) => {
  return (
    <Modal
      visible={props.isVisible}
      onClose={props.onClose}
      containerStyle={{justifyContent: 'center'}}
      children={
        <View style={styles.mainContainer}>
          <Image source={ImagesPath.WARNING} style={styles.icon} />
          <Title>Are you sure?</Title>
          <RegularText style={styles.message}>{props.message}</RegularText>
          <View style={styles.btnContainer}>
            <Button
              title={props.closeBtnText || 'Cancel'}
              isSecondary
              onPressButton={props.onClose}
              buttonStyle={styles.btn}
            />
            <Button
              title={props.confirmBtnText || 'Confirm'}
              onPressButton={props.onConfirm}
              buttonStyle={styles.btn}
              fetching={props.isLoading}
            />
          </View>
        </View>
      }></Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: spacing.PADDING_20,
    alignItems: 'center',
  },
  icon: {
    width: spacing.WIDTH_60,
    height: spacing.WIDTH_60,
  },
  message: {
    fontSize: FONT_SIZE.SEMI_MEDIUM,
    marginTop: spacing.MARGIN_4,
  },
  btnContainer: {
    marginTop: spacing.MARGIN_12,
    ...globalStyle.flexDirectionRow,
    gap: spacing.MARGIN_12,
  },
  btn: {
    flex: 1,
  },
});

export default ConfirmationModal;
