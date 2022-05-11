
import React from 'react'
import { styles } from './styles'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants';


const Home = ({navigation}) =>{
    
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/Logoprincipal.png')}
            style={{
                width: 300,
                height: 300,
                resizeMode: 'contain',
                top: 10,     
            }} />
            <TouchableOpacity
                onPress={()=> { navigation.navigate('Quiz')}}
                style={{
                    marginTop: 20, width: '90%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5
                }}>
                    <Text style={{fontSize: 30, color: COLORS.white, textAlign: 'center'}}>Jugar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>
                by CrESI
            </Text>
        </View>
    )
}
export default Home