import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  getStoryById,
} from "../services/storyService";

import {
  type Story,
} from "../types/story";

import {
  Card,
  CardContent,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

import {
  ArrowLeft,
} from "lucide-react";

const StoryDetails = () => {
  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [story, setStory] =
    useState<Story | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchStory =
      async () => {
        try {
          const data =
            await getStoryById(
              id as string
            );

          setStory(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchStory();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading...
      </div>
    );
  }

  if (!story) {
    return (
      <div className="text-center py-10">
        Story not found
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Back Button */}
      <Button
        variant="outline"
        onClick={() =>
          navigate("/")
        }
        className="flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>

      <Card>
        <CardContent className="p-8 space-y-6">
          
          <h1 className="text-4xl font-bold leading-tight">
            {story.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <span>
              🔥 {story.points} points
            </span>

            <span>
              👤 {story.author}
            </span>

            <span>
              🕒 {story.postedAt}
            </span>
          </div>

          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Open Original Story
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoryDetails;