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

import Loader from "../component/Loader";

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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        My Bookmarks
      </h1>

      {stories.length === 0 ? (
        <div className="text-muted-foreground">
          No bookmarks yet
        </div>
      ) : (
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
  );
};

export default Bookmarks;