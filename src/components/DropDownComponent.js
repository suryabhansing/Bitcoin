import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Icon} from '@rneui/themed';
import {Dropdown} from 'react-native-element-dropdown';
import Colors from '../constants/Colors';

import IconType from '../constants/IconType';

import DropDownItemList from './DropDownItemList';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/ScreenLayout';
import GolobalStyles from '../constants/GolobalStyles';

const DropDownComponent = ({
  height,
  width,
  required,

  errorMessage,
  ...rest
}) => {
  return (
    <Dropdown
      labelField={'label'}
      valueField={'value'}
      activeColor={Colors.baseColor}
      placeholder={'Select ...'}
      placeholderStyle={GolobalStyles.text2}
      selectedTextStyle={[GolobalStyles.text2]}
      style={[GolobalStyles.DropDownInput]}
      containerStyle={{
        backgroundColor: Colors.pureBlack,
        borderRadius: 8,
        padding: 8,
      }}
      renderItem={item => <DropDownItemList item={item}></DropDownItemList>}
      {...rest}
      renderRightIcon={() => (
        <Icon
          style={{marginRight: WINDOW_WIDTH * 0.04}}
          name={'caretdown'}
          size={20}
          type={IconType.AntDesign}
          color={Colors.text2}
        />
      )}
    />
  );
};

export default DropDownComponent;

const styles = StyleSheet.create({});
