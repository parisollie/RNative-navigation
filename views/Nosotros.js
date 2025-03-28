import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

const Nosotros = ({ navigation, route }) => {

    //Vid 238, obtenemos los parametros de la pagina de inicio 
    const { clienteId } = route.params;

    //Vid 237 , para poder volver 
    const volver = () => {
        //  navigation.navigate('Inicio')
        //Tambien podemos regresar de esta manera.
        //  navigation.goBack();
        navigation.push('Inicio')
    }

    return (
        <View style={styles.contenedor}>
            <Text> {clienteId} </Text>
            <Button
                title="Volver"
                onPress={() => volver()}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Nosotros;