import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const serializeData = (data) => JSON.parse(JSON.stringify(data));

export const getBrand = async ({ id }) => {
  const data = await getDoc(doc(db, `brands/${id}`));
  if (data.exists()) {
    return serializeData(data.data());
  } else {
    return null;
  }
};

export const getBrands = async () => {
  const list = await getDocs(collection(db, "brands"));
  return list.docs.map((snap) => serializeData(snap.data()));
};
