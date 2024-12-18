import axios from "axios";
import roomModel from "../../../models/post/room/roomModel.js";
const roomPostController = async (req, res) => {
  const {
    mainImageUrl,
    child1Url,
    child2Url,
    child3Url,
    child4Url,
    child5Url,
    child6Url,
  } = req.body.image;
  const {
    independent,
    nonIndependent,
    family,
    single,
    group,
    double,
    bikeParking,
    wifi,
    light,
    fan,
    cooler,
    bed,
    attachedWashroom,
    description,
    price,
    phone,
    roomLocation,
    location,
  } = req.body.postRoomUploader;
  const { token } = req.body;
  const userId = token.findAdmin._id;
  const userImage = token.findAdmin.profileImage;
  const userName = token.findAdmin.name;
  const longitude = location.coords.longitude;
  const latitude = location.coords.latitude;
  try {
    const locationData = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${process.env.MAP_API_KEY}`;
    // Get the location data
    const locationResponse = await axios.get(locationData);
    const exact_location = locationResponse.data.features[0].properties;

    const roomCreate = await roomModel.create({
      //images
      mainImage: mainImageUrl,
      childImg1: child1Url,
      childImg2: child2Url,
      childImg3: child3Url,
      childImg4: child4Url,
      childImg5: child5Url,
      childImg6: child6Url,
      //roomArea location
      roomLocation: roomLocation,
      //currentLocation
      locationCurrent: {
        exact_location,
      },
      //owenr details
      owner: {
        id: userId,
        name: userName,
        image: userImage,
      },
      //roomFacility
      facility: {
        single: single,
        group: group,
        family: family,
        double: double,
        Independent: independent,
        Non_Independent: nonIndependent,
        bikeParking: bikeParking,
        wifi: wifi,
        light: light,
        fan: fan,
        cooler: cooler,
        bed: bed,
        addtachedWashroom: attachedWashroom,
      },
      //roomDetiles
      description: description,
      price: parseInt(price),
      phones: parseInt(phone),
    });
    const room = await roomCreate
      .save()
      .then((data) => {
        res.status(200).json({
          status: "success",
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "failed",
        });
      });
  } catch (error) {
    res.status(400).json({
      status: "failed",
    });
  }
};
export default roomPostController;
