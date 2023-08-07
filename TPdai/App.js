import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, SafeAreaView, Button, TouchableOpacity, Pressable} from 'react-native';

const App = () => {  
  const [name, handleNombreChange] = React.useState('');  
  const [cel, onChangeNumber] = React.useState('');
  return (    
  <SafeAreaView style={styles.container}>      
  <Text>Nombre</Text>      
  <TextInput        
  style={styles.input}        
  placeholder="ingrese su nombre"        
  onChangeText={handleNombreChange}        
  value={name}
  />
  <Text>Teléfono</Text>      
  <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={cel}
        placeholder="ingrese su teléfono"
        keyboardType="numeric"
      />
  </SafeAreaView>  
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
