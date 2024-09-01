import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import CustomeHeader from '../../components/CustomeHeader';
import Images from '../../constants/Images';
import GolobalStyles from '../../constants/GolobalStyles';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import CustomeInput from '../../components/CustomeInput';
import IconType from '../../constants/IconType';
import CustomeButton from '../../components/CustomeButton';
import Colors from '../../constants/Colors';
import {CheckBox} from '@rneui/themed';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureVisible, setSecureVisible] = useState(true);
  const [check, setCheck] = useState(true);
  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader headerTitle={'Sign in'} />
      <ScrollView>
        <Image source={Images.LOGIN} style={GolobalStyles.Image} />
        <View
          style={{
            marginHorizontal: WINDOW_WIDTH * 0.04,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomeInput
            placeholder={'Email'}
            leftIconName={'email'}
            leftIconType={IconType.MaterialCommunityIcons}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <CustomeInput
            placeholder={'Password'}
            leftIconName={'lock'}
            leftIconType={IconType.Entypo}
            rightIconName={secureVisible ? 'eye-off' : 'eye'}
            rightIconType={IconType.Feather}
            secureTextEntry={secureVisible ? true : false}
            righIconPress={() => setSecureVisible(!secureVisible)}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={styles.checkBoxView}>
            <CheckBox
              title={'Remember me'}
              textStyle={[
                GolobalStyles.text2,
                {color: Colors.lightShadow, fontSize: 16, fontWeight: '200'},
              ]}
              checked={check}
              checkedColor={Colors.baseColor}
              onPress={() => setCheck(!check)}
              style={{backgroundColor: 'red'}}
              containerStyle={{
                backgroundColor: Colors.screenBackground2,
                padding: 0,
              }}
              disabledStyle={{backgroundColor: 'red'}}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('MobileNumberScreen')}>
              <Text
                style={[
                  GolobalStyles.text2,
                  {fontSize: 16, color: Colors.yellow},
                ]}>
                Forget password ?
              </Text>
            </TouchableOpacity>
          </View>
          <CustomeButton
            btnTitle={'Login'}
            linearGradientProps={{
              colors: Colors.aquaGradient,
            }}
            buttonStyle={{
              height: WINDOW_HEIGHT * 0.06,
              width: WINDOW_WIDTH * 0.82,
            }}
            onpress={() => navigation.navigate('BottomTabNavigation')}
          />
          <View style={styles.bottomView}>
            <Text
              style={[
                GolobalStyles.text2,
                {color: Colors.lightShadow, fontSize: 16},
              ]}>
              Already have not an account ?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('MobileNumberScreen')}>
              <Text
                style={[
                  GolobalStyles.text2,
                  {color: Colors.yellow, fontSize: 16},
                ]}>
                {' '}
                Sign up !
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bottomView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: WINDOW_HEIGHT * 0.1,
    marginBottom: WINDOW_WIDTH * 0.03,
  },
  checkBoxView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: WINDOW_HEIGHT * -0.02,
    marginBottom: WINDOW_HEIGHT * 0.01,
  },
});
