import MyProfilePic2 from "./components/MyProfilePic2";
import Post2 from "./components/Posts2";
import ProjectPosts2 from "./components/ProjectPosts2";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <div className="text-lg text-left block p-10 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
            <p className="font-normal text-gray-700 dark:text-gray-400">Learning in progress... 6/9 mois réalisés !</p>
            <br />
            <h5 className="mt-10 text-center text-2xl tracking-tight text-green-700 dark:text-white">Je recherche une <span className="font-bold">alternance en contrat pro</span></h5>
            <br />
            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Durée : 12 mois</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Début : octobre/novembre 2023</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Rythme : 4 jours par semaine en entreprise</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Secteur : Bordeaux, Nantes ou Toulouse</p>
          </div>

          <div className="md:w-1/3 md:order-2 rounded-lg center">
            <MyProfilePic2 />
          </div>

        </div>
        <div className="justify-center flex flex-wrap mt-12">
          <div className="w-full md:w-1/3 md:order-1 p-3">
            <div className="h-full max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technos &#9829;</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; JavaScript, HYML, CSS</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; TypeScript, Next.js</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Python</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; NoSQL avec MongoDB</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; API REST</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 md:order-2 p-3">
            <div className="h-full max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">J&rsquo;apprends aussi</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Java</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; PHP</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; SQL</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 md:order-3 p-3">
            <div className="h-full max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Backlog</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Django, FAST API</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Dev mobile</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Docker</p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-between w-full flex flex-wrap">
        <div className="mt-10 text-lg text-left block p-5 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <ProjectPosts2 />
        </div>
        <div className="mt-10 text-lg text-left block p-5 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <Post2 />
        </div>
      </div>
    </main >
  )
}
