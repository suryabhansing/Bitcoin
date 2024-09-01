import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomeHeader from '../../components/CustomeHeader';
import Images from '../../constants/Images';
import GolobalStyles from '../../constants/GolobalStyles';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';

import CustomeButton from '../../components/CustomeButton';
import Colors from '../../constants/Colors';

import OTPTextView from 'react-native-otp-textinput';
import {useIsFocused} from '@react-navigation/native';

const OtpVerificationScreen = ({navigation, route}) => {
  const mobile = route?.params?.mobile;

  const [timeLeft, setTimeLeft] = useState(120);
  const isFocused = useIsFocused();
  useEffect(() => {
    let timerInterval;

    if (isFocused) {
      timerInterval = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 0) {
            clearInterval(timerInterval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [isFocused]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Format minutes and seconds as two digits
  const minutesFormatted = minutes.toString();
  const secondsFormatted = seconds.toString().padStart(2, '0');

  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader headerTitle={'Otp verification'} />
      <ScrollView>
        <Image source={Images.OTP} style={GolobalStyles.Image} />
        <View
          style={{
            marginHorizontal: WINDOW_WIDTH * 0.04,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[
              GolobalStyles.text2,
              {
                fontSize: 16,
                marginBottom: WINDOW_HEIGHT * 0.02,
              },
            ]}>
            An authentication code has been sent to {mobile}
          </Text>
          <OTPTextView
            inputCount={4}
            textInputStyle={styles.otpInput}
            containerStyle={{
              backgroundColor: Colors.screenBackground2,
            }}></OTPTextView>
          <View style={styles.bottomView}>
            <Text
              style={[
                GolobalStyles.text2,
                {color: Colors.lightShadow, fontSize: 16},
              ]}>
              I didn't receive code.
            </Text>
            <TouchableOpacity onPress={() => console.log('resend otp')}>
              <Text
                style={[
                  GolobalStyles.text2,
                  {color: Colors.yellow, fontSize: 16},
                ]}>
                {' '}
                Resend otp !
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={[
              GolobalStyles.text2,
              {
                fontSize: 16,
                marginBottom: WINDOW_HEIGHT * 0.02,
                color: Colors.baseColor,
              },
            ]}>
            {`${minutesFormatted}:${secondsFormatted} Sec Left`}
          </Text>
          <CustomeButton
            btnTitle={'Verify now'}
            linearGradientProps={{
              colors: Colors.aquaGradient,
            }}
            buttonStyle={{
              height: WINDOW_HEIGHT * 0.06,
              width: WINDOW_WIDTH * 0.82,
            }}
            onpress={() => navigation.navigate('CreatePasswordScreen')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  bottomView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',

    marginBottom: WINDOW_WIDTH * 0.03,
  },
  otpInput: {
    backgroundColor: Colors.pureBlack,
    borderRadius: 30,
    borderBottomWidth: 0,
    color: Colors.lightShadow,
    marginBottom: WINDOW_HEIGHT * 0.03,
  },
});
