import { Pressable, StyleSheet, Text, View } from "react-native";
import { btnGoogleSignIn } from "./src/btnGoogleSignIn";

export default function App() {
  function btn() {
    btnGoogleSignIn();
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={btn}>
        <Text style={styles.txt}>GOOGLE</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "blue",
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
