import React, { useEffect, useRef } from 'react'
import { View, Text, Animated, TouchableOpacity, Dimensions } from 'react-native'


import Home from './Pages/Home'
import Shopping from './Pages/Shopping'
import prand_prodect from './Pages/prand_prodect'
import prodect_detailes from './Pages/prodect_detailes'
import profile from './Pages/profile'
import Prand_Men_OR_Woman from './Pages/Prand_Men_OR_Woman'
import Payment from './Pages/Payment'
import Update_detalies from './Pages/Update_detalies'


import login from './Pages/Login'
import SignUp from './Pages/SignUp'


import  SplaceScreen from './Pages/SplashScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const { width, height } = Dimensions.get("screen")
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function App () {

  return (

    // <NavigationContainer>
     
      <Tab.Navigator initialRouteName='Home'
      shifting="false"
     
        screenOptions={{  showLabel: true,
          headerShown: false,
          tabBarStyle: {
            height: height * 0.08,
            position: "absolute",
            bottom: 16,
            right: 16,
            right: 16,
            left: 16,
            borderRadius: 16, shadowColor:"#0091CE",
            shadowOpacity: 0.1,
            shadowRadius: 20,
         
            
          }
        }}
        
      >
        <Tab.Screen
          name="Home"
          component={Home}
         
         

          options={{
            tabBarLabel: 'Home',

            tabBarIcon: ({ color }) => (
              <View>

                <FontAwesome5 name="home" color={color} size={22} />

              </View>
            )
            
          }}
        />



        <Tab.Screen name="Shopping" component={Shopping}

          options={{

            tabBarIcon: ({ color }) => (
              <View>
                <FontAwesome5 name="shopping-bag" color={color} size={22} />
              </View>
            )
          }}



        />



<Tab.Screen name="cart" component={Payment}

options={{

  tabBarIcon: ({ color }) => (
    <View>
      <FontAwesome5 name="credit-card" color={color} size={22} />
    </View>
  )
}}



/>


        <Tab.Screen
          name="Profile"
          component={profile} options={{
            tabBarLabel: 'Profile',

            tabBarIcon: ({ color }) => (
              <View>

                <FontAwesome5 name="user-circle" color={color} size={22} />

              </View>
            )
          }}
        />


      </Tab.Navigator>
    
  );
}

// export default App;


function page_log(){
  return(<>
  <Stack.Navigator screenOptions={{ headerShown: false  , }}initialRouteName="SignUp">
    <Stack.Screen name = 'Login' component={login} />
    <Stack.Screen name = 'SignUp' component={SignUp} />
  </Stack.Navigator>
  </>)
}




   function second(){
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false  , }}initialRouteName="SplaceScreen" >
    
    
    <Stack.Screen name="App" component={App} />
    <Stack.Screen name='page_log' component={page_log}/>
    <Stack.Screen name='SplaceScreen' component={SplaceScreen}/>

      <Stack.Screen name="Prand_Men_OR_Woman" component={Prand_Men_OR_Woman} />
      <Stack.Screen name="prand_prodect" component={prand_prodect} />
      <Stack.Screen name="prodect_detailes" component={prodect_detailes} />
      <Stack.Screen name="Update_detalies" component={Update_detalies} />
    
    </Stack.Navigator>
    </NavigationContainer>
    
  )
 }
 export default second



