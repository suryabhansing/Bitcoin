import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {Header, Icon} from '@rneui/base';

import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';
import IconType from '../constants/IconType';

const SettingList = ({
  lefIconName,
  lefIconType,
  rightIconName,
  rightIcontype,
  headerTitle,
  leftIconPress,
  rightIconPress,
  ...rest
}) => {
  const navigation = useNavigation();

  // Define a function to handle the left icon press
  const handleLeftIconPress = () => {
    if (leftIconPress) {
      leftIconPress();
    } else {
      navigation.goBack();
    }
  };
  return (
    <TouchableOpacity>
      <Header
        statusBarProps={{backgroundColor: Colors.screenBackground2}}
        leftComponent={
          <Icon
            name={lefIconName ? lefIconName : 'arrow-back-sharp'}
            type={lefIconType ? lefIconType : IconType.Ionicons}
            color={Colors.lightShadow}
          />
        }
        centerComponent={
          <Text
            numberOfLines={1}
            style={[styles.headerText, {color: Colors.lightShadow}]}>
            {headerTitle}
          </Text>
        }
        centerContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        rightComponent={
          <Icon
            name={rightIconName ? rightIconPress : 'right'}
            type={rightIcontype ? rightIcontype : IconType.AntDesign}
            color={Colors.lightShadow}
          />
        }
        containerStyle={{
          backgroundColor: Colors.screenBackground2,
          justifyContent: 'space-around',
          borderBottomWidth: 0,
        }}
        {...rest}
      />
    </TouchableOpacity>
  );
};

export default SettingList;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,

    alignSelf: 'flex-start',
    marginLeft: -35,

    maxWidth: 200,
  },
  roundView: {
    backgroundColor: Colors.pureBlack,
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
