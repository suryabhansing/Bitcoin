import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Images from '../../constants/Images';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import ProgressBar from 'react-native-progress/Bar';
import Colors from '../../constants/Colors';

const SplashScreen = ({navigation}) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 0.2);
      if (time == 1) {
        navigation.navigate('IntroScreen');
      }
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [navigation, time]);

  return (
    <SafeAreaView style={styles.mainView}>
      <Image source={Images.LOGO} style={styles.Image} />
      <Text style={styles.text1}>BITEX</Text>
      <ProgressBar
        color={Colors.baseColor}
        progress={time}
        width={WINDOW_WIDTH * 0.7}
        style={{marginTop: 20}}
      />
      <Text style={styles.text2}>Loading .......</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.screenBackground2,
  },
  text1: {
    textAlign: 'center',
    fontSize: 50,
    color: Colors.baseColor,
    maxWidth: WINDOW_WIDTH * 0.6,
    fontWeight: 'bold',
  },
  text2: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.purple,
    maxWidth: WINDOW_WIDTH * 0.8,
    marginVertical: WINDOW_HEIGHT * 0.04,
  },
  Image: {
    resizeMode: 'contain',
    height: WINDOW_HEIGHT * 0.4,
    width: WINDOW_WIDTH * 0.7,
  },
});
