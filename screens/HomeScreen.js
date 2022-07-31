import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import logo from '../assets/logo.png';

const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white h-full`, styles.container]}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100, height: 100, resizeMode:"contain",
          }}
          source={logo}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
  },
});

export default HomeScreen