import {View, TextInput, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen () {
  return (
    <View style = {styles.inputContainer}>
        <TextInput/>
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
   backgroundColor: '#72063c',
   elevation: 10,
   shadowColor: 'black',
   shadowOffset: {width: 2, height: 2},
   shadowOpacity: 0.5,
   shadowRadius: 7,
 },

});