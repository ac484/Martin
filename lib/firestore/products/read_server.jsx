import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const serializeData = (data) => JSON.parse(JSON.stringify(data));

export const getProduct = async ({ id }) => {
  const data = await getDoc(doc(db, `products/${id}`));
  if (data.exists()) {
    return serializeData(data.data());
  } else {
    return null;
  }
};

export const getFeaturedProducts = async () => {
  const list = await getDocs(
    query(collection(db, "products"), where("isFeatured", "==", true))
  );
  return list.docs.map((snap) => serializeData(snap.data()));
};

export const getProducts = async () => {
  const list = await getDocs(
    query(collection(db, "products"), orderBy("timestampCreate", "desc"))
  );
  return list.docs.map((snap) => serializeData(snap.data()));
};

export const getProductsByCategory = async ({ categoryId }) => {
  const list = await getDocs(
    query(
      collection(db, "products"),
      where("categoryId", "==", categoryId)
    )
  );
  const products = list.docs.map((snap) => snap.data());
  const sortedProducts = products.sort((a, b) => {
    if (a.timestampCreate && b.timestampCreate) {
      return b.timestampCreate.toMillis() - a.timestampCreate.toMillis();
    }
    return 0;
  });
  return sortedProducts.map((product) => serializeData(product));
};
