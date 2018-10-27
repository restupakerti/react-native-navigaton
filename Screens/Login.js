import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
			<Image
			style={{width: 200, height: 200}}
          	source={require('./fb.png')}/>
          	<TextInput
          	style = {styles.inputBox}
          	placeholder="Telepon atau Email"/>
          	<TextInput
          	style = {styles.inputBox}
          	placeholder="Password"
          	secureTextEntry={true}
          	/>
          	<TouchableOpacity style={styles.button}>
          	<Text style={styles.buttonText}>MASUK</Text>
          	</TouchableOpacity>

          	<TouchableOpacity>
          	<Text>Lupa Kata Sandi ?</Text>
          	</TouchableOpacity>
          	</View>
			);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputBox: {
    width: 250,
    fontSize: 13,
    color: '#000'
  },
  button: {
  	width: 250,
  	height: 40,
  	alignItems: 'center',
  	backgroundColor:'#3E39CC',
  	marginVertical: 10,
  	paddingHorizontal: 80
  },

  buttonText:{
  	fontSize: 13,
  	color: '#f7f7f7',
  	alignItems: 'center'
  }
})