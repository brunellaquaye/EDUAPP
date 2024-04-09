import { View, Text, Image,ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import courseDetails from "../_mockData/courseDetail";

const ViewCourseDetails = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView>

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
        <Image style={{
          height: wp("50px"),
          width: wp("90px"),
          justifyContent: "center",
          alignContent: "center",
          borderRadius: wp("4px"),

        }}
        source={require("../../assets/SplashImage.jpeg")} />
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
<View>
    {courseDetails.map((item)=>{
        return(
          <View key={item.id}>
                <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginRight: 12,

                }}
                className="flex flex-row items-center space-x-3">
                  <View>
                    <Image style = {{
                      width: wp("18px"),
                      height: wp("18px"),
                      borderRadius: wp("4px"),
                      marginBottom: wp("4px"),
                    }}
                      source={{ uri: item.imageUrl }}
                      className="w-12 h-12 rounded-full"
                    />
                  </View>

                  <View style={{
                    flex: 1,
                  }}
                   className="flex-1">
                    <Text style ={{
                      fontSize: wp("5px"),
                      fontWeight: "bold",
                      color: "black",
                      marginLeft: wp("5px"),
                    }}
                     className="font-semibold">{item.title}</Text>
                    <Text style ={{
                      color: "rgb(107 ,114 ,128)",
                      marginLeft: wp("5px"),
                      marginBottom: wp("7px"),
                    }}
                    className="text-gray-500">{item.description}</Text>
                  </View>

                  {/* <View>
                    <Text className="text-gray-500">{item.time}</Text>
                  </View> */}
                </View>
                <View 
                className="border-b border-gray-300 mt-5"></View>
              </View>
        )
      })}
    </View>    
    </View>
    </ScrollView>

  );
};
export default ViewCourseDetails;
