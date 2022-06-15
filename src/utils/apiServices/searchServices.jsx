import { request } from '~/utils';

export const search = async (q, type = 'less') => {
  try {
    const { data } = await request.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
