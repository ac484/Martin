"use client";

import { useOrdersCountsByTotalDays } from "@/lib/firestore/orders/read_count";
import { useUsersCountByTotalDays } from "@/lib/firestore/user/read_count";
import CountMeter from "./components/CountMeter";
import CustomersChart from "./components/CustomersChart";
import OrdersChart from "./components/OrdersChart";
import RevenueChart from "./components/RevenueChart";
import { useEffect, useState } from "react";

export default function Page() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    let list = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      list.push(date);
    }
    setDates(list);
  }, []);

  const { data: ordersData } = useOrdersCountsByTotalDays({ dates: dates });
  const { data: usersData } = useUsersCountByTotalDays({ dates: dates });

  return (
    <main className="flex flex-col gap-6 p-5">
      <CountMeter />
      <div className="flex flex-col md:flex-row gap-5">
        <RevenueChart items={ordersData} />
        <OrdersChart items={ordersData} />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <CustomersChart items={usersData} />
      </div>
    </main>
  );
}
