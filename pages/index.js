import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput } from "react-native";
import Slider from "@react-native-community/slider";
import { ModalTokens } from '../components/modal';

export function Home() {
    const [qtde, defineQtde] = useState(6);
    const [telaModal, configTelaModal] = useState(false);
    const [nome, setNome] = useState("");

    function gerarToken() {
        configTelaModal(true);
    }

    return (
        <View style={ESTILO.container}>
            <Image source={require("../assets/logo.png")} style={ESTILO.logo} />
            <Text style={ESTILO.caracteres}>
                {qtde} Caracteres
            </Text>
            <View style={ESTILO.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={0}
                    maximumValue={5}
                    minimumTrackTintColor="#ff0000"
                    maximumTrackTintColor="#000"
                    thumbTintColor="#392de9"
                    value={qtde}
                    onValueChange={(value) => defineQtde(value.toFixed(0))}
                />
            </View>
            <TextInput
                style={ESTILO.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
                placeholder="Digite seu nome"
            />
            <TouchableOpacity style={ESTILO.button} onPress={() => gerarToken(nome)}>
                <Text style={ESTILO.buttonText}>
                   confirmar avaliação
                </Text>
            </TouchableOpacity>
            <Modal visible={telaModal} animationType="fade" transparent={true}>
                <ModalTokens handleClose={() => configTelaModal(false)} nome={nome} />
            </Modal>
        </View>
    );
}

const ESTILO = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3ff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: 60,
        
    },
    area: {
        marginBottom: 14,
        marginTop: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8
    },
    button: {
        backgroundColor: "#FF0000",
        width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: "#FFF"
    },
    caracteres: {
        fontSize: 30,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        width: "80%",
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginTop: 20,
    }
});
