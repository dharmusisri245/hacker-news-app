// import { useEffect, useState } from "react";

// import { getStories } from "../services/storyService";

// import {type Story } from "../types/story";

// import StoryCard from "../component/StoryCard";

// const Home = () => {
//   const [stories, setStories] =
//     useState<Story[]>([]);

//   const [loading, setLoading] =
//     useState(true);

//   useEffect(() => {
//     const fetchStories =
//       async () => {
//         try {
//           const data =
//             await getStories();

//           setStories(data);
//         } catch (error) {
//           console.log(error);
//         } finally {
//           setLoading(false);
//         }
//       };

//     fetchStories();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center py-10">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       <h1 className="text-3xl font-bold">
//         Top Hacker News Stories
//       </h1>

//       {stories.map((story) => (
//         <StoryCard
//           key={story._id}
//           story={story}
//         />
//       ))}
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

import { Button } from "../components/ui/button";

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

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        Top Hacker News Stories
      </h1>

      <div className="space-y-4">
        {stories.map((story) => (
          <StoryCard
            key={story._id}
            story={story}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 pt-6">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() =>
            setPage((prev) => prev - 1)
          }
        >
          Previous
        </Button>

        <span className="font-medium">
          Page {page} of{" "}
          {totalPages}
        </span>

        <Button
          variant="outline"
          disabled={
            page === totalPages
          }
          onClick={() =>
            setPage((prev) => prev + 1)
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Home;