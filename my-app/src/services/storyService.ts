

import api from "../api/axios";

export const getStories =
  async (
    page = 1,
    limit = 10
  ) => {
    const response =
      await api.get(
        `/stories?page=${page}&limit=${limit}`
      );

    return response.data;
  };

export const getStoryById =
  async (id: string) => {
    const response =
      await api.get(
        `/stories/${id}`
      );

    return response.data;
  };

export const toggleBookmark =
  async (storyId: string) => {
    const token =
      localStorage.getItem("token");

    const response =
      await api.post(
        `/stories/${storyId}/bookmark`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };

export const getBookmarks =
  async () => {
    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        "/stories/bookmarks/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };