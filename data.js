const products = {
    cosmetics: [
        {
            type: "cosmetics",
            title: "Naturseife 'Lavendel - Hafer",
            image: "https://images.unsplash.com/photo-1614806687528-752e5a2c3b29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
            beschreibung: "Wohltuende Seife mit getrocknetem Lavendel gegen trockene Haut",
            preis: "4.99€",
            größe: "100g"
    },
    {
            type: "cosmetics",
            title: "Handgemachte Bioseife Natur",
            image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
            beschreibung: "Pflegende Bioseife mit Meersalz für schöne Haut und volles Haar",
            preis: "3.49€",
            größe: "80g"
    },
    {
        type: "cosmetics",
        title: "Bamus Abschminkpads",
        image: "https://images.unsplash.com/photo-1588959570984-9f1e0e9a91a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
        beschreibung: "Weiche, wiederverwendbare Wattepads aus nachhaltiger Bambusfaser",
        preis: "9.99€",
        größe: "5 Stück"
}
],
    lebensmittel: [
        {
            type: "food",
            title: "Ananas-Mango Smoothie",
            image: "https://images.unsplash.com/photo-1588959570984-9f1e0e9a91a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            beschreibung: "kaltgepresster Saft aus Ananas und Mango aus biologischem Anbau, verfeinert mit kanadischem Honig",
            preis: "2.99€",
            größe: "250ml"
        },
        {
            type: "food",
            title: "gerösteter Mais",
            image: "https://images.unsplash.com/photo-1590785070226-54267b6eda8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            beschreibung: "Direkt nach der Ernte gerösteter Mais, gesalzen. Das fettarme Pondant zu Nüssen",
            preis: "6.99€",
            größe: "500g"
        },
        {
            type: "food",
            title: "Protein Bar",
            image: "https://images.unsplash.com/photo-1622484211828-17230f29dfa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            beschreibung: "Veganer Proteinriegel aus biologischem Anbau. Für das gesunde Frühstück oder für Zwischendurch",
            preis: "1.99€",
            größe: "60g"
        }
    ],
    kleidung: [
        {
            type: "cloth",
            title: "Merinomantel - second Hand",
            image: "https://images.unsplash.com/photo-1565532070333-43edd7d75c90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
            beschreibung: "Warmer Mantel aus kontrollierter und fairer Merinowolle mit Reißverschluss",
            preis: "129.99€",
            größe: "44"
        },
        {
            type: "cloth",
            title: "Cordkleid - second Hand",
            image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80",
            beschreibung: "Weinrotes Cordkleid für den perfekten Look im Büro, beim Einkaufen oder in der Bar",
            preis: "89.99€",
            größe: "40"
        },
        {
            type: "cloth",
            title: "Statement Shirt - second Hand",
            image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
            beschreibung: "'Leave the Road- Take the Trails' Statementshirt, wollweiß",
            preis: "29.99€",
            größe: "42"
        }
    ]
};

export const productData = JSON.stringify(products);