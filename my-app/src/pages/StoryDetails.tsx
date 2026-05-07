// import {
//   useEffect,
//   useState,
// } from "react";

// import {
//   useNavigate,
//   useParams,
// } from "react-router-dom";

// import {
//   getStoryById,
// } from "../services/storyService";

// import {
//   type Story,
// } from "../types/story";

// import {
//   Card,
//   CardContent,
// } from "../components/ui/card";

// import { Button } from "../components/ui/button";

// import {
//   ArrowLeft,
// } from "lucide-react";

// const StoryDetails = () => {
//   const { id } =
//     useParams();

//   const navigate =
//     useNavigate();

//   const [story, setStory] =
//     useState<Story | null>(
//       null
//     );

//   const [loading, setLoading] =
//     useState(true);

//   useEffect(() => {
//     const fetchStory =
//       async () => {
//         try {
//           const data =
//             await getStoryById(
//               id as string
//             );

//           setStory(data);
//         } catch (error) {
//           console.log(error);
//         } finally {
//           setLoading(false);
//         }
//       };

//     fetchStory();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="text-center py-10">
//         Loading...
//       </div>
//     );
//   }

//   if (!story) {
//     return (
//       <div className="text-center py-10">
//         Story not found
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
      
//       {/* Back Button */}
//       <Button
//         variant="outline"
//         onClick={() =>
//           navigate("/")
//         }
//         className="flex items-center gap-2"
//       >
//         <ArrowLeft className="w-4 h-4" />
//         Back
//       </Button>

//       <Card>
//         <CardContent className="p-8 space-y-6">
          
//           <h1 className="text-4xl font-bold leading-tight">
//             {story.title}
//           </h1>

//           <div className="flex flex-wrap gap-6 text-muted-foreground">
//             <span>
//               🔥 {story.points} points
//             </span>

//             <span>
//               👤 {story.author}
//             </span>

//             <span>
//               🕒 {story.postedAt}
//             </span>
//           </div>

//           <a
//             href={story.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 underline"
//           >
//             Open Original Story
//           </a>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default StoryDetails;

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
  CardHeader,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

import { Badge } from "../components/ui/badge";

import { Separator } from "../components/ui/separator";

import { Skeleton } from "../components/ui/skeleton";

import {
  ArrowLeft,
  ExternalLink,
  Flame,
  User2,
  Clock3,
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

  // =========================
  // SKELETON LOADER
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

        <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 space-y-5 md:space-y-6">

          {/* Back Button Skeleton */}
          <Skeleton className="h-10 w-32 rounded-xl" />

          {/* Main Skeleton Card */}
          <Card className="rounded-3xl border-0 shadow-xl overflow-hidden">

            <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10 space-y-8">

              {/* Title Skeleton */}
              <div className="space-y-4">
                <Skeleton className="h-8 sm:h-10 w-full rounded-xl" />
                <Skeleton className="h-8 sm:h-10 w-3/4 rounded-xl" />
              </div>

              {/* Badge Skeleton */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Skeleton className="h-9 w-32 rounded-full" />
                <Skeleton className="h-9 w-40 rounded-full" />
                <Skeleton className="h-9 w-36 rounded-full" />
              </div>

              <Separator />

              {/* Paragraph Skeleton */}
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>

              {/* Button Skeleton */}
              <Skeleton className="h-12 w-full sm:w-56 rounded-xl" />

            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // =========================
  // STORY NOT FOUND
  // =========================
  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">

        <Card className="w-full max-w-md rounded-3xl shadow-lg border-0">

          <CardContent className="p-8 sm:p-10 text-center space-y-5">

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Story not found
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base">
              The requested story
              could not be found.
            </p>

            <Button
              onClick={() =>
                navigate("/")
              }
              className="rounded-xl w-full sm:w-auto"
            >
              Go Back
            </Button>

          </CardContent>
        </Card>
      </div>
    );
  }

  // =========================
  // MAIN UI
  // =========================
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">

      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 space-y-5 md:space-y-6">

        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() =>
            navigate("/")
          }
          className="rounded-xl gap-2 shadow-sm hover:shadow-md transition-all w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        {/* Main Card */}
        <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden bg-white">

          {/* Hero Section */}
          <CardHeader className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-6 md:p-8 lg:p-10 space-y-5">

            <div className="flex flex-col sm:flex-row sm:items-start gap-4">

              {/* Icon */}
              <div className="p-3 rounded-2xl bg-orange-500/20 w-fit">
                <Flame className="w-7 h-7 text-orange-400" />
              </div>

              {/* Content */}
              <div className="space-y-3">

                <p className="text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                  Trending Story
                </p>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight break-words">
                  {story.title}
                </h1>

              </div>

            </div>

          </CardHeader>

          {/* Content */}
          <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8">

            {/* Meta Badges */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">

              {/* Points */}
              <Badge className="rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm bg-orange-100 text-orange-700 hover:bg-orange-100 w-fit">
                
                <Flame className="w-4 h-4 mr-2" />

                {story.points} Points

              </Badge>

              {/* Author */}
              <Badge
                variant="secondary"
                className="rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm w-fit"
              >
                <User2 className="w-4 h-4 mr-2" />

                {story.author}
              </Badge>

              {/* Date */}
              <Badge
                variant="outline"
                className="rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm w-fit"
              >
                <Clock3 className="w-4 h-4 mr-2" />

                {story.postedAt}
              </Badge>

            </div>

            {/* Divider */}
            <Separator />

            {/* Description */}
            <div className="space-y-4">

              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Story Overview
              </h2>

              <p className="text-muted-foreground leading-7 md:leading-8 text-base md:text-lg">
                Read the original Hacker News
                story and explore the latest
                discussions, insights, and
                trending updates from the
                developer community.
              </p>

            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="rounded-xl w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 shadow-md hover:shadow-lg transition-all"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />

                  Open Original Story
                </Button>
              </a>

            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StoryDetails;