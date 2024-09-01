import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SeparatorComponent from './SeparatorComponent';
import Colors from '../constants/Colors';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/ScreenLayout';
import {Icon, Card} from '@rneui/themed';
import IconType from '../constants/IconType';

const CardComponent = ({
  headerName, //key for displaying header of card
  data, //contain key value pair to display data
  allData, //contain all data
  editButton,
  deleteButton,
  rightStatus,
  status,
  action,
}) => {
  return (
    <Card
      containerStyle={{
        borderRadius: 12,
        backgroundColor: Colors.cardBackground,
        borderColor: Colors.cardBackground,
      }}>
      <View style={{flex: 1, alignContent: 'center'}}>
        {data.map((itm, index) => (
          <View
            key={index}
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {itm?.key && (
                <Text
                  numberOfLines={2}
                  style={[
                    styles.cardHeadingTxt,
                    {color: Colors.pureBlack, maxWidth: '50%'},
                  ]}>
                  {itm.key} :{' '}
                </Text>
              )}

              {itm?.component ? (
                itm?.component
              ) : (
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={[
                    styles.cardtext,
                    {
                      color: itm?.keyColor || Colors.pureBlack,
                    },
                  ]}>
                  {itm.value ? itm?.value : '- - -'}
                </Text>
              )}
            </View>
          </View>
        ))}
      </View>
    </Card>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  headingTxt: {
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
    alignSelf: 'center',
    marginBottom: 2,
  },
  cardContainer: {
    margin: WINDOW_WIDTH * 0.03,
    flex: 1,
    rowGap: WINDOW_HEIGHT * 0.01,
  },

  cardtext: {
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 20,
    textTransform: 'uppercase',
    flexShrink: 1,
  },
  actionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionView2: {
    maxWidth: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 10,
  },
  cardHeadingTxt: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 20,
    textTransform: 'uppercase',
  },
});
