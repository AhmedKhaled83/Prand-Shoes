
import React, { useState, useEffect } from 'react';
import {View,StyleSheet , StatusBar} from 'react-native' ; 
import LottieView from 'lottie-react-native' ;



function SplaceScreen ({navigation}){
useEffect(()=>{
    let logic = 1 
    
    setTimeout(()=>{
      if (logic){
    navigation.navigate("page_log")
      }
    } , 3000)
 


},[])


return(
    <>

<StatusBar backgroundColor={"#0091CE"} barStyle="light-content" />
    <View style={styles.View}>

    <LottieView source={require("../Photoes/shoes.json")}
                        autoPlay={true}

                        loop={true}
                    />

    </View>
    
    
    
    </>
)


}

export default SplaceScreen;

const styles = StyleSheet.create({

    View:{
        flex : 1 ,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#0091CE"
    }



})
