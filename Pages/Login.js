import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, TextInput, ScrollView, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const { width, height } = Dimensions.get('screen')
function login({ navigation }) {

    const [name, setname] = useState('')
    const [loading, setloading] = useState(false)
    const [securty_password, setsecurty] = useState(true);
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [user, setuser] = useState({})

    const CheckUser = () => {
        setloading(true)
        let data_to_send = {

            user_email: email,
            user_password: password,


        }
        axios.post("https://marketshoes.000webhostapp.com/Shoes/Login.php", data_to_send)
            .then(res => {
                if (res.status == 200) {

                    if (typeof (res.data) == "object") {


                        id_save(res.data.user_id)




                    }

                    else if (res.data == 'erro please try agin') {
                        alert("يصعب الوصل الي بريدك الالكترونى يرجى التاكد من صحه لبيانات")
                    }

                    else if (res.data = "Please Write Email and Password") {
                        alert("يرجى اخال الايميل والباسورد")
                    }



                }
                setloading(false)

            })
    }



    useFocusEffect(
        React.useCallback(() => {



            return () => {
                id_save()

            };
        }, [])
    );




    async function id_save(id) {

        await AsyncStorage.setItem("id", id)

        navigation.navigate("App", { screen: 'Home', })
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
                        {/* <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#FFF" }}> Sign in</Text> */}

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
                            paddingLeft: 20, color: "#000"
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


                    <TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: "#0091CE", alignSelf: "flex-end", marginTop: 10 }}>Forget Passsword ?</Text>
                    </TouchableOpacity>



                    <TouchableOpacity
                        onPress={
                            () => {


                                CheckUser()



                            }
                        }

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
                        {loading ? (
                            <ActivityIndicator
                                size={25}
                                color={"#fff"}
                            />
                        ) : (
                            <Text style={{ color: "#fff", fontWeight: "500" }}>Sign In</Text>
                        )}
                      



                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf: "center", marginTop: 10 }} onPress={() => { navigation.navigate("SignUp") }} >
                        <Text style={{ fontSize: 15, color: "#0091CE", textDecorationLine: "underline" }}>Create New Account ?  </Text>
                    </TouchableOpacity>


                    <View style={{
                        flexDirection: 'row',
                        width: width,
                        height: height * 0.075,
                        marginTop: 15,
                        // backgroundColor:"#f00",
                        justifyContent: 'center',
                        alignItems: "center",
                        alignSelf: "center"

                    }}>
                        <TouchableOpacity
                            onPress={
                                () => {
                                }
                            }

                            style={{
                                width: width * 0.45,
                                paddingVertical: 10,
                                justifyContent: "center",
                                alignItems: 'center',
                                backgroundColor: "#4267B2",
                                alignSelf: 'center',
                                borderRadius: 20,
                                // marginTop: 25,
                                flexDirection: "row"
                            }}>

                            <FontAwesome5 name='facebook' size={17} color={"#fff"} />
                            <Text style={{ marginLeft: 7, fontWeight: "bold", color: "#fff" }}>Facebook</Text>
                        </TouchableOpacity>




                        <TouchableOpacity
                            onPress={
                                () => {
                                }
                            }

                            style={{
                                width: width * 0.45,
                                paddingVertical: 10,
                                justifyContent: "center",
                                alignItems: 'center',
                                backgroundColor: "#000",
                                alignSelf: 'center',
                                borderRadius: 20,
                                // marginTop: 25,
                                marginHorizontal: 10,
                            }}>

                            <Text style={{ fontSize: 17, marginLeft: 7, fontWeight: "bold", color: "#4285F4" }}>G
                                <Text style={{ color: "#DB4437" }}>o</Text>
                                <Text style={{ color: "#F4B400" }}>o</Text>
                                <Text style={{ color: "#4285F4" }}>g</Text>
                                <Text style={{ color: "#F4B400" }}>l</Text>
                                <Text style={{ color: "#0F9D58" }}>e</Text>

                            </Text>

                        </TouchableOpacity>

                    </View>
                </ScrollView>

            </View>

        </>
    )
}
export default login; 