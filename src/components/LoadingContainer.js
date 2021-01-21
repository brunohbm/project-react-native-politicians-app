import React from 'react';
import {View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';

const LoadingContainer = ({loading, children, loadingText}) => {
  return (
    <View>
      {children}
      <Spinner visible={loading} textContent={loadingText} />
    </View>
  );
};

LoadingContainer.propTypes = {
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
};

LoadingContainer.defaultProps = {
  loading: false,
  loadingText: 'Buscando dados...',
};

export default LoadingContainer;
