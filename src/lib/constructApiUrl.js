export const constructApiUrl = (filters,currentPage) => {
    let baseUrl = `blog_post/front_list?page=${currentPage}`;
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        baseUrl += `&${key}=${value}`;
      }
    });

    return baseUrl;
  };
