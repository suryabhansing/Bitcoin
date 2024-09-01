import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {Header, Icon} from '@rneui/base';
import Colors from '../constants/Colors';
import IconType from '../constants/IconType';
import {useNavigation} from '@react-navigation/native';

const CustomeHeader = ({
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
    <Header
      statusBarProps={{backgroundColor: Colors.screenBackground2}}
      leftComponent={
        <TouchableOpacity
          onPress={handleLeftIconPress}
          style={styles.roundView}>
          <Icon
            name={lefIconName ? lefIconName : 'arrow-back-sharp'}
            type={lefIconType ? lefIconType : IconType.Ionicons}
            color={Colors.lightShadow}
          />
        </TouchableOpacity>
      }
      centerComponent={
        <View
          style={{
            width: '120%',
            alignItems: 'center',
          }}>
          <Text
            numberOfLines={1}
            style={[styles.headerText, {color: Colors.lightShadow}]}>
            {headerTitle}
          </Text>
        </View>
      }
      centerContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      rightComponent={
        rightIconName ? (
          <TouchableOpacity onPress={rightIconPress} style={styles.roundView}>
            <Icon
              name={rightIconName}
              type={rightIcontype}
              color={Colors.lightShadow}
            />
          </TouchableOpacity>
        ) : null
      }
      containerStyle={{
        backgroundColor: Colors.screenBackground2,
        justifyContent: 'space-around',
        borderBottomWidth: 0,
      }}
      {...rest}
    />
  );
};

export default CustomeHeader;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    // textTransform: 'uppercase',
  },
  roundView: {
    backgroundColor: Colors.pureBlack,
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
