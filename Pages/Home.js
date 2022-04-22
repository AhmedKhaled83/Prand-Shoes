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

  // const [Prand, setPrand] = useState(
  //   [
  //     {
  //       id: 1,
  //       name_Prand: "Adidas",
  //       image: require("../Photoes/adidas.jpg"),
  //       image_woman: require("../Photoes/adidasWoman.jpg"),
  //       show: true,
  //       prodact_Men: [
  //         {
  //           Product_id: 1,
  //           prodact_name: "Adidas Mean",
  //           image: require("../Photoes/adidas11.jpg"),
  //           prodact_price: 500,
  //           product_count: 1,
  //           choose_size: "0",
  //           total_price: 500,
  //           show_shoes: true,
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]

  //         },
  //         {
  //           Product_id: 2,
  //           prodact_name: "Adidas Mean",
  //           image: require("../Photoes/adidas2.jpg"),
  //           prodact_price: 225,
  //           product_count: 1,
  //           show_shoes: true, total_price: 225,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]

  //         },
  //         {
  //           Product_id: 3,
  //           prodact_name: "Adidas Mean",
  //           image: require("../Photoes/adidas1.jpg"),
  //           prodact_price: 310,
  //           product_count: 1,
  //           choose_size: "0", total_price: 310,
  //           show_shoes: true,
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]

  //         },
  //         {
  //           Product_id: 4,
  //           prodact_name: "Adidas Mean",
  //           image: require("../Photoes/adidas8.jpg"),
  //           prodact_price: 195,
  //           product_count: 1,
  //           show_shoes: true, total_price: 195,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]

  //         },
  //         {
  //           Product_id: 5,
  //           prodact_name: "Adidas Mean",
  //           image: require("../Photoes/adidas5.jpg"),
  //           prodact_price: 150,
  //           product_count: 1, total_price: 150,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 6,
  //           prodact_name: "Adidas Mean",
  //           image: require("../Photoes/adidas6.jpg"),
  //           prodact_price: 600,
  //           product_count: 1, total_price: 600,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 7,
  //           prodact_name: "Adidas Mean",
  //           image: require("../Photoes/adidas7.jpg"),
  //           prodact_price: 275,
  //           product_count: 1, total_price: 275,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 8,
  //           prodact_name: "Adidas Mean",
  //           image: require("../Photoes/adidas4.jpg"),
  //           prodact_price: 305,
  //           product_count: 1, total_price: 305,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 9,
  //           prodact_name: "Adidas Mean",
  //           image: require("../Photoes/adidas9.jpg"),
  //           prodact_price: 200,
  //           product_count: 1, total_price: 200,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 10,
  //           prodact_name: "Adidas Mean",
  //           image: require("../Photoes/adidas10.jpg"),
  //           prodact_price: 420,
  //           product_count: 1, total_price: 420,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 11,
  //           prodact_name: "Adidas Mean",
  //           image: require("../Photoes/adidas3.jpg"),
  //           prodact_price: 800,
  //           product_count: 1, total_price: 800,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 12,
  //           prodact_name: "Adidas Mean",
  //           image: require("../Photoes/adidas12.jpg"),
  //           prodact_price: 125,
  //           product_count: 1, total_price: 125,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },

  //       ]
  //       ,

  //       prodact_Woman: [
  //         {
  //           Product_id: 1,
  //           prodact_name: "Adidas Woman",
  //           image: require("../Photoes/adidasWoman1.jpg"),
  //           prodact_price: 210,
  //           product_count: 1, total_price: 210,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 2,
  //           prodact_name: "Adidas Woman",
  //           image: require("../Photoes/adidasWoman2.jpg"),
  //           prodact_price: 185,
  //           product_count: 1, total_price: 185,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 3,
  //           prodact_name: "Adidas Woman",
  //           image: require("../Photoes/adidasWoman3.jpg"),
  //           prodact_price: 320,
  //           product_count: 1, total_price: 320,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 4,
  //           prodact_name: "Adidas Woman",
  //           image: require("../Photoes/adidasWoman4.jpg"),
  //           prodact_price: 200,
  //           product_count: 1, total_price: 200,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 5,
  //           prodact_name: "Adidas Woman",
  //           image: require("../Photoes/adidasWoman5.jpg"),
  //           prodact_price: 270,
  //           product_count: 1, total_price: 270,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 6,
  //           prodact_name: "Adidas Woman",
  //           image: require("../Photoes/adidasWoman6.jpg"),
  //           prodact_price: 550,
  //           product_count: 1, total_price: 550,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 7,
  //           prodact_name: "Adidas Woman",
  //           image: require("../Photoes/adidasWoman7.jpg"),
  //           prodact_price: 810,
  //           product_count: 1, total_price: 810,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 8,
  //           prodact_name: "Adidas Woman",
  //           image: require("../Photoes/adidasWoman8.jpg"),
  //           prodact_price: 195,
  //           product_count: 1, total_price: 195,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 9,
  //           prodact_name: "Adidas Woman",
  //           image: require("../Photoes/adidasWoman9.jpg"),
  //           prodact_price: 610,
  //           product_count: 1, show_shoes: true, total_price: 610,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]

  //         },
  //         {
  //           Product_id: 10,
  //           prodact_name: "Adidas Woman",
  //           image: require("../Photoes/adidasWoman10.jpg"),
  //           prodact_price: 200,
  //           product_count: 1, total_price: 200,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 11,
  //           prodact_name: "Adidas Woman",
  //           image: require("../Photoes/adidasWoman11.jpg"),
  //           prodact_price: 285,
  //           product_count: 1, total_price: 285,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },


  //       ]

  //     },
  //     {
  //       id: 2,
  //       name_Prand: "Nike",
  //       image: require("../Photoes/nike.jpg"),
  //       image_woman: require("../Photoes/nikeWoman.jpg"), show: true,
  //       prodact_Men: [
  //         {
  //           Product_id: 1,
  //           prodact_name: "Nike Mean",
  //           image: require("../Photoes/nike1.jpg"),
  //           prodact_price: 310,
  //           product_count: 1, total_price: 310,
  //           show_shoes: true,
  //           choose_size: "0",
  //           total_price: 0,
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 2,
  //           prodact_name: "Nike Mean",
  //           image: require("../Photoes/nike2.jpg"),
  //           prodact_price: 250, total_price: 250,
  //           product_count: 1, show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]

  //         },
  //         {
  //           Product_id: 3,
  //           prodact_name: "nike Mean",
  //           image: require("../Photoes/nike3.jpg"),
  //           prodact_price: 650, total_price: 650,
  //           product_count: 1, show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]

  //         },
  //         {
  //           Product_id: 4,
  //           prodact_name: "nike Mean",
  //           image: require("../Photoes/nike4.jpg"),
  //           prodact_price: 340,
  //           product_count: 1, total_price: 340,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 5,
  //           prodact_name: "Nike Mean",
  //           image: require("../Photoes/nike5.jpg"),
  //           prodact_price: 195,
  //           product_count: 1, total_price: 195,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 6,
  //           prodact_name: "Nike Mean",
  //           image: require("../Photoes/nike6.jpg"),
  //           prodact_price: 340,
  //           product_count: 1, total_price: 340,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 7,
  //           prodact_name: "nike Mean",
  //           image: require("../Photoes/nike7.jpg"),
  //           prodact_price: 356,
  //           product_count: 1, total_price: 356,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 8,
  //           prodact_name: "nike Mean",
  //           image: require("../Photoes/nike8.jpg"),
  //           prodact_price: 560,
  //           product_count: 1,
  //           show_shoes: true, total_price: 560,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 9,
  //           prodact_name: "Nike Mean",
  //           image: require("../Photoes/nike9.jpg"),
  //           prodact_price: 356,
  //           product_count: 1, total_price: 356,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 10,
  //           prodact_name: "nike Mean",
  //           image: require("../Photoes/nike10.jpg"),
  //           prodact_price: 345,
  //           product_count: 1, total_price: 345,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 11,
  //           prodact_name: "nike Mean",
  //           image: require("../Photoes/nike11.jpg"),
  //           prodact_price: 310,
  //           product_count: 1, total_price: 310,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         }, {
  //           Product_id: 12,
  //           prodact_name: "nike Mean",
  //           image: require("../Photoes/nike12.jpg"),
  //           prodact_price: 356,
  //           product_count: 1, total_price: 356,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //       ],
  //       prodact_Woman: [
  //         {
  //           Product_id: 1,
  //           prodact_name: "Nike Woman",
  //           image: require("../Photoes/nikeWoman1.jpg"),
  //           prodact_price: 290,
  //           product_count: 1,
  //           show_shoes: true, total_price: 290,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 2,
  //           prodact_name: "Nike Woman",
  //           image: require("../Photoes/nikeWoman2.jpg"),
  //           prodact_price: 700,
  //           product_count: 1, total_price: 700,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [

  //             { label: '39' }, { label: '42' }, { label: '43' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 3,
  //           prodact_name: "Nike Woman",
  //           image: require("../Photoes/nikeWoman3.jpg"),
  //           prodact_price: 510,
  //           product_count: 1, total_price: 510,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '29' }, { label: '32' }, { label: '37' }, { label: '41' }
  //           ]
  //         },
  //         {
  //           Product_id: 4,
  //           prodact_name: "Nike Woman",
  //           image: require("../Photoes/nikeWoman4.jpg"),
  //           prodact_price: 250,
  //           product_count: 1,
  //           show_shoes: true, total_price: 250,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '29' }, { label: '32' }, { label: '37' }, { label: '41' }
  //           ]
  //         },
  //         {
  //           Product_id: 5,
  //           prodact_name: "Nike Woman",
  //           image: require("../Photoes/nikeWoman5.jpg"),
  //           prodact_price: 400,
  //           product_count: 1, total_price: 400,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '29' }, { label: '32' }, { label: '37' }, { label: '41' }
  //           ]
  //         },
  //         {
  //           Product_id: 6,
  //           prodact_name: "Nike Woman",
  //           image: require("../Photoes/nikeWoman6.jpg"),
  //           prodact_price: 230,
  //           product_count: 1, total_price: 230,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '29' }, { label: '37' }, { label: '41' }
  //           ]
  //         },
  //         {
  //           Product_id: 7,
  //           prodact_name: "Nike Woman",
  //           image: require("../Photoes/nikeWoman7.jpg"),
  //           prodact_price: 180,
  //           product_count: 1,
  //           show_shoes: true, total_price: 180,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '29' }, { label: '32' }, { label: '37' }, { label: '41' }
  //           ]
  //         },
  //         {
  //           Product_id: 8,
  //           prodact_name: "Nike Woman",
  //           image: require("../Photoes/nikeWoman8.jpg"),
  //           prodact_price: 700,
  //           product_count: 1,
  //           show_shoes: true, total_price: 700,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '29' }, { label: '32' }, { label: '37' }, { label: '41' }
  //           ]
  //         },




  //       ]

  //     },
  //     {
  //       id: 3,
  //       name_Prand: "Puma",
  //       image: require("../Photoes/puma.png"),
  //       image_woman: require("../Photoes/pumaWoman.jpg"), show: true,
  //       prodact_Men: [
  //         {
  //           Product_id: 1,
  //           prodact_name: "Puma Mean",
  //           image: require("../Photoes/puma1.jpg"),
  //           prodact_price: 260,
  //           product_count: 1, total_price: 260,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '39' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 2,
  //           prodact_name: "Puma Mean",
  //           image: require("../Photoes/puma2.jpg"),
  //           prodact_price: 330,
  //           product_count: 1,
  //           show_shoes: true, total_price: 330,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '39' }, { label: '40' }, { label: '44' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 3,
  //           prodact_name: "Puma Mean",
  //           image: require("../Photoes/puma3.jpg"),
  //           prodact_price: 220,
  //           product_count: 1, total_price: 220,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '39' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 4,
  //           prodact_name: "Puma Mean",
  //           image: require("../Photoes/puma4.jpg"),
  //           prodact_price: 250,
  //           product_count: 1, total_price: 250,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '39' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         }, {
  //           Product_id: 5,
  //           prodact_name: "Puma Mean",
  //           image: require("../Photoes/puma5.jpg"),
  //           prodact_price: 320,
  //           product_count: 1, total_price: 320,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '39' }, { label: '40' }, { label: '44' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 6,
  //           prodact_name: "Puma Mean",
  //           image: require("../Photoes/puma6.jpg"),
  //           prodact_price: 650,
  //           product_count: 1, total_price: 650,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '39' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 7,
  //           prodact_name: "Puma Mean",
  //           image: require("../Photoes/puma7.jpg"),
  //           prodact_price: 810,
  //           product_count: 1, total_price: 810,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '39' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },

  //       ],

  //       prodact_Woman: [
  //         {
  //           Product_id: 1,
  //           prodact_name: "Puma Woman",
  //           image: require("../Photoes/pumawoman1.jpg"),
  //           prodact_price: 260,
  //           product_count: 1, total_price: 260,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '32' }, { label: '33' }, { label: '40' }, { label: '42' }
  //           ]
  //         },
  //         {
  //           Product_id: 2,
  //           prodact_name: "Puma Woman",
  //           image: require("../Photoes/pumawoman2.jpg"),
  //           prodact_price: 360,
  //           product_count: 1, total_price: 360,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '32' }, { label: '40' }, { label: '42' }
  //           ]
  //         },
  //         {
  //           Product_id: 3,
  //           prodact_name: "Puma Woman",
  //           image: require("../Photoes/pumawoman3.jpg"),
  //           prodact_price: 700,
  //           product_count: 1, total_price: 700,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '32' }, { label: '33' }, { label: '40' }, { label: '42' }
  //           ]
  //         },
  //         {
  //           Product_id: 4,
  //           prodact_name: "Puma Woman",
  //           image: require("../Photoes/pumawoman4.jpg"),
  //           prodact_price: 185,
  //           product_count: 1, total_price: 185,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '32' }, { label: '33' }, { label: '42' }
  //           ]
  //         },
  //         {
  //           Product_id: 5,
  //           prodact_name: "Puma Woman",
  //           image: require("../Photoes/pumawoman5.jpg"),
  //           prodact_price: 200,
  //           product_count: 1, total_price: 200,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '32' }, { label: '33' }, { label: '40' },
  //           ]
  //         },
  //         {
  //           Product_id: 6,
  //           prodact_name: "Puma Woman",
  //           image: require("../Photoes/pumawoman6.jpg"),
  //           prodact_price: 250,
  //           product_count: 1,
  //           show_shoes: true, total_price: 250,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '32' }, { label: '33' }, { label: '40' }, { label: '42' }
  //           ]
  //         },
  //         {
  //           Product_id: 7,
  //           prodact_name: "Puma Woman",
  //           image: require("../Photoes/pumawoman7.jpg"),
  //           prodact_price: 400,
  //           product_count: 1, total_price: 400,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '32' }, { label: '33' }, { label: '40' }, { label: '42' }
  //           ]
  //         },



  //       ]

  //     },
  //     {
  //       id: 4,
  //       name_Prand: "Convers",
  //       image: require("../Photoes/converns.jpg"),
  //       image_woman: require("../Photoes/conversWoman.jpg"), show: true,
  //       prodact_Men: [
  //         {
  //           Product_id: 1,
  //           prodact_name: "Converns Mean",
  //           image: require("../Photoes/converns1.jpg"),
  //           prodact_price: 200, total_price: 200,
  //           product_count: 0, show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '40' }, { label: '42' }, { label: '43' }, { label: '44' }
  //           ]


  //         },
  //         {
  //           Product_id: 2,
  //           prodact_name: "Convers Mean",
  //           image: require("../Photoes/converns2.jpg"),
  //           prodact_price: 420,
  //           product_count: 1, total_price: 420,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 3,
  //           prodact_name: "Converns Mean",
  //           image: require("../Photoes/converns3.jpg"),
  //           prodact_price: 150,
  //           product_count: 1, total_price: 150,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '39' }, { label: '42' }, { label: '44' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 4,
  //           prodact_name: "Converns Mean",
  //           image: require("../Photoes/converns4.jpg"),
  //           prodact_price: 210,
  //           product_count: 1, total_price: 210,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '45' }
  //           ]
  //         }, {
  //           Product_id: 5,
  //           prodact_name: "Converns Mean",
  //           image: require("../Photoes/converns5.jpg"),
  //           prodact_price: 810,
  //           product_count: 1, total_price: 810,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '37' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 6,
  //           prodact_name: "Converns Mean",
  //           image: require("../Photoes/converns6.jpg"),
  //           prodact_price: 260,
  //           product_count: 1, total_price: 260,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '35' }, { label: '42' }, { label: '44' }
  //           ]
  //         },

  //       ],
  //       prodact_Woman: [
  //         {
  //           Product_id: 1,
  //           prodact_name: "Convers Woman",
  //           image: require("../Photoes/conversWoman1.jpg"),
  //           prodact_price: 360,
  //           product_count: 1, total_price: 360,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 2,
  //           prodact_name: "Convers Woman",
  //           image: require("../Photoes/conversWoman2.jpg"),
  //           prodact_price: 510,
  //           product_count: 1, total_price: 510,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 3,
  //           prodact_name: "Convers Woman",
  //           image: require("../Photoes/conversWoman3.jpg"),
  //           prodact_price: 340,
  //           product_count: 1,
  //           show_shoes: true, total_price: 340,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }
  //           ]
  //         },
  //         {
  //           Product_id: 4,
  //           prodact_name: "Convers Woman",
  //           image: require("../Photoes/conversWoman4.jpg"),
  //           prodact_price: 210,
  //           product_count: 1, total_price: 210,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 5,
  //           prodact_name: "Convers Woman",
  //           image: require("../Photoes/conversWoman5.jpg"),
  //           prodact_price: 190,
  //           product_count: 1, total_price: 190,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 6,
  //           prodact_name: "Convers Woman",
  //           image: require("../Photoes/conversWoman6.jpg"),
  //           prodact_price: 290,
  //           product_count: 1, total_price: 290,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 7,
  //           prodact_name: "Convers Woman",
  //           image: require("../Photoes/conversWoman7.jpg"),
  //           prodact_price: 310, total_price: 310,
  //           product_count: 1,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' },
  //           ]
  //         },
  //         {
  //           Product_id: 8,
  //           prodact_name: "Convers Woman",
  //           image: require("../Photoes/conversWoman8.jpg"),
  //           prodact_price: 290,
  //           product_count: 1, total_price: 290,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },



  //       ]

  //     },
  //     {
  //       id: 5,
  //       name_Prand: "Vans",
  //       image: require("../Photoes/vans.jpg"),
  //       image_woman: require("../Photoes/VansWoman.jpg"), show: true,
  //       prodact_Men: [
  //         {
  //           Product_id: 1,
  //           prodact_name: "Vans Mean",
  //           image: require("../Photoes/vans4.jpg"),
  //           prodact_price: 320,
  //           product_count: 1, total_price: 320,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '40' }, { label: '40' }, { label: '44' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 2,
  //           prodact_name: "Vans Mean",
  //           image: require("../Photoes/vans1.jpg"),
  //           prodact_price: 198,
  //           product_count: 1, total_price: 198,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 3,
  //           prodact_name: "Vans Mean",
  //           image: require("../Photoes/vans2.jpg"),
  //           prodact_price: 600,
  //           product_count: 1, total_price: 600,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '45' }, { label: '46' }
  //           ]
  //         },
  //         {
  //           Product_id: 4,
  //           prodact_name: "Vans Mean",
  //           image: require("../Photoes/vans3.jpg"),
  //           prodact_price: 380, total_price: 380,
  //           product_count: 1,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 5,
  //           prodact_name: "Vans Mean",
  //           image: require("../Photoes/vans5.jpg"),
  //           prodact_price: 390,
  //           product_count: 1, total_price: 390,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '40' }, { label: '43' }, { label: '44' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 6,
  //           prodact_name: "Vans Mean",
  //           image: require("../Photoes/vans6.jpg"),
  //           prodact_price: 560, total_price: 560,
  //           product_count: 1,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]

  //         },

  //       ],

  //       prodact_Woman: [
  //         {
  //           Product_id: 1,
  //           prodact_name: "Vans Woman",
  //           image: require("../Photoes/VansWoman1.jpg"),
  //           prodact_price: 320,
  //           product_count: 1, total_price: 320,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '39' }, { label: '33' }
  //           ]
  //         },
  //         {
  //           Product_id: 2,
  //           prodact_name: "Vans Woman",
  //           image: require("../Photoes/VansWoman2.jpg"),
  //           prodact_price: 230,
  //           product_count: 1, total_price: 230,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '40' }, { label: '42' }
  //           ]
  //         },
  //         {
  //           Product_id: 3,
  //           prodact_name: "Vans Woman",
  //           image: require("../Photoes/VansWoman3.jpg"),
  //           prodact_price: 197,
  //           product_count: 1, total_price: 197,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 4,
  //           prodact_name: "Vans Woman",
  //           image: require("../Photoes/VansWoman4.jpg"),
  //           prodact_price: 250,
  //           product_count: 1, total_price: 250,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' },
  //           ]
  //         },
  //         {
  //           Product_id: 5,
  //           prodact_name: "Vans Woman",
  //           image: require("../Photoes/VansWoman5.jpg"),
  //           prodact_price: 360,
  //           product_count: 1, total_price: 360,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '28' }, { label: '30' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 6,
  //           prodact_name: "Vans Woman",
  //           image: require("../Photoes/VansWoman6.jpg"),
  //           prodact_price: 368,
  //           product_count: 1,
  //           show_shoes: true, total_price: 368,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },


  //       ]

  //     },
  //     {
  //       id: 6,
  //       name_Prand: "Under Armous",
  //       image: require("../Photoes/underarmous.jpg"),
  //       image_woman: require("../Photoes/underarmousWoman.jpg"), show: true,
  //       prodact_Men: [
  //         {
  //           Product_id: 1,
  //           prodact_name: "Under Armous Mean",
  //           image: require("../Photoes/underarmous.jpg"),
  //           prodact_price: 640,
  //           product_count: 1, total_price: 640,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '45' }, { label: '42' }
  //           ]
  //         },
  //         {
  //           Product_id: 2,
  //           prodact_name: "Under Armous Mean",
  //           image: require("../Photoes/underarmous1.jpg"),
  //           prodact_price: 310,
  //           product_count: 1, show_shoes: true, total_price: 310,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '35' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]

  //         },
  //         {
  //           Product_id: 3,
  //           prodact_name: "Under Armous Mean",
  //           image: require("../Photoes/underarmous2.jpg"),
  //           prodact_price: 260,
  //           product_count: 1, total_price: 260,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 4,
  //           prodact_name: "Under Armous Mean",
  //           image: require("../Photoes/underarmous3.jpg"),
  //           prodact_price: 450,
  //           product_count: 1, total_price: 450,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '42' }, { label: '45' }
  //           ]
  //         }, {
  //           Product_id: 5,
  //           prodact_name: "Under Armous Mean",
  //           image: require("../Photoes/underarmous5.jpg"),
  //           prodact_price: 354,
  //           product_count: 1, total_price: 354,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' },
  //           ]
  //         },
  //         {
  //           Product_id: 6,
  //           prodact_name: "Under Armous Mean",
  //           image: require("../Photoes/underarmous6.jpg"),
  //           prodact_price: 254,
  //           product_count: 1, total_price: 254,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '32' }, { label: '41' }, { label: '44' }, { label: '45' }
  //           ]
  //         },

  //       ],

  //       prodact_Woman: [
  //         {
  //           Product_id: 1,
  //           prodact_name: "Under Armous Woman",
  //           image: require("../Photoes/underarmousWoman1.jpg"),
  //           prodact_price: 241,
  //           product_count: 1, total_price: 241,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '35' }, { label: '42' }, { label: '43' }
  //           ]
  //         },
  //         {
  //           Product_id: 2,
  //           prodact_name: "Under Armous Woman",
  //           image: require("../Photoes/underarmousWoman2.jpg"),
  //           prodact_price: 265,
  //           product_count: 1, total_price: 265,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 3,
  //           prodact_name: "Under Armous Woman",
  //           image: require("../Photoes/underarmousWoman3.jpg"),
  //           prodact_price: 356,
  //           product_count: 1, total_price: 356,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }, { label: '42' }, { label: '44' }
  //           ]
  //         },
  //         {
  //           Product_id: 4,
  //           prodact_name: "Under Armous Woman",
  //           image: require("../Photoes/underarmousWoman4.jpg"),
  //           prodact_price: 590,
  //           product_count: 1,
  //           show_shoes: true, total_price: 590,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '40' }
  //           ]
  //         },
  //         {
  //           Product_id: 5,
  //           prodact_name: "Under Armous Woman",
  //           image: require("../Photoes/underarmousWoman5.jpg"),
  //           prodact_price: 598,
  //           product_count: 1, total_price: 598,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '45' }, { label: '42' }
  //           ]
  //         },
  //         {
  //           Product_id: 6,
  //           prodact_name: "Under Armous Woman",
  //           image: require("../Photoes/underarmousWoman6.jpg"),
  //           prodact_price: 296,
  //           product_count: 1, total_price: 296,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '33' }, { label: '42' }, { label: '45' }
  //           ]
  //         },
  //         {
  //           Product_id: 7,
  //           prodact_name: "Under Armous Woman",
  //           image: require("../Photoes/underarmousWoman7.jpg"),
  //           prodact_price: 297,
  //           product_count: 1, total_price: 297,
  //           show_shoes: true,
  //           choose_size: "0",
  //           size_prodact: [
  //             { label: '36' }, { label: '40' }, { label: '43' }, { label: '45' }
  //           ]
  //         },


  //       ]
  //     },




  //   ]
  // )

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

