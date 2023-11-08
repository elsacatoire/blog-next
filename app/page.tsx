import MyProfilePic from "./components/MyProfilePic";
import Post2 from "./components/Posts2";
import ProjectPosts2 from "./components/ProjectPosts2";
import Link from "next/link";
import TextBoxEmphase from "./components/TextBoxEmphase";

export default function Home() {

  // Text data for the different parts of the page, in order to use components
  const textBoxData: { title: string; items: string[] }[] = [
    {
      title: 'Technos ♥️',
      items: ['• JavaScript, HTML, CSS',
        '• TypeScript, Next.js, React',
        '• Python', '• React Native',
        '• NoSQL avec MongoDB',
        '• API REST'],
    },
    {
      title: "J'apprends aussi",
      items: ['• Java', '• PHP', '• SQL'],
    },
    {
      title: 'Backlog',
      items: ['• Django, FAST API', '• Angular', '• Docker', '• Vue, Nuxt'],
    },
  ];

  return (
    <main>
      <div className="text-left block pr-3 md:p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
          <div className="md:w-2/3 md:order-1 ml-5">
            <h5 className="text-center mb-2 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bonjour et bienvenue 👋&nbsp;
              <span className="whitespace-nowrap">
                Hi I&apos;m <span className="font-bold">Elsa</span>
              </span></h5>
            <br />
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Je m&rsquo;appelle Elsa, j&rsquo;ai 34 ans, et je suis étudiante en développement chez
              <span className="text-green-700 font-semibold">
                <Link href="https://adatechschool.fr/"> Ada Tech School</Link></span> à Nantes.</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">Learning in progress... 9/21 mois réalisés !</p>
            <br />
            <p className="font-normal text-gray-700 dark:text-gray-400">
              En contrat de professionnalisation chez <span className="text-green-700 font-semibold">Apside Nantes</span> jusqu&rsquo;à novembre 2023, 4 jours par semaine et le vendredi à l&rsquo;école.
            </p>
            <br />
            <div>
              <p className="text-xl font-semibold text-green-700 dark:text-gray-400">&#128640;En projet</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Projet pro : client SNCF Connect</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Projet dev perso : site de révision notions tech, type flashcards</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Préparation de la certification <span className="text-green-700"> <Link href="https://www.francecompetences.fr/recherche/rncp/35653/">Conceptrice développeuse d&rsquo;application web</Link> RNCP 6 (BAc+3)</span> en 2024</p>
            </div>
            <br />
            <div>
              <p className="text-xl font-semibold text-green-700 dark:text-gray-400">&#x1F49C;Télécharger mon CV</p>
              <Link href="https://drive.google.com/file/d/1AhLRbQcMAndloqCun5pMDTTCte_fAlcM/view?usp=drive_link"><p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; <span className="underline">Version française</span></p></Link>
              <Link href="https://drive.google.com/file/d/1uh-C1mp-7bGBXiuJBzGnv7hlpCzODDpg/view?usp=drive_link"><p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; <span className="underline">English version</span></p></Link>
            </div>
          </div>

          <div className="md:w-1/3 md:order-2 rounded-lg center m-auto">
            <MyProfilePic src="/images/profileD.jpg"
              width={300}
              height={300}
              alt="Elsa Catoire"
              priority={true} />
          </div>

        </div>

        <div className="justify-center flex flex-wrap mt-12">
          {textBoxData.map((tech, index) => (
            <TextBoxEmphase key={index} title={tech.title} items={tech.items} style={"w-full md:w-1/3 md:order-1 p-3"} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-10 justify-center">
        <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
          <div className="text-lg text-left p-5 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-full flex flex-col">
            <ProjectPosts2 />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
          <div className="text-lg text-left p-5 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-full flex flex-col">
            <Post2 />
          </div>
        </div>
      </div>
    </main >
  )
}
