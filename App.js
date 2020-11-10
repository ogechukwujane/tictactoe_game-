

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
   StatusBar,
} from 'react-native';
import Tictactoe from './src/screen/Tictacgame'

const App = () => {
  return (
    <>
    <StatusBar barStyle='dark-content' />
    <SafeAreaView style ={style.container}>
      <Tictactoe/>
    </SafeAreaView>
    </>

  );
};


const style = StyleSheet.create({
  container: {
    flex: 1 
  }
})

export default App;
