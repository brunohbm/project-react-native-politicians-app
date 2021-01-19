import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import colors from '../values/colors';
import variables from '../values/variables';
import { useCallback } from 'react';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.whiteColor,
    paddingTop: variables.verticalPadding,
    paddingBottom: variables.verticalPadding,
    paddingLeft: variables.horizontalPadding,
    paddingRight: variables.horizontalPadding,
  },
  titleText: {
    fontWeight: '600',
    color: colors.textColor,
    fontSize: variables.mediumFontSize,
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
        <TouchableOpacity onPress={goBack}>
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
