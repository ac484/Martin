"use client";

import { useSettings } from "@/lib/firestore/settings/read";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

export default function ContactUs() {
  const { data: settings, isLoading } = useSettings();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            聯絡我們
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {settings?.description || "我們很樂意為您提供專業的香氛諮詢服務。無論您對香氛有任何疑問、需要個人化建議，或想了解更多產品資訊，請隨時與我們聯絡。"}
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                發送訊息
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      姓名
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="請輸入您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      姓氏
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="請輸入您的姓氏"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    電子郵件
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="請輸入您的電子郵件"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    電話號碼
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="請輸入您的電話號碼"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    主旨
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">請選擇主旨</option>
                    <option value="consultation">香氛諮詢</option>
                    <option value="order">訂單相關</option>
                    <option value="product">產品資訊</option>
                    <option value="custom">客製化香氛</option>
                    <option value="wholesale">批發合作</option>
                    <option value="feedback">使用心得</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    訊息內容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="請詳細描述您的需求或問題，例如：您喜歡的香調類型、使用場合、過敏史等..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  發送訊息
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  聯絡資訊
                </h2>
                <div className="space-y-6">
                  {settings?.phone && (
                    <div className="flex items-start gap-4" key="phone">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">香氛諮詢專線</h3>
                        <p className="text-gray-600">{settings.phone}</p>
                        <p className="text-sm text-gray-500">週一至週五 10:00-19:00</p>
                      </div>
                    </div>
                  )}
                  
                  {settings?.email && (
                    <div className="flex items-start gap-4" key="email">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">電子郵件</h3>
                        <p className="text-gray-600">{settings.email}</p>
                        <p className="text-sm text-gray-500">24小時內回覆</p>
                      </div>
                    </div>
                  )}
                  
                  {settings?.address && (
                    <div className="flex items-start gap-4" key="address">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">香氛體驗館</h3>
                        <p className="text-gray-600">{settings.address}</p>
                        <p className="text-sm text-gray-500">歡迎預約參觀體驗</p>
                      </div>
                    </div>
                  )}
                  
                  {(settings?.businessHours?.weekdays || settings?.businessHours?.weekends) && (
                    <div className="flex items-start gap-4" key="businessHours">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">營業時間</h3>
                        {settings.businessHours?.weekdays && (
                          <p className="text-gray-600">週一至週五: {settings.businessHours.weekdays}</p>
                        )}
                        {settings.businessHours?.weekends && (
                          <p className="text-gray-600">週六至週日: {settings.businessHours.weekends}</p>
                        )}
                        {settings?.note && (
                          <p className="text-sm text-gray-500">{settings.note}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  常見問題
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">如何選擇適合的香氛？</h4>
                    <p className="text-sm text-gray-600">我們提供專業的香氛諮詢服務，根據您的喜好、使用場合和個人特質為您推薦最適合的香氛。</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">香氛的保存期限是多久？</h4>
                    <p className="text-sm text-gray-600">天然精油在適當保存下可保存2-3年，建議存放在陰涼乾燥處，避免陽光直射。</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">是否提供客製化香氛服務？</h4>
                    <p className="text-sm text-gray-600">是的，我們提供個人化香氛調配服務，可根據您的需求量身打造專屬香氛。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
