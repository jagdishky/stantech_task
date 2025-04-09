import React, {useEffect} from 'react';
import {View} from 'react-native';
import AppNavigator from './navigation/appNavigator';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {createTable} from './sqlite/database';

const App = () => {
  useEffect(() => {
    createTable();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </View>
  );
};

export default App;
