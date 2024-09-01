import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import {arrayData} from '../../constants/DummyData';
import GolobalStyles from '../../constants/GolobalStyles';

const ActionComponent = () => {
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            source={item?.image}
            style={{
              height: WINDOW_HEIGHT * 0.09,
              width: WINDOW_WIDTH * 0.3,
            }}
          />
        </TouchableOpacity>
        <Text style={[GolobalStyles.text2, {marginTop: WINDOW_HEIGHT * 0.02}]}>
          {item?.text}
        </Text>
      </View>
    );
  };
  return (
    <View style={{}}>
      <FlatList data={arrayData} renderItem={renderItem} horizontal />
    </View>
  );
};

export default ActionComponent;
