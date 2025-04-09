import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {
  ColorValue,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import colors from '../../../styles/colors';
// import {changeStatusBarColor} from '../../../utility/commonFunction';

type AppContainerProps = {
  statusBarColor?: ColorValue;
  barStyle?: StatusBarStyle;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  backgroundColor?: ColorValue;
};

function AppContainer({
  statusBarColor,
  barStyle,
  style,
  children,
  backgroundColor,
}: AppContainerProps) {
  // useFocusEffect(() => {
  //   changeStatusBarColor(
  //     statusBarColor || backgroundColor || colors.THEME,
  //     barStyle || 'dark-content',
  //   );
  // });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: backgroundColor || colors.APP_BACKGROUND,
      }}>
      <StatusBar
        backgroundColor={backgroundColor || colors.APP_BACKGROUND}
        barStyle={'dark-content'}
      />
      <View
        style={[
          {flex: 1},
          {backgroundColor: backgroundColor || colors.APP_BACKGROUND},
          style,
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

export default AppContainer;
