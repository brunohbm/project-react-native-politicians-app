import React from 'react';
import {Text, View} from 'react-native';
import Container from '../../components/Container';
import List from '../../components/List';
import colors from '../../values/colors';

const BlocosScreen = ({navigation}) => {
  return (
    <Container headerTitle="Blocos" color={colors.primaryColor}>
      <List />
    </Container>
  );
};

export default BlocosScreen;
