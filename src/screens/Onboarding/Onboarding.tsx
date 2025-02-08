import { Alert, FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { WrapperContainer } from "@components/atoms";
import imagePath from "@constants/imagePath";
import { height, moderateScale, scale, width } from "@utils/scaling";
import fontFamily from "@constants/fontFamily";
import { readSync } from "fs";

const Onboarding = () => {
  const data = [
    {
      id: 1,
      name: "Luxury Villa",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      price: "$450,000",
      location: "Los Angeles, CA",
      rating: 4.8,
      bedrooms: 4,
      bathrooms: 3,
      size: "3500 sqft",
    },
    {
      id: 2,
      name: "Modern Apartment",
      image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
      price: "$320,000",
      location: "New York, NY",
      rating: 4.5,
      bedrooms: 2,
      bathrooms: 2,
      size: "1500 sqft",
    },
    {
      id: 3,
      name: "Cozy Cottage",
      image: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
      price: "$280,000",
      location: "Portland, OR",
      rating: 4.7,
      bedrooms: 3,
      bathrooms: 2,
      size: "1800 sqft",
    },
    {
      id: 4,
      name: "Beachfront House",
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      price: "$750,000",
      location: "Miami, FL",
      rating: 4.9,
      bedrooms: 5,
      bathrooms: 4,
      size: "4200 sqft",
    },
    {
      id: 5,
      name: "Mountain Cabin",
      image: "https://images.pexels.com/photos/730981/pexels-photo-730981.jpeg",
      price: "$350,000",
      location: "Aspen, CO",
      rating: 4.6,
      bedrooms: 3,
      bathrooms: 2,
      size: "2000 sqft",
    },
    {
      id: 6,
      name: "Urban Loft",
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
      price: "$500,000",
      location: "San Francisco, CA",
      rating: 4.8,
      bedrooms: 2,
      bathrooms: 2,
      size: "1700 sqft",
    },
    {
      id: 7,
      name: "Suburban Home",
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      price: "$390,000",
      location: "Austin, TX",
      rating: 4.7,
      bedrooms: 4,
      bathrooms: 3,
      size: "2800 sqft",
    },
    {
      id: 8,
      name: "Penthouse Suite",
      image: "https://images.pexels.com/photos/1519226/pexels-photo-1519226.jpeg",
      price: "$1,200,000",
      location: "Chicago, IL",
      rating: 5.0,
      bedrooms: 3,
      bathrooms: 3,
      size: "3200 sqft",
    },
    {
      id: 9,
      name: "Farmhouse Retreat",
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      price: "$420,000",
      location: "Nashville, TN",
      rating: 4.6,
      bedrooms: 4,
      bathrooms: 3,
      size: "3100 sqft",
    },
    {
      id: 10,
      name: "Eco-Friendly Home",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      price: "$550,000",
      location: "Seattle, WA",
      rating: 4.9,
      bedrooms: 3,
      bathrooms: 3,
      size: "2600 sqft",
    },
  ];


  const [isWishLIsted,setIsWishlisted]= useState()

  return (
    <WrapperContainer>
      <View style={styles.mainView}>
        <Pressable onPress={() => Alert.alert("Working")} style={styles.settingIcStyle}>
          <Image source={imagePath.seeting_ic} />
        </Pressable>
        <View>
          <Text style={styles.textStyle}>{"Places to stay"}</Text>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={data}
            contentContainerStyle={{paddingBottom:moderateScale(60)}}
            ItemSeparatorComponent={() => <View style={{ height: moderateScale(20) }} />}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    borderRadius: 20,
                    paddingBottom: moderateScale(12),
                    // // shadowColor: "black",
                    // // shadowOffset: { width: 0, height: 2 },
                    // shadowOpacity: 0.2,
                    // shadowRadius: 20,
                    backgroundColor: "white",
                  }}
                >
                  <Image style={styles.imgeStyle} source={{ uri: item.image }} />
                  <View style={{ paddingHorizontal: moderateScale(12) }}>
                    <View style={styles.textView}>
                      <Text>{`${item.name}, ${item.location}`}</Text>
                      <View
                        style={{
                          ...styles.textViewRating,
                          justifyContent: "flex-start",
                          marginLeft: moderateScale(8),
                        }}
                      >
                        <Image style={styles.startStyle} source={imagePath.star} />
                        <Text style={{ fontSize: 10 }}>{`${item.rating}, ${"(124 reviews)"}`}</Text>
                      </View>
                    </View>
                    <View>
                      <Text>{"Apr 23 - May 5"}</Text>
                      <Text>{`${item.price}/ ${"nights"}`}</Text>
                    </View>
                  </View>
                  <View style={{
                    right:moderateScale(12),
                    top:moderateScale(6),
                    borderRadius:100,
                    justifyContent:'center',
                    alignItems:"center",
                    height:moderateScale(32),width:moderateScale(32),position:'absolute',backgroundColor:"white"}}>
                      <Pressable onPress={()=>setIsWishlisted(item?.id)}>
                      <Image 
                      style={{width:moderateScale(16),height:16}}
                      source={ 
                        isWishLIsted == item.id ? imagePath.red_heart :
                        imagePath.heart_image}/>
                      </Pressable>

                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: moderateScale(20),
  },
  settingIcStyle: {
    alignItems: "flex-end",
  },
  textStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: scale(20),
  },
  imgeStyle: {
    width: width / 1.12,
    height: height / 6.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textView: {
    paddingTop: moderateScale(14),
    flexDirection: "row",
    justifyContent: "space-between",
    width: width / 1.1,
    alignItems: "center",
  },
  startStyle: {
    height: moderateScale(12),
    width: moderateScale(12),
  },
  textViewRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width / 1.1,
    alignItems: "center",
  },
});
