import adminModal from "../../../models/admin/adminModal.js";
const createGooglesemiController = async (req, res) => {
  console.log(req.body);
  const { name, email, image } = req.body;
  const findAdmin = await adminModal.findOne({ emails: email });
  if (findAdmin) {
    return res.status(200).json({
      success: true,
      message: "Admin Created Successfully",
      findAdmin: findAdmin,
    });
  }
  await adminModal
    .insertMany({
      name,
      emails: email,
      profileImage: image,
    })
    .then((data) => {
      return res.status(200).json({
        success: true,
        message: "Admin Created Successfully",
        findAdmin: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: "Admin Not Created",
        err,
      });
    });
};

export { createGooglesemiController };
