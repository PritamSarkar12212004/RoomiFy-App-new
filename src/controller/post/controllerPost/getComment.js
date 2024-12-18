import roomModel from "../../../models/post/room/roomModel.js";
const getComment = async (req, res) => {
  const { roomId } = req.body;
  console.log(req.body);
  await roomModel
    .findById(roomId)
    .select("comments")
    .then((response) => {
      res.status(200).json({
        message: "success",
        data: response,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "error",
        data: error,
      });
    });
};
export default getComment;
