import Story from "../model/StoryModel.js";
import User from "../model/userModel.js";


export const getStories = async (
  req,
  res
) => {
  try {
    const page =
      Number(req.query.page) || 1;

    const limit =
      Number(req.query.limit) || 10;

    const skip =
      (page - 1) * limit;

    const totalStories =
      await Story.countDocuments();

    const stories =
      await Story.find()
        .sort({
          points: -1,
        })
        .skip(skip)
        .limit(limit);

    res.json({
      stories,
      currentPage: page,
      totalPages: Math.ceil(
        totalStories / limit
      ),
      totalStories,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

    if (!story) {
      return res.status(404).json({
        message: "Story not found",
      });
    }

    res.json(story);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const toggleBookmark = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const storyId = req.params.id;

    const alreadyBookmarked =
      user.bookmarks.some(
        (id) =>
          id.toString() === storyId
      );
    if (alreadyBookmarked) {
      user.bookmarks = user.bookmarks.filter(
        (id) => id.toString() !== storyId
      );
    } else {
      user.bookmarks.push(storyId);
    }

    await user.save();

    res.json({
      message: alreadyBookmarked
        ? "Bookmark removed"
        : "Bookmark added",
      bookmarks: user.bookmarks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const getBookmarkedStories =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.user._id
        ).populate("bookmarks");

      res.json(
        user.bookmarks
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };