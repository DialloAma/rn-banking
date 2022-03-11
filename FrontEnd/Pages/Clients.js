import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';

const Clients = ({navigation}) => {
     const [fullname, setFullname] = useState("");

    return (
        <View style={{flex:1,backgroundColor:"#fff",marginHorizontal:25,justifyContent:"center"}}>
        <View style={{alignItems:"center"}}>
        <Text style={{fontSize:25}}>Full Name</Text>
    <TextInput style={styles.input} value={fullname} onChangeText={(text)=>setFullname(text)}  />
    <Text style={{fontSize:25}}>Phone Number</Text>
    <TextInput style={styles.input}  />
    <Text style={{fontSize:25}}>Address</Text>
    <TextInput style={styles.input}  />
      </View>
      <View style={{alignItems:"center",marginHorizontal:30}} >
           <TouchableOpacity style={styles.buton} activeOpacity={0.5} onPress={()=>{
               navigation.navigate("Account",{fullname})
           }} >
              <Text style={{fontSize:20,fontWeight:"bold"}}>Confirm</Text>
            </TouchableOpacity>
      </View>   
    </View>
    );
}

const styles = StyleSheet.create({
    input:{
        width:'90%' ,
        fontSize:20,
        height:50,
        borderWidth:1,
        backgroundColor:'#fff',
        padding:10,
        marginVertical:15
    },
    buton:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#21ABA5",
        margin:15,
       height:50,
    }
})

export default Clients;
