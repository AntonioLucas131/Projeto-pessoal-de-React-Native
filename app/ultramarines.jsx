import {Text, View, Image, StyleSheet, ImageBackground, Pressable, ScrollView} from 'react-native';

import ultramarine from '../assets/images/soldados/ultramarine.jpg'

const Ultramarines = () => {
  return (
     <ScrollView style={styles.container}>
        <View>
          <Text style={styles.titulo}>Ultramarines</Text>
            <Image 
            source={ultramarine}
            style={styles.imagemLogo}        
            />
                
          <View style={styles.bordaCitacao}>
            <Text style={styles.citacao}>
                " Nós somos os Ultramarines, os filhos de Guilliman. 
                Enquanto respiramos, resistimos. Enquanto resistimos, lutamos. Enquanto lutamos, 
                prevalecemos. Nada deterá nossa ira. "
            </Text>
            <Text style={styles.autor}>
                —Marneus Calgar, Mestre do Capítulo dos Ultramarines.
            </Text>
          </View>
  
          <View>
            <Text style={styles.resumo}> 
              Os Ultramarines são um dos mais renomados Capítulos de Space Marines no universo de Warhammer 40k, 
              conhecidos por sua disciplina, honra e lealdade ao Império da Humanidade. Fundados durante a Primeira Fundação 
              os Ultramarines são admirados por sua organização exemplar e eficiência em combate. 
              Eles seguem rigorosamente o Codex, o que os torna versáteis em diversas formas de guerra. 
              São frequentemente vistos como o padrão ouro entre os Capítulos, com uma rica história de vitórias contra inimigos como Orks, Chaos e Tyranids. 
              Sua armadura azul característica e o símbolo do "U" invertido são amplamente reconhecidos. 
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
  
  export default Ultramarines

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
  color: '#4166f5',
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



