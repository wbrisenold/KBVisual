interface StaticReview {
  rating: number;
  review: string;
  author: string;
  role: string;
}

const staticTestimonials: StaticReview[] = [];

export const useGoogleReviews = () => {
  return {
    data: {
      reviews: staticTestimonials,
      rating: 5,
      user_ratings_total: staticTestimonials.length,
    },
    isLoading: false,
    error: null,
  };
};
