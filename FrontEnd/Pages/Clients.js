import React from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';

const Clients = () => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:2}}>
             </View>
            <View style={{flex:8, backgroundColor:"#fff",marginHorizontal:25}}>
              <View style={{flex:9,alignItems:"center"}}>
              <Text style={{fontSize:25}}>Full Name</Text>
                <TextInput style={styles.input}  />
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity>
                      <Text>Create an Account</Text>
                  </TouchableOpacity>

              </View>
              

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
        width:"100%"
    }
})

export default Clients;
