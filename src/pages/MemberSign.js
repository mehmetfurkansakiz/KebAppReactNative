import React, {useState} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button/Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userCity, setUserCity] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail || !userCity) {
      Alert.alert('KebApp', 'Lütfen tüm bilgileri eksiksiz doldurun!');
      return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userCity,
    };

    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <SafeAreaView>
      <Input
        label="Adı:"
        placeholder={'İsminizi giriniz'}
        onChangeText={setUserName}
      />
      <Input
        label="Soyadı:"
        placeholder={'Soyadınızı giriniz'}
        onChangeText={setUserSurname}
      />
      <Input
        label="Yaş:"
        placeholder={'Yaşınızı giriniz'}
        onChangeText={setUserAge}
      />
      <Input
        label="E-posta Adresi:"
        placeholder={'E-posta adresinizi giriniz'}
        onChangeText={setUserMail}
      />
      <Input
        label="Şehir:"
        placeholder={'Yaşadığınız şehri giriniz'}
        onChangeText={setUserCity}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default MemberSign;
