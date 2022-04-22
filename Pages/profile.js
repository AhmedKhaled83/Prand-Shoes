import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Dimensions, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView, Alert, PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'react-native-image-picker';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

const { width, height } = Dimensions.get('screen')

function Profile({ navigation, route }) {

  const [photo_uri, setphoto_uri] = useState('')

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [id, setid] = useState('');
  const [data_user, setdatauser] = useState({});
 
  useEffect(() => {

    data_for_user()

   }, [])

  



  async function data_for_user () {
    let id = await AsyncStorage.getItem('id')
    setid(id)
 

    let data = {
      user_id: id
    }

    axios.post("https://marketshoes.000webhostapp.com/Shoes/dataUser.php", data).then(res => {
      if (res.status == 200) {
               
      if (typeof(res.data) == 'object'){
        // alert(JSON.stringify(res.data))
       setdatauser(res.data)
      }

      } else {

        alert("error")

      }
    })
  }


  
  const  signOut =()=>{
   
 

    let data = {
      user_id: id
    }
    axios.post("https://marketshoes.000webhostapp.com/Shoes/SignOut.php", data).then(res => {
       
    if (res.status == 200) {
             
      if (res.data == 'Sucess'){
        // alert("true")
       navigation.navigate("page_log")
       empty()
     
      }

      } else {

        alert("يرجى المحاوله مره اخري")

      }
    })
  }

  async function empty (){
    await AsyncStorage.setItem("market" , "")
  }

  return (
    <>
      <StatusBar backgroundColor={"#0091CE"} barStyle="light-content" />
      <View style={{
        flex: 1,
        backgroundColor: "#fff",
      }}>


        <ScrollView>
          <View style={styles.background}>


            <TouchableOpacity style={styles.Icon_back} onPress={() => { navigation.navigate("Home") }}>
              <FontAwesome5 name='arrow-left' size={22} color={"#0091CE"} />
            </TouchableOpacity>

            <Text style={{ fontSize: 35, fontWeight: 'bold', color: "#FFF", textAlign: "center", marginTop: 20 }}>  Market Shoes</Text>
          </View>


          <View style={styles.Image_profile}>


            <Image source={require('../Photoes/nullphoto.png')} style={{ width: width * 0.328, height: height * 0.1628, borderRadius: 70 }} resizeMode={"cover"} />



          </View>


          <Text style={styles.text_name}>{data_user.user_name}</Text>



          <View style={styles.background_personal_data}>

            {/* Email */}

            <View style={styles.Email_Phone}>
              <FontAwesome5 name='envelope' size={25} color={"#000"} />
              <Text style={styles.text_Email_phone}>{'\t\t\t'} {data_user.user_email}</Text>

            </View>




            {/* Phone */}

            <View style={[styles.Email_Phone, { marginTop: 22 }]}>
              <FontAwesome5 name='phone-alt' size={25} color={"#000"} />
              <Text style={styles.text_Email_phone}>{'\t\t\t'} {data_user.user_phone}</Text>

            </View>







            {/* log Out */}
            <TouchableOpacity style={styles.Sign_out}  onPress={()=>{signOut()}}  >
              <FontAwesome5 name='sign-out-alt' size={24} color={"#f00"} />
              <Text style={styles.text_Sign_out}>  Sign Out</Text>

            </TouchableOpacity>

          </View>

        </ScrollView>
      </View>
    </>
  )
}
export default Profile;

const styles = StyleSheet.create({

  background: {
    width: width,
    height: height * 0.3,
    backgroundColor: "#0091CE",
    borderBottomEndRadius: 250,
  },
  Icon_back: {
    width: width * 0.105,
    height: height * 0.05,
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: "center",
    alignItems: 'center',
    marginLeft: 5
  },
  Image_profile: {
    width: width * 0.35,
    height: height * 0.175,
    borderRadius: 75,
    backgroundColor: '#f00',
    alignSelf: "center",
    borderWidth: 5,
    borderColor: '#000',
    justifyContent: "center",
    alignItems: "center",
    marginTop: -height * 0.1
  },

  style_Permissions_photo: {
    width: width * 0.08,
    height: height * 0.04,
    backgroundColor: "#0A66C2",
    borderRadius: 30,
    alignSelf: "flex-end",
    marginTop: -50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderWidth: 3.5,
    borderColor: "#000"
  },


  text_name: {
    fontSize: 22,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
    // marginTop: 10
  },
  background_personal_data: {
    width: width,
    height: height * 0.35,
    paddingHorizontal: 10
  },
  Email_Phone: {
    width: width * 0.8,
    height: height * 0.06,
    //  backgroundColor:'#00f',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  text_Email_phone: { fontSize: 20, fontWeight: '400', color: "#000" },

  Sign_out: {
    width: width * 0.3,
    height: height * 0.042,
    // backgroundColor: "#f0f",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 40
  },
  text_Sign_out: { fontSize: 20, fontWeight: '500', color: "#f00" }
})