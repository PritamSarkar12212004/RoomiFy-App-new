import adminModal from "../../../models/admin/adminModal.js";
const createAdminController = async (req, res) => {
  const { name, phone } = req.body;
  try {
    const finder = await adminModal.findOne({ phones: phone });
    if (finder) {
      return res.status(400).json({
        success: false,
        message: "Admin already exist",
      });
    } else {
      const newAdmin = await adminModal.create({
        name: name,
        phones: phone,
      });
      return res.status(200).json({
        success: true,
        message: "Admin Created Successfully",
        findAdmin: newAdmin,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
export default createAdminController;
