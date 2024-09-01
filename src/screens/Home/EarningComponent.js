import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {earningData} from '../../constants/DummyData';
import {WINDOW_WIDTH} from '../../utils/ScreenLayout';
import GolobalStyles from '../../constants/GolobalStyles';
import Colors from '../../constants/Colors';
import {Icon} from '@rneui/themed';
import IconType from '../../constants/IconType';
import LinearGradient from 'react-native-linear-gradient';

const EarningComponent = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <LinearGradient
        colors={item?.gradientColor}
        style={{
          borderRadius: 12,
          backgroundColor: Colors.cardBackground,
          borderColor: Colors.cardBackground,
          padding: 10,
          marginHorizontal: 15,
          marginTop: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            numberOfLines={2}
            style={[
              GolobalStyles.text1,
              {
                fontSize: 12,
                marginTop: 0,
                color: Colors.lightShadow,
                textAlign: 'left',
                width: WINDOW_WIDTH * 0.4,
              },
            ]}>
            Total wallet balance
          </Text>
          <View
            style={{
              flexDirection: 'row',

              width: 90,
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: Colors.lightShadow,
                marginRight: 10,
              }}>
              {item?.unit}
            </Text>
            <Icon
              name="down"
              type={IconType.AntDesign}
              size={18}
              color={Colors.lightShadow}
            />
          </View>
        </View>

        <Text
          style={[
            GolobalStyles.text2,
            {
              fontSize: 24,
              alignSelf: 'flex-start',
              color: Colors.lightShadow,
            },
          ]}>
          ${item?.balance}
        </Text>
        <Text
          style={[
            GolobalStyles.text2,
            {
              alignSelf: 'flex-start',
              color: Colors.lightShadow,
              fontSize: 12,
            },
          ]}>
          {item?.type} Porfit
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            numberOfLines={2}
            style={[
              GolobalStyles.text1,
              {
                fontSize: 12,
                marginTop: 0,
                color: Colors.lightShadow,
                textAlign: 'left',
                width: WINDOW_WIDTH * 0.4,
              },
            ]}>
            ${item?.profit_loss_value}
          </Text>
          <View
            style={{
              flexDirection: 'row',

              width: 90,
              justifyContent: 'flex-end',
            }}>
            <Icon
              name="up"
              type={IconType.AntDesign}
              size={18}
              color={Colors.lightShadow}
            />
            <Text
              style={{
                alignSelf: 'center',
                color: Colors.lightShadow,
                marginLeft: 10,
              }}>
              {item?.is_profit ? '+' : '-'} {item?.profit_loss}%
            </Text>
          </View>
        </View>
      </LinearGradient>
    );
  };

  return (
    <View>
      <FlatList
        data={earningData}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={{marginBottom: 0}}
      />
    </View>
  );
};

export default EarningComponent;

const styles = StyleSheet.create({});
