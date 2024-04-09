import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import CourseCard from "../widgets/Cards/CourseCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
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
      {/**header Section */}
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="flex flex-row justify-between items-center">
        <View>
          <Text
            style={{
              fontSize: wp("4.3px"),
              fontWeight: "bold",
              color: "#4E35EA",
            }}
            className="font-bold text-[#4E35EA]"
          >
            Hello,Yawson
          </Text>
        </View>

        <View
          style={{
            gap: wp("6px"),
            flexDirection: "row",
          }}
          className="flex flex-row"
        >
          <AntDesign name="search1" size={wp("5px")} color="black" />
          <AntDesign name="user" size={wp("5px")} color="black" />
        </View>
      </View>

      {/**description */}
      <View
        style={{
          width: wp("70%"),
        }}
      >
        <Text style={{ fontSize: wp("6px"),
        fontWeight: "bold" }} className="font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>

      {/**Course Section */}
      <View>
        <CourseCard />
      </View>
    </View>
  );
};
export default HomeScreen;
