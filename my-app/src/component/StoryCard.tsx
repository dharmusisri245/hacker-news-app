


import { type Story } from "../types/story";

import {
  Card,
  CardContent,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

import { toggleBookmark } from "../services/storyService";

import { Link } from "react-router-dom";

import { toast } from "react-toastify";

type Props = {
  story: Story;

  isBookmarkedPage?: boolean;

  onRemove?: (
    id: string
  ) => void;
};

const StoryCard = ({
  story,
  isBookmarkedPage =
    false,
  onRemove,
}: Props) => {
  const handleBookmark =
    async () => {
      try {
        const data =
          await toggleBookmark(
            story._id
          );

        toast.success(
          data.message
        );

        // remove from UI instantly
        if (
          isBookmarkedPage &&
          onRemove
        ) {
          onRemove(
            story._id
          );
        }
      } catch (error) {
        console.log(error);

        toast.error(
          "Failed to update bookmark"
        );
      }
    };

  return (
    <Card>
      <CardContent className="p-5 space-y-3">
        
        <Link
          to={`/stories/${story._id}`}
          className="text-xl font-semibold hover:underline"
        >
          {story.title}
        </Link>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>
            {story.points} points
          </span>

          <span>
            by {story.author}
          </span>

          <span>
            {story.postedAt}
          </span>
        </div>

        <Button
          onClick={
            handleBookmark
          }
          variant={
            isBookmarkedPage
              ? "destructive"
              : "default"
          }
        >
          {isBookmarkedPage
            ? "Remove Bookmark"
            : "Bookmark"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default StoryCard;