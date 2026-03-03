"use client";
import React, { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const URUNLER = [
  { id: 1, ad: "Gelecek Tasarımı", fiyat: 750, renk: "#6b21ff" },
  { id: 2, ad: "Siber Güvenlik Paketi", fiyat: 1200, renk: "#00ff88" },
  { id: 3, ad: "Dehşet Yazılım Kursu", fiyat: 500, renk: "#ff216b" },
];

export default function MarketSayfasi() {
  const [sepet, setSepet] = useState([]);
  const [panelAcik, setPanelAcik] = useState(false);

  // Toplam Fiyat Hesaplama
  const toplamFiyat = sepet.reduce((toplam, urun) => toplam + urun.fiyat, 0);

  const sepeteEkle = (urun) => {
    setSepet([...sepet, urun]);
  };

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      {/* ÜST MENÜ */}
      <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', position: 'sticky', top: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 10 }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>DEHŞET MARKET</h1>
        <button 
          onClick={() => setPanelAcik(true)}
          style={{ backgroundColor: '#6b21ff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          🛒 Sepetim ({sepet.length})
        </button>
      </nav>

      {/* HAVALI KÜRE */}
      <div style={{ height: '250px', width: '100%' }}>
        <Canvas>
          <ambientLight intensity={1} />
          <Sphere args={[1, 100, 200]} scale={2.2}>
            <MeshDistortMaterial color="#6b21ff" distort={0.4} speed={2} />
          </Sphere>
        </Canvas>
      </div>

      {/* ÜRÜNLER */}
      <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {URUNLER.map((urun) => (
          <div key={urun.id} style={{ background: '#111', padding: '30px', borderRadius: '20px', textAlign: 'center', border: '1px solid #222' }}>
            <div style={{ width: '60px', height: '60px', backgroundColor: urun.renk, borderRadius: '50%', margin: '0 auto 20px', boxShadow: `0 0 20px ${urun.renk}` }}></div>
            <h3 style={{ marginBottom: '10px' }}>{urun.ad}</h3>
            <p style={{ fontSize: '24px', color: urun.renk, fontWeight: 'bold' }}>{urun.fiyat} ₺</p>
            <button 
              onClick={() => sepeteEkle(urun)}
              style={{ backgroundColor: '#fff', color: '#000', border: 'none', padding: '12px 25px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px', width: '100%' }}
            >
              SEPETE EKLE
            </button>
          </div>
        ))}
      </div>

      {/* AÇILIR SEPET PANELİ (SIDEBAR) */}
      {panelAcik && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: '350px', height: '100%', backgroundColor: '#0a0a0a', borderLeft: '2px solid #6b21ff', zIndex: 100, padding: '30px', boxShadow: '-10px 0 30px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2>Sepetiniz</h2>
            <button onClick={() => setPanelAcik(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>✕</button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {sepet.length === 0 ? <p>Sepetiniz boş.</p> : sepet.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #222' }}>
                <span>{item.ad}</span>
                <span style={{ color: item.renk }}>{item.fiyat} ₺</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '2px solid #222', paddingTop: '20px', marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
              <span>TOPLAM:</span>
              <span style={{ color: '#00ff88' }}>{toplamFiyat} ₺</span>
            </div>
            <button 
              onClick={() => alert('Ödeme sistemine bağlanılıyor... Yakında gerçek ödeme aktif olacak!')}
              style={{ width: '100%', backgroundColor: '#00ff88', color: '#000', border: 'none', padding: '15px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '18px' }}
            >
              ÖDEMEYE GEÇ
            </button>
          </div>
        </div>
      )}

    </main>
  );
}