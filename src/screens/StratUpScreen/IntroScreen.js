import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Images from '../../constants/Images';
import Colors from '../../constants/Colors';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/ScreenLayout';
import CustomeButton from '../../components/CustomeButton';
import LinearGradient from 'react-native-linear-gradient';
import GolobalStyles from '../../constants/GolobalStyles';

const IntroScreen = ({navigation}) => {
  const slides = [
    {
      key: 1,
      title: 'Title 1',
      text1: 'Welocome to Cryptocurrency',
      text2: 'Reference site about Lorem Ipsum, giving information origins',
      image: Images.INTRO1,
    },
    {
      key: 2,
      title: 'Title 2',
      text1: 'Buy & Sell Bitcoin',
      text2: 'Reference site about Lorem Ipsum, giving information origins',
      image: Images.INTRO2,
    },
    {
      key: 3,
      title: 'Rocket guy',
      text1: 'Welcome to Cryptocurrency',
      text2: 'Deliver your Order around the world without hesitation',
      image: Images.INTRO3,
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.mainView}>
        <CustomeButton
          btnTitle={`${index + 1} of ${slides.length}`}
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
            colors: Colors.pinkGradeient,
          }}
          buttonStyle={{
            width: WINDOW_WIDTH * 0.2,
          }}
        />
        <Image source={item.image} style={GolobalStyles.Image} />

        <Text style={GolobalStyles.text1}>{item.text1}</Text>
        <Text
          style={[GolobalStyles.text2, {marginVertical: WINDOW_HEIGHT * 0.03}]}>
          {item.text2}
        </Text>

        {item?.key == 3 && (
          <CustomeButton
            btnTitle={'Get started'}
            color={Colors.baseColor}
            buttonStyle={{width: WINDOW_WIDTH * 0.6}}
            linearGradientProps={{
              colors: Colors.aquaGradient,
            }}
            onpress={() => navigation.navigate('SignUpScreen')}
          />
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.screenBackground2}}>
      <AppIntroSlider
        data={slides}
        activeDotStyle={{
          backgroundColor: Colors.baseColor,
          width: WINDOW_WIDTH * 0.1,
        }}
        dotStyle={{
          backgroundColor: Colors.lightShadow,
        }}
        renderItem={renderItem}
        onDone={() => navigation.navigate('SignUpScreen')}
        onSkip={() => navigation.navigate('SignUpScreen')}
        showSkipButton
      />
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: WINDOW_HEIGHT * 0.06,
  },
});
