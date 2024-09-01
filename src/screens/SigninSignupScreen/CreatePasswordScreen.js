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
import {Icon} from '@rneui/themed';

const CreatePasswordScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [secureVisible, setSecureVisible] = useState(true);
  function validatePassword(password) {
    const validations = [];

    // Check for minimum length
    const minLengthValid = password.length >= 8;
    validations.push({
      message: 'Must have at least 8 characters.',
      isValid: minLengthValid,
    });

    // Check for at least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);
    validations.push({
      message: 'Must have at least one uppercase letter.',
      isValid: hasUppercase,
    });

    // Check for at least one symbol
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    validations.push({
      message: 'Must have at least one symbol.',
      isValid: hasSymbol,
    });

    // Check for at least one number
    const hasNumber = /\d/.test(password);
    validations.push({
      message: 'Must have at least one number.',
      isValid: hasNumber,
    });

    // Overall validity based on all checks
    const isValid = validations.every(validation => validation.isValid);

    return {validations, isValid};
  }

  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader headerTitle={'Create Password'} />
      <ScrollView>
        <Image source={Images.CREATE_PASSWORD} style={GolobalStyles.Image} />
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
            Choose a secure password that will be easy for you to remember.
          </Text>
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

          {password &&
            validatePassword(password)?.validations.map(item => (
              <View
                style={{
                  flexDirection: 'row',
                  maxWidth: WINDOW_WIDTH * 0.7,
                }}>
                <Icon
                  name="check"
                  type={IconType.AntDesign}
                  style={{marginRight: WINDOW_WIDTH * 0.02}}
                  color={item?.isValid ? Colors.baseColor : Colors.red1}
                />
                <Text
                  style={[
                    GolobalStyles.text2,
                    {
                      fontSize: 16,
                      color: item?.isValid ? Colors.baseColor : Colors.red1,
                    },
                  ]}>
                  {item?.message}
                </Text>
              </View>
            ))}

          <CustomeButton
            btnTitle={'Continue'}
            linearGradientProps={{
              colors: Colors.aquaGradient,
            }}
            buttonStyle={{
              marginTop: WINDOW_HEIGHT * 0.03,
              height: WINDOW_HEIGHT * 0.06,
              width: WINDOW_WIDTH * 0.82,
            }}
            disable={password ? validatePassword(password)?.isValid : false}
            onpress={() => navigation.navigate('ForgetpasswordScreen')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePasswordScreen;

const styles = StyleSheet.create({});
