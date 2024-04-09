import { View, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ViewCourseDetails = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        marginHorizontal: wp("3px"),
        gap: wp("10px"),
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: wp("4.3px"),
            fontWeight: "bold",
            color: "#4E35EA",
          }}
        >
          Multimedia
        </Text>
      </View>

      <View
        style={{
          width: wp("70%"),
        }}
      >
        <Text
          style={{
            fontSize: wp("6px"),
            fontWeight: "bold",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>

      <View>
        {/* <Image source={require("../assets/SplashImage.jpeg")} /> */}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: wp("4.5px"),
            fontWeight: "bold",
            color: "black",
          }}
        >
          Course Details
        </Text>
      </View>
    </View>
  );
};
export default ViewCourseDetails;
