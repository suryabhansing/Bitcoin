import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

import LinearGradient from 'react-native-linear-gradient';
const CustomeButton = ({btnTitle, onpress, ...rest}) => {
  return (
    <Button
      title={btnTitle}
      onPress={onpress}
      titleStyle={{fontSize: 12}}
      {...rest}
      radius={30}
      ViewComponent={LinearGradient}
    />
  );
};

export default CustomeButton;

const styles = StyleSheet.create({});
