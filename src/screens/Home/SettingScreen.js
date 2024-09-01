import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import GolobalStyles from '../../constants/GolobalStyles';
import CustomeHeader from '../../components/CustomeHeader';
import IconType from '../../constants/IconType';
import Colors from '../../constants/Colors';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import CardComponent from '../../components/CardComponent';
import Images from '../../constants/Images';
import {Icon} from '@rneui/themed';
import SettingComponent from './SettingComponent';

const SettingScreen = ({route, navigation}) => {
  return (
    <SafeAreaView style={GolobalStyles.safeAreaView}>
      <CustomeHeader headerTitle={'Setting'} />
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileDetailScreen')}>
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
                        width: WINDOW_WIDTH * 0.55,

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
                        John smith
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          GolobalStyles.text1,
                          {
                            fontSize: 16,
                            color: Colors.baseColor,
                            alignSelf: 'flex-start',
                          },
                        ]}>
                        Basic Member
                      </Text>
                    </View>
                    <Icon
                      name="right"
                      type={IconType.AntDesign}
                      size={20}
                      color={Colors.lightShadow}
                      containerStyle={{alignSelf: 'center'}}
                    />
                  </View>
                ),
              },
            ]}
          />
        </TouchableOpacity>

        <SettingComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
