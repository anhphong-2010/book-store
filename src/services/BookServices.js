import axios from "axios";
import { domain } from "../configs/settings";

export class BookManagement {
  getBooks = () => {
    return axios({
      url: `${domain}/books/`,
      method: "GET",
    });
  };
  getInfoBook = (bookID) => {
    return axios({
      url: `${domain}/books/${bookID}`,
      method: "GET",
    });
  };
  getBookCategories = () => {
    return axios({
      url: `${domain}/bookcategories/`,
      method: "GET",
    });
  };
}
export const bookManagement = new BookManagement();
