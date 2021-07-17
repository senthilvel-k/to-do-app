import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    
    Image
  } from 'react-native';
  import { Button, configureFonts } from 'react-native-paper';
  import Ripple from 'react-native-material-ripple';

  const HomeScreen = ({ navigation }) => {
      return(
        <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'lightskyblue',
        }}>
        <View style={styles.container}>
            <Ripple rippleColor='blue' rippleContainerBorderRadius={200}>
            <Image
        style={styles.image}
        source={require('./todo.png')}
      />
      </Ripple>
      <Ripple rippleColor='blue' rippleContainerBorderRadius={20}>
      <Text style={styles.title}>My To-do App</Text>
      </Ripple>
      
        
        <Button icon="account-arrow-right" mode="contained" onPress={() => navigation.navigate('TodoScreen')}>
    Go to your work
    
  </Button>
    
      </View>
      </SafeAreaView>
      );
  }
  const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      title: {
        fontSize: 48,
        fontWeight: 'bold',
        
        marginBottom: 30,
        marginTop: 1,
        color: 'white'
      },
      image: {
        width: 300,
        height: 300,
        marginBottom: 30,
        marginTop: 1,
      }});

    export default HomeScreen;
