import { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import styled from 'styled-components/native';

//npm install styled-components --save     (quando houver conflito use essa tagcls) 

const TextStyled = styled.Text`
font-size:40px;
color: blue;

`

const App = () => {
  const [newText, setNewText] = useState('NÃO PRECIONADO');
  const handleOnpress = () => {
    setNewText('PRECIONADO');
  }
  return (
    <SafeAreaView>
      <Text style={styles.container}>Testando</Text>
      <TextStyled>{newText}</TextStyled>
      <Button title='Botão' onPress={handleOnpress}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'pink',
  }
})

export default App