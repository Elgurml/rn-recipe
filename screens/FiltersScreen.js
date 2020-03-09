import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = props => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.label}</Text>
			<Switch
				trackColor={{ true: Colors.primaryColor }}
				thumbColor={
					Platform.OS === "android" ? Colors.primaryColor : ""
				}
				value={props.state}
				onValueChange={props.onChange}
			/>
		</View>
	);
};

const FiltersScreen = props => {
	const [isGultenFree, setIsGultenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false)
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<FilterSwitch
				label="Gluten-free"
				state={isGultenFree}
				onChange={newValue => setIsGultenFree(newValue)}
			/>
			<FilterSwitch
				label="Lactose-free"
				state={isLactoseFree}
				onChange={newValue => setIsLactoseFree(newValue)}
			/>
			<FilterSwitch
				label="Vegan"
				state={isVegan}
				onChange={newValue => setIsVegan(newValue)}
			/>
			<FilterSwitch
				label="Vegetarian"
				state={isVegetarian}
				onChange={newValue => setIsVegetarian(newValue)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center"
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		margin: 20,
		textAlign: "center"
	},
	filterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		marginVertical: 15
	}
});

FiltersScreen.navigationOptions = {
	title: "Filter Meals"
};

FiltersScreen.navigationOptions = navData => {
	return {
		title: "Filter Meals",
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		)
	};
};

export default FiltersScreen;
