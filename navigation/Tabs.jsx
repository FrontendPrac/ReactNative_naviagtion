import { Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { BLUE_COLOR, DARK_COLOR } from "../colors";
import styled from "@emotion/native";

const Tab = createBottomTabNavigator();

const Movies = () => {
  return (
    <View>
      <SectionTitle>Movies</SectionTitle>
    </View>
  );
};

const My = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>My</Text>
      <TouchableOpacity
        onPress={() =>
          navigate("Stacks", { screen: "one", params: { id: 123 } })
        }
      >
        <Text>Go to Stack screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const BottomTab = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: BLUE_COLOR,
        },
        tabBarStyle: {
          backgroundColor: BLUE_COLOR,
        },
      }}
      sceneContainerStyle={{ backgroundColor: DARK_COLOR }}
    >
      <Tab.Screen
        options={{
          title: "영화",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="movie" size={size} color={color} />
          ),
        }}
        name="Movies"
        component={Movies}
      />
      <Tab.Screen
        options={{
          title: "댓글",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={size}
              color={color}
            />
          ),
        }}
        name="My"
        component={My}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const SectionTitle = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.title};
`;
