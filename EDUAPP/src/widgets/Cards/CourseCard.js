import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import courseContentData from "../../_mockData/courseContentData";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const CourseCard = () => {
  const navigation = useNavigation();
  return (
    <View className="space-x-2">
      <FlatList
        data={courseContentData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          // we add the touchsble opacity in order to be able to click on the card. do not forget to import it first.a
          <TouchableOpacity
            // the onpress event will navigate to the ViewCOurseDetails page when clicked and this makes use of the "useNavigation" that we mentioned above earlier.
            onPress={() => navigation.navigate("ViewCourseDetails")}
            style={{
              gap: wp("10px"),
              width: wp("50%"),
              height: "100%",
              flexDirection: "row",
            }}
            className="flex flex-row"
          >
            <View
              style={{ 
                padding: wp("4px"),
                backgroundColor: "#989BD7",
                marginBottom: wp("10px"),
                borderRadius: wp("2px"),
                }}
              className="bg-[#989BD7] mb-10 rounded-[3rem]"
            >
              <View style={{ width: wp("36px") }}>
                <View>
                  <Text style= {{
                    fontSize: wp("5px"),
                    fontWeight: "medium",
                    color: "white",
                    textAlign: "center",
                    // lineHeight: 21,
                  }}
                  className="leading-7 text-white font-medium">
                    {item.title}
                  </Text>
                  <Text style ={{
                    fontSize: wp("4px"),
                    textAlign: "center",
                    fontWeight:"bold",
                    color: "white",
                  }}
                  className="text-lg font-bold text-white">
                    {item.description}
                  </Text>
                </View>

                <View style={{
                  justifyContent: "center",
                  alignItems: "center",
                  }}
                className="flex justify-center items-center">
                  <Image
                    style={{ width: wp("40%"), height: wp("35%") }}
                    source={item.image}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
};
export default CourseCard;
