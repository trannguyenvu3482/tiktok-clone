import { request } from '~/utils';

export const getSuggested = async ({ page = 1, perPage = 5 }) => {
  try {
    const { data } = await request.get('users/suggested', {
      params: {
        page,
        per_page: perPage,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
