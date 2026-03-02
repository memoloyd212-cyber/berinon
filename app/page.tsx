"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function Home() {
  return (
    <main style={{ height: '100vh', width: '100%', backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
      
      {/* BAŞLIK: Havada uçuşan yazı */}
      <h1 style={{ position: 'absolute', top: '15%', color: 'white', fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: '900', zIndex: 10, textAlign: 'center', textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: '-2px', pointerEvents: 'none' }}>
        DEHŞET PROJE
      </h1>
      
      {/* 3D DÜNYA */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 3, 1]} />
        
        {/* Dalgalanan Küre */}
        <Sphere args={[1, 100, 200]} scale={2.2}>
          <MeshDistortMaterial
            color="#6b21ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Canvas>

      {/* ALT BUTON */}
      <div style={{ position: 'absolute', bottom: '15%', backgroundColor: '#6b21ff', color: 'white', padding: '20px 50px', borderRadius: '100px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.2rem', boxShadow: '0 0 30px rgba(107, 33, 255, 0.5)', zIndex: 10 }}>
        DÜNYAYI KEŞFET
      </div>

    </main>
  );
}