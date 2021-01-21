import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import variables from '../values/variables';
import useDidMount from '../hooks/use-did-mount';
import useAxios from '../hooks/use-axios';
import {showRequestError} from '../helpers/error-helper';

import LoadingContainer from './LoadingContainer';

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 25,
    paddingBottom: variables.verticalPadding,
    paddingRight: variables.horizontalPadding,
    paddingLeft: variables.horizontalPadding,
  },
});

const List = ({}) => {
  const axios = useAxios();

  const [loading, setLoading] = useCallback(false);

  const requestInitialData = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get('');

      console.warn('response', response);
    } catch (error) {
      showRequestError(
        'Erro ao buscar os dado, por favor tente mais tarde',
        error,
      );
    } finally {
      setLoading(false);
    }
  }, [setLoading, axios]);

  useDidMount(() => {
    requestInitialData();
  });

  return (
    <View style={styles.listContainer}>
      <LoadingContainer loading={loading}>
        <View>
          <Text>testw</Text>
        </View>
      </LoadingContainer>
    </View>
  );
};

export default List;
