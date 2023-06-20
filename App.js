import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/views/Home";
import AboutScreen from "./src/views/About";
import GloboHeader from "./src/components/Header";
import RegisterScreen from "./src/views/Register";
import LoginScreen from "./src/views/Login";
import Blog from "./src/views/Blog";
import BlogDetail from "./src/views/BlogDetail";
import Quiz from "./src/views/Quiz";
import QuizFinish from "./src/views/QuizFinish";
import Video from "./src/views/Video";
import VideoDetail from "./src/views/VideoDetail";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="VideoDetail"
					component={VideoDetail}
					options={{ title: "Watch Lesson" }}
				/>
				<Stack.Screen
					name="Video"
					component={Video}
					options={{ title: "Video Lessons" }}
				/>
				<Stack.Screen
					name="QuizFinish"
					component={QuizFinish}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Quiz"
					component={Quiz}
					options={{ title: "" }}
				/>
				<Stack.Screen
					name="BlogDetail"
					component={BlogDetail}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Blog"
					component={Blog}
					options={{ title: "Globo Blog" }}
				/>
				<Stack.Screen
					name="Register"
					component={RegisterScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="About"
					component={AboutScreen}
					options={{ title: "About Us" }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ header: () => <GloboHeader /> }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
		/* <StatusBar style="auto" /> */
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
