import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import GolobalStyles from '../../constants/GolobalStyles';
import CustomeHeader from '../../components/CustomeHeader';
import IconType from '../../constants/IconType';
import TrendsComponent from './TrendsComponent';
import WalletBalanceComponent from './WalletBalanceComponent';

const PortFolioScreen = () => {
  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader
        headerTitle={'Portfolio'}
        rightIconName={'dots-three-vertical'}
        rightIcontype={IconType.Entypo}
        rightIconPress={() => console.log('icon presed')}
      />
      <ScrollView>
        <View style={{rowGap: 20}}>
          <WalletBalanceComponent />
          <TrendsComponent showAllData={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PortFolioScreen;

const styles = StyleSheet.create({});
