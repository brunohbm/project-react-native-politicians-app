import React, {useMemo} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import Header from './Header';

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
  },
  container: {
    height: '100%',
  },
});

const Container = ({headerTitle, children, color}) => {
  const containerStyle = useMemo(() => {
    if (color) {
      return [styles.container, {backgroundColor: color}];
    }

    return styles.container;
  }, [color]);

  return (
    <SafeAreaView style={containerStyle}>
      {headerTitle ? <Header title={headerTitle} /> : null}
      <ScrollView style={styles.scrollView}>
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

Container.propTypes = {
  headerTitle: PropTypes.string,
  color: PropTypes.string,
};

Container.defaultProps = {
  headerTitle: null,
  color: null,
};

export default Container;
