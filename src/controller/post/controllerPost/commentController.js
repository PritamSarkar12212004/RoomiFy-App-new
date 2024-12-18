import roomModel from "../../../models/post/room/roomModel.js";
const commentPostController = async (req, res) => {
  try {
    const { user, commentsItem } = req.body;
    await roomModel.findByIdAndUpdate(
      { _id: user },
      {
        $push: {
          comments: {
            user: user,
            commentsItem: commentsItem,
          },
        },
      }
    );
    res.status(200).json({
      message: "Commented",
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};
export { commentPostController };
