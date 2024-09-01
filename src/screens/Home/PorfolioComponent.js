import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {marketData} from '../../constants/DummyData';
import CardComponent from '../../components/CardComponent';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import GolobalStyles from '../../constants/GolobalStyles';
import Colors from '../../constants/Colors';
import {Badge} from '@rneui/themed';

import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PorfolioComponent = ({showAllData, type, ...rest}) => {
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
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={item?.image}
                        resizeMode="contain"
                        style={{
                          height: WINDOW_HEIGHT * 0.06,
                          width: WINDOW_WIDTH * 0.15,
                        }}
                      />
                      <Text
                        numberOfLines={2}
                        style={[
                          GolobalStyles.text1,
                          {
                            fontSize: 18,
                            marginTop: 0,

                            textAlign: 'left',
                            width: WINDOW_WIDTH * 0.3,
                          },
                        ]}>
                        {item?.name}
                      </Text>
                      <Badge
                        value={`${item?.isProfit ? '+' : '-'} ${
                          item?.incre_decre
                        }%`}
                        containerStyle={{
                          alignSelf: 'center',
                        }}
                        badgeStyle={{
                          alignSelf: 'center',
                          backgroundColor: item?.isProfit
                            ? Colors.baseColor
                            : Colors.red1,
                          marginLeft: 10,
                        }}
                      />
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
                      ${item?.currentprice}
                    </Text>
                    <Text
                      style={[
                        GolobalStyles.text2,
                        {
                          alignSelf: 'flex-start',
                        },
                      ]}>
                      {item?.shortname}
                    </Text>
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
        <Text style={[GolobalStyles.text2, {color: Colors.lightShadow}]}>
          Portfolio
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('PortFolioScreen')}>
          <Text style={[GolobalStyles.text2, {fontSize: 16}]}>View All+</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <ListHeaderComponent />
      <FlatList
        data={showAllData ? marketData : marketData.slice(0, 3)}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={{marginBottom: 10}}
        {...rest}
      />
    </View>
  );
};

export default PorfolioComponent;

const styles = StyleSheet.create({});
