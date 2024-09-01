import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Icon, Input} from '@rneui/themed';
import Colors from '../constants/Colors';

import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/ScreenLayout';
import GolobalStyles from '../constants/GolobalStyles';

const CustomeInput = ({
  placeholder,
  leftIconName,
  leftIconType,
  rightIconName,
  rightIconType,
  righIconPress,
  ...rest
}) => {
  return (
    <Input
      placeholder={placeholder ? placeholder : 'Type'}
      leftIcon={
        leftIconName && leftIconType ? (
          <Icon
            style={{marginLeft: WINDOW_WIDTH * 0.04}}
            type={leftIconType}
            name={leftIconName}
            size={WINDOW_HEIGHT * 0.028}
            color={Colors.red1}
          />
        ) : null
      }
      rightIcon={
        rightIconName && rightIconName ? (
          <Icon
            style={{marginRight: 10}}
            type={rightIconType}
            name={rightIconName}
            size={WINDOW_HEIGHT * 0.028}
            color={Colors.red1}
            onPress={righIconPress}
          />
        ) : null
      }
      inputStyle={{
        marginLeft: leftIconName ? 0 : WINDOW_WIDTH * 0.05,
        marginRight: rightIconName && rightIconType ? 0 : 10,
        color: Colors.text2,
      }}
      inputContainerStyle={[GolobalStyles.inputView]}
      {...rest}></Input>
  );
};

export default CustomeInput;

const styles = StyleSheet.create({});
