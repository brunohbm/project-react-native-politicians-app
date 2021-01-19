import 'react-native-gesture-handler';
import * as React from 'react';

import Menu from './components/Menu';
import Events from './components/Events';
import Container from '../../components/Container';

const Home = ({navigation}) => {
  return (
    <Container>
      <Menu navigation={navigation} />
      <Events />
    </Container>
  );
};

export default Home;
