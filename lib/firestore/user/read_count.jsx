"use client";

import { db } from "@/lib/firebase";
import {
  average,
  collection,
  count,
  getAggregateFromServer,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import useSWR from "swr";

export const getUsersCount = async ({ date }) => {
  const ref = collection(db, `users`);
  let q = query(ref);

  if (date) {
    const fromDate = new Date(date);
    fromDate.setHours(0, 0, 0, 0);
    const toDate = new Date(date);
    toDate.setHours(24, 0, 0, 0);
    q = query(
      q,
      where("timestampCreate", ">=", fromDate),
      where("timestampCreate", "<=", toDate)
    );
  }
  const data = await getAggregateFromServer(q, {
    totalUsers: count(),
  });
  if (date) {
    return {
      date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
      data: data.data(),
    };
  }
  return data.data().totalUsers;
};

const getTotalUsersCounts = async (dates) => {
  let promisesList = [];
  for (let i = 0; i < dates?.length; i++) {
    const date = dates[i];
    promisesList.push(getUsersCount({ date: date }));
  }
  const list = await Promise.all(promisesList);
  return list;
};

export function useUsersCount() {
  const { data, error, isLoading } = useSWR("users_count", (key) =>
    getUsersCount({ date: null })
  );
  if (error) {
    console.log(error?.message);
  }
  return { data, error, isLoading };
}

export function useUsersCountByTotalDays({ dates }) {
  const { data, error, isLoading } = useSWR(
    ["users_count", dates],
    ([key, dates]) =>
      getTotalUsersCounts(dates?.sort((a, b) => a?.getTime() - b?.getTime()))
  );
  if (error) {
    console.log(error?.message);
  }
  return { data, error, isLoading };
}
