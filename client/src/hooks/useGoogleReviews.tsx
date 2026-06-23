interface StaticReview {
  rating: number;
  review: string;
  author: string;
  role: string;
}

const staticTestimonials: any[] = [
  { rating: 5, review: "Professional, creative, and easy to work with from start to finish.", author: "Recent Client", role: "Client Review" },
  { rating: 5, review: "The final images felt polished, natural, and exactly aligned with the vision.", author: "Portrait Client", role: "Portrait Session" },
  { rating: 5, review: "Captured the important moments beautifully and delivered a clean, professional gallery.", author: "Event Client", role: "Event Photography" },
];

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
