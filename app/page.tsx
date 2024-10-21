import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import RiwayatPekerjaan from "./components/RiwayatPekerjaan";
import "./gargim-style.css";

export default function CVOnline() {
  return (
    <section>
      <Hero />
    <RiwayatPendidikan />
    <RiwayatPekerjaan />
    </section>
  );
}