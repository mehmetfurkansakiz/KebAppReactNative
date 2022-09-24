import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from '../components/Button/Button';

function Welcome({navigation}) {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>KebApp</Text>
      <Button text="üye kaydı oluştur" onPress={goToMemberSign} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    margin: 10,
  },
});

export default Welcome;
