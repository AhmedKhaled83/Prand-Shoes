
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions, ScrollView, FlatList, Image, StatusBar, StyleSheet,ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const { width, height } = Dimensions.get('screen')
import axios from 'axios';
function Prand_Men_OR_Woman({ navigation, route }) {


  const [id, setid] = useState(route.params.item)
  const [item, setitem] = useState([])
  const [lodding , setlodding] = useState(true)

  const prand_data = () => {

    let data_to_send = {

      prand_id: id


    }
    axios.post("https://marketshoes.000webhostapp.com/Shoes/Products.php", data_to_send)
      .then((res) => {
        if (res.status == 200) {
          //    alert(typeof(res.data))
          if (typeof (res.data) == "object") {
            
            setitem(res.data)
            setlodding(false)
          } else {
            alert("error no found data")
           
          }

        } else {
          alert("حدث خطأ اثناء الاتصال بالخادم من فضلك حاول مجددا")
        }

      })
  }


  useEffect(() => {
    prand_data()
    // alert("frist")
  }, [])

  return (
    <>
      <StatusBar backgroundColor={"#F8F8F8"} barStyle="dark-content" />

      <View style={{
        flex: 1,
        backgroundColor: "#EAE9EA",

      }}>
        <ScrollView>

          <View style={{
            width: width,
            height: height * 0.08,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFF"
          }}>

            <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#000" }}>Market Shoes</Text>

          </View>
          {lodding?(<ActivityIndicator color ="#f00" size={30} style={{marginTop:200}}/>):(
          <FlatList data={item} renderItem={({ item, index }) => (
            <View>
              <TouchableOpacity style={style.styles} onPress={() => { navigation.navigate("prand_prodect", { prodact: item.prodact_Men }) }}>
                <Image source={{ uri: item.Prand_image }} style={{ width: width * 0.9, height: height * 0.3, borderRadius: 20 }} resizeMode={"cover"} />

                <Text style={{ fontSize: 20, color: "#000", fontWeight: "bold" }}>{item.Prand_name} Men</Text>
              </TouchableOpacity>



              <TouchableOpacity style={style.styles} onPress={() => { navigation.navigate("prand_prodect", { prodact: item.prodact_Woman }) }}>
                <Image source={{ uri: item.Prand_woman_image }} style={{ width: width * 0.9, height: height * 0.3, borderRadius: 20 }} resizeMode={"cover"} />

                <Text style={{ fontSize: 20, color: "#C74B4B", fontWeight: "bold" }}>{item.Prand_name} Woman</Text>
              </TouchableOpacity>
            </View>
          )} />
          )}
        </ScrollView>
        <View style={style.style_addtion_view}></View>
      </View>
    </>
  )
}
export default Prand_Men_OR_Woman;

const style = StyleSheet.create({
  styles: {
    width: width * 0.9,
    height: height * 0.35,
    // backgroundColor:"#ff0",
    marginVertical: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
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
})
