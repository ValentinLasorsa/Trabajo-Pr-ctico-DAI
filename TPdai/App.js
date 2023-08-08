import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, SafeAreaView, Button, Alert, TouchableOpacity, Pressable, Keyboard} from 'react-native';
import React, { PureComponent } from "react";
const App = () => {  
  const [name, handleNombreChange] = React.useState('');  
  const [cel, onChangeNumber] = React.useState('');
  const [mail, onChangeMail] = React.useState('');
  const [clave, onChangeClave] = React.useState('');
  return (    
  <SafeAreaView style={styles.container}>      
  <StatusBar style='auto'></StatusBar>
  <Text  style={styles.text}>Nombre</Text>      
  <TextInput        
  style={styles.input}              
  onChangeText={handleNombreChange}        
  value={name}
  />
  <Text style={styles.text}>Teléfono</Text>      
  <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={cel}
        keyboardType="numeric"
      />
      <Text style={styles.text}>Email</Text>      
  <TextInput
        style={styles.input}
        onChangeText={onChangeMail}
        value={mail}
      />
      <Text style={styles.text}>Clave</Text>      
  <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={onChangeClave}
        value={clave}
      />
      <Button
      title="Aceptar (button)"
      onPress={() => console.log("Nombre:", {name}," Teléfono:", {cel}," Email:",{mail}," Clave:",{clave})}
      ></Button>
      <TouchableOpacity
      title="Aceptar (Touchable)"
      onPress={() => console.log("Nombre:", {name}," Teléfono:", {cel}," Email:",{mail}," Clave:",{clave})}
      ><Text>Aceptar (Touchable)</Text></TouchableOpacity>
  </SafeAreaView>  
  ); 
};

const styles = StyleSheet.create({
  text: {
    fontSize:48,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


export default App;

