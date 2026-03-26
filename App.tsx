import { Pressable, Text, View, TextInput as RNTextInput } from "react-native";

function TextInput({
  label,
  onPress,
}: {
  label: string;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <Text>{label}</Text>
      <RNTextInput
        style={{ borderWidth: 1, borderColor: "black", width: 100 }}
      />
    </Pressable>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput label="Hello" />
    </View>
  );
}
