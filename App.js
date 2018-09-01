/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Text style={styles.logo}>Logo</Text>
                <Text style={styles.title}>Account Information</Text>
              </View>
              <View style={styles.infoContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="username"
                  placeholderTextColor="#ffffff59"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                  autoCapitalize="none"
                />
                <TextInput
                  ref="txtPassword"
                  style={styles.input}
                  placeholder="username"
                  placeholderTextColor="#ffffff59"
                  secureTextEntry
                  returnKeyType="go"
                  autoCorrect={false}
                />
                <TouchableHighlight style={styles.buttonContainer}>
                  <Fragment>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                  </Fragment>
                </TouchableHighlight>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    flexDirection: "column"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  logo: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  title: {
    color: "#f7c744",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10,
    marginBottom: 10
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 8
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32,53,70)",
    fontWeight: "bold",
    fontSize: 18
  }
});
