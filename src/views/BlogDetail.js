<Image />;
import {
	StyleSheet,
	Text,
	View,
	Image,
	useWindowDimensions,
	ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import RenderHtml from "react-native-render-html";

const BlogDetail = ({ route, navigation }) => {
	const [postLoaded, setPostLoaded] = useState(false);
	const [postTitle, setPostTitle] = useState("");
	const [postImage, setPostImage] = useState("");
	const [postContent, setPostContent] = useState("");
	const [postID, setPostID] = useState("");
	const { width } = useWindowDimensions();
	const { blogId } = route.params;

	const getPosts = async () => {
		try {
			const response = await fetch(
				`https://public-api.wordpress.com/rest/v1.1/sites/myglobomantics.wordpress.com/posts/${blogId}`
			);
			const post = await response.json();
			setPostTitle(post.title);
			setPostImage(post.featured_image);
			setPostContent(post.content);
			setPostID(post.ID);
		} catch (err) {
			console.log(err);
		} finally {
			setPostLoaded(true);
		}
	};
	useEffect(() => {
		getPosts();
	}, []);

	const blogTagStyles = {
		img: { display: "none" },
	};

	const blogClassStyles = {
		blTitle: { marginLeft: "auto", marginRight: "auto" },
		blContent: { marginLeft: 10, marginRight: 10 },
		blBack: {
			marginLeft: "auto",
			marginRight: "auto",
			paddingBottom: 20,
		},
	};

	const postDetails = {
		html: ` 
            <div class="blTile">
            <h1>${postTitle}</h1>
                
        </div>
        <div class="biContent">
            ${postContent}

        </div>

        <div class="blBlack">
            <a href=${postID} style="textDecorationLine: none; color: #000000">
                <h2>Go Back</h2>
            </a>
        </div>
        `,
	};

	const renderersProps = {
		a: {
			onPress(event, url, htmlAttibs, target) {
				navigation.navigate("Blog");
			},
		},
	};

	return (
		<View style={{ paddingTop: 30 }}>
			{postLoaded && (
				<ScrollView>
					<Image
						style={{ width: "100%", height: 200 }}
						source={{ uri: postImage }}
					/>

					<RenderHtml
						source={postDetails}
						tagsStyles={blogTagStyles}
						classesStyles={blogClassStyles}
						renderersProps={renderersProps}
						contentWidth={width}
					/>
				</ScrollView>
			)}

			{!postLoaded && (
				<View styles={{ paddingTop: 20, alignItem: "center" }}>
					<Text> LOADING </Text>
				</View>
			)}
		</View>
	);
};

export default BlogDetail;

const styles = StyleSheet.create({});
