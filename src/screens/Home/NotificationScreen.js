import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import GolobalStyles from '../../constants/GolobalStyles';
import CustomeHeader from '../../components/CustomeHeader';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import Colors from '../../constants/Colors';
import CardComponent from '../../components/CardComponent';
import Images from '../../constants/Images';
import {NotificationData} from '../../constants/DummyData';

const NotificationScreen = ({route, navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => console.log('fajsdkj')}>
        <CardComponent
          data={[
            {
              component: (
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={Images.LOGO}
                    resizeMode="contain"
                    style={{
                      height: WINDOW_HEIGHT * 0.08,
                      width: WINDOW_WIDTH * 0.2,
                    }}
                  />
                  <View
                    style={{
                      width: WINDOW_WIDTH * 0.62,

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
                      {item?.title}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        numberOfLines={2}
                        style={[
                          GolobalStyles.text1,
                          {
                            fontSize: 12,
                            color: Colors.lightShadow,
                            alignSelf: 'flex-start',
                            maxWidth: WINDOW_WIDTH * 0.5,
                          },
                        ]}>
                        {item?.text}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          GolobalStyles.text1,
                          {
                            fontSize: 14,
                            color: Colors.baseColor,
                            alignSelf: 'flex-end',
                          },
                        ]}>
                        {item?.time}
                      </Text>
                    </View>
                  </View>
                </View>
              ),
            },
          ]}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader headerTitle={'Notification'} />

      <FlatList data={NotificationData} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
