/**
 * Mockup React Native App
 * Working with TextInput
 * In practice, a user would submit text that they would like to be translated,
 * and another user would record their voice and upload.
 * This mockup does not show language selection, and uses text rather than audio.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SectionList
} from 'react-native';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}



export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'MyFileName',
      sections: [
            {title: 'Bears', data: ['There was a bear.']},
          ]
    };
  }
  onPressSubmit = ()=> {

  this.setState({
  sections: [...this.state.sections, {title: this.state.text, data: [this.state.text]}]
})

   
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
        <SectionList
          sections={
            this.state.sections
          }
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
        <Text style={styles.welcome}>
          {this.state.text}
        </Text>
        
        <Text style={styles.instructions}>
          Share your story!
        </Text>
      
        <View style={{
       borderBottomColor: '#199999',
       borderBottomWidth: 5 }}
     >
       <UselessTextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(text) => this.setState({text})}
       />
     </View>
     <Button
  onPress={this.onPressSubmit}
  title="Record Me"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>


<Text style={styles.welcome}>
          {this.state.text2}
        </Text>
        <Text style={styles.instructions}>
          Share your voice!
        </Text>
        <View style={{
       borderBottomColor: '#199999',
       borderBottomWidth: 5 }}
     >
       <UselessTextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(text2) => this.setState({text2})}
       />
     </View>
     <Button
  onPress={this.onPressSubmit2}
  title="Upload Audio"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

<Text style={styles.welcome}>
          {this.state.text3}
        </Text>
        <Text style={styles.instructions}>
          Discover a story!
        </Text>
        
        <View style={{
       borderBottomColor: '#199999',
       borderBottomWidth: 5 }}
     >
       <UselessTextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(text3) => this.setState({text3})}
       />
     </View>
     <Button
  onPress={this.onPressSubmit3}
  title="Hear Me"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
        
        
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);
