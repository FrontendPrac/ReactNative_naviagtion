import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import Root from "./navigation/Root";
import { darkTheme, lightTheme } from "./theme";

export default function App() {
  // 모바일이 다크모드인지 아닌지 판별
  const isDark = useColorScheme() === "dark";
  // console.log(isDark);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
