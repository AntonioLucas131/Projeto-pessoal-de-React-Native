import { StyleSheet, Text, View, ScrollView, Image,  } from 'react-native'
import { Link } from 'expo-router'

import custodian from "../assets/images/soldados/custodian.jpg"

const Custodes = () => {
  return (
  <ScrollView style={styles.container}>
    <View>
			<Text style={styles.titulo}>Custodes</Text>
				<Image 
				source={custodian}
				style={styles.imagemLogo}        
				/>
						
			<View style={styles.bordaCitacao}>
					<Text style={styles.citacao}>
							" Estes homens são meus guarda-costas, suas vidas estão em jogo em nome da minha segurança física. 
							Não haverá dúvida alguma sobre sua lealdade a mim. Eu, e somente eu, terei autoridade para julgá-los. 
							Nenhum outro comandante eles terão em batalha ou em serviço. 
							Ninguém os impedirá de me seguir e ninguém atrapalhará ou atrasará sua missão. Assim está decretado! "
					</Text>
					<Text style={styles.autor}>
							—Antiga declaração feita pelo Imperador da Humanidade durante a Era da Conflito.
					</Text>
			</View>

			<View>
					<Text style={styles.texto}> 
						Também conhecidos como "Os Dez Mil", o Adeptus Custodes é o regimento militar responsável por proteger o corpo físico do Imperador da Humanidade, 
						servir como seus emissários mais importantes, seus compatriotas e guardiões de vários segredos. Os Custodians são um grupo de elite de Super-Soldados 
						geneticamente modificados onde cada um foi criado pesoalmente pelo Imperador da Humanidade, fazendo com que sejam até mais poderosos de Space Marines.
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

export default Custodes;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#333',
    paddingBottom: 10,
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
    color: 'gold',
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
    width: 430,
    padding: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  bordaCitacao:{
    borderWidth: 5,
    borderColor: 'rgba(66, 66, 62, 0.5)',
  }
})