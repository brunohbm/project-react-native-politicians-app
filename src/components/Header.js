import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import colors from '../values/colors';
import variables from '../values/variables';
import {useCallback} from 'react';

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.whiteColor,
    paddingTop: variables.verticalPadding,
    paddingBottom: variables.verticalPadding,
    paddingLeft: variables.horizontalPadding,
    paddingRight: variables.horizontalPadding,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: colors.blackColor,
    elevation: 15,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowRadius: 20,
    shadowOpacity: 1.0,
  },
  titleText: {
    fontWeight: '600',
    color: colors.textColor,
    fontSize: variables.mediumFontSize,
  },
  backIconContainer: {
    paddingRight: 15,
  },
});

const Header = ({title, canBack}) => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.header}>
      {canBack ? (
        <TouchableOpacity onPress={goBack} style={styles.backIconContainer}>
          <Icon
            name="arrow-left"
            color={colors.textColor}
            size={variables.mediumFontSize}
          />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

Header.propTypes = {
  canBack: PropTypes.bool,
};

Header.defaultProps = {
  canBack: true,
};

export default Header;
