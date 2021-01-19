import * as React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import colors from '../../../values/colors';
import CalendarSvg from '../../../images/calendar.svg';
import ContractSvg from '../../../images/contract.svg';
import CopySvg from '../../../images/copy.svg';
import TeamworkSvg from '../../../images/teamwork.svg';
import UserSvg from '../../../images/user.svg';
import VoteSvg from '../../../images/vote.svg';
import {useCallback} from 'react';
import variables from '../../../values/variables';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundSvg: {
    height: 510,
    width: screenWidth,
  },
  options: {
    position: 'absolute',
    backgroundColor: colors.whiteColor,
    width: '85%',
    left: '7.5%',
    marginTop: '12%',
    height: 390,
    borderRadius: 6,
    shadowColor: colors.blackColor,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.6,
    shadowRadius: 17,
    elevation: 23,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  option: {
    width: '50%',
    height: '33.3333%',
    borderRightWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: colors.borderColor,
  },
  buttonArea: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 41,
    alignItems: 'center',
  },
  text: {
    fontSize: variables.mediumFontSize,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.textColor,
  },
});

const BackgroundSvg = () => (
  <Svg
    viewBox={`0 0 ${screenWidth} ${screenHeight}`}
    width={screenWidth * 1.1}
    height={800}
    preserveAspectRatio="none">
    <Path
      id="Path_1"
      dataName="Path 1"
      d="M0,0H375l.221,225.983s-13.882,2.1-23.13.216c-68.5-13.969-184.776-73.38-241.684-73.38C16.657,152.819,0,92,0,92Z"
      fill={colors.primaryColor}
      stroke="red"
    />
    <Path
      id="Path_2"
      dataName="Path 2"
      d="M389.484,146.341s19.073,104.367-6.643,101.1c-.976-.124-14.589-2.556-20.876-7.6-22.218-17.818-20.826,1.271-24.449,2.164-24.554,6.049-48.148-29.85-31.371,5.845,7.647,16.27,6.356,73.9,2.633,76.286-7.6,4.876-30.787,5.54-39.711-3.006-14.443-13.832-70.026-77.777-70.026-77.777Z"
      transform="matrix(0.454, -0.891, 0.891, 0.454, -307.707, 539.145)"
      fill={colors.primaryColor}
    />
    <Path
      id="Path_3"
      dataName="Path 3"
      d="M80.632,266.95s-1.413,21.47-3.36,28.758c-2.591,9.7-19.043,6.888-20.279,6.507-19.885-6.125-41.367-59.6-41.367-59.6Z"
      transform="translate(601.083 279.585) rotate(71)"
      fill={colors.primaryColor}
    />
  </Svg>
);

const Option = ({icon, text, goTo}) => {
  const onPress = useCallback(() => {
    goTo(text);
  }, [text, goTo]);

  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <View style={styles.buttonArea}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Menu = ({navigation}) => {
  const goTo = useCallback(
    (to) => {
      navigation.push(to);
    },
    [navigation],
  );

  return (
    <View style={styles.backgroundSvg}>
      <BackgroundSvg />
      <View style={styles.options}>
        <Option icon={<TeamworkSvg />} text="Blocos" goTo={goTo} />
        <Option icon={<UserSvg />} text="Deputados" goTo={goTo} />
        <Option icon={<CopySvg />} text="Frentes" goTo={goTo} />
        <Option icon={<CalendarSvg />} text="Legislaturas" goTo={goTo} />
        <Option icon={<ContractSvg />} text="Proposições" goTo={goTo} />
        <Option icon={<VoteSvg />} text="Votações" goTo={goTo} />
      </View>
    </View>
  );
};

export default Menu;
