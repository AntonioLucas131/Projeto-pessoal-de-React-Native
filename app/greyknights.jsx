import {Text, View, Image, StyleSheet, ImageBackground, Pressable, ScrollView} from 'react-native';

import greyknight from '../assets/images/soldados/greyknight.jpg'

const GreyKnights = () => {
  return (
     <ScrollView style={styles.container}>
        <View>
          <Text style={styles.titulo}>Grey Knights</Text>
            <Image 
            source={greyknight}
            style={styles.imagemLogo}        
            />
                
          <View style={styles.bordaCitacao}>
            <Text style={styles.citacao}>
                " Somos os guerreiros dos Grey Knights, blindados pela fé, protegidos pela devoção e armados com pureza de propósito. 
                Mas, ainda maiores do que isso, carregamos a luz do divino Imperador da Humanidade para os lugares escuros, 
                para expurgar os Demoníacos onde quer que ele esteja. "
            </Text>
            <Text style={styles.autor}>
                —Irmão-Capitão Arvann Stern.
            </Text>
          </View>
  
          <View>
            <Text style={styles.resumo}> 
              Os Cavaleiros Cinzentos são um Capítulo secreto e misterioso dos Fuzileiros Espaciais, 
              especificamente encarregados de combater as perigosas entidades demoníacas da Warp e todos os mortais que detêm o poder corrupto dos Deuses do Caos . 
              Eles foram criados pelo Imperador com a ajuda de Malcador, o Sigilita, na época da Heresia de Hórus, 
              para servir como a maior arma da Humanidade contra a ameaça representada pela existência do Caos . 
              Eles têm a honra de receber o implante de uma semente genética projetada diretamente do genoma do próprio Imperador.
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
  
export default GreyKnights

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#333',
    paddingBottom: 10,
},

  resumo:{
    fontSize: 18,
    color: 'whitesmoke',
    padding: 20,  
  },

  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#b0a89e',
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



