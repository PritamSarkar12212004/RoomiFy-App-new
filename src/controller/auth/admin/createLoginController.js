import adminModal from "../../../models/admin/adminModal.js";
const semiLogin = async (req, res) => {
  const phone = parseInt(req.body.userPhoneNumber);
  await adminModal.findOne({ phones: phone }).then((data) => {
    if (data) {
      res.status(200).json({
        message: "success",
      });
    } else {
      res.status(400).json({
        message: "Your phone number is not registered",
      });
    }
  });
};

const mainLogin = async (req, res) => {
  const phone = parseInt(req.body.phoneNumber);
  await adminModal.findOne({ phones: phone }).then((data) => {
    if (data) {
      console.log(data)
      return res.status(200).json({
        success: true,
        message: "Admin Created Successfully",
        findAdmin: data,
      });
    } else {
      res.status(400).json({
        message: "Your phone number is not registered",
      });
    }
  });
};
export { semiLogin, mainLogin };
