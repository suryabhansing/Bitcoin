import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import Images from '../../constants/Images';
import CustomeButton from '../../components/CustomeButton';

import GolobalStyles from '../../constants/GolobalStyles';
const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.screenBackground2,
      }}>
      <ScrollView>
        <View style={styles.ImageOuterView}>
          <Image source={Images.LOGO} style={GolobalStyles.Image} />
        </View>
        <View
          style={{
            marginHorizontal: WINDOW_WIDTH * 0.1,
            rowGap: WINDOW_HEIGHT * 0.02,
          }}>
          <Text style={GolobalStyles.text1}>
            {'Welocome to Cryptocurrency'}
          </Text>
          <Text style={GolobalStyles.text2}>
            {'Deliver your Order around the world without hesitation'}
          </Text>

          <CustomeButton
            btnTitle={'Log in'}
            linearGradientProps={{
              colors: Colors.purpleGradient,
            }}
            onpress={() => navigation.navigate('LoginScreen')}
          />
          <CustomeButton
            btnTitle={'Register'}
            linearGradientProps={{
              colors: Colors.aquaGradient,
            }}
            onpress={() => navigation.navigate('MobileNumberScreen')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  ImageOuterView: {
    alignSelf: 'center',
    marginTop: WINDOW_HEIGHT * 0.06,
    backgroundColor: Colors.pureBlack,
    width: WINDOW_WIDTH * 0.85,
    height: WINDOW_HEIGHT * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WINDOW_WIDTH * 0.1,
  },
});
