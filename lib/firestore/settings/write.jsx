import { db } from "@/lib/firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";

export const updateSettings = async ({ data }) => {
  try {
    if (!data?.companyName) {
      throw new Error("Company name is required");
    }
    if (!data?.email) {
      throw new Error("Email is required");
    }
    if (!data?.phone) {
      throw new Error("Phone is required");
    }
    if (!data?.address) {
      throw new Error("Address is required");
    }

    await setDoc(
      doc(db, "settings/contact"),
      {
        ...data,
        timestampUpdate: Timestamp.now(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Error updating settings:", error);
    throw error;
  }
}; 