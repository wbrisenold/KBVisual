interface LightroomPhoto {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  description?: string;
  category: "wedding" | "portrait" | "detail" | "couple" | "video";
}

const staticPhotos: LightroomPhoto[] = [];

export const useLightroomGallery = () => {
  const getPhotosByCategory = (category: LightroomPhoto["category"]) => {
    return staticPhotos.filter((photo) => photo.category === category);
  };

  const getFeaturedPhoto = () => {
    return staticPhotos.find((photo) => photo.category === "wedding") || staticPhotos[0];
  };

  return {
    photos: staticPhotos,
    loading: false,
    error: null,
    needsAuth: false,
    authUrl: undefined,
    getPhotosByCategory,
    getFeaturedPhoto,
  };
};
