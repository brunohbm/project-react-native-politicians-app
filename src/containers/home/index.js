import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';

import Menu from './components/Menu';
import Events from './components/Events';

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
  },
});

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View>
          <Menu navigation={navigation} />
          <Events />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
