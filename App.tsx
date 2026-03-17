import { Pressable, Text, View } from "react-native";

function MyButton({ children, onPress }: any) {
  return <Pressable onPress={onPress}>{children}</Pressable>;
}
MyButton.Label = ({ children }: any) => <Text>{children}</Text>;

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MyButton onPress={() => {}}>
        <MyButton.Label>Hello</MyButton.Label>
      </MyButton>
    </View>
  );
}
