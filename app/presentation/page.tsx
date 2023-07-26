import MyProfilePic from "../components/MyProfilePic"

export default function Présentation() {
    return (
        <main className="px-6 mx-auto">
            <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
                En savoir un petit peu plus sur moi 👋&nbsp;
                <span className="whitespace-nowrap">
                    I&apos;m <span className="font-bold">Elsa</span>.
                </span>
            </p>
            <br />
            <div>
                <p className="ml-12 mr-12 text-m text-left">
                    Je m&rsquo;appelle Elsa, j&rsquo;ai 34 ans, et je suis étudiante en développement
                    web et logiciel chez Ada Tech School à Nantes,
                    je recherche une alternance d&rsquo;un an à partir d&rsquo;octobre ou de novembre 2023,
                    pour travailler 4 jours par semaine.
                </p>
                <br />
                <div className="flex">
                    <div className="md:w-2/3 md:order-1 ml-12 mr-12 text-sm text-left">
                        <p>
                            En alternance, j&rsquo;ai hâte de travailler sur des projets concrets et de rencontrer
                            des personnes inspirantes auprès desquelles je pourrais apprendre et grandir.
                            Participer à la vie d&rsquo;une organisation est quelque chose que j&rsquo;ai toujours apprécié, et c&rsquo;est avec plaisir que j&rsquo;intégrerais vos équipes.
                        </p>
                        <br />
                        <p>Dans mon précédent métier en tant que manager de projets et établissements culturels dans le secteur public, j&rsquo;ai acquis une précieuse expérience dans la prise de responsabilités de manière indépendante. De plus, mes expériences de voyages en solo ont renforcé ma capacité à être fiable et autonome, des qualités que je considère comme essentielles dans n&rsquo;importe quel environnement de travail, même en dehors du cadre technique.
                        </p>
                        <br />
                        <p>Toujours passionnée par les problématiques du service public, je me sentais quelque peu limitée par les anciennes techniques de gestion et d&rsquo;organisation de l&rsquo;administration. Découvrir l&rsquo;école Ada Tech School, qui met l&rsquo;accent sur l&rsquo;inclusion dans l&rsquo;industrie technologique, a été un moment décisif pour moi, car cela m&rsquo;a permis d&rsquo;envisager un avenir professionnel dans des projets dynamiques et renouer avec ma passion pour les sciences et la logique. Pourvoir allier mes compétences techniques ainqi que mes qualités d&rsquo;organisation et relationelles en somme !
                        </p>
                        <br />
                        <p>
                            Dans le code ce qui me plait le plus : La résolution de problèmes.
                            J&rsquo;ai commencé à apprendre le développement web avec JavaScript et à travailler sur des algorithmes avec Python.
                            Ma formation de développeuse full-stack m&rsquo;a amenée à travailler sur des projets en groupe et en solo, couvrant diverses technologies comme indiqué dans mon CV.
                            Ma passion pour ce métier de développeuse réside dans l&rsquo;apprentissage continu.
                            Apprendre quoi ?
                            Tout !
                            L&rsquo;intérêt c&rsquo;est le produit. Ce qu&rsquo;il me permet de travailler et ce qu&rsquo;il apporte à mes contemporains
                            Ce qui compte le plus pour moi, c&rsquo;est l&rsquo;impact final du produit.
                            Je suis prête à apprendre n&rsquo;importe quelle technologie pour un projet qui m&rsquo;enthousiasme et qui correspond à mes valeurs.
                        </p>
                    </div>
                    <div className="md:w-1/3 md:order-2">
                        <MyProfilePic />
                    </div>
                </div>
            </div>

        </main>
    )
}
