export default function Home() {
  const menuItems = [
    {
      name: "Trà Sữa Trân Châu",
      price: "30K",
      image:
        "https://images.unsplash.com/photo-1558857563-b371033873b8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Matcha Latte",
      price: "39K",
      image:
        "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Trà Đào Cam Sả",
      price: "35K",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-5">
      <h1 className="text-4xl font-bold text-center mb-8">
        MENU QUÁN ☕
      </h1>

      <div className="grid gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-3xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[220px] object-cover"
            />

            <div className="p-5">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">
                  {item.name}
                </h2>

                <span className="text-yellow-400 text-2xl font-bold">
                  {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}