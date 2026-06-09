import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import styles from "@/styles/styling";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LessonContent } from "../models/Lesson";
import { Image } from "expo-image";
import { lessons } from "../data/lessons";
import { Colors } from "@/constants/theme";

export default function LessonScreen() {
  const { id, locationName } = useLocalSearchParams<{
    id: string;
    locationName: string;
  }>();
  const lesson = lessons.find((l) => l.id === id)!;
  const colorScheme = useColorScheme();
  
  return (
    <>
      <Stack.Screen
        options={{
          title: locationName,
          headerBackTitle: "Terug",
        }}
      />
        <ScrollView
          contentContainerStyle={{
            padding: 16,
          }}
        >
          <ThemedText type="title" style={{ marginBottom: 12, color: Colors[colorScheme ?? 'light'].tint }}>
            Wist je dat?
          </ThemedText>
          {lesson?.content.map((item: LessonContent) => {
            if (item.type === "image") {
              return (
                <Image
                  key={item.id}
                  source={item.content}
                  style={{
                    alignSelf: "stretch",
                    height: 180,
                    borderRadius: 12,
                    marginVertical: 16,
                    padding: 16
                  }}
                />
              );
            }

            return (
              <ThemedView
                key={item.id}
                style={{
                  borderRadius: 12,
                  marginVertical: 8,
                }}
              >
                <ThemedText> {'➜'} {item.content}</ThemedText>
              </ThemedView>
            );
          })}

          <Pressable
            style={{
              backgroundColor: Colors[colorScheme ?? "light"].tint,
              paddingVertical: 14,
              borderRadius: 12,
              alignItems: "center",
              marginTop: 24,
              marginBottom: 32,
            }}
            onPress={() =>
              router.push({
                pathname: "/quiz/[id]",
                params: {
                  id: lesson.id,
                },
              })
            }
          >
            <ThemedText
              style={{
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Start Quiz
            </ThemedText>
          </Pressable>
        </ScrollView>
    </>
  );
}