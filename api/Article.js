import axios from "axios";

;

export const getArticle = async (article_id) => {
  try {
    const response = await axios.get(`${process.env.server}/posts/${article_id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};