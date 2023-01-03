import { Text, View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const One = ({ route: { params }, navigation: { navigate } }) => {
  console.log(params);
  return (
    <View>
      <TouchableOpacity onPress={() => navigate("two")}>
        <Text>One</Text>
      </TouchableOpacity>
    </View>
  );
};

const Two = ({ navigation: { navigate } }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigate("three")}>
        <Text>Two</Text>
      </TouchableOpacity>
    </View>
  );
};

const Three = ({ navigation: { goBack, reset, setOptions } }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>goBack</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          reset({
            index: 0,
            routes: [{ name: "two" }],
          })
        }
      >
        <Text>reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setOptions({
            title: "제목을 바꿨어요",
          })
        }
      >
        <Text>Set Options</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="one" component={One} />
      <Stack.Screen name="two" component={Two} />
      <Stack.Screen name="three" component={Three} />
    </Stack.Navigator>
  );
};

export default Stacks;
