import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import { Link } from 'expo-router'


import iconcustodes from '../assets/images/icones/custodes.png'
import iconsalamanders from "../assets/images/icones/salamanders.png"
import iconultramarines from "../assets/images/icones/ultramarines.png"
import icongreyknight from "../assets/images/icones/greyknight.png"


const HubOpcoes = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>
        Escolha um dos Regimentos para saber mais sobre ele.
      </Text>
    
      <View style={styles.grid}>
        <Text style={styles.reglealistas}>
          Regimentos Lealistas
        </Text>

  
        <Link href="/custodes" asChild>
          <Pressable style={styles.botao}>
            <Image
              source={iconcustodes}
              style={styles.icone}
            />
            <Text style={styles.botaoTexto}>Adeptus Custodes</Text>
          </Pressable>
        </Link>
    
        <Link href="/salamanders" asChild>
          <Pressable style={styles.botao}>
            <Image
              source={iconsalamanders}
              style={styles.icone}
            />
            <Text style={styles.botaoTexto}>Salamanders</Text>
          </Pressable>
        </Link>

        <Link href="/ultramarines" asChild>
            <Pressable style={styles.botao}>
              <Image
                source={iconultramarines}
                style={styles.icone}
              />
              <Text style={styles.botaoTexto}>Ultramarines</Text>
            </Pressable>
          </Link>
      
          <Link href="/greyknights" asChild>
            <Pressable style={styles.botao}>
              <Image
                source={icongreyknight}
                style={styles.icone}
              />
              <Text style={styles.botaoTexto}>Grey Knights</Text>
            </Pressable>
          </Link>
        </View> 
    
      
    
    
    
    
    
    
    
    </ScrollView>
  )
}

export default HubOpcoes;

const styles = StyleSheet.create({
  container:{
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#010101',
  },

  titulo:{
    color: 'whitesmoke',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  reglealistas:{
    color:'#e7bf3cff',
    textAlign: 'center',
    fontSize: 30,
    padding: 20,
  },
  
  grid: {
    marginBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },

  botao: {
    width: 120,
    height: 100,
    borderRadius: 20,
    backgroundColor: "rgba(54, 53, 53, 1)",
    borderWidth: 3,
    borderColor: "rgb(201, 160, 59)",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    padding: 10,
  },
  
  icone: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  botaoTexto: {
    marginTop: 15,
    color: "whitesmoke",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },

})