import { Pressable, ScrollView, Text, View } from "react-native";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import styles from "@/styles/styling";
import { useResetLessons } from "@/hooks/use-resetlessons";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const { resetLessons } = useResetLessons();

  return (
    <SafeAreaView
      style={[
        styles.safe,
        {
          backgroundColor:
            Colors[colorScheme ?? "light"].background,
            padding: 8
        },
      ]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText
          type="title"
          style={{
            color: Colors[colorScheme ?? "light"].text,
          }}
        >
          Mijn profiel
        </ThemedText>

        
        <Pressable style={{
          backgroundColor: Colors[colorScheme ?? "light"].tabIconDefault,
          borderColor: Colors[colorScheme ?? "light"].tint,
          borderWidth: 1,
          width: "100%",
          paddingVertical: 16,
          marginVertical: 16,
          borderRadius: 12,
          alignItems: "center",
        }} onPress={() => resetLessons()}>
          <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
                >
                  <Ionicons
                    name="trash-outline"
                    size={20}
                    color="white"
                    style={{marginRight: 8 }}
                />

                <ThemedText >
                    Reset Progress
                </ThemedText>
                
                </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}