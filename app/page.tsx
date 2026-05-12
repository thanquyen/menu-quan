export default function Home() {
  const menuSections = [
    {
      title: "🥥 BEST SELLER MÙA HÈ – NƯỚC DỪA TƯƠI & DỪA NON",
      items: [
        {
          name: "Nước dừa non",
          price: "35K",
          image:
            "/dua.png",
        },
        {
          name: "Dừa non kem matcha",
          price: "35K",
          image:
            "/duanonkemmatcha.png",
        },
        {
          name: "Dừa tươi hoa đậu biếc",
          price: "35K",
          image:
            "duanonhoadaubiec.png",
        },
        {
          name: "Dừa non full topping",
          price: "35K",
          image:
            "duanonfulltopping.png",
        },
        {
          name: "Dừa non dứa thơm",
          price: "35K",
          image:
            "duanonduathom.png",
        },
        {
          name: "Dừa non sen lạnh",
          price: "35K",
          image:
            "senlanhduanon.png",
        },
        {
          name: "Sen lạnh kem matcha",
          price: "35K",
          image:
            "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },

    {
      title: "🍵 TEAM MATCHA KHÔNG THỂ BỎ LỠ",
      items: [
        {
          name: "Matcha kem trứng",
          price: "30K",
          image:
            "/matchakemtrung.png",
        },
        {
          name: "Matcha latte",
          price: "25K",
          image:
            "matchalatte.png",
        },
        {
          name: "Matcha ít calo",
          price: "30K",
          image:
            "matchaitcalo.png",
        },
      ],
    },

    {
      title: "💜 VỊ BÉO THƠM SIÊU CUỐN",
      items: [
        {
          name: "Khoai môn latte",
          price: "30K",
          image:
            "/khoaimon.png",
        },
        {
          name: "Khoai môn kem trứng",
          price: "30K",
          image:
            "khoaimonkemtrung.png",
        },
      ],
    },

    {
      title: "🍑 THÊM NHIỀU MÓN SIÊU MÁT",
      items: [
        {
          name: "Hồng bảo thái",
          price: "30K",
          image:
            "trathaido.png",
        },
        {
          name: "Lục bảo thái",
          price: "30K",
          image:
            "trathaixanh.png",
        },
        {
          name: "Sữa tươi trân châu đường đen",
          price: "30K",
          image:
            "sưatuoi.png",
        },
        {
          name: "Sữa thạch đào",
          price: "30K",
          image:
            "/suathachdao.png",
        },
        {
          name: "Full topping",
          price: "30K",
          image:
            "fulltopping.png",
        },
        {
          name: "Trà chanh",
          price: "15K",
          image:
            "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },

    {
      title: "☕ COFFEE",
      items: [
        {
          name: "Coffee muối",
          price: "40K",
          image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Coffee sữa",
          price: "40K",
          image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Coffee latte",
          price: "45K",
          image:
            "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Coffee đặc biệt",
          price: "45K",
          image:
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Đen đá",
          price: "40K",
          image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Bạc xỉu",
          price: "40K",
          image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f2eb] p-5">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#5c3d2e]">
          MENU QUÁN ☕
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Đồ uống mát lạnh • Best seller mùa hè
        </p>
      </div>

      {menuSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-14">
          <h2 className="text-3xl font-bold mb-6 text-[#6b4226]">
            {section.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="bg-[#fff8f0] p-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[240px] object-contain"
                  />
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center gap-3">
                    <h3 className="text-2xl font-semibold text-[#4a2c20]">
                      {item.name}
                    </h3>

                    <span className="text-[#c97b32] font-bold text-2xl">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}