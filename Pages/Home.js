import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions, ScrollView, FlatList, Image, StatusBar, StyleSheet ,ActivityIndicator,Alert,BackHandler} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LottieView from 'lottie-react-native';
import { useFocusEffect } from '@react-navigation/native';
const { width, height } = Dimensions.get('screen')
import RadioButtonRN from 'radio-buttons-react-native';

import axios from 'axios';
function Home({ navigation }) {
  const [keySearch, setkeySearch] = useState("")
  const [found, setfound] = useState(true)
const [lodding , setlodding] = useState(true)

 

  const [Prand, setPrand] = useState([])
  const all_prand = () => {
    axios.get("https://marketshoes.000webhostapp.com/Shoes/Prand.php").then(res => {
      if (res.status == 200) {

        if (res.data == 'error') {
          alert("Please Try Agin")
        }
         else if (typeof(res.data) == "object" ){
          setPrand(res.data)
          setlodding(false)
         }
         else{
           alert("Try")
         }

      }
  
    }

    )
  }


useEffect(()=>{ 
  all_prand()

  

  return () => {
   
    BackHandler.exitApp() 
    
  }

},[])



  const searchFun = (keySearch) => {

    let list = Prand


    for (var counter = 0; counter < list.length; counter++) {
      if (list[counter].Prand_name.toLowerCase().includes(keySearch.trim().toLowerCase())) {
        list[counter].Prand_show = true

      }
      else {
        list[counter].Prand_show = false

      }

      setPrand(Prand => Prand = list)
    }






  }


 



  return (
    <>
      <StatusBar backgroundColor={"#EAE9EA"} barStyle="dark-content" />

      <View style={style.style_home_page}>


        <View style={style.style_View_nameApp}>

          <Text style={style.style_text_nameApp}>Market Shoes</Text>

        </View>



        <TouchableOpacity style={style.search} onPress={() => { }} >


          <TextInput style={style.text_input}
            placeholder={"Search"}
            placeholderTextColor={"#000"}
            value={keySearch}

            onChangeText={
              (value) => {
                setkeySearch(keySearch => keySearch = value)
                searchFun(value)
              }
            }

          />



          <View style={style.style_icon_search}>
            <FontAwesome5 name='search' size={20} />
          </View>



        </TouchableOpacity>



{lodding?(<ActivityIndicator color ="#f00" size={30} style={{marginTop:200}}/>):(

        <FlatList data={Prand}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: "center",
            alignItems: "center"
          }}

          renderItem={({ item, index }) => (
            item.Prand_show ? (

              <View style={{
                justifyContent: "center",
                alignItems: "center"
              }}>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Prand_Men_OR_Woman", {

                      item: item.Prand_id

                    })
                  }}
                

                  style={style.screen_image}>

                  <Image source={{uri:item.Prand_image}} resizeMode="cover" style={{ width: width * 0.42, height: height * 0.2, borderRadius: 20 }} />

                </TouchableOpacity>


                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>{item.Prand_name}</Text>

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

          )}

        <View style={style.style_addtion_view}></View>

      </View>
    </>
  )
}
export default Home;

const style = StyleSheet.create({
  style_home_page:{
    flex: 1,
    backgroundColor: "#EAE9EA",

  },
  style_View_nameApp:{
    width: width,
    height: height * 0.08,
    justifyContent: "center",
    alignItems: "center",
   

  },
  style_text_nameApp:{ fontSize: 30, fontWeight: 'bold', color: "#000" },
  style_icon_search:{
    width: width * 0.07,
    height: height * 0.05,
    // backgroundColor:"#f00",
    justifyContent: "center",
    alignItems: "center"
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
    height: height,
    backgroundColor: "#EAE9EA",
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
style_addtion_view:{
  width: width * 0.98,
  height: height * 0.064,
  backgroundColor: "#EAE9EA",
  borderRadius: 15,
  marginVertical: 15,
  alignSelf: "center",
  paddingHorizontal: 5,
  paddingVertical: 5
}

}

)

