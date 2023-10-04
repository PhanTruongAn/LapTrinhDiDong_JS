import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput} from 'react-native';
import * as React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Button } from 'react-native-web';
export default function Frame1(){
    return(
        <View style={styles.container}>
                <LinearGradient
                colors={['#FBCB00','#BF9A00']}
                start={[1,0]}
                end={[0,0.5]}
                style={{height:'100%'}}
                >
                <Text style={{top:'70px',left:'30px',fontWeight:'700', fontSize:'30px', lineHeight:'29.3px'}}>
                     LOGIN
                </Text>
               <View style={styles.text_input}>
                  <Icon
                  name='user' size={37}
                  style={{alignSelf:"center"}}
                  ></Icon>
                </View> 
                <TextInput  placeholder='Name' style={{ borderLeft:"none" ,borderWidth:"1px" ,borderColor:'#e8d897',marginTop:"70px",marginLeft:"75px",fontSize:"20px",width:"290px",backgroundColor:"#d8b93b",height:"55px"}}>

                 </TextInput>
                <View style={{
                   
                  //  alignItems:'center',
                   top: '125px',
                   width:'60px',
                   height:'55px',
                   backgroundColor: '#d8b93b',
                   left:"15px",
                   borderRight:"none",
                   borderWidth:'1px',
                   borderColor:'#e8d897',
                   marginTop:"-90px",
                   }}>
                  <Icon
                  name='lock' size={37}
                  style={{alignSelf:"center",justifyContent:"center"}}
                  ></Icon>
                  <Icon name='eye' size={35} style={{left:'290px', top:'-52px'}}></Icon>
                </View> 
                <View style={{width:"360px",height:"45px",alignSelf:"center",backgroundColor:"black",top:"190px",}}>
                   <button
                   style={{width:"360px",height:"45px",alignItems:"center",backgroundColor:"black",color:"white",fontSize:"20px",fontWeight:"700"}}
                  >LOGIN</button>
                </View>
              
            <Text style={{fontWeight:'700', fontSize:'20px',textAlign:'center', top:'230px'}}>
               CREATE ACCOUNT
            </Text>
            
                </LinearGradient>
             
        </View>
)};

const styles = StyleSheet.create({
    container:{
        height:'100%',
        flex: 1,
     
    },
    text_input:{
        justifyContent:"center",
        top: '125px',
        width:'60px',
        height:'55px',
        backgroundColor: '#d8b93b',
        left:"15px",
        borderWidth:'1px',
        borderColor:'#e8d897',
        marginTop: '18px',
        borderRight:"none"
    },

});

