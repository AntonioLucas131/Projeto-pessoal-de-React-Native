import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle:{
        backgroundColor: '#rgba(41, 40, 40, 1)',
    },
        headerTintColor: 'whitesmoke',
        
    }}>
        
        <Stack.Screen name= 'index' options={{title: 'Home'}}/>
        <Stack.Screen name= 'hubOpcoes' options={{title: 'Categorias'}}/>
        <Stack.Screen name= 'custodes' options={{title: 'Custodes'}}/>
        <Stack.Screen name= 'salamanders' options={{title: 'Salamanders'}}/>
        <Stack.Screen name= 'ultramarines' options={{title: 'Ultramarines'}}/>
        <Stack.Screen name= 'greyknights' options={{title: 'Grey Knights'}}/>
    </Stack>
    
    
  )
}

export default RootLayout;

const styles = StyleSheet.create({
    
})