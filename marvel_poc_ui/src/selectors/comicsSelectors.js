export const getErrorMsg = state => state.comics.errorMsg;
export const getComics = state => state.comics.data.results;
export const getIsLoading = state => state.comics.isLoading;
export const getPaginationData = state => {
  
  const { results, ...rest } = state.comics.data;
  return rest;
};
