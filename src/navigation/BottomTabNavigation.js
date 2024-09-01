import {Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home/Home';
import SettingScreen from '../screens/Home/SettingScreen';
import ChatScreen from '../screens/Home/ChatScreen';
import WalletScreen from '../screens/Home/WalletScreen';
import PortFolioScreen from '../screens/Home/PortFolioScreen';
import AddScreen from '../screens/Home/AddScreen';
import {Icon} from '@rneui/themed';
import IconType from '../constants/IconType';
import Colors from '../constants/Colors';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/ScreenLayout';
import Images from '../constants/Images';

const BottomTabNavigation = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      style={{backgroundColor: Colors.screenBackground2}}
      labeled={false} // Disable labels
      barStyle={{
        backgroundColor: Colors.cardBackground,

        overflow: 'scroll',
        borderTopLeftRadius: WINDOW_WIDTH * 0.08,
        borderTopRightRadius: WINDOW_WIDTH * 0.08,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              type={IconType.Feather}
              color={focused ? Colors.baseColor : Colors.gray2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PortFolioScreen"
        component={PortFolioScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="wallet-outline"
              type={IconType.Ionicons}
              color={focused ? Colors.baseColor : Colors.gray2}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.PLUS}
              resizeMode="contain"
              style={{
                height: WINDOW_HEIGHT * 0.08,
                marginTop: WINDOW_HEIGHT * -0.023,
                width: WINDOW_WIDTH * 0.2,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="chatbubbles-outline"
              type={IconType.Ionicons}
              color={focused ? Colors.baseColor : Colors.gray2}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="settings"
              type={IconType.Feather}
              color={focused ? Colors.baseColor : Colors.gray2}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
