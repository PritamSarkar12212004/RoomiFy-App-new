import adminModal from "../../../models/admin/adminModal.js";
const createAdminUpdaterController = async (req, res) => {
  console.log(req.body);
  const { profileImage, gender, userData } = req.body;
  console.log(userData.findAdmin._id);
  try {
    await adminModal
      .findByIdAndUpdate(userData.findAdmin._id, {
        profileImage,
        gender,
      })
      .then((data) => {
        return res.status(200).json({
          success: true,
          message: "Admin Created Successfully",
          findAdmin: data,
        });
      })
      .catch((err) => {
        res.status(400).json({
          success: false,
          message: "Admin Not Updated",
          err,
        });
      });
  } catch (error) {
    console.log(error);
  }
};
export default createAdminUpdaterController;
