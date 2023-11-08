import MyProfilePic from "../components/MyProfilePic"
import TextBoxEmphase from "../components/TextBoxEmphase";


export default function Présentation() {
    const aboutMeData: { title: string; items: string[] }[] = [
        {
            title: 'Et mon temps libre ?',
            items: ['• Perchée sur une montagne',
                '• Randonnée, escalade',
                '• Musique, ukulélé, chant',
                '• Ecologie, green-tech, low-tech',
                '• Bricolage, DIY',
                '• Ecriture, jeux',
                '• English fluent',],
        },
        {
            title: "Diplomes et concours",
            items: ['• 2016→ Concours Cat A - Attachée Territoriale',
                '• 2013→ Master2 Management Culturel',
                '• 2011→ Licence3 LEA Anglais espagnol',
                '• 2007→ BAC S - Sciences de lm&rsquo;ingénieur'],
        },
    ];

    return (
        <main >
            <div className="text-base text-left block max-w-m p-6 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="flex flex-wrap mt-5">
                    <div className="md:w-2/3 md:order-1 md:pr-8 m-auto">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Get to know me &#x1F60A; </h5>
                        <br />
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            En reconversion professionnelle pour devenir développeuse,
                            je suis en contart pro depuis le 23 cotobre 2023. Je travaille sur des projets concrets favorisant la montée en compétence avec
                            des personnes inspirantes auprès desquelles je progresse et j'apprends.
                        </p>
                        <br />
                        <p className="font-normal text-gray-700 dark:text-gray-400">Dans mon précédent métier en tant que manager de projets et établissements culturels dans le secteur public, j&rsquo;ai acquis une précieuse expérience dans la prise de responsabilités de manière indépendante. De plus, mes expériences de voyages en solo ont renforcé ma capacité à être fiable et autonome, des qualités que je considère comme essentielles dans n&rsquo;importe quel environnement de travail, même en dehors du cadre technique.</p>
                        <br />
                        <p className="font-normal text-gray-700 dark:text-gray-400">Toujours passionnée par les problématiques du service public, je me sentais quelque peu limitée par les anciennes techniques de gestion et d&rsquo;organisation de l&rsquo;administration. Découvrir l&rsquo;école Ada Tech School, qui met l&rsquo;accent sur l&rsquo;inclusion dans l&rsquo;industrie de la tech, a été un moment décisif pour moi, car cela m&rsquo;a permis d&rsquo;envisager un avenir professionnel dans des projets dynamiques et renouer avec ma passion pour les sciences et la logique. Pouvoir allier compétences techniques et qualités organisationnelles/relationnelles en somme !</p>
                        <br />
                        <p className="font-normal text-gray-700 dark:text-gray-400">Dans le code ce qui me plait le plus : La résolution de problèmes.
                            J&rsquo;ai commencé à apprendre le développement web avec JavaScript et à travailler sur des algorithmes avec Python.
                            Ma formation de développeuse full-stack m&rsquo;a amenée à travailler sur des projets en groupe et en solo, couvrant diverses technologies.
                            Ma passion pour ce métier de développeuse réside dans l&rsquo;apprentissage continu.
                            <p>Apprendre quoi ?</p>
                            <p>Tout !</p>
                            L&rsquo;intérêt c&rsquo;est le produit, ce qu&rsquo;il me permet d&rsquo;apprendre et ce qu&rsquo;il apporte à mes contemporains.
                            Le plus important pour moi, c&rsquo;est l&rsquo;impact final du produit.
                            Je suis prête à apprendre n&rsquo;importe quelle technologie pour un projet qui m&rsquo;enthousiasme et qui correspond à mes valeurs.</p>

                    </div>
                    <div className="md:w-1/3 md:order-2 center">
                        <MyProfilePic
                            src="/images/profile.jpg"
                            width={600}
                            height={600}
                            alt="Elsa Catoire"
                            priority={true} />
                        {aboutMeData.map((tech, index) => (
                            <TextBoxEmphase key={index} title={tech.title} items={tech.items} style={"mt-5 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
