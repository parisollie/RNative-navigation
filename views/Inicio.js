import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

const Inicio = ({navigation}) => {

    //Vid 238,Pasa parametros 
    const informacion = { 
        clienteId: 5000,
        totalpagar: 500
    }

    const visitarNosotros = () => {
        //Usamos navigate , para que los usuarios vayan a nosotros 
        //vid 238, le pasamos la informacion que le mandamos a la página nosotros
        navigation.navigate('Nosotros', informacion)
    }

    return ( 
        <View style={styles.contenedor}>
            <Text>Inicio</Text>
            <Button
                title="Ir a Nosotros"
                onPress={ () => visitarNosotros() }
            />
        </View>
       
     );
}

//Vid 236 

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default Inicio;