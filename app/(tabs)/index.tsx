import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import styles from "@/styles/styling";
import { ThemedView } from "@/components/themed-view";
import Map from "@/components/ui/Map";

export default function HomeScreen() {
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, paddingBottom: 0, marginBottom: 0 }}>
      
      <View>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">
            Ontdek de geschiedenis
          </ThemedText>
        </ThemedView>
      </View>

      <View style={{ flex: 1,  }} >
        <Map />
      </View>

    </SafeAreaView>
  );
}