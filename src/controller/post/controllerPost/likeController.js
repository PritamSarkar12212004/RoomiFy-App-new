import roomModel from "../../../models/post/room/roomModel.js";
const likeAdder = async (req, res) => {
  const { postId, userId } = req.body;
  await roomModel.findByIdAndUpdate(
    { _id: postId },
    {
      $push: {
        likes: {
          userId: userId,
        },
      },
    }
  );
  res.status(200).json({
    message: "like added",
    data: true,
  });
};
const likeRemover = async (req, res) => {
  const { postId, userId } = req.body;
  await roomModel.findByIdAndUpdate(
    { _id: postId },
    {
      $pull: {
        likes: {
          userId: userId,
        },
      },
    }
  );
  res.status(200).json({
    message: "like added",
    data: true,
  });
};
export { likeAdder, likeRemover };
