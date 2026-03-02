"use client";
import React, { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

// Satılacak Ürünlerin Listesi
const URUNLER = [
  { id: 1, ad: "Gelecek Tasarımı", fiyat: "750 ₺", renk: "#6b21ff" },
  { id: 2, ad: "Siber Güvenlik Paketi", fiyat: "1200 ₺", renk: "#00ff88" },
  { id: 3, ad: "Dehşet Yazılım Kursu", fiyat: "500 ₺", renk: "#ff216b" },
];

export default function MarketSayfasi() {
  const [sepet, setSepet] = useState(0);

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* ÜST MENÜ (Header) */}
      <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>DEHŞET MARKET</h1>
        <div style={{ backgroundColor: '#6b21ff', padding: '10px 20px', borderRadius: '50px' }}>
          🛒 Sepetim: <b>{sepet}</b>
        </div>
      </nav>

      {/* HAVALI MOR KÜRE (Görsel Şov) */}
      <div style={{ height: '300px', width: '100%' }}>
        <Canvas>
          <ambientLight intensity={1} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial color="#6b21ff" distort={0.5} speed={2} />
          </Sphere>
        </Canvas>
      </div>

      {/* ÜRÜN LİSTESİ */}
      <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {URUNLER.map((urun) => (
          <div key={urun.id} style={{ border: '1px solid #333', padding: '20px', borderRadius: '15px', textAlign: 'center', transition: '0.3s' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: urun.renk, borderRadius: '50%', margin: '0 auto 15px' }}></div>
            <h3>{urun.ad}</h3>
            <p style={{ fontSize: '20px', color: urun.renk }}>{urun.fiyat}</p>
            <button 
              onClick={() => {
                setSepet(sepet + 1);
                alert(`${urun.ad} sepete eklendi! Ödeme sistemine ileride geçeceğiz.`);
              }}
              style={{ backgroundColor: '#fff', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}
            >
              SEPETE EKLE
            </button>
          </div>
        ))}
      </div>

    </main>
  );
}