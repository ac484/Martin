"use client";

import { useSettings } from "@/lib/firestore/settings/read";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const { data: settings, isLoading } = useSettings();

  return (
    <footer className="flex flex-col gap-3 w-full bg-blue-100 border-t p-5 md:p-10">
      <div className="border-b w-full flex flex-col md:flex-row md:justify-between gap-3">
        <div className="flex">
          <img className="h-8" src="/logo.png" alt="Logo" />
        </div>
        <div className="flex-1 flex flex-col md:flex-row justify-end gap-4">
          {settings?.phone && (
            <div className="flex gap-2 items-center" key="phone">
              <Phone size={12} className="text-blue-500" />
              <h2 className="text-sm text-gray-600">{settings.phone}</h2>
            </div>
          )}
          {settings?.email && (
            <div className="flex gap-2 items-center" key="email">
              <Mail size={12} className="text-blue-500" />
              <h2 className="text-sm text-gray-600">{settings.email}</h2>
            </div>
          )}
          {settings?.address && (
            <div className="flex gap-2 items-center" key="address">
              <MapPin size={12} className="text-blue-500" />
              <h2 className="text-sm text-gray-600">{settings.address}</h2>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <h3 className="text-xs text-gray-700">
          © 2024 {settings?.companyName || "APNA NAAM"}. All rights reserved.
        </h3>
      </div>
    </footer>
  );
}