import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useFocusEffect } from '@react-navigation/native';
import LottieView from 'lottie-react-native'
const { width, height } = Dimensions.get('screen')


function Cart({ navigation, route }) {


  const [itemes, setitem] = useState([])


  useEffect(() => {



    getsave()



  }, [])



  async function getsave() {
    let list = JSON.parse(await AsyncStorage.getItem("market"))



    if (Array.isArray(list) && list.length > 0) {
      setitem(list)
        // alert(JSON.stringify(itemes))
    } else {
      setitem([])
    }
// AsyncStorage.clear()

  }

  useFocusEffect(
    React.useCallback(() => {
      getsave()


      return () => {
        getsave()
      };
    }, [])
  );





  return (
    <>
     
     <StatusBar backgroundColor={"#EAE9EA"} barStyle="dark-content" />


      <View style={{
        flex: 1,
        backgroundColor: "#EAE9EA",

      }}>


        {itemes.length > 0 ? (

          <FlatList data={itemes} renderItem={({ item, index }) => (


            <TouchableOpacity
              onPress={() => {
            //  alert((index))
   
                navigation.navigate("Update_detalies", { prodect_detailes: item  , index : index , getsave : getsave ,}) }}

              style={{
                width: width * 0.98,
                height: height * 0.14,
                backgroundColor: "#fff",
                borderRadius: 15,
                marginVertical: 10,
                alignSelf: "center",

              }}>
              <View style={{
                width: width * 0.98,
                height: height * 0.095,
                //  backgroundColor: "#0f0",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderTopStartRadius: 15,
                borderTopEndRadius: 15,
                paddingHorizontal: 2,

              }}>

                <Image source={{uri:item.image}} style={{ width: width * 0.25, height: height * 0.08, borderRadius: 10, }} resizeMode={"cover"} />

                <View style={{
                  width: width * 0.66,
                  height: height * 0.09,
                  // backgroundColor: "#ff0",
                  alignItems: "flex-end",
                  paddingHorizontal: 5,
                  borderTopEndRadius: 10,
                  paddingRight: 15
                }}>
                  <Text style={{ fontSize: 21, fontWeight: "500", color: "#000", marginTop: 7 }}> {item.name}</Text>
                  <Text style={{ fontSize: 20, color: "#000", marginTop: 7 }}> {item.size}  = Size</Text>

                </View>




              </View>



              <View style={{
                flexDirection: "row",
                width: width * 0.98,
                height: height * 0.04,
                //  backgroundColor: "#00f",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 12
              }}>
                <Text style={{ fontSize: 19, color: "#000" }}>EGP {item.total_price}</Text>


                <View style={style.view_cart_plus_munis}>




                  <Text style={{ fontSize: 18, color: "#000" }}>{item.Counter_one_item}</Text>

                  <Text style={{ fontSize: 18, color: "#000" }}>عدد القطع = </Text>



                </View>

              </View>



            </TouchableOpacity>






          )} />
        ) : (
          <View style={{
            width: width,
            height: height,
            alignItems: 'center',

          }}>

            <View style={{ width: width * 0.7, height: height * 0.7, justifyContent: "center", alignItems: "center", alignSelf: "center" }}>

              <LottieView source={require("../Photoes/shopping2.json")}
                autoPlay={true}

                loop={true}
              />
            </View>

          </View>

        )}



        <View style={{
          width: width * 0.98,
          height: height * 0.07,
          backgroundColor: "#EAE9EA",
          borderRadius: 15,
          marginVertical: 15,
          alignSelf: "center",
          paddingHorizontal: 5,
          paddingVertical: 5
        }}></View>


      </View>
    </>
  )
}
export default Cart;


const style = StyleSheet.create({
  view_cart_plus_munis: {
    width: width * 0.37,
    height: height * 0.039,
    //  backgroundColor:"#f0f",
    marginTop: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 2
  },


 
})