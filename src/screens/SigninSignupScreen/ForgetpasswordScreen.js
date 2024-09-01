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

import IconType from '../../constants/IconType';

const ForgetpasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader headerTitle={'Forget Password'} />
      <ScrollView>
        <Image source={Images.FORGET_PASSWORD} style={GolobalStyles.Image} />
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
            We will send a mail to the email address you registered to regain
            your password
          </Text>
          <CustomeInput
            placeholder={'Email'}
            leftIconName={'email'}
            leftIconType={IconType.MaterialCommunityIcons}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          {email && (
            <Text
              style={[
                GolobalStyles.text2,
                {
                  fontSize: 16,
                  marginTop: WINDOW_HEIGHT * -0.02,
                  marginBottom: WINDOW_HEIGHT * 0.02,
                  color: Colors.red1,
                },
              ]}>
              Email send to{' '}
              {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                ? email.replace(
                    /^(.{3}).*(@.*)$/,
                    '$1' + '*'.repeat(email.split('@')[0].length - 3) + '$2',
                  )
                : 'Invalid email address'}
            </Text>
          )}

          <CustomeButton
            btnTitle={'Send'}
            linearGradientProps={{
              colors: Colors.aquaGradient,
            }}
            buttonStyle={{
              height: WINDOW_HEIGHT * 0.06,
              width: WINDOW_WIDTH * 0.82,
            }}
            onpress={() => navigation.navigate('LocationScreen')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetpasswordScreen;

const styles = StyleSheet.create({});
