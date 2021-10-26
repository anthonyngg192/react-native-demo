import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Hello } from "../modules/hello/components/hello";
import { ActivityIndicatorComponent } from "../modules/activity-indicator/activity-indicator.component";
import { ButtonComponent } from "../modules/button/button.component";
import { FlatListDemo } from "../modules/flat-list/flat-list.component";
import { DisplayAnImage } from "../modules/image/image.component";
import { ImageBackGroundComponent } from "../modules/image-background/image-backgroud.component";
import AppStatusBar from "../modules/status-bar/status-bar.component";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      {/* <ActivityIndicatorComponent />
      <DisplayAnImage />
      <ButtonComponent /> */}
      <ImageBackGroundComponent/>
      <AppStatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
