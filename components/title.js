import React from 'react';
import {
  ScrollView,
  StyleSheet,
	View,
	Text
} from 'react-native';


export default class SettingsScreen extends React.Component {
  render() {
    return (
			<View style={{
        height: 70, 
        backgroundColor: 'background: rgba(26,163,219, 0.7);', 
        justifyContent: 'flex-end', 
        alignItems: 'center',
        marginBottom: 20
      }}>
				<Text style={{
          color:'white',
          fontSize: 25
        }}>Countrify</Text>
			</View>
    );
  }
}
