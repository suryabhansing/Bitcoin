import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import SettingList from '../../components/SettingList';
import {WINDOW_WIDTH} from '../../utils/ScreenLayout';
import Colors from '../../constants/Colors';

import IconType from '../../constants/IconType';
import {Icon} from '@rneui/themed';

const SettingComponent = () => {
  const [newsletterEnable, setNewsLetterEnable] = useState(false);
  const [messageEnable, setMessageEnable] = useState(false);
  const [phoneEnable, setPhoneEnable] = useState(false);
  const toggleSwitchNewLetter = () =>
    setNewsLetterEnable(previousState => !previousState);
  const toggleSwitchTextMesage = () =>
    setMessageEnable(previousState => !previousState);
  const togglePhone = () => setPhoneEnable(previousState => !previousState);
  return (
    <View
      style={{
        marginHorizontal: WINDOW_WIDTH * 0.01,
      }}>
      <View
        style={{
          backgroundColor: Colors.baseColor,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          height: 40,
          marginHorizontal: WINDOW_WIDTH * 0.03,
          marginTop: 15,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            marginLeft: 10,
            marginTop: 6,
          }}>
          Account
        </Text>
      </View>
      <View style={{marginHorizontal: 10}}>
        <SettingList
          headerTitle={'Change Password'}
          lefIconName={'lock'}
          lefIconType={IconType.Entypo}
        />
        <SettingList
          headerTitle={'Order Management'}
          lefIconName={'bell'}
          lefIconType={IconType.FontAwesome}
        />
        <SettingList
          headerTitle={'Document Management'}
          lefIconName={'setting'}
          lefIconType={IconType.AntDesign}
        />
        <SettingList
          headerTitle={'Payment'}
          lefIconName={'creditcard'}
          lefIconType={IconType.AntDesign}
        />
        <SettingList
          headerTitle={'Logout'}
          lefIconName={'logout'}
          lefIconType={IconType.SimpleLineIcons}
        />
      </View>
      <View
        style={{
          backgroundColor: Colors.cardBackground,

          height: 40,
          marginHorizontal: WINDOW_WIDTH * 0.03,
          marginTop: 15,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            marginLeft: 10,
            marginTop: 6,
          }}>
          More Options
        </Text>
      </View>
      <View style={{marginHorizontal: 10}}>
        <SettingList
          headerTitle={'Newletter'}
          lefIconName={'email-newsletter'}
          lefIconType={IconType.MaterialCommunityIcons}
          rightComponent={
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={newsletterEnable ? Colors.baseColor : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchNewLetter}
              value={newsletterEnable}
            />
          }
        />
        <SettingList
          headerTitle={'Text Message'}
          lefIconName={'email'}
          lefIconType={IconType.MaterialCommunityIcons}
          rightComponent={
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={messageEnable ? Colors.baseColor : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchTextMesage}
              value={messageEnable}
            />
          }
        />
        <SettingList
          headerTitle={'Phone Call'}
          lefIconName={'phone-in-talk'}
          lefIconType={IconType.MaterialCommunityIcons}
          rightComponent={
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={phoneEnable ? Colors.baseColor : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglePhone}
              value={phoneEnable}
            />
          }
        />
        <SettingList
          headerTitle={'Currency'}
          lefIconName={'currency-usd'}
          lefIconType={IconType.MaterialCommunityIcons}
          rightComponent={
            <View style={{flexDirection: 'row'}}>
              <Text>USD</Text>
              <Icon
                name={'right'}
                type={IconType.AntDesign}
                color={Colors.lightShadow}
              />
            </View>
          }
        />
        <SettingList
          headerTitle={'Language'}
          lefIconName={'language'}
          lefIconType={IconType.FontAwesome}
          rightComponent={
            <View style={{flexDirection: 'row'}}>
              <Text>English</Text>
              <Icon
                name={'right'}
                type={IconType.AntDesign}
                color={Colors.lightShadow}
              />
            </View>
          }
        />
        <SettingList
          headerTitle={'Link Accounts'}
          lefIconName={'link'}
          lefIconType={IconType.AntDesign}
          rightComponent={
            <View style={{flexDirection: 'row'}}>
              <Text>Google,facebook</Text>
              <Icon
                name={'right'}
                type={IconType.AntDesign}
                color={Colors.lightShadow}
              />
            </View>
          }
        />
      </View>
    </View>
  );
};

export default SettingComponent;

const styles = StyleSheet.create({});
