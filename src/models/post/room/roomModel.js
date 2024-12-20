import mongoose from "mongoose";
const roomSchema = new mongoose.Schema(
  {
    mainImage: {
      type: String,
      required: true,
    },
    childImg1: {
      type: String,
      required: true,
    },
    childImg2: {
      type: String,
      required: true,
    },
    childImg3: {
      type: String,
      required: true,
    },
    childImg4: {
      type: String,
      required: true,
    },
    childImg5: {
      type: String,
      required: true,
    },
    childImg6: {
      type: String,
      required: true,
    },
    owner: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    postCondition: {
      type: Boolean,
      default: true,
    },
    roomLocation: {
      type: String,
      required: true,
    },
    locationCurrent: {
      type: Object,
      required: true,
    },
    facility: {
      single: {
        type: Boolean,
        default: false,
      },
      group: {
        type: Boolean,
        default: false,
      },
      family: {
        type: Boolean,
        default: false,
      },
      double: {
        type: Boolean,
        default: false,
      },

      Independent: {
        type: Boolean,
        default: false,
      },

      Non_Independent: {
        type: Boolean,
        default: false,
      },

      bikeParking: {
        type: Boolean,
        default: false,
      },
      wifi: {
        type: Boolean,
        default: false,
      },
      light: {
        type: Boolean,
        default: false,
      },
      fan: {
        type: Boolean,
        default: false,
      },
      cooler: {
        type: Boolean,
        default: false,
      },

      bed: {
        type: Boolean,
        default: false,
      },
      addtachedWashroom: {
        type: Boolean,
        default: false,
      },
    },
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        commentsItem: {
          type: String,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    likes: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    phones: {
      type: Number,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);
export default Room;
