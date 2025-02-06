import React from "react";
import { View, Text, TouchableOpacity, Linking, StyleSheet, Image } from "react-native";

export default function App() {
  const openGitHub = () => {
    Linking.openURL("https://github.com/Onyechere-benedict/Repository-Configuration-");
  };

  const openHNGHire = () => {
    Linking.openURL("https://hng.tech/hire/php-developers");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://hng.tech/img/brand-logo.png" }}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to My Project</Text>

      <TouchableOpacity style={styles.button} onPress={openGitHub}>
        <Text style={styles.buttonText}>Visit GitHub Repo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openHNGHire}>
        <Text style={styles.buttonText}>Visit HNG Hire Page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
