import adminModal from "../../models/admin/adminModal.js";
import roomModel from "../../models/post/room/roomModel.js";

const getMainData = async (req, res) => {
  const { id, userArea } = req.body;

  let userData;
  let userAreaData;
  let userTopData;

  try {
    // Fetching admin data by ID
    userData = await adminModal.findById(id);

    // Fetching room data based on location
    const roomData = await roomModel
      .find({
        roomLocation: JSON.parse(userArea),
      })
      .select("mainImage roomLocation price description");
    userAreaData = roomData;
    userTopData = roomData.slice(0, 4);

    // Combining the data into a single response
    const responseData = {
      userData,
      userAreaData,
      userTopData,
    };

    // Sending combined data as JSON response
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);

    // Sending an error response
    res.status(500).json({
      message: "An error occurred while fetching the data.",
      error: error.message,
    });
  }
};

export { getMainData };
