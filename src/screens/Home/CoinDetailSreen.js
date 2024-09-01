import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import GolobalStyles from '../../constants/GolobalStyles';
import CustomeHeader from '../../components/CustomeHeader';
import IconType from '../../constants/IconType';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import Colors from '../../constants/Colors';
import CardComponent from '../../components/CardComponent';
import CustomeButton from '../../components/CustomeButton';

const CoinDetailSreen = ({route}) => {
  const data = route?.params?.data;
  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader
        headerTitle={`${data?.name} (${data?.shortname})`}
        rightIconName={'hearto'}
        rightIcontype={IconType.AntDesign}
        rightIconPress={() => console.log('icon presed')}
      />
      <ScrollView>
        <CardComponent
          data={[
            {
              component: (
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={data?.image}
                    resizeMode="contain"
                    style={{
                      height: WINDOW_HEIGHT * 0.08,
                      width: WINDOW_WIDTH * 0.2,
                    }}
                  />
                  <View
                    style={{
                      width: WINDOW_WIDTH * 0.6,

                      marginLeft: 4,
                      rowGap: 8,
                    }}>
                    <Text
                      numberOfLines={2}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 20,
                          marginTop: 0,
                          alignSelf: 'flex-start',
                          color: Colors.lightShadow,
                        },
                      ]}>
                      ${data?.currentprice}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 16,
                          color: data?.isProfit
                            ? Colors.baseColor
                            : Colors.red1,
                          alignSelf: 'flex-start',
                        },
                      ]}>
                      {data?.isProfit ? '+' : '-'} ${data?.profit_loss_amount} ({' '}
                      {data?.isProfit ? '+' : '-'}
                      {data?.incre_decre}%)
                    </Text>
                  </View>
                </View>
              ),
            },
          ]}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CardComponent
            data={[
              {
                component: (
                  <View
                    style={{
                      width: WINDOW_WIDTH * 0.32,

                      marginLeft: 4,
                      rowGap: 8,
                    }}>
                    <Text
                      numberOfLines={2}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 18,
                          fontWeight: '200',
                          marginTop: 0,
                          alignSelf: 'flex-start',
                          color: Colors.baseColor,
                        },
                      ]}>
                      Market cap
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 16,
                          color: Colors.lightShadow,
                          alignSelf: 'flex-start',
                        },
                      ]}>
                      ${data?.coindDetail?.market_cap}
                    </Text>
                  </View>
                ),
              },
            ]}
          />
          <CardComponent
            data={[
              {
                component: (
                  <View
                    style={{
                      width: WINDOW_WIDTH * 0.32,

                      marginLeft: 4,
                      rowGap: 8,
                    }}>
                    <Text
                      numberOfLines={2}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 18,
                          fontWeight: '200',
                          marginTop: 0,
                          alignSelf: 'flex-start',
                          color: Colors.baseColor,
                        },
                      ]}>
                      Volume
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 16,
                          color: Colors.lightShadow,
                          alignSelf: 'flex-start',
                        },
                      ]}>
                      ${data?.coindDetail?.volume}
                    </Text>
                  </View>
                ),
              },
            ]}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CardComponent
            data={[
              {
                component: (
                  <View
                    style={{
                      width: WINDOW_WIDTH * 0.32,

                      marginLeft: 4,
                      rowGap: 8,
                    }}>
                    <Text
                      numberOfLines={1}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 18,
                          fontWeight: '200',
                          marginTop: 0,
                          alignSelf: 'flex-start',
                          color: Colors.baseColor,
                        },
                      ]}>
                      Available Supply
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 16,
                          color: Colors.lightShadow,
                          alignSelf: 'flex-start',
                        },
                      ]}>
                      ${data?.coindDetail?.available_supply}
                    </Text>
                  </View>
                ),
              },
            ]}
          />
          <CardComponent
            data={[
              {
                component: (
                  <View
                    style={{
                      width: WINDOW_WIDTH * 0.32,

                      marginLeft: 4,
                      rowGap: 8,
                    }}>
                    <Text
                      numberOfLines={1}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 18,
                          fontWeight: '200',
                          marginTop: 0,
                          alignSelf: 'flex-start',
                          color: Colors.baseColor,
                        },
                      ]}>
                      Total Supply
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 16,
                          color: Colors.lightShadow,
                          alignSelf: 'flex-start',
                        },
                      ]}>
                      ${data?.coindDetail?.total_supply}
                    </Text>
                  </View>
                ),
              },
            ]}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CardComponent
            data={[
              {
                component: (
                  <View
                    style={{
                      width: WINDOW_WIDTH * 0.32,

                      marginLeft: 4,
                      rowGap: 8,
                    }}>
                    <Text
                      numberOfLines={1}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 18,
                          fontWeight: '200',
                          marginTop: 0,
                          alignSelf: 'flex-start',
                          color: Colors.baseColor,
                        },
                      ]}>
                      Low(24 Hrs)
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 16,
                          color: Colors.lightShadow,
                          alignSelf: 'flex-start',
                        },
                      ]}>
                      ${data?.coindDetail?.low}
                    </Text>
                  </View>
                ),
              },
            ]}
          />
          <CardComponent
            data={[
              {
                component: (
                  <View
                    style={{
                      width: WINDOW_WIDTH * 0.32,

                      marginLeft: 4,
                      rowGap: 8,
                    }}>
                    <Text
                      numberOfLines={1}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 18,
                          fontWeight: '200',
                          marginTop: 0,
                          alignSelf: 'flex-start',
                          color: Colors.baseColor,
                        },
                      ]}>
                      High(24 Hrs)
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[
                        GolobalStyles.text1,
                        {
                          fontSize: 16,
                          color: Colors.lightShadow,
                          alignSelf: 'flex-start',
                        },
                      ]}>
                      ${data?.coindDetail?.high}
                    </Text>
                  </View>
                ),
              },
            ]}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <CustomeButton
            btnTitle={'Sell'}
            linearGradientProps={{
              colors: Colors.purpleGradient,
            }}
            buttonStyle={{
              height: WINDOW_HEIGHT * 0.06,
              width: WINDOW_WIDTH * 0.4,
            }}
            onpress={() => console.log('pressed')}
          />
          <CustomeButton
            btnTitle={'Buys'}
            linearGradientProps={{
              colors: Colors.aquaGradient,
            }}
            buttonStyle={{
              height: WINDOW_HEIGHT * 0.06,
              width: WINDOW_WIDTH * 0.4,
            }}
            onpress={() => console.log('pressed')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoinDetailSreen;

const styles = StyleSheet.create({
  nameTxt: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: 'medium',
    marginLeft: WINDOW_WIDTH * 0.05,
    maxWidth: WINDOW_WIDTH * 0.8,
  },
  GoodMornigTxt: {
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.lightShadow,
    marginLeft: WINDOW_WIDTH * 0.05,
    maxWidth: WINDOW_WIDTH * 0.8,
  },
});
