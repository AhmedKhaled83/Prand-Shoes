

import React, { useState } from "react";
import { View, Text, StatusBar, TextInput, ScrollView, TouchableOpacity, Dimensions ,ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('screen')
import axios from "axios";
function Sign({ navigation }) {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [phone, setphone] = useState('');
    const [lodding, setlodding] = useState(false);
    const [securty_password, setsecurty] = useState(true);



    const check_sign = () => {
        if (isValidname(name)) {


            if (isValidEmail(email)) {

                if (isValidpassword(password)) {

                    if (isValidphone(phone)) {
                        navigation.navigate("App", { screen: 'Home', })

                    } else {
                        alert(" phone must be  equal 11 number")
                    }


                } else {
                    alert('Password must pass.length>8 and includes number , letter and symbols(# , % ,$...)')
                }
            } else {
                alert("you have error in eamil")
            }
        }
        else {
            alert("please enter your name correct ")
        }
    }



    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (re.test(String(email).toLowerCase()))


    }


    const isValidpassword = (password) => {
        var pass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        return pass.test(password);

    }

    const isValidname = (name) => {
        const re = /^([a-zA-Z0-9\s_\u0600-\u06FF]).{0,30}$/
        //  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        return re.test(String(name).toLowerCase());
    }


    const isValidphone = (phone) => {
        var pho = /^01[0125][0-9]{8}$/gm;
        return pho.test(phone);

    }








    const SendUser = () => {
        setlodding(true)
        let data = {
            user_name: name,
            user_email: email,
            user_password: password,
            user_phone: phone,
        }
        axios.post("https://marketshoes.000webhostapp.com/Shoes/SignUp.php", data).then((res) => {
            if (res.status == 200) {
              
                if (res.data == "eamil found") {
                    alert("هذا الايميل موجود بالفعل")

                

                } else if (res.data == "error insert data" || res.data == "error") {
                    alert("حدث خطأ ما ")

                }else{
                    check_sign()
                    id_save(res.data)
                }
            }
            setlodding(false)
        })

    }


    async function id_save(id) {

        await AsyncStorage.setItem("id", (id+""))

     

    }


    return (
        <>
            <StatusBar backgroundColor={"#0091CE"} barStyle="light-content" />
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    // paddingHorizontal: 20
                }}>
                <ScrollView>
                    <View style={{ width: width, height: height * 0.3, backgroundColor: "#0091CE", justifyContent: "center", alignItems: "center", borderBottomEndRadius: 70, borderBottomStartRadius: 70 }}>

                        <Text style={{ fontSize: 35, fontWeight: 'bold', color: "#FFF" }}>  Market Shoes</Text>


                    </View>





                    <TextInput
                        style={{
                            width: width * 0.9,
                            height: height * 0.05,
                            borderWidth: 0.25,
                            borderColor: "#000",
                            borderRadius: 20,
                            alignSelf: "center",
                            marginTop: 20,
                            paddingLeft: 20,
                            color: "#000"
                        }}
                        placeholder=" User_name"
                        placeholderTextColor={"#888"}
                        value={name}
                        onChangeText={
                            (value) => {
                                setname(name => name = value)

                            }
                        }
                    />




                    <TextInput
                        style={{
                            width: width * 0.9,
                            height: height * 0.05,
                            borderWidth: 0.25,
                            borderColor: "#000",
                            borderRadius: 20,
                            alignSelf: "center",
                            marginTop: 30,
                            paddingLeft: 20,
                            color: "#000"
                        }}
                        placeholder=" Email"
                        placeholderTextColor={"#888"}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={
                            (value) => {
                                setemail(email => email = value)

                            }
                        }
                    />




                    <View style={{
                        marginTop: 30,
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        width: "90%",
                        alignSelf: "center",
                        borderRadius: 20,
                        borderWidth: 0.25,
                        borderColor: "#000"
                    }}>


                        <TextInput
                            style={{
                                width: width * 0.80,
                                height: height * 0.05,
                                borderBottomLeftRadius: 20,
                                borderTopLeftRadius: 20,
                                alignSelf: "center",
                                paddingLeft: 20,
                                color: "#000",

                            }}
                            placeholder=" Password"
                            placeholderTextColor={"#888"}
                            secureTextEntry={securty_password}
                            value={password}
                            onChangeText={
                                (value) => {
                                    setpassword(password => password = value)
                                }
                            }
                        />

                        <TouchableOpacity

                            onPress={() => {

                                setsecurty(securty_password => !securty_password)
                            }}
                            style={{
                                width: width * 0.1,
                                paddingVertical: 3,
                                marginRight: 10,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            {securty_password ? (
                                <FontAwesome5 name="eye-slash" size={20} color={"#000"} />

                            ) : (
                                <FontAwesome5 name="eye" size={20} color={"#000"} />
                            )}
                        </TouchableOpacity>


                    </View>
                    <TextInput
                        style={{
                            width: width * 0.9,
                            height: height * 0.05,
                            borderWidth: 0.25,
                            borderColor: "#000",
                            borderRadius: 20,
                            alignSelf: "center",
                            marginTop: 30,
                            paddingLeft: 20,
                            color: "#000"
                        }}
                        placeholder=" Phone Number"
                        placeholderTextColor={"#888"}
                        keyboardType={"number-pad"}
                        value={phone}
                        onChangeText={
                            (value) => {
                                setphone(phone => phone = value)
                            }
                        }
                    />




                    <TouchableOpacity
                        onPress={() => {
                            SendUser()

                        }}

                        style={{
                            width: width * 0.8,
                            paddingVertical: 10,
                            justifyContent: "center",
                            alignItems: 'center',
                            backgroundColor: "#0091CE",
                            alignSelf: 'center',
                            borderRadius: 20,
                            marginTop: 25
                        }}>
                            {lodding ?(
                            <ActivityIndicator size={25}  color={"#fff"}  />):(
                        <Text style={{ color: "#fff", fontWeight: '500' }}>Sign UP</Text>
                        )}

                    </TouchableOpacity>



                    <TouchableOpacity
                        onPress={
                            () => {
                                navigation.navigate('Login')
                            }
                        }

                        style={{
                            width: width * 0.8,
                            paddingVertical: 10,
                            justifyContent: "center",
                            alignItems: 'center',
                            backgroundColor: "#ddd",
                            alignSelf: 'center',
                            borderRadius: 20,
                            marginTop: 25
                        }}>
                        <Text style={{ color: "#0091CE" }}>Already have an acouunt</Text>

                    </TouchableOpacity>


                </ScrollView>
            </View>

        </>
    )
}
export default Sign; 