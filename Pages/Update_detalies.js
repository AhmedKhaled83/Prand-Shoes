import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions, ScrollView, FlatList, Image, StatusBar, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import RadioButtonRN from 'radio-buttons-react-native';
const { width, height } = Dimensions.get('screen')
function Update({ navigation, route }) {

    const [itemes, setitemes] = useState([])
    const [prodect_detailes, setprodect_detailes] = useState(route.params.prodect_detailes)
    const [newindex, setindex] = useState(route.params.index)
    const [counter, setcounter] = useState(prodect_detailes.Counter_one_item)

    const plusFun = () => {
        setcounter(counter + 1)
        prodect_detailes.total_price = prodect_detailes.price * (counter + 1)
     
    }


    const minusFun = () => {
        if (counter > 1) {
            setcounter(counter => counter - 1)
            prodect_detailes.total_price = prodect_detailes.price * (counter - 1)
            
        }
        if (counter == 1) {
            itemes.splice(newindex, 1)
            set_data(itemes)
            navigation.goBack()
        }


    }

    async function frist_get() {

        let list = JSON.parse(await AsyncStorage.getItem("market"))
        setitemes(list)
      
    }

    useEffect(() => {
        frist_get()

        return () => {
            let getsave = route.params.getsave
            getsave()
        }
    }, [])



    const update = () => {

        let data = itemes
        let index = newindex


        let update_data = {
            id: prodect_detailes.id,
            image: prodect_detailes.image,
            name: prodect_detailes.name,
            price: prodect_detailes.price,
            Counter_one_item: counter,
            counter_show: prodect_detailes.counter_show,
            size: prodect_detailes.size,
            size_prodact: prodect_detailes.size_prodact,
            total_price: prodect_detailes.total_price
        }



        data[index] = update_data
        set_data(data)

    }



    async function set_data(itemes) {
        await AsyncStorage.setItem("market", JSON.stringify(itemes))
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

                        <Image source={{uri:prodect_detailes.image}} style={style.image_prodect} resizeMode={"cover"} />

                    </View>




                    <View style={style.view_price_name}>

                        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#000" }}>{prodect_detailes.name} </Text>

                        <Text style={{ fontSize: 25, fontWeight: "400", color: "#000" }}>{prodect_detailes.total_price}  L.E</Text>

                    </View>




                    <View style={style.view_rate}>

                        <TouchableOpacity style={style.view_star}>

                            <IconFill name="star" size={25} color={"#0091CE"} style={{ marginLeft: 5 }} />

                            <Text style={{ fontSize: 20, fontWeight: "400", color: "#000", marginLeft: width * 0.1 }}>4.5 {"\n"}

                                <Text style={{ fontSize: 14, fontWeight: "normal", color: "#B8B8B8" }}>Rating</Text>

                            </Text>

                        </TouchableOpacity>




                        <TouchableOpacity style={style.view_star}>


                            <FontAwesome5 name='paper-plane' size={25} color={"#0091CE"} style={{ marginLeft: 5 }} />

                            <Text style={{ fontSize: 20, fontWeight: "400", color: "#000", marginLeft: width * 0.1 }}>4.1 km {"\n"}

                                <Text style={{ fontSize: 14, fontWeight: "normal", color: "#B8B8B8" }}>Distance</Text>

                            </Text>

                        </TouchableOpacity>



                    </View>




                    {/* <Text style={style.detalies}>This product is from Brand{prodect_detailes.prodact_name} for sports shoes and fahoin </Text> */}

                    <RadioButtonRN
                        data={prodect_detailes.size_prodact}
                        selectedBtn={(e) => {
                            prodect_detailes.size = e.label
                            //   setdisabled(false)
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


                            onPress={() => {
                                // pushdata()

                                // alert(JSON.stringify(prodect_detailes))

                                update()
                                navigation.goBack()

                            }

                            }>
                            <Text style={{ fontSize: 18, color: "#000" }}>Update</Text>
                        </TouchableOpacity>






                    </View>



                </ScrollView>

            </View>
        </>
    )
}
export default Update;



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