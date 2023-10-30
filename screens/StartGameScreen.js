import {View, TextInput, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen () {
  return (
    <View style = {styles.inputContainer}>
        <TextInput 
        style = {styles.numberInput} 
        maxLength={2} 
        keyboardType='number-pad' 
        />
           <PrimaryButton>Reset</PrimaryButton>
           <PrimaryButton>Confirm</PrimaryButton>
    </View>

  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
 inputContainer: {
   marginTop: 100,
   marginHorizontal: 20,
   padding: 16,
   borderRadius: 10,
   backgroundColor: '#4e0329',
   elevation: 10,
   shadowColor: 'black',
   shadowOffset: {width: 2, height: 2},
   shadowOpacity: 0.5,
   shadowRadius: 7,
 },

 numberInput: {
  height: 50,
  width: 50,
  fontSize: 32,
  borderBottomColor: '#ddb52f',
  borderBottomWidth: 2,
  color: '#ddb52f',
  marginVertical: 8,
  fontWeight: 'bold',
  textAlign: 'center',
 }

});