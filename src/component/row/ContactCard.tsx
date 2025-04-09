import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Contact} from '../../sqlite/models/Contact';
import colors from '../../styles/colors';
import globalStyle, {APP_PADDING_HORIZONTAL} from '../../styles/globalStyles';
import {spacing} from '../../styles/spacing';
import {FONT_FAMILY, FONT_SIZE} from '../../styles/typography';
import {getInitialsOfName} from '../../utility/helper';
import RegularText from '../common/text/RegularText';
import DotMenuOptions from '../module/DotMenuOptions';

type ContactCardProps = {
  contact: Contact;
  index: number;
  onEdit: (contact: Contact) => void;
  onDelete: (contact: Contact) => void;
};
const ContactCard = (props: ContactCardProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View
      style={[
        styles.mainContainer,
        props.index === 0 && {marginTop: spacing.MARGIN_12},
      ]}>
      <View style={styles.iconContainer}>
        <RegularText style={styles.nameLetters}>
          {getInitialsOfName(props.contact.fullname)}
        </RegularText>
      </View>
      <View style={{flex: 1}}>
        <RegularText style={styles.name}>{props.contact.fullname}</RegularText>
        <RegularText style={styles.mobileNumber}>
          {props.contact.phone}
        </RegularText>
      </View>
      <DotMenuOptions
        options={[
          {label: 'Edit', onSelect: () => props.onEdit(props.contact)},
          {
            label: 'Delete',
            onSelect: () => props.onDelete(props.contact),
            labelStyle: {color: colors.RED_500},
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...globalStyle.flexDirectionRow,
    marginHorizontal: APP_PADDING_HORIZONTAL,
    gap: spacing.MARGIN_10,
    marginBottom: spacing.MARGIN_12,
    backgroundColor: colors.WHITE,
    paddingHorizontal: spacing.PADDING_12,
    paddingVertical: spacing.PADDING_12,
    borderRadius: spacing.RADIUS_8,
    borderWidth: spacing.WIDTH_1,
    borderColor: colors.GREY_300,
    // ...boxShadow(),
  },
  iconContainer: {
    width: spacing.WIDTH_30,
    height: spacing.WIDTH_30,
    backgroundColor: colors.GREY_300,
    borderRadius: spacing.RADIUS_30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameLetters: {
    fontSize: FONT_SIZE.VERY_SMALL,
  },
  name: {
    fontFamily: FONT_FAMILY.PRIMARY_MEDIUM,
  },
  mobileNumber: {},
  menuDots: {
    transform: [{rotate: '90deg'}],
    width: spacing.WIDTH_20,
    height: spacing.WIDTH_20,
    tintColor: colors.GREY_600,
  },
  editIcon: {
    width: spacing.WIDTH_24,
    height: spacing.WIDTH_24,
  },
});

export default ContactCard;
