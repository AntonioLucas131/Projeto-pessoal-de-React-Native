import { StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity,Pressable  } from 'react-native'
import {Link} from 'expo-router'



import emperor from '../assets/images/telaPrincipal/emperor.jpg';
import logo from '../assets/images/telaPrincipal/warhammer40kLogo.png'


const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
          source={emperor} 
          style={styles.background}
      >
        
      <Image 
          source={logo} 
          style={styles.logo}>   
      </Image>
      
      <Text style={styles.titulo}>
        Capítulos do Adeptus Astartes
      </Text>

      <View>
        <Link href='/hubOpcoes' asChild>
          <Pressable style={styles.botaoLink}>
            <Text style={styles.textoBotao}>Explorar</Text>
          </Pressable>
        </Link>
      </View>
      
    
      </ImageBackground>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column',
  },

  background:{
    flex: 1,
    width: '100%',
    height: '100%',
  },

  logo:{
    justifyContent:'center',
    height: 300,
    width: 430,
    marginTop: 70,
    padding: 50,
    resizeMode: 'contain',    
  },

  titulo:{
    color: 'whitesmoke',
    marginTop: -50,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  
  textoBotao:{
    fontFamily: 'Serif',
    color: 'gold',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  botaoLink:{
    alignSelf: 'center',
    height: 100,
    width: 200,
    backgroundColor: '#1a1a1a', 
    borderWidth: 3,
    borderColor: '#e7bf3cff', // dourado imperial
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    transform: [{ skewX: '-100deg' }], 
    shadowColor: '#d4af37',
    shadowOpacity: 0.6,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 4,
    elevation: 8, 
},
    

})