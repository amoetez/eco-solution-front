const img1 = new URL("../../../../public/assets/CO2.png", import.meta.url);
const img2 = new URL("../../../../public/assets/puissance.png", import.meta.url);
const img3 = new URL("../../../../public/assets/PROJ.png", import.meta.url);
const img4 = new URL(
    "../../../../public/assets/panneau-solaire.png",
    import.meta.url
  );
  const img5 = new URL("../../../../public/assets/productif.png", import.meta.url);

export const items = [
    
    {
        id: "1",
        title: 'Indicateur carbone CO2',
        number: '100',
        image:img1,
    },
    {
        id: "2",
        title: 'Puissance installée en KWC',
        number: '170',
        image:img4,

    },
    {
        id: "3",
        title: 'Nombre des Projets',
        number: '5',
        image:img5,

    },



]