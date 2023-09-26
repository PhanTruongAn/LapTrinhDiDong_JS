import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
          <View style={styles.circle}> 
          </View>
          <Text style={styles.title}>
           GROW YOUR BUSINESS
          </Text>
          <Text style={styles.text}>
          We will help you to grow your business using online server
          </Text>
          
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle:{
    width: '140px',
    height: '140px',
    marginTop: '-80px',
    borderWidth: '15px',
    borderRadius: '75px',
  },
  title: {
    width:'180px',
    height: '90px',
     textAlign: 'center',
     marginTop: '50px',
     fontSize: '25px',
     fontWeight: '700',
     lineHeight: '29px',
     fontFamily : 'Time New Roman',

  },
  text:{
    marginTop: '30px',
    fontFamily: 'Time New Roman',
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: '200',
    lineHeight: '17.5px',
    width: '300px',
    height: '40px',
  },
  buttonLogin:{

  }
});
