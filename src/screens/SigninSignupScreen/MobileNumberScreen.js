import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomeHeader from '../../components/CustomeHeader';
import Images from '../../constants/Images';
import GolobalStyles from '../../constants/GolobalStyles';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import CustomeInput from '../../components/CustomeInput';
import CustomeButton from '../../components/CustomeButton';
import Colors from '../../constants/Colors';
import DropDownComponent from '../../components/DropDownComponent';

const MobileNumberScreen = ({navigation}) => {
  const [mobile, setMobile] = useState('');
  const [code, setCode] = useState('');

  const countrycode = [
    {label: '+81', value: 81},
    {label: '+88', value: 88},
    {label: '+91', value: 91},
    {label: '+92', value: 92},
    {label: '+93', value: 93},
  ];
  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader headerTitle={'Sign in'} />
      <ScrollView>
        <Image source={Images.SIGNUP} style={GolobalStyles.Image} />
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
            Simply enter your phone number to login or create an account.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
              }}>
              <DropDownComponent
                data={countrycode}
                value={code ? code : countrycode[0]?.value}
                onChange={val => setCode(val?.value)}
                style={[
                  GolobalStyles.DropDownInput,
                  {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    width: WINDOW_WIDTH * 0.25,
                  },
                ]}
              />
            </View>

            <View style={{flex: 1}}>
              <CustomeInput
                placeholder={'Mobile'}
                value={mobile}
                onChangeText={text => setMobile(text)}
                maxLength={10}
                keyboardType="number-pad"
                inputContainerStyle={[
                  GolobalStyles.inputView,
                  {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    marginLeft: WINDOW_WIDTH * -0.21,
                    borderLeftWidth: 2,
                  },
                ]}
              />
            </View>
          </View>

          <Text
            style={[
              GolobalStyles.text2,
              {
                fontSize: 16,
                marginTop: WINDOW_HEIGHT * -0.02,
                marginBottom: WINDOW_HEIGHT * 0.02,
              },
            ]}>
            By using our mobile app, you agree to our Privacy Policy and Terms
            of Use
          </Text>
          <CustomeButton
            btnTitle={'Continue'}
            linearGradientProps={{
              colors: Colors.aquaGradient,
            }}
            buttonStyle={{
              height: WINDOW_HEIGHT * 0.06,
              width: WINDOW_WIDTH * 0.82,
            }}
            disabled={mobile && mobile.length >= 10 ? false : true}
            onpress={() =>
              navigation.navigate('OtpVerificationScreen', {
                mobile: `+${code} ${mobile}`,
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MobileNumberScreen;

const styles = StyleSheet.create({});
