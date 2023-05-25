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
        title: "Gesichtsserum",
        image: "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        beschreibung: "Reichhaltiges Serum gegen Falten und Altersflecken. Direkt in Iralien hergestellt",
        preis: "9.99€",
        größe: "10ml"
}
],
    lebensmittel: [
        {
            type: "food",
            title: "Smoothie",
            image: "https://images.unsplash.com/photo-1650022643645-3cba368a52b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1062&q=80",
            beschreibung: "kaltgepresster Saft 'Green Goddness' oder 'Crimson Awakening'",
            preis: "3.99€",
            größe: "295ml"
        },
        {
            type: "food",
            title: "gerösteter Mais",
            image: "https://images.unsplash.com/photo-1541363278861-e218a998284f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
            beschreibung: "Direkt nach der Ernte gerösteter Mais, gesalzen. Das fettarme Pondant zu Nüssen",
            preis: "6.99€",
            größe: "500g"
        },
        {
            type: "food",
            title: "Protein Bar",
            image: "https://images.unsplash.com/photo-1597781379202-efa830a6c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
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