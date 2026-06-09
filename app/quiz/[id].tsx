import { useLocalSearchParams, router, Stack } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

import { lessons } from "@/app/data/lessons";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useQuizViewModel } from "@/hooks/use-quiz-viewmodel";
import { ProgressRepository } from "../repositories/ProgressRepository";
import { useAudioPlayer } from "expo-audio";

export default function QuizScreen() {
  const viewModel = useQuizViewModel();
  const { id } = useLocalSearchParams<{ id: string }>();
  const lessonId = Array.isArray(id) ? id[0] : id;

  const colorScheme = useColorScheme();

  const lesson = useMemo(
    () => lessons.find((l) => l.id === lessonId),
    [lessonId]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const [showResult, setShowResult] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const correctPlayer = useAudioPlayer(
    require("@/assets/sounds/correct.mp3")
  );

  const wrongPlayer = useAudioPlayer(
    require("@/assets/sounds/wrong.mp3")
  );

  if (!lesson) {
    return (
      <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ThemedText>Les niet gevonden</ThemedText>
      </ThemedView>
    );
  }

  const question = lesson.questions[currentIndex];

  const handleAnswer = (index: number) => {
    const isCorrect = index === question.correctIndex;

    console.log("Answered:", isCorrect);

    if (isCorrect) {
        console.log("Playing correct");
        correctPlayer.seekTo(0);
        correctPlayer.play();
    } else {
        console.log("Playing wrong");
        wrongPlayer.seekTo(0);
        wrongPlayer.play();
    }

    setAnswerCorrect(isCorrect);
    setShowResult(true);
    };

  const nextQuestion = async () => {
    setShowResult(false);
    setSelected(null);

    const next = currentIndex + 1;

    if (next < lesson.questions.length) {
        setCurrentIndex(next);
        return;
    }

    const finalScore = score + (answerCorrect ? 0 : 0); // score is al bijgehouden

    await viewModel.completeLesson(
        lesson.id,
        finalScore,
        lesson.questions.length
    );

    setFinished(true);
    };

  if (finished) {
    return (
      <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
        <ThemedText type="title" >
          Quiz klaar 🎉
        </ThemedText>

        <ThemedText style={{ marginTop: 16 }}>
          Je hebt {score} XP verdiend
        </ThemedText>

        <Pressable
          onPress={() => router.back()}
          style={{
            marginTop: 24,
            backgroundColor: Colors[colorScheme ?? "light"].tint,
            padding: 14,
            borderRadius: 12,
          }}
        >
          <ThemedText style={{ color: "white" }}>
            Terug naar les
          </ThemedText>
        </Pressable>
      </ThemedView>
    );

  }

  return (
    <>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Stack.Screen options={{ title: "Quiz" }} />

      <ThemedView style={{ flex: 1, padding: 16 }}>
        {/* <ThemedText type="subtitle" style={{ color: Colors[colorScheme ?? "light"].tint, textAlign: "right" }}>
          Vraag {currentIndex + 1} / {lesson.questions.length}
        </ThemedText> */}

        <ThemedText 
            type="titlequiz" 
            style={{ marginVertical: 20 }}>
          {question.question}
        </ThemedText>

        {question.answers.map((answer, index) => {

          let bg = colorScheme === "light" ? Colors.light.tabIconDefault : Colors.dark.tabIconDefault;

          return (
            <Pressable
              key={index}
              onPress={() => handleAnswer(index)}
              disabled={selected !== null}
              style={{
                padding: 14,
                borderRadius: 12,
                marginBottom: 12,
                backgroundColor: bg,
              }}
            >
              <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
                >
                <ThemedText style={{ flex: 1 }}>
                    {answer}
                </ThemedText>

                <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="white"
                />
                </View>
            </Pressable>
          );
        })}

        {showResult && (
        <View
            style={{
            marginTop: 20,
            padding: 16,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: answerCorrect ? "#6dff6d" : "#8b0000",
            backgroundColor:
                colorScheme === "dark" ? "#222" : "#f5f5f5",
            }}
        >
            <ThemedText type="subtitle">
            {answerCorrect ? "🎉 Correct!" : "😭 Helaas"}
            </ThemedText>

            {!answerCorrect && (
            <ThemedText style={{ marginTop: 8 }}>
                {question.correction}
            </ThemedText>
            )}

            <Pressable
            onPress={nextQuestion}
            style={{
                marginTop: 16,
                padding: 14,
                borderRadius: 12,
                alignItems: "center",
                backgroundColor: Colors[colorScheme ?? "light"].tint,
            }}
            >
            <ThemedText style={{ color: "white" }}>
                {currentIndex + 1 < lesson.questions.length
                ? "Volgende vraag"
                : "Resultaat bekijken"}
            </ThemedText>
            </Pressable>
        </View>
        )}
      </ThemedView>
      </ScrollView>
    </>
  );
}