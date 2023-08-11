import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, SafeAreaView, Button, Alert, TouchableOpacity, Pressable, Keyboard,KeyboardAvoidingView , ImageBackground} from 'react-native';
import React, { PureComponent } from "react";
const App = () => {  
  const [name, handleNombreChange] = React.useState('');  
  const [cel, onChangeNumber] = React.useState('');
  const [mail, onChangeMail] = React.useState('');
  const [clave, onChangeClave] = React.useState('');
  return (    
    <KeyboardAvoidingView >
  <SafeAreaView style={styles.container}>      
<ImageBackground 
  source={require('./assets/sunny.png')} 
  style={styles.backgroundImage} >
        
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
      style={styles.button}
      title="Aceptar (button)"
      onPress={() => console.log("Nombre:", {name}," Teléfono:", {cel}," Email:",{mail}," Clave:",{clave})}
      >Aceptar (button)</Button>
      <TouchableOpacity
       style={styles.touchable}
      title="Aceptar (Touchable)"
      onPress={() => console.log("Nombre:", {name}," Teléfono:", {cel}," Email:",{mail}," Clave:",{clave})}
      ><Text style={styles.text1}>Aceptar (Touchable)</Text>
      </TouchableOpacity>
      <Pressable 
      style={styles.pressable}
      onPress={() => console.log("Nombre:",{name}, " Teléfono", {cel}," Email:",{mail}," Clave:",{clave})}>  
      <Text style={styles.text1}>Aceptar (Pressable)</Text> 
      </Pressable>
      </ImageBackground>
  </SafeAreaView>  
  </KeyboardAvoidingView >
  ); 
};

const styles = StyleSheet.create({
  text: {
    fontSize:48,
    justifyContent: 'center',
    alignItems: 'center',
    color: "white",
  },
  text1:{
    fontSize:15,
    justifyContent: 'center',
    alignItems: 'center',
    color: "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: "100%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  touchable:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: "100%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'yellow',  
  },
  pressable:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: "100%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'dodgerblue',
  },
  backgroundImage: {
    flex: 1,
    width: 1920,
    height: 1080,
    flexDirection: 'column',
    backgroundColor:'transparent',
    justifyContent: 'flex-start',
},
});


export default App;

