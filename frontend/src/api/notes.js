import axios from 'axios';

export const fetchNotes = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes`);
  return response.data;
};
