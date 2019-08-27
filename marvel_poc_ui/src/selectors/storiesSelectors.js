export const getErrorMsg = state => state.stories.errorMsg;
export const getStories = state => state.stories.data.results;
export const getIsLoading = state => state.stories.isLoading;
export const getPaginationData = state => {
  const { results, ...rest } = state.stories.data;
  return rest;
};
