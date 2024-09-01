import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import GolobalStyles from '../../constants/GolobalStyles';
import CustomeHeader from '../../components/CustomeHeader';
import IconType from '../../constants/IconType';
import {WINDOW_WIDTH} from '../../utils/ScreenLayout';
import Colors from '../../constants/Colors';

import ActionComponent from './ActionComponent';
import TrendsComponent from './TrendsComponent';
import PorfolioComponent from './PorfolioComponent';
import EarningComponent from './EarningComponent';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader
        lefIconName={'list'}
        headerTitle={'Home'}
        lefIconType={IconType.Entypo}
        rightIconName={'bell'}
        rightIcontype={IconType.Feather}
        rightIconPress={() => navigation.navigate('NotificationScreen')}
      />
      <ScrollView>
        <Text numberOfLines={1} style={[GolobalStyles.text1, styles.nameTxt]}>
          {'Hi Alex Smiths'}
        </Text>
        <Text
          numberOfLines={1}
          style={[GolobalStyles.text1, styles.GoodMornigTxt]}>
          {'Good Morning'}
        </Text>
        <View style={{rowGap: 20}}>
          <EarningComponent />
          <PorfolioComponent showAllData={false} />
          <ActionComponent />
          <TrendsComponent showAllData={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
