

// import {
//   useEffect,
//   useState,
// } from "react";

// import {
//   getBookmarks,
// } from "../services/storyService";

// import {
//   type Story,
// } from "../types/story";

// import StoryCard from "../component/StoryCard";

// import Loader from "../component/Loader";

// const Bookmarks = () => {
//   const [stories, setStories] =
//     useState<Story[]>([]);

//   const [loading, setLoading] =
//     useState(true);

//   useEffect(() => {
//     const fetchBookmarks =
//       async () => {
//         try {
//           const data =
//             await getBookmarks();

//           setStories(data);
//         } catch (error) {
//           console.log(error);
//         } finally {
//           setLoading(false);
//         }
//       };

//     fetchBookmarks();
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <div className="space-y-6">
//       <h1 className="text-4xl font-bold">
//         My Bookmarks
//       </h1>

//       {stories.length === 0 ? (
//         <div className="text-muted-foreground">
//           No bookmarks yet
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {stories.map(
//             (story) => (
//               <StoryCard
//                 key={story._id}
//                 story={story}
//                 isBookmarkedPage={
//                   true
//                 }
//                 onRemove={(
//                   id
//                 ) =>
//                   setStories(
//                     (
//                       prev
//                     ) =>
//                       prev.filter(
//                         (
//                           story
//                         ) =>
//                           story._id !==
//                           id
//                       )
//                   )
//                 }
//               />
//             )
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bookmarks;


import {
  useEffect,
  useState,
} from "react";

import {
  getBookmarks,
} from "../services/storyService";

import {
  type Story,
} from "../types/story";

import StoryCard from "../component/StoryCard";

import StorySkeleton from "../component/StorySkeleton";

import {
  Card,
  CardContent,
  CardHeader,
} from "../components/ui/card";

import { Badge } from "../components/ui/badge";

import {
  Bookmark,
  FolderOpen,
} from "lucide-react";

const Bookmarks = () => {
  const [stories, setStories] =
    useState<Story[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchBookmarks =
      async () => {
        try {
          const data =
            await getBookmarks();

          setStories(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchBookmarks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">

      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 space-y-6">

        {/* Header Card */}
        <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">

          <CardHeader className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 md:p-10">

            <div className="flex flex-col sm:flex-row sm:items-center gap-5">

              {/* Icon */}
              <div className="p-4 rounded-2xl bg-yellow-500/20 w-fit">
                <Bookmark className="w-8 h-8 text-yellow-400" />
              </div>

              {/* Content */}
              <div className="space-y-2">

                <Badge className="bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/20 rounded-full px-4 py-1 w-fit">
                  Saved Stories
                </Badge>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  My Bookmarks
                </h1>

                <p className="text-slate-300 text-sm sm:text-base">
                  Access your saved Hacker News
                  stories anytime.
                </p>

              </div>

            </div>

          </CardHeader>
        </Card>

        {/* Loading Skeleton */}
        {loading ? (

          <div className="space-y-4">

            {Array.from({
              length: 6,
            }).map((_, index) => (
              <StorySkeleton
                key={index}
              />
            ))}

          </div>

        ) : stories.length === 0 ? (

          /* Empty State */
          <Card className="border-0 shadow-md rounded-3xl">

            <CardContent className="flex flex-col items-center justify-center py-16 text-center space-y-5">

              <div className="p-5 rounded-full bg-slate-100">
                <FolderOpen className="w-12 h-12 text-slate-400" />
              </div>

              <div className="space-y-2">

                <h2 className="text-2xl font-bold text-slate-900">
                  No bookmarks yet
                </h2>

                <p className="text-muted-foreground max-w-md">
                  Start bookmarking stories
                  to quickly access them
                  later from your collection.
                </p>

              </div>

            </CardContent>
          </Card>

        ) : (

          /* Story List */
          <div className="space-y-4">

            {stories.map(
              (story) => (
                <StoryCard
                  key={story._id}
                  story={story}
                  isBookmarkedPage={
                    true
                  }
                  onRemove={(
                    id
                  ) =>
                    setStories(
                      (
                        prev
                      ) =>
                        prev.filter(
                          (
                            story
                          ) =>
                            story._id !==
                            id
                        )
                    )
                  }
                />
              )
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;