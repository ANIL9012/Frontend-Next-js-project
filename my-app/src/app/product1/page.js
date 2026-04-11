export default function Product1() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "₹499",
      img: "/product1img/product-img-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "₹699",
      img: "/product1img/product-img-2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "₹899",
      img: "/product1img/product-img-3.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: "₹999",
      img: "/product1img/product-img-4.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: "₹799",
      img: "/product1img/product-img-5.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      price: "₹599",
      img: "/product1img/product-img-6.jpg",
    },
    {
      id: 7,
      name: "Product 7",
      price: "₹1299",
      img: "/product1img/product-img-7.jpg",
    },
    {
      id: 8,
      name: "Product 8",
      price: "₹1499",
      img: "/product1img/product-img-8.jpg",
    },
    {
      id: 9,
      name: "Product 9",
      price: "₹399",
      img: "/product1img/product-img-9.jpg",
    },
    {
      id: 10,
      name: "Product 10",
      price: "₹999",
      img: "/product1img/product-img-10.jpg",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🛍️ Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-500"
          >
            <span className="absolute top-3 right-3 p-2 cursor-pointer hover:bg-red-100">
              ❤️
            </span>

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            {/* Content */}
            <div className="p-4 relative z-10">
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {item.name}
              </h2>

              {/* ⭐ Rating */}
              <div className="text-yellow-400 text-sm mt-1">⭐⭐⭐⭐☆</div>

              {/* 💰 Price */}
              <p className="text-xl font-bold text-green-600 mt-2">
                {item.price}
              </p>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  View
                </button>
                <button className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-lg hover:opacity-90 transition">
                  Add 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
