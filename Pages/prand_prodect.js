
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions,  FlatList, Image, StatusBar, StyleSheet,ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LottieView from 'lottie-react-native'
const { width, height } = Dimensions.get('screen')

function prand_prodect({ navigation, route }) {

  const [Prand_shoes, setPrand_shoes] = useState(route.params.prodact)
  const [keySearch, setkeySearch] = useState("")
  

  const searchFun = (keySearch) => {

    let list = Prand_shoes


    for (var counter = 0; counter < list.length; counter++) {
      if (list[counter].Products_name.toLowerCase().includes(keySearch.trim().toLowerCase())) {
        list[counter].show_shoes = true

      }
      else {
        list[counter].show_shoes = false

      }

      setPrand_shoes(Prand_shoes => Prand_shoes = list)
    }






  }

  return (
    <>
      <StatusBar backgroundColor={"#EAE9EA"} barStyle="dark-content" />

      <View style={{
        flex: 1,
        backgroundColor: "#EAE9EA",

      }}>

        <View style={style.style_market_shoes}>

          <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#000" }}>Market Shoes</Text>

        </View>



        <View style={style.search}>


          <TextInput style={style.text_input}
            placeholder={"Search"}
            placeholderTextColor={"#000"}
            value={keySearch}
            onChangeText={(value) => {
              setkeySearch(keySearch => keySearch = value)
              searchFun(value)
            }}

          />



          <View style={style.icon_search}>
            <FontAwesome5 name='search' size={20} />
          </View>



        </View>
    

          <View style={style.screen_Prand}>
          
            <FlatList data={Prand_shoes}
              contentContainerStyle={{
                flexDirection: 'row',
                 flexWrap: 'wrap',
                justifyContent: "center",
                alignItems: "center",
               
                // backgroundColor:"#ff0",


              }}

              renderItem={({ item, index }) => (

                item.show_shoes ? (

                  <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,


                  }}>

                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("prodect_detailes", { prodect_detailes: item })

                      }}

                      style={style.screen_image}>

                      <Image source={{uri:item.Products_image}} resizeMode="cover" style={{ width: width * 0.42, height: height * 0.2, borderRadius: 20 }} />

                    </TouchableOpacity>


                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>{item.Products_name}</Text>

                  </View>
                ) : (<View style={{
                  width: width,
                  height: height,
                  alignItems: 'center',

                }}>

                  <View style={{ width: width * 0.5, height: height * 0.7 }}>

                    <LottieView source={require("../Photoes/shoes.json")}
                      autoPlay={true}

                      loop={true}
                    />
                  </View>

                </View>)
              )} />
 
        
          </View>
          
      </View>
      
    </>
  )
}
export default prand_prodect;


const style = StyleSheet.create({

  style_market_shoes:{
    width: width,
    height: height * 0.08,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"#f00"
  },

  search: {

    flexDirection: "row",
    width: width * 0.9,
    height: height * 0.05,
    backgroundColor: "#CFCFCF",
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 2,
    justifyContent: "space-between",
    alignItems: "center"
  },

icon_search:{
  width: width * 0.07,
  height: height * 0.05,
  // backgroundColor:"#f00",
  justifyContent: "center",
  alignItems: "center"
},

  text_input: {
    width: width * 0.83,
    height: height * 0.05,
    // backgroundColor:"#ff0",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    color: "#000",
    fontSize: 18,
    paddingHorizontal: 10
  },


  screen_Prand: {
    width: width,
    backgroundColor: "#EAE9EA",
    // backgroundColor:"#f00",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },




  screen_image: {
    width: width * 0.42,
    height: height * 0.2,
    backgroundColor: "#ff0",
    margin: 10,
    borderRadius: 20
  },
 
})