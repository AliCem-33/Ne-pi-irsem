function yemekOner() {
  const yemekler = [
    "Mantı",
    "Lahmacun",
    "Pizza",
    "Hamburger",
    "Tavuk Döner",
    "Kuru Fasulye",
    "Pilav",
    "Menemen"
  ];

  const secilen = yemekler[Math.floor(Math.random() * yemekler.length)];

  document.getElementById("sonuc").innerText =
    "Bugün şunu deneyebilirsin: " + secilen;
}
