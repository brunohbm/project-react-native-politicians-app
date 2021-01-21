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
  containerHeaderSpacement: {
    paddingTop: 60,
  },
});

const Container = ({headerTitle, children, color}) => {
  const containerStyle = useMemo(() => {
    const containerStyles = [styles.container];

    if (color) {
      containerStyles.push({backgroundColor: color});
    }

    if (headerTitle) {
      containerStyles.push(styles.containerHeaderSpacement);
    }

    return containerStyles;
  }, [color, headerTitle]);

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
