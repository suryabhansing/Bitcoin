import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WINDOW_WIDTH} from '../../utils/ScreenLayout';
import GolobalStyles from '../../constants/GolobalStyles';
import Colors from '../../constants/Colors';
import Images from '../../constants/Images';
import CustomeButton from '../../components/CustomeButton';

const WalletBalanceComponent = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={Images.BALANCE_CARD}
        imageStyle={{borderRadius: 12}}
        style={{
          borderRadius: 12,
          backgroundColor: Colors.cardBackground,
          borderColor: Colors.cardBackground,
          padding: 10,
          marginHorizontal: 15,
          marginTop: 15,
        }}>
        <CustomeButton
          btnTitle={'BTC/USD'}
          linearGradientProps={{
            colors: Colors.purpleGradient,
          }}
          iconRight={true}
          buttonStyle={{
            width: WINDOW_WIDTH * 0.3,
          }}
          onpress={() => console.log('pressed')}
        />
        <Text
          style={[
            GolobalStyles.text2,
            {
              fontSize: 24,
              alignSelf: 'flex-start',
              color: Colors.lightShadow,
            },
          ]}>
          $ 5,781.00
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
            + $248.23 (+0.35)
          </Text>
          <View
            style={{
              flexDirection: 'row',

              marginLeft: 40,

              justifyContent: 'flex-end',
            }}>
            <CustomeButton
              btnTitle={'Add Balance'}
              linearGradientProps={{
                colors: Colors.pinkGradeient,
              }}
              iconRight={true}
              buttonStyle={{
                width: WINDOW_WIDTH * 0.3,
              }}
              onpress={() => console.log('pressed')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WalletBalanceComponent;

const styles = StyleSheet.create({});
