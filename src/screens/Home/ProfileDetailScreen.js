import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import GolobalStyles from '../../constants/GolobalStyles';
import CustomeHeader from '../../components/CustomeHeader';
import IconType from '../../constants/IconType';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import Colors from '../../constants/Colors';
import CustomeButton from '../../components/CustomeButton';
import Images from '../../constants/Images';
import CustomeInput from '../../components/CustomeInput';

const ProfileDetailScreen = ({route, navigation}) => {
  const [email, setEmail] = useState('youremail@website.com');
  const [name, setName] = useState('Wiliam Jonson');
  const [mobile, setMobile] = useState('+880 000 111 333');
  const [address, setAddress] = useState(
    'Iris Watson P.O. Box 283 8562 usce Rd.Frederick Nebrask',
  );
  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader headerTitle={'Profile Details'} />
      <ScrollView>
        <View
          style={{
            marginHorizontal: WINDOW_WIDTH * 0,
            rowGap: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            source={Images.LOGO}
            style={{height: WINDOW_HEIGHT * 0.18, width: WINDOW_WIDTH * 0.5}}
          />
          <Text style={GolobalStyles.text1}>John Smitha</Text>
          <Text style={GolobalStyles.text2}>Account Credit : $200.00 </Text>

          <CustomeInput
            placeholder={'Name'}
            leftIconName={'person'}
            leftIconType={IconType.Fontisto}
            rightIconName={'pencil'}
            rightIconType={IconType.EvilIcons}
            value={name}
            onChangeText={text => setName(text)}
          />
          <CustomeInput
            placeholder={'Mobile'}
            leftIconName={'phone'}
            leftIconType={IconType.Feather}
            rightIconName={'pencil'}
            rightIconType={IconType.EvilIcons}
            value={mobile}
            onChangeText={text => setMobile(text)}
          />
          <CustomeInput
            placeholder={'Email'}
            leftIconName={'email'}
            leftIconType={IconType.Fontisto}
            rightIconName={'pencil'}
            rightIconType={IconType.EvilIcons}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <CustomeInput
            placeholder={'Address'}
            leftIconName={'building'}
            leftIconType={IconType.FontAwesome5}
            rightIconName={'pencil'}
            rightIconType={IconType.EvilIcons}
            value={address}
            onChangeText={text => setAddress(text)}
          />
          <CustomeButton
            btnTitle={'Save now'}
            linearGradientProps={{
              colors: Colors.aquaGradient,
            }}
            buttonStyle={{
              height: WINDOW_HEIGHT * 0.06,
              width: WINDOW_WIDTH * 0.9,
            }}
            onpress={() => navigation.navigate('BottomTabNavigation')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileDetailScreen;

const styles = StyleSheet.create({});
