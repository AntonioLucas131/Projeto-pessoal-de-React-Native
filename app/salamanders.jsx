import {Text, View, Image, StyleSheet, ImageBackground, Pressable, ScrollView} from 'react-native';
import React from 'react'
import salamander from "../assets/images/soldados/salamander.jpg"

const Salamanders = () => {
  return (
    <ScrollView style={styles.container}>
			<View>
				<Text style={styles.titulo}>Salamanders</Text>
					<Image 
					source={salamander}
					style={styles.imagemLogo}        
					/>
							
				<View style={styles.bordaCitacao}>
					<Text style={styles.citacao}>
							" Na Bigorna da Guerra os fortes são temperados e os fracos são feitos perecer, 
							assim as almas dos homens são testadas como metal no fogo da forja. "
					</Text>
					<Text style={styles.autor}>
							—O Primarca Vulkan
					</Text>
				</View>

				<View>
					<Text style={styles.texto}> 
						Os Salamanders são um dos Primeiros Capítulos Fundadores Lealistas dos Space Marines. 
						Eles serviram originalmente como a XVIII Legião de Space Marines do Império durante a Grande Cruzada e a Heresia de Horus. 
						Por algum tempo antes de sua unificação com seu primarca Vulkan, eles eram conhecidos como " Os Guerreiros Dragões ". 
						Seu planeta natal é o Mundo da Morte vulcânico de Nocturne.
					</Text>
				</View>

				<View>
					<Text>



					</Text>
				</View>
		
		
		
			
			</View>
	</ScrollView>
  )
}

export default Salamanders

const styles = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: '#333',
  },
  texto:{
    fontSize: 18,
    color: 'whitesmoke',
    padding: 20,
  },
  
  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },
  citacao:{
    fontStyle: "italic",
    padding: 10,
    fontSize: 16,
    color: 'whitesmoke',
  },
  autor:{
    flex: 1,
    fontSize: 13,
    color: "#cec2c2ff",
    
  },
   imagemLogo:{
    backgroundColor:'rgba(27, 27, 26, 0.5)',
    borderColor: 'rgba(27, 27, 26, 0.5)',
    justifyContent:'center',
    height: 300,
    width: '100%',
    padding: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  bordaCitacao:{
    borderWidth: 5,
    borderColor: 'rgba(66, 66, 62, 0.5)',
  }
})