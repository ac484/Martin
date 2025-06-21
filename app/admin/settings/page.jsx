"use client";

import { useSettings } from "@/lib/firestore/settings/read";
import { updateSettings } from "@/lib/firestore/settings/write";
import { Button, CircularProgress } from "@nextui-org/react";
import { Save } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const { data: settings, error, isLoading } = useSettings();
  const [formData, setFormData] = useState({
    companyName: "",
    description: "",
    email: "",
    phone: "",
    address: "",
    businessHours: {
      weekdays: "",
      weekends: "",
    },
    note: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (settings) {
      setFormData({
        companyName: settings.companyName || "",
        description: settings.description || "",
        email: settings.email || "",
        phone: settings.phone || "",
        address: settings.address || "",
        businessHours: {
          weekdays: settings.businessHours?.weekdays || "",
          weekends: settings.businessHours?.weekends || "",
        },
        note: settings.note || "",
      });
    }
  }, [settings]);

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      await updateSettings({ data: formData });
      toast.success("設定已成功更新");
    } catch (error) {
      toast.error(error.message || "更新失敗");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-5">
        載入設定時發生錯誤: {error}
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-6 p-5">
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">網站設定</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 基本資訊 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                公司名稱 *
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="請輸入公司名稱"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                聯絡電話 *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="請輸入聯絡電話"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              電子郵件 *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="請輸入電子郵件"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              地址 *
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="請輸入地址"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              公司描述
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="請輸入公司描述"
            />
          </div>

          {/* 營業時間 */}
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">營業時間</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  平日營業時間
                </label>
                <input
                  type="text"
                  value={formData.businessHours.weekdays}
                  onChange={(e) => handleInputChange("businessHours.weekdays", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="例如: 10:00 - 19:00"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  假日營業時間
                </label>
                <input
                  type="text"
                  value={formData.businessHours.weekends}
                  onChange={(e) => handleInputChange("businessHours.weekends", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="例如: 11:00 - 18:00"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              備註
            </label>
            <input
              type="text"
              value={formData.note}
              onChange={(e) => handleInputChange("note", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="例如: 國定假日休息"
            />
          </div>

          <div className="flex justify-end pt-6 border-t">
            <Button
              type="submit"
              color="primary"
              isLoading={isSaving}
              startContent={!isSaving && <Save className="w-4 h-4" />}
              className="px-8"
            >
              {isSaving ? "儲存中..." : "儲存設定"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
