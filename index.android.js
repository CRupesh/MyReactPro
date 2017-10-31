/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  FlatList,
  SectionList,
  ScrollView,
} from 'react-native';

class Greetings extends Component{
  render(){
    return(
        <Text style={{fontSize: 20}}>Hello, {this.props.name} !</Text>
    )
  }
}

class TxtInput extends Component{
  render(){
    return(
      <TextInput
        {...this.props}
        placeholder = {this.props.placeholder}
        style = {styles.mystyle}
        keyboardType = 'numeric'/>
    )
  }
}



export default class MyProject extends Component {

constructor(props){
  super(props);
  this.state = {text1 : 2, text2 : 3};
}

  render() {
    return(

      <View style={{padding : 10, marginTop:20, backgroundColor : 'white'}}>

        <TxtInput placeholder="Enter the value !"
          onChangeText = {(text1) => this.setState({text1})}
        />

        <TxtInput placeholder="Enter the value !"
          onChangeText = {(text2) => this.setState({text2})}
        />

          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text1 + this.state.text2}
            {/* {this.state.text.split(' ').map((word) => word && '🍕🍕🍕').join(' ')} */}
          </Text>

          {/* <FlatList
            data = {[
              {key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'},
              {key: 'i'}, {key: 'j'}, {key: 'k'}, {key: 'l'}, {key: 'm'}, {key: 'n'}, {key: 'o'}, {key: 'p'},
              {key: 'q'}, {key: 'r'}, {key: 's'}, {key: 't'},
            ]}
            renderItem = {({item}) => <Text style = {styles.item}>{item.key}</Text>}
          /> */}

          <SectionList

            sections = {[
              {title: 'D', data: ['Devin', 'Daas']},
              {title: 'J', data: ['Jack', 'Job', 'Jai']},
              {title: 'K', data: ['Kevin', 'Kate', 'Kool']},
            ]}

            renderItem = {({item}) => <Text style = {styles.item}> {item} </Text>}
            renderSectionHeader = {({section}) => <Text style = {styles.sectionHeader}>{section.title}</Text>}

            scrollToEnd
          />


          <Button
            style = {styles.mystyle}
            onPress={()=> {Alert.alert('You just tapped on button!')}}
            title="Press Me"
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
    paddingTop : 20,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  mystyle:{
    height: 40,
    fontSize: 20,
    marginTop: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 100,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
