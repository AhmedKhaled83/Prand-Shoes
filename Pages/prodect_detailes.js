import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions, ScrollView, FlatList, Image, StatusBar, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import RadioButtonRN from 'radio-buttons-react-native';
const { width, height } = Dimensions.get('screen')
function prodect_detailes({ navigation, route }) {

  const [prodect_detailes, setprodect_detailes] = useState(route.params.prodect_detailes)
  const [counter, setcounter] = useState(prodect_detailes.product_count*1)
  const [disabled, setdisabled] = useState(true)

   const[size_prodact ,setsize_prodact]= useState([]);
    const[size , setsize] = useState(prodect_detailes.label)
    // const[obj , setobj]= useState({label:""})

 

  const NewLable =()=>{
    let labelSplit = size.split("//")

    for(let index  = 0 ; index < labelSplit.length ; index++){
      // obj.label=labelSplit[index]
      let obj ={label:labelSplit[index]}
      size_prodact.push(obj) 
  
  //  alert(JSON.stringify( size_prodact) )
    }   
      // alert(JSON.stringify(size_prodact))
  }


  const plusFun = () => {
    setcounter(counter => counter + 1)


  }


  const minusFun = () => {
    if (counter > 1) {
      setcounter(counter => counter - 1)
    }


  }

  useEffect(async () => {
    let prodact = await AsyncStorage.getItem("market")

  //  alert(JSON.stringify(prodect_detailes))



  //  alert(JSON.stringify(counter))

  }, [])





  const pushdata = () => {
  
    setSave_push()

  }



  useFocusEffect(
    React.useCallback(() => {
    
      NewLable()

      return () => {
       
      };
    }, [])
  );




  async function setSave_push  ()  {
    let list = await AsyncStorage.getItem("market")

    let arr_product = [

    ]
    list = JSON.parse(list)
    if (list == null) {

      let opj = {
        id: prodect_detailes.Products_id,
        image: prodect_detailes.Products_image,
        name: prodect_detailes.Products_name,
        Counter_one_item: counter,
        price : prodect_detailes.prodact_price,
        total_price: prodect_detailes.total_price * counter,
        counter_show: prodect_detailes.show_shoes,
        size: prodect_detailes.choose_size,
        size_prodact:size_prodact
      }
      arr_product.push(opj)
      await AsyncStorage.setItem("market", JSON.stringify(arr_product))

      // AsyncStorage.clear()
    } else {
      let last_product = list
      let opj = {
        id: prodect_detailes.Products_id,
        image: prodect_detailes.Products_image,
        name: prodect_detailes.Products_name,
        price :prodect_detailes.prodact_price,
        total_price: prodect_detailes.total_price * counter,
        Counter_one_item: counter,
        counter_show: prodect_detailes.show_shoes,
        size: prodect_detailes.choose_size,
        size_prodact:size_prodact
      }
      last_product.push(opj)
      await AsyncStorage.setItem("market", JSON.stringify(last_product))

      // AsyncStorage.clear()

    }
   
  }


  



  return (
    <>
      <StatusBar backgroundColor={"#FFFE"} barStyle={"dark-content"} ></StatusBar>

      <View style={{
        flex: 1,
        backgroundColor: "#EEEEEEDD",

      }}>
  <ScrollView>
        <View style={style.view_image}>

          <Image source={{uri:prodect_detailes.Products_image}} style={style.image_prodect} resizeMode={"cover"} />

        </View>

      


          <View style={style.view_price_name}>

            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#000" }}>{prodect_detailes.Products_name} </Text>

            <Text style={{ fontSize: 25, fontWeight: "400", color: "#000" }}>{prodect_detailes.total_price * counter}  L.E</Text>

          </View>




          <View style={style.view_rate}>

            <TouchableOpacity style={style.view_star}>

              <IconFill name="star" size={25} color={"#0091CE"} style={{marginLeft :5}}/>

              <Text style={{ fontSize: 20, fontWeight: "400", color: "#000", marginLeft: width * 0.1 }}>4.5 {"\n"}

                <Text style={{ fontSize: 14, fontWeight: "normal", color: "#B8B8B8" }}>Rating</Text>

              </Text>

            </TouchableOpacity>




            <TouchableOpacity style={style.view_star}>


              <FontAwesome5 name='paper-plane' size={25} color={"#0091CE"}  style={{marginLeft :5}}/>

              <Text style={{ fontSize: 20, fontWeight: "400", color: "#000", marginLeft: width * 0.1 }}>4.1 km {"\n"}

                <Text style={{ fontSize: 14, fontWeight: "normal", color: "#B8B8B8" }}>Distance</Text>

              </Text>

            </TouchableOpacity>



          </View>




          {/* <Text style={style.detalies}>This product is from Brand{prodect_detailes.prodact_name} for sports shoes and fahoin </Text> */}

          <RadioButtonRN
            data={size_prodact}
            selectedBtn={(e) => {
              prodect_detailes.choose_size = e.label
              setdisabled(false)
            }}
            
            boxStyle={{
              borderRadius: 15,
              height: height * 0.065,
              width: width * 0.95,
              backgroundColor: "#fff",
              alignSelf: "center",
              borderWidth: 0,

            }
            }


          />
          <View style={style.view_cart_plus_munis}>


            <View style={style.plus_minus}>

              <TouchableOpacity onPress={() => { minusFun() }} style={style.minus}>

                <FontAwesome5 name='minus' size={15} color={"#0091CE"} />

              </TouchableOpacity>


              <Text style={{ fontSize: 18, color: "#000" }}>{counter}</Text>


              <TouchableOpacity onPress={() => { plusFun() }} style={style.plus}>

                <FontAwesome5 name='plus' size={15} color={"#0091CE"} />

              </TouchableOpacity>


            </View>





            <TouchableOpacity style={style.add_cart}
            disabled ={disabled}
            
              onPress={() => {
                pushdata()
             
              }

              }>
              <Text style={{ fontSize: 18, color: "#000" }}>Add to Cart</Text>
            </TouchableOpacity>






          </View>



        </ScrollView>

      </View>
    </>
  )
}
export default prodect_detailes;



const style = StyleSheet.create({
  view_image: {
    width: width,
    height: height * 0.4,
    // backgroundColor: "#f00",
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },

  image_prodect: {
    width: width, height: height * 0.4, borderBottomLeftRadius: 20, borderBottomRightRadius: 20
  },
  view_price_name: {
    width: width,
    height: height * 0.07,
    //  backgroundColor:"#ff0",
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row"
  },
  view_rate: {
    width: width,
    height: height * 0.09,
    //  backgroundColor:"#f00",
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row"
  },

  view_star: {
    width: width * 0.436,
    height: height * 0.06,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:"#ff0",
  },

  detalies: {
    fontSize: 20, color: "#838383", alignSelf: "center", textAlign: "center", marginVertical: 25, paddingHorizontal: 12
  },

  view_cart_plus_munis: {
    width: width,
    height: height * 0.09,
    //  backgroundColor:"#f00",
    marginTop: 3,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  plus_minus: {
    width: width * 0.45,
    height: height * 0.052,
    backgroundColor: "#d4dfdb",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
  ,

  add_cart: {
    width: width * 0.45,
    height: height * 0.052,
    backgroundColor: "#0091CE",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  },

  minus: {
    width: width * 0.08, height: height * 0.052, justifyContent: "center", alignItems: 'center', borderTopStartRadius: 12, borderBottomStartRadius: 12
  },
  plus: { width: width * 0.08, height: height * 0.052, justifyContent: "center", alignItems: 'center', borderTopEndRadius: 12, borderBottomEndRadius: 12 }
})