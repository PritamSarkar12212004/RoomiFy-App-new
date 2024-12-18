import roomModel from "../../models/post/room/roomModel.js";
const findRoom = async (req, res) => {
  const { id } = req.body;
  await roomModel
    .findById(id)
    .then((response) => {
      return res.status(200).json({
        success: true,
        message: "Room Found",
        data: response,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        message: "Room Not Found",
        error: err.message,
      });
    });
};
export default findRoom;
