import React from 'react';
import { 
    SafeAreaView, 
    Text, 
    Image, 
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View
    } from 'react-native';
import { Feather } from '@expo/vector-icons';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome() {
    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification');
    }

    return(
        <SafeAreaView style={styled.container}>
            <View style={styled.wrapper}>
                <Text style={styled.title}>
                    Gerencie {'\n'}
                    suas plantas de{'\n'}
                    forma fácil
                </Text>

                <Image 
                source={wateringImg} 
                style={styled.image}
                resizeMode="contain"/>

                <Text style={styled.subTitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity 
                style={styled.button} 
                activeOpacity={0.7}
                onPress={handleStart}
                >

                <Feather name="chevron-right" style={styled.buttonIcon}/> 

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styled = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },

    subTitle: {
        textAlign: 'center',
        fontSize: 19,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },

    buttonIcon:{
        color: colors.white,
        fontSize: 28,
    },

    image: {
        height: Dimensions.get('window').width * 0.7
    }
});