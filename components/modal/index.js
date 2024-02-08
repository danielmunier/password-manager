import { StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native"
import * as Clipboard from "expo-clipboard"
import useStorage from "../../hooks/useStorage"

export default function ModalPassword({ password, handleClose }) {
    const { saveItem } = useStorage()

    async function handleCopyPassword() {
   

        await Clipboard.setStringAsync(password)
        await saveItem("@pass", password)
        handleClose()
    }


   

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>{password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose} >
                        <Text style={styles.textBack}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={async () => {await saveItem("@pass", password)}} style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.textSave}>Salvar senha</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    content: {
        width: "70%",
        backgroundColor: "#3b3a3a",
        borderRadius: 4,
        padding: 15,
    },
    title: {
        color: "white",
        marginBottom: 24,
        textAlign: "center"

    },
    innerPassword: {
        padding: 10,
        borderRadius: 4

    },

    text: {
        textAlign: "center",
        color: "white",
        fontSize: 20
    },
    buttonArea: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button: {
        padding: 10,
        borderRadius: 4,
        marginTop: 10,

    },
    buttonSave: {
        backgroundColor: "#9100b5",
    },
    textSave: {
        color: "white"
    },
    textBack: {
        color: "white"
    }
})