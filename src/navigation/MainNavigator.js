import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskListScreen from '../screens/TaskListScreen';
import DropDownScreen from '../screens/DropDownScreen';

import IntroScreen from '../screens/StratUpScreen/IntroScreen';
import SplashScreen from '../screens/StratUpScreen/SplashScreen';
import SignUpScreen from '../screens/SigninSignupScreen/SignUpScreen';
import LoginScreen from '../screens/SigninSignupScreen/LoginScreen';
import MobileNumberScreen from '../screens/SigninSignupScreen/MobileNumberScreen';
import ForgetpasswordScreen from '../screens/SigninSignupScreen/ForgetpasswordScreen';
import CreatePasswordScreen from '../screens/SigninSignupScreen/CreatePasswordScreen';
import LocationScreen from '../screens/SigninSignupScreen/LocationScreen';
import OtpVerificationScreen from '../screens/SigninSignupScreen/OtpVerificationScreen';
import BottomTabNavigation from './BottomTabNavigation';
import Home from '../screens/Home/Home';
import PortFolioScreen from '../screens/Home/PortFolioScreen';
import MarketTrendScreen from '../screens/Home/MarketTrendScreen';
import CoinDetailSreen from '../screens/Home/CoinDetailSreen';
import SettingScreen from '../screens/Home/SettingScreen';
import NotificationScreen from '../screens/Home/NotificationScreen';
import ProfileDetailScreen from '../screens/Home/ProfileDetailScreen';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarColor: Colors.screenBackground2,
        }}
        initialRouteName="SplashScreen">
        <Stack.Screen name="TaskListScreen" component={TaskListScreen} />
        <Stack.Screen name="DropDownScreen" component={DropDownScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="MobileNumberScreen"
          component={MobileNumberScreen}
        />
        <Stack.Screen
          name="ForgetpasswordScreen"
          component={ForgetpasswordScreen}
        />
        <Stack.Screen
          name="CreatePasswordScreen"
          component={CreatePasswordScreen}
        />
        <Stack.Screen
          name="OtpVerificationScreen"
          component={OtpVerificationScreen}
        />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PortFolioScreen" component={PortFolioScreen} />
        <Stack.Screen name="MarketTrendScreen" component={MarketTrendScreen} />
        <Stack.Screen name="CoinDetailSreen" component={CoinDetailSreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen
          name="ProfileDetailScreen"
          component={ProfileDetailScreen}
        />
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
