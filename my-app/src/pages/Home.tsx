


// import {
//   useEffect,
//   useState,
// } from "react";

// import { getStories } from "../services/storyService";

// import { type Story } from "../types/story";

// import StoryCard from "../component/StoryCard";

// import StorySkeleton from "../component/StorySkeleton";

// import { Button } from "../components/ui/button";

// const Home = () => {
//   const [stories, setStories] =
//     useState<Story[]>([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [page, setPage] =
//     useState(1);

//   const [totalPages, setTotalPages] =
//     useState(1);

//   useEffect(() => {
//     const fetchStories =
//       async () => {
//         try {
//           setLoading(true);

//           const data =
//             await getStories(
//               page,
//               10
//             );

//           setStories(
//             data.stories
//           );

//           setTotalPages(
//             data.totalPages
//           );
//         } catch (error) {
//           console.log(error);
//         } finally {
//           setLoading(false);
//         }
//       };

//     fetchStories();
//   }, [page]);

//   return (
//     <div className="space-y-6">
      
//       <h1 className="text-4xl font-bold">
//         Top Hacker News Stories
//       </h1>

//       {/* Stories / Skeleton */}
//       <div className="space-y-4">

//         {loading ? (

//           Array.from({ length: 6 }).map(
//             (_, index) => (
//               <StorySkeleton
//                 key={index}
//               />
//             )
//           )

//         ) : (

//           stories.map((story) => (
//             <StoryCard
//               key={story._id}
//               story={story}
//             />
//           ))

//         )}

//       </div>

//       {/* Pagination */}
//       {!loading && (
//         <div className="flex items-center justify-center gap-4 pt-6">
          
//           <Button
//             variant="outline"
//             disabled={page === 1}
//             onClick={() =>
//               setPage(
//                 (prev) => prev - 1
//               )
//             }
//           >
//             Previous
//           </Button>

//           <span className="font-medium">
//             Page {page} of{" "}
//             {totalPages}
//           </span>

//           <Button
//             variant="outline"
//             disabled={
//               page === totalPages
//             }
//             onClick={() =>
//               setPage(
//                 (prev) => prev + 1
//               )
//             }
//           >
//             Next
//           </Button>

//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;




import {
  useEffect,
  useState,
} from "react";

import { getStories } from "../services/storyService";

import { type Story } from "../types/story";

import StoryCard from "../component/StoryCard";

import StorySkeleton from "../component/StorySkeleton";

import {
  Card,
  CardContent,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

import {
  ChevronLeft,
  ChevronRight,
  Flame,
} from "lucide-react";

const Home = () => {
  const [stories, setStories] =
    useState<Story[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [page, setPage] =
    useState(1);

  const [totalPages, setTotalPages] =
    useState(1);

  useEffect(() => {
    const fetchStories =
      async () => {
        try {
          setLoading(true);

          const data =
            await getStories(
              page,
              10
            );

          setStories(
            data.stories
          );

          setTotalPages(
            data.totalPages
          );
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchStories();
  }, [page]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Hero Header */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl overflow-hidden">
          
          <CardContent className="p-8 flex items-center justify-between">

            <div className="space-y-3">

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-orange-500/20">
                  <Flame className="h-7 w-7 text-orange-400" />
                </div>

                <h1 className="text-4xl font-bold tracking-tight">
                  Hacker News
                </h1>
              </div>

              <p className="text-slate-300 text-lg">
                Discover trending tech stories,
                startups, AI updates & developer news.
              </p>

            </div>

            <div className="hidden md:flex flex-col items-end">
              
              <span className="text-slate-400 text-sm">
                Current Page
              </span>

              <span className="text-5xl font-bold">
                {page}
              </span>

            </div>

          </CardContent>

        </Card>

        {/* Stories */}
        <div className="mt-8 space-y-5">

          {loading ? (

            Array.from({ length: 6 }).map(
              (_, index) => (
                <StorySkeleton
                  key={index}
                />
              )
            )

          ) : (

            stories.map((story) => (
              <StoryCard
                key={story._id}
                story={story}
              />
            ))

          )}

        </div>

        {/* Pagination */}
        {!loading && (
          <div className="flex items-center justify-center gap-4 pt-10">

            <Button
              variant="outline"
              size="lg"
              className="rounded-xl shadow-sm hover:shadow-md transition-all"
              disabled={page === 1}
              onClick={() =>
                setPage(
                  (prev) => prev - 1
                )
              }
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <div className="px-6 py-3 rounded-xl bg-white shadow-sm border font-semibold text-slate-700">
              Page {page} of {totalPages}
            </div>

            <Button
              variant="outline"
              size="lg"
              className="rounded-xl shadow-sm hover:shadow-md transition-all"
              disabled={
                page === totalPages
              }
              onClick={() =>
                setPage(
                  (prev) => prev + 1
                )
              }
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>

          </div>
        )}

      </div>
    </div>
  );
};

export default Home;