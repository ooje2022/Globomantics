import {
	StyleSheet,
	Text,
	View,
	Alert,
	TextInput,
	TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterScreen = ({ navigation }) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const cancelRegistration = () => {
		Alert.alert("Registration cancelled");
		navigation.navigate("Home");
	};

	const registerAccount = () => {
		if (!userName) {
			Alert.alert("Please enter username");
		}
		if (password !== confirmPassword) {
			Alert.alert("Passwords do not match");
		} else {
			AsyncStorage.getItem(userName, (err, result) => {
				if (result !== null) {
					Alert.alert(`Username ${userName} is taken.`);
				} else {
					AsyncStorage.setItem(userName, password, (err, result) => {
						Alert.alert(`Account created for username ${userName}`);
						navigation.navigate("Home");
					});
				}
			});
		}
	};
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Register</Text>
			<TextInput
				style={styles.inputs}
				placeholder="username"
				value={userName}
				onChangeText={setUserName}
			/>
			<Text style={styles.labels}>Enter Username </Text>
			<TextInput
				style={styles.inputs}
				placeholder="password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry={true}
			/>
			<Text style={styles.labels}>Enter Password </Text>
			<TextInput
				style={styles.inputs}
				placeholder="confirm password"
				value={confirmPassword}
				onChangeText={setConfirmPassword}
				secureTextEntry={true}
			/>
			<Text style={styles.labels}>Confirm Password </Text>

			<TouchableHighlight
				onPress={registerAccount}
				underlayColor="000000"
			>
				<Text style={styles.buttons}>Register</Text>
			</TouchableHighlight>
			<TouchableHighlight
				onPress={cancelRegistration}
				underlayColor="000000"
			>
				<Text style={styles.buttons}>Cancel</Text>
			</TouchableHighlight>
		</View>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingBottom: "45%",
		paddingTop: "5%",
	},
	heading: {
		fontSize: 20,
		fontWeight: "bold",
	},
	inputs: {
		width: "80%",
		marginTop: 12,
		borderWidth: 1,
		height: 45,
		fontSize: 16,
		color: "#000000",
		paddingLeft: 10,
	},
	buttons: {
		padding: 15,
		margin: 5,
		fontSize: 16,
		backgroundColor: "#DDDDDD",
		width: 150,
		height: 50,
		textAlign: "center",
	},
	labels: {
		paddingBottom: 10,
		fontSize: 16,
		fontWeight: "bold",
	},
});
