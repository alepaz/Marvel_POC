export const getErrorMsg = state => state.heroes.errorMsg;
export const getHeroes = state => state.heroes.data.results;
export const getIsLoading = state => state.heroes.isLoading;
export const getPaginationData = state => {
  const { results, ...rest } = state.heroes.data;
  return rest;
};
