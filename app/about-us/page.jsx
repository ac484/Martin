import { Users, Target, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            關於我們
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我們致力於為您打造最純淨、最優質的香氛體驗，透過精心挑選的天然精油和獨特配方，
            讓每一次呼吸都成為美好的感官享受。
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                我們的故事
              </h2>
              <p className="text-gray-600 mb-4">
                成立於2020年，我們從對香氛的熱愛開始，逐步發展成為
                深受客戶信賴的專業香氛品牌。我們相信，每一種香氣都能喚起不同的情感，
                每一次使用都應該是一次身心靈的療癒之旅。
              </p>
              <p className="text-gray-600">
                透過與全球頂級精油供應商的合作，我們嚴選最純淨的天然原料，
                結合傳統工藝與現代科技，為您創造獨一無二的香氛體驗。
                我們期待與您一起探索香氛的無限可能。
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/team.png" 
                alt="香氛工作室" 
                className="rounded-lg shadow-lg max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            我們的價值觀
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                天然純淨
              </h3>
              <p className="text-gray-600">
                我們堅持使用100%天然精油，絕不添加人工香精，確保每一滴香氛都是大自然的恩賜。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                個性化體驗
              </h3>
              <p className="text-gray-600">
                我們了解每個人對香氣的偏好不同，提供專業的香氛諮詢，為您量身打造專屬的香氛方案。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                匠心工藝
              </h3>
              <p className="text-gray-600">
                我們傳承古老的調香技藝，結合現代科技，每一款香氛都經過精心調配和嚴格測試。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5K+</div>
              <div className="text-gray-600">香氛愛好者</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">20K+</div>
              <div className="text-gray-600">香氛產品</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">香氛系列</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">天然成分</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
