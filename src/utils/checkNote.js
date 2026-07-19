import createHttpError from 'http-errors';

export const checkNote = (note) => {
  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
};
