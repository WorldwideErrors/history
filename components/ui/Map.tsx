import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import { useMapViewModel } from "@/app/viewmodels/MapViewModel";
import { Marker as MarkerModel } from "@/app/models/Marker";
import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import { mapStyle } from "@/styles/mapStyle";
import { router } from "expo-router";
import { useEffect } from "react";
import { ProgressRepository } from "../../app/repositories/ProgressRepository";

export default function Map() {
  const colorScheme = useColorScheme();
  const [selectedMarker, setSelectedMarker] = useState<MarkerModel | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { markers, loading, isInRange, distanceToMarker, userLocation } = useMapViewModel();
  const inRange = selectedMarker ? isInRange(selectedMarker) : false;
  const [lessonCompleted, setLessonCompleted] = useState(false);

  const progressRepository = useMemo(
    () => new ProgressRepository(),
    []
  );

  const snapPoints = useMemo(() => ["50%"], []);

  const handleMarkerPress = useCallback(
    async (marker: MarkerModel) => {
      setSelectedMarker(marker);

      const lessonId = marker.lessonIds?.[0];

      if (lessonId) {
        const progress = await progressRepository.getLessonProgress(
          lessonId.toString()
        );

        setLessonCompleted(progress?.completed ?? false);
      } else {
        setLessonCompleted(false);
      }

      bottomSheetRef.current?.snapToIndex(0);
    },
    [progressRepository]
  );

  if (loading || !userLocation) {
  return (
    <View style={styles.loader}>
      <ActivityIndicator />
    </View>
  );
}

const region = {
  latitude: userLocation.lat,
  longitude: userLocation.lng,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation= {true}
        region={region}
        customMapStyle={mapStyle}
        showsPointsOfInterest={false}
        toolbarEnabled={false}
        mapType="standard"
        onPress={() => bottomSheetRef.current?.close()}

        

        scrollEnabled={false}
        zoomEnabled={true}
        rotateEnabled={false}
        pitchEnabled={false}
      >
        {markers.map((m) => (
          <Marker
            key={m.id}
            coordinate={{ latitude: m.position.lat, longitude: m.position.lng }}
            onPress={() => handleMarkerPress(m)}
            pinColor={Colors[colorScheme ?? "light"].tint}
          />
        ))}
      </MapView>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
      >
        <BottomSheetView style={styles.sheetContent}>
          <View style={styles.headerRow}>
            <Image
              source={"https://breda-marketing.stream.prepr.io/44fc3tszz4n5/w_1920/grote-kerk-breda-bovenaanzicht-fmo-foto-breda-marketing-large-2.webp"}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{selectedMarker?.name}</Text>
              <Text style={styles.description}>{selectedMarker?.description}</Text>
              <Text style={{ marginTop: 8, fontStyle: "italic" }}>
                {selectedMarker  && !isInRange(selectedMarker) && (
                  <Text>
                    ~ {distanceToMarker(selectedMarker)?.toFixed(0)} km
                  </Text>
                )}
              </Text>
            </View>
          </View>

          <View style={styles.headerRow}>
            <Pressable
              style={[
                styles.startButton,
                {
                  backgroundColor: !inRange
                  ? Colors[colorScheme ?? "light"].tabIconDefault
                  : lessonCompleted
                  ? "#dd5620"
                  : Colors[colorScheme ?? "light"].tint,
                  opacity: inRange ? 1 : 0.5,
                },
              ]}
              onPress={
                inRange
                  ? () => {
                      const lessonId = selectedMarker?.lessonIds?.[0];

                      if (lessonId === undefined) return;

                      router.push({
                        pathname: "/lesson/[id]",
                        params: {
                          id: lessonId.toString(),
                          locationName: selectedMarker?.name,
                        },
                      });
                    }
                  : undefined
              }
              disabled={!inRange}
            >
              <Text style={styles.startButtonText}>
                {lessonCompleted
                  ? "Les opnieuw starten"
                  : inRange
                    ? "Start les"
                    : "Te ver weg"}
              </Text>
            </Pressable>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  map: { flex: 1 },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  sheetContent: { flex: 1, padding: 16, margin: 16},
  startButton: {
    width: "100%",
    paddingVertical: 14,
    marginVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    
  },
  startButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  title: { fontSize: 22, fontWeight: "600", marginBottom: 10 },
  description: { fontSize: 16, lineHeight: 24 },
  headerRow: { flexDirection: "row", alignItems: "flex-start" },
  image: { width: 100, height: 150, borderRadius: 12, marginRight: 16 },
  textContainer: { flex: 1 },
});