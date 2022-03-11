import React from 'react';
import {View, StyleSheet} from 'react-native';

const Deposits = () => {
    return (
        <View style={{flex:1,backgroundColor:"#fff",marginHorizontal:25,justifyContent:"center"}}>
        <View style={{alignItems:"center"}}>
         <Text style={{fontSize:25}}>Account Number </Text>
         <TextInput keyboardType='numeric' style={styles.input}  />
         <Text style={{fontSize:25}}>Amount</Text>
         <TextInput keyboardType='numeric'  style={styles.input}  />
      </View>
      <View style={{alignItems:"center",marginHorizontal:30}} >
           <TouchableOpacity style={styles.buton} activeOpacity={0.5}>
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

export default Deposits;
