import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import GolobalStyles from '../../constants/GolobalStyles';
import CustomeHeader from '../../components/CustomeHeader';
import IconType from '../../constants/IconType';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import Colors from '../../constants/Colors';
import TrendsComponent from './TrendsComponent';
import SearchBar from '../../components/SearchBar';

const MarketTrendScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader
        headerTitle={'Market trend'}
        rightIconName={'search1'}
        rightIcontype={IconType.AntDesign}
        rightIconPress={() => console.log('icon presed')}
      />
      <ScrollView>
        <View style={{rowGap: 20}}>
          {/*Seacrh componenet */}
          <SearchBar
            searchHeight={WINDOW_HEIGHT * 0.06}
            searchWidth={WINDOW_WIDTH * 0.9}
            onChangeText={val => {
              setSearchText(val);
            }}
            placeholderText={'Search ...'}
            value={searchText}
            onRightIconPress={() => {
              setSearchText('');
            }}
          />
          <TrendsComponent showAllData={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MarketTrendScreen;

const styles = StyleSheet.create({});
