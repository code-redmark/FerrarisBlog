import Class from './models/Classe.js'
import Teca from "./models/Teca.js"
import Post from "./models/Post.js"

// Roba di esempio per inserire dati nel db
const classiDiEsempio = [
    {anno: 3, sezione: "M", bio: "whatsapp chicken!"},
    {anno: 3, sezione: "A", bio: ""},
    {anno: 4, sezione: "B", bio: "Siamo la classe 4B, siamo fortissimi!"},
    {anno: 5, sezione: "C", bio: "Siamo la classe 5C, siamo fortissimi!"}
]

export default async function seed() {
    await Class.deleteMany({}); // opzionale: cancella i vecchi dati
    let classi = await Class.insertMany(classiDiEsempio);

    await Post.deleteMany({});
    await Teca.deleteMany({})
    
    const testTeca = {
        title: "Incontro a Castel Capuano",
        description: `L'11 aprile incontreremo la scrittrice Titti Marrone a Castel Capuano, per parlare del suo libro "Primmammore"`,
        cover: 'castel-capuano_sklbvw',
        slug: "incontro-castel-capuano-3M-2026-03-04T09:00:00.000Z",
        class: classi[0]._id,
        images: [
            'FotoPlanning_fyl8yq',
            'castel-capuano_sklbvw',
            'Primmammore_xzinye'
        ]
    }

    const insertedParent = await Teca.insertOne(testTeca)

    const postDiEsempio = [
        {
            title: "Le nostre riflessioni",
            cover: 'Riflessioni_ggiytc',
            description: "I pensieri e le riflessioni che abbiamo fatto leggendo Primmammore",
            content: "[Work In Progress]",
            dataPost: "2026-03-09T09:00:00.000Z",
            slug: "le-nostre-riflessioni-3M-2026-03-09T09:00:00.000Z",
            class: classi[0]._id,
            parentTeca: insertedParent._id
        },
        {
            title: "Il Backstage",
            cover: 'Backstage_yrf2oh',
            description: "Mauro Romano ha raccolto diversi momenti durante la produzione di FerrarisBlog e durante il lavoro che abbiamo preparato per l'incontro",
            content: "[Work In Progress, riportare i video di Mauro please]",
            dataPost: "2026-03-20T09:00:00.000Z",
            slug: "il-backstage-3M-2026-03-20T09:00:00.000Z",
            class: classi[0]._id,
            parentTeca: insertedParent._id
        },
        {
            title: "La mappa concettuale",
            cover: 'Mappa_m5n60x',
            description: "Federico Prorogiglio e Valentina Gatto hanno esposto una mappa concettuale sul libro Primmammore che individua e tratta il tema principale del libro, il Patriarcato",
            content: "[Work In Progress (Spiegazione della mappa)]",
            dataPost: "2026-04-08T09:00:00.000Z",
            slug: "la-mappa-concettuale-3M-2026-04-08T09:00:00.000Z",
            class: classi[0]._id,
            parentTeca: insertedParent._id
        },
        {
            title: "Il nostro brainstorming",
            cover: 'Brainstorming_prtqha',
            description: "Alla fine della lettura del libro tutti gli alunni della classe (e i professori) hanno scelto una parola per descrivere il libro",
            content: "[Work In Progress]",
            dataPost: "2026-04-08T09:00:00.000Z",
            slug: "il-nostro-brainstorming-3M-2026-04-09T09:00:00.000Z",
            class: classi[0]._id,
            parentTeca: insertedParent._id
        }
]

    await Post.insertMany(postDiEsempio);
}