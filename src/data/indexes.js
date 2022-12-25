import { bookList } from "./booksList";
import { electronicList } from "./electronicList";
import { vehiculeList } from "./vehiculeList";

export const indexes = {
  libros: "bookList",
  electronica: [],
  vehiculos: [],
};

export const DB = {
  libros: bookList.list,
  electronica: electronicList.list,
  vehiculos: vehiculeList.list,
};
