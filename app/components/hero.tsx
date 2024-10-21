import foto from "./gar.jpg";

function Profile() {
    return <img src={foto.src} alt="Muhamad Tegar Gimnastiar"className="fotoku" />;
}

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
       <h1 className="text-gray-400 font-bold "> CV ONLINE</h1>
       <h2 className="text-3xl">Muhamad Tegar Gimnastiar</h2>
       <h3 className="text-3xl">Owner Rebound Futsal</h3>
      <Profile />
      <p>
        Perkenalkan nama saya muhamad tegar gimnastiar asal dari tanjungsari
        Saya anak yang rajin gapernah bolos kuliah
        Kata mamah aku ganteng
        </p>
        </div>
    );
}