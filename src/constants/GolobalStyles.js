import {StyleSheet} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/ScreenLayout';
import Colors from './Colors';

const GolobalStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.screenBackground2,
  },
  Image: {
    resizeMode: 'contain',
    height: WINDOW_HEIGHT * 0.4,
    width: WINDOW_WIDTH * 0.7,
    alignSelf: 'center',
  },
  text1: {
    textAlign: 'center',
    fontSize: 30,
    color: Colors.baseColor,
    maxWidth: WINDOW_WIDTH * 0.6,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: WINDOW_HEIGHT * 0.01,
  },
  text2: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.text2,
    maxWidth: WINDOW_WIDTH * 0.8,
    alignSelf: 'center',
  },
  DropDownInput: {
    fontSize: 15,
    fontWeight: '300',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.pureBlack,
    height: WINDOW_HEIGHT * 0.061,
    marginHorizontal: 10,
    borderRadius: WINDOW_WIDTH * 0.05,
  },
  inputView: {
    borderRadius: 20,
    backgroundColor: Colors.pureBlack,
    borderBottomWidth: 0,
  },
});
export default GolobalStyles;
