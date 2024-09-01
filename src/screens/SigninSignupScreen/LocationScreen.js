import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomeHeader from '../../components/CustomeHeader';
import Images from '../../constants/Images';
import GolobalStyles from '../../constants/GolobalStyles';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';

import CustomeButton from '../../components/CustomeButton';
import Colors from '../../constants/Colors';
import DropDownComponent from '../../components/DropDownComponent';

const LocationScreen = ({navigation}) => {
  const [city, setCity] = useState('');
  const [countryCode, setCountryCodea] = useState('');

  const countrycode = [
    {label: 'India', value: 91},
    {label: 'America', value: 88},
    {label: 'Russia', value: 81},
    {label: 'Nepal', value: 92},
    {label: 'China', value: 93},
  ];
  const cityList = [
    {name: 'Mumbai', id: 1, countryId: 91},
    {name: 'Delhi', id: 2, countryId: 91},
    {name: 'Noida', id: 3, countryId: 91},
    {name: 'Banglore', id: 4, countryId: 91},
    {name: 'New York', id: 5, countryId: 88},
    {name: 'Los Angeles', id: 6, countryId: 88},
    {name: 'Moscow', id: 7, countryId: 81},
    {name: 'Saint Petersburg', id: 8, countryId: 81},
    {name: 'Kathmandu', id: 9, countryId: 92},
    {name: 'Pokhara', id: 10, countryId: 92},
    {name: 'Beijing', id: 11, countryId: 93},
    {name: 'Shanghai', id: 12, countryId: 93},
  ];

  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader headerTitle={'Select Location'} />
      <ScrollView>
        <Image source={Images.LOCATION} style={GolobalStyles.Image} />
        <View
          style={{
            marginHorizontal: WINDOW_WIDTH * 0.04,
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: WINDOW_HEIGHT * 0.03,
          }}>
          <DropDownComponent
            data={countrycode}
            value={countryCode}
            placeholder={'Select country name'}
            onChange={val => setCountryCodea(val?.value)}
            style={[GolobalStyles.DropDownInput]}
          />
          <DropDownComponent
            data={
              countryCode
                ? cityList
                    .filter(itm => itm.countryId == countryCode)
                    .map(item => {
                      return {
                        label: item?.name,
                        value: item?.id,
                      };
                    })
                : []
            }
            value={city}
            placeholder={'Select city name'}
            onChange={val => setCity(val?.value)}
            style={[GolobalStyles.DropDownInput]}
          />

          <CustomeButton
            btnTitle={'Continue'}
            linearGradientProps={{
              colors: Colors.aquaGradient,
            }}
            buttonStyle={{
              height: WINDOW_HEIGHT * 0.06,
              width: WINDOW_WIDTH * 0.82,
            }}
            onpress={() => navigation.navigate('LocationScreen')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({});
