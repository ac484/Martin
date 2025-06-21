"use client";

import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import useSWRSubscription from "swr/subscription";

export function useSettings() {
  const { data, error } = useSWRSubscription(
    ["settings"],
    ([path], { next }) => {
      const ref = doc(db, `${path}/contact`);
      const unsub = onSnapshot(
        ref,
        (snapshot) => {
          next(null, snapshot.exists() ? snapshot.data() : null);
        },
        (err) => {
          console.error("Error fetching settings:", err);
          next(err, null);
        }
      );
      return () => unsub();
    }
  );

  return { 
    data, 
    error: error?.message, 
    isLoading: data === undefined 
  };
} 