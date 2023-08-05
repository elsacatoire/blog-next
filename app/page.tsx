import MyProfilePic2 from "./components/MyProfilePic2";
import Post2 from "./components/Posts2";
import ProjectPosts2 from "./components/ProjectPosts2";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <div className="text-left block pr-3 md:p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex flex-col-reverse md:flex-row md:space-x-8 items-start">
          <div className="md:w-2/3 md:order-1 ml-5">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bonjour et bienvenue 👋&nbsp;
              <span className="whitespace-nowrap">
                Hi I&apos;m <span className="font-bold">Elsa</span>
              </span></h5>
            <br />
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Je m&rsquo;appelle Elsa, j&rsquo;ai 34 ans, et je suis étudiante en développement web et logiciel chez
              <span className="text-green-700 font-semibold">
                <Link href="https://adatechschool.fr/"> Ada Tech School</Link></span> à Nantes.</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">Learning in progress... 7/9 mois réalisés !</p>
            <br />
            <div>
              <p className="text-xl font-semibold text-green-700 dark:text-gray-400">&#128640;les projets :</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Aletrnance developpeuse full stack d&rsquo;un an à Nantes. Début octobre 2023 !</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Projet dev perso : site de révision notions tech, type flashcards</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Préparation de la certification <span className="text-green-700"> <Link href="https://www.francecompetences.fr/recherche/rncp/35653/">Concepteur développeur d&rsquo;application web</Link> RNCP 6 (BAc+3)</span></p>
            </div>

            {/* <h5 className="mt-10 text-center text-2xl tracking-tight text-green-700 dark:text-white">Je recherche une <span className="font-bold">alternance en contrat pro</span></h5>
            <br />
            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Durée : 12 mois</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Début : octobre/novembre 2023</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Rythme : 4 jours par semaine en entreprise</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Secteur : Bordeaux, Nantes ou Toulouse</p> */}
          </div>

          <div className="md:w-1/3 md:order-2 rounded-lg center m-auto">
            <MyProfilePic2 />
          </div>

        </div>
        <div className="justify-center flex flex-wrap mt-12">
          <div className="w-full md:w-1/3 md:order-1 p-3">
            <div className="h-full max-w-sm p-6 bg-gray-300 border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technos &#9829;</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; JavaScript, HYML, CSS</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; TypeScript, Next.js</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Python</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; NoSQL avec MongoDB</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; API REST</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 md:order-2 p-3">
            <div className="h-full max-w-sm p-6 bg-gray-300 border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">J&rsquo;apprends aussi</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Java</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; PHP</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; SQL</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 md:order-3 p-3">
            <div className="h-full max-w-sm p-6 bg-gray-300 border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Backlog</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Django, FAST API</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Dev mobile</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Docker</p>
            </div>
          </div>
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
