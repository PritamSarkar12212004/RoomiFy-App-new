import adminModal from "../../../models/admin/adminModal.js";
const signUpCheker = async (req, res) => {
  const phone = parseInt(req.body.phone);
  await adminModal.findOne({ phones: phone }).then((data) => {
    if (data) {
      res.status(400).json({
        message: "phone is already exist",
      });
    } else {
      res.status(200).json({
        message: "Ok Done",
      });
    }
  });
};
export default signUpCheker;
