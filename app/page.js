'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [showPreOrderModal, setShowPreOrderModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPreOrderModal = (product) => {
    setSelectedProduct(product);
    setShowPreOrderModal(true);
  };

  const closePreOrderModal = () => {
    setShowPreOrderModal(false);
    setSelectedProduct(null);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePreOrderSubmit = (e) => {
    e.preventDefault();
    console.log('Pre-order submitted:', { product: selectedProduct, customer: formData });
    alert(`Thanks ${formData.name}! We'll email you when ${selectedProduct.name} is ready to order.`);
    closePreOrderModal();
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#0A2540]">Water Snob</div>
          <div className="flex space-x-8">
            <a href="#shop" className="text-[#0A2540] hover:text-[#00C2D1] transition-colors">Shop</a>
            <a href="#about" className="text-[#0A2540] hover:text-[#00C2D1] transition-colors">About</a>
            <a href="#contact" className="text-[#0A2540] hover:text-[#00C2D1] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#00C2D1] to-[#0A2540]"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            Wear Your <span className="text-[#00C2D1]">Hydration</span>.
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Premium streetwear inspired by alkaline water culture — launching soon.
          </p>
          <a href="#shop" className="bg-[#00C2D1] hover:bg-[#00A8B5] text-[#0A2540] font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 inline-block">
            Pre-Order Now
          </a>
        </div>
      </section>

      {/* Collection Highlights */}
      <section id="shop" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-8 text-[#0A2540]">Pre-Order Collection</h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Be the first to own Water Snob gear. Pre-order now and we&apos;ll notify you when it&apos;s ready to ship.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Water Snob Essential Tee", price: "$45", image: "/images/IMG_5423-preview.webp" },
              { name: "Water Snob Cap", price: "$35", image: "/images/IMG_2197.jpg" },
              { name: "Water Snob Hoodie", price: "$45", image: "/images/IMG_6772.webp" },
              { name: "Water Snob Hoodie", price: "$45", image: "/images/IMG_6775.webp" }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#00C2D1] text-[#0A2540] px-3 py-1 rounded-full text-sm font-bold">
                    Pre-Order
                  </div>
                  <button 
                    onClick={() => openPreOrderModal(product)}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-[#0A2540] font-semibold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Pre-Order - {product.price}
                  </button>
                </div>
                <h3 className="font-semibold text-[#0A2540] mb-1">{product.name}</h3>
                <p className="text-[#00C2D1] font-bold text-lg">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 text-[#0A2540]">Not All Water. Not All Merch.</h2>
              <p className="text-lg mb-6 text-gray-700">
                Born from the culture of premium alkaline water, Water Snob represents the intersection of health consciousness and bold streetwear. We don&apos;t just hydrate—we elevate.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Every piece tells the story of those who refuse to settle for basic. From WaterTree&apos;s alkaline excellence to your everyday drip, we&apos;re here for those who know better deserves better.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/IMG_5432.webp"
                alt="Water Snob lifestyle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-16 text-[#0A2540]">Best Sellers</h2>
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { name: "Water Snob Hoodie", desc: "Premium cotton blend for all-day comfort", price: "$45", image: "/images/IMG_6777.webp" },
              { name: "Water Snob Cap", desc: "Hand-embroidered with premium materials", price: "$35", image: "/images/IMG_2197.jpg" },
              { name: "Water Snob Hoodie", desc: "Minimalist design meets maximum comfort", price: "$45", image: "/images/IMG_6780.webp" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative h-80 mb-6 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#0A2540]">{item.name}</h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <span className="text-[#00C2D1] font-bold text-xl">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Community */}
      <section className="py-20 bg-[#0A2540] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-black mb-6">Join the <span className="text-[#00C2D1]">Snob Society</span>.</h2>
          <p className="text-2xl mb-8 font-light">Represent health + style.</p>
          <a href="#shop" className="bg-[#00C2D1] hover:bg-[#00A8B5] text-[#0A2540] font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 inline-block">
            Pre-Order the Drop
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-16 text-[#0A2540]">What Snobs Say</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { quote: "Finally, merch that feels fresh and has a message.", author: "Alex M." },
              { quote: "Quality is unmatched. Love the alkaline water connection.", author: "Jordan K." },
              { quote: "Perfect blend of wellness culture and street style.", author: "Sam R." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-lg mb-4 text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <span className="text-[#00C2D1] font-semibold">— {testimonial.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#00C2D1]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-4 text-white">Stay Hydrated. Stay Snobby.</h2>
          <p className="text-xl mb-8 text-white/90">Get early access to drops and exclusive content.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-full text-[#0A2540] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-[#0A2540] hover:bg-[#082038] text-white font-bold py-3 px-6 rounded-full transition-colors">
              Get Early Access
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0A2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-black mb-4">Water Snob</h3>
              <p className="text-lg text-white/80 mb-6">
                &ldquo;Don&apos;t settle for basic water. Don&apos;t settle for basic merch.&rdquo;
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Shop</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/80 hover:text-[#00C2D1] transition-colors">All Products</a>
                <a href="#" className="block text-white/80 hover:text-[#00C2D1] transition-colors">Apparel</a>
                <a href="#" className="block text-white/80 hover:text-[#00C2D1] transition-colors">Accessories</a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Support</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-white/80 hover:text-[#00C2D1] transition-colors">About</a>
                <a href="#contact" className="block text-white/80 hover:text-[#00C2D1] transition-colors">Contact</a>
                <a href="#" className="block text-white/80 hover:text-[#00C2D1] transition-colors">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Pre-Order Modal */}
      {showPreOrderModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button 
              onClick={closePreOrderModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            <div className="text-center mb-6">
              <div className="w-24 h-24 relative rounded-lg mx-auto mb-4 overflow-hidden">
                <Image
                  src={selectedProduct?.image || '/images/IMG_5423-preview.webp'}
                  alt={selectedProduct?.name || 'Product'}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-2xl font-black text-[#0A2540] mb-2">{selectedProduct?.name}</h3>
              <p className="text-[#00C2D1] font-bold text-xl mb-2">{selectedProduct?.price}</p>
              <p className="text-gray-600">Pre-order now and we&apos;ll email you when it&apos;s ready!</p>
            </div>

            <form onSubmit={handlePreOrderSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00C2D1] focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00C2D1] focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00C2D1] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0A2540] hover:bg-[#082038] text-white font-bold py-3 px-6 rounded-full transition-colors"
              >
                Confirm Pre-Order
              </button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              No payment required. We&apos;ll contact you when your item is ready to order.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
