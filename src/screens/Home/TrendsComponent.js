import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {marketData} from '../../constants/DummyData';
import CardComponent from '../../components/CardComponent';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import GolobalStyles from '../../constants/GolobalStyles';
import Colors from '../../constants/Colors';
import {Icon} from '@rneui/themed';
import IconType from '../../constants/IconType';
import {TouchableOpacity} from 'react-native';
import CustomeButton from '../../components/CustomeButton';
import {useNavigation} from '@react-navigation/native';

const TrendsComponent = ({showAllData, ...rest}) => {
  const navigation = useNavigation();
  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CoinDetailSreen', {data: item})}>
          <CardComponent
            data={[
              {
                component: (
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={item?.image}
                      resizeMode="contain"
                      style={{
                        height: WINDOW_HEIGHT * 0.08,
                        width: WINDOW_WIDTH * 0.2,
                      }}
                    />
                    <View
                      style={{
                        width: WINDOW_WIDTH * 0.3,

                        marginLeft: 4,
                        rowGap: 8,
                      }}>
                      <Text
                        numberOfLines={2}
                        style={[
                          GolobalStyles.text1,
                          {fontSize: 18, marginTop: 0, alignSelf: 'flex-start'},
                        ]}>
                        {item?.name}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          GolobalStyles.text2,
                          {
                            fontSize: 18,
                            color: Colors.lightShadow,
                            alignSelf: 'flex-start',
                          },
                        ]}>
                        {item?.shortname}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: WINDOW_WIDTH * 0.3,

                        rowGap: 8,
                      }}>
                      <Text
                        numberOfLines={2}
                        style={[
                          GolobalStyles.text1,
                          {
                            fontSize: 18,
                            marginTop: 0,
                            alignSelf: 'flex-end',
                            color: Colors.lightShadow,
                          },
                        ]}>
                        ${item?.currentprice}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-end',
                          columnGap: 3,
                        }}>
                        <Icon
                          name={item?.isProfit ? 'up' : 'down'}
                          type={IconType.AntDesign}
                          color={item?.isProfit ? Colors.aprroved : Colors.red1}
                        />
                        <Text
                          numberOfLines={1}
                          style={[
                            GolobalStyles.text2,
                            {
                              fontSize: 18,
                              color: item?.isProfit
                                ? Colors.baseColor
                                : Colors.red1,
                              alignSelf: 'flex-end',
                            },
                          ]}>
                          {item?.isProfit ? '+' : '-'} {item?.incre_decre}%
                        </Text>
                      </View>
                    </View>
                  </View>
                ),
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: WINDOW_WIDTH * 0.08,
        }}>
        {showAllData ? (
          <CustomeButton
            btnTitle={'Highest holding'}
            linearGradientProps={{
              colors: Colors.aquaGradient,
            }}
            buttonStyle={
              {
                // height: WINDOW_HEIGHT * 0.06,
                // width: WINDOW_WIDTH * 0.82,
              }
            }
            onpress={() => console.log('pressed')}
          />
        ) : (
          <Text style={[GolobalStyles.text2, {color: Colors.lightShadow}]}>
            Market
          </Text>
        )}

        {showAllData ? (
          <CustomeButton
            btnTitle={'24 Hours'}
            linearGradientProps={{
              colors: Colors.purpleGradient,
            }}
            buttonStyle={{
              width: WINDOW_WIDTH * 0.3,
            }}
            onpress={() => console.log('pressed')}
          />
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('MarketTrendScreen')}>
            <Text style={[GolobalStyles.text2, {fontSize: 16}]}>View All+</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={showAllData ? marketData : marketData.slice(0, 3)}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={{marginBottom: 80}}
        {...rest}
      />
    </View>
  );
};

export default TrendsComponent;

const styles = StyleSheet.create({});
