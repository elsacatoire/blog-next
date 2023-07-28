import MyProfilePic2 from "./components/MyProfilePic2";
import Post2 from "./components/Posts2";
import ProjectPosts2 from "./components/ProjectPosts2";
import Link from "next/link";


export default function Home() {
  return (
    <main className="px-6 mx-auto">

      <div className="flex mt-5">
        <div className="md:w-2/3 md:order-1 ml-12 mr-12 text-lg text-left block max-w-m p-6 text-gray-900 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <p className=" b-6 text-3xl text-center dark:text-gray-200">
            Bonjour et bienvenue 👋&nbsp;
            <span className="whitespace-nowrap">
              Hi I&apos;m <span className="font-bold">Elsa</span>
            </span></p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Je m&rsquo;appelle Elsa, j&rsquo;ai 34 ans, et je suis étudiante en développement web et logiciel chez
            <span className="text-green-700 font-semibold">
              <Link href="https://adatechschool.fr/"> Ada Tech School</Link></span> à Nantes.</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">Learning in progress... 6/9 mois réalisés !</p>
          <h5 className="mt-10 text-center text-2xl tracking-tight text-green-700 dark:text-white">Je recherche une <span className="font-bold">alternance en contrat pro</span></h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Durée : 12 mois</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Début : octobre/novembre 2023</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Rythme : 4 jours par semaine en entreprise</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">&#x2022; Secteur : Bordeaux, Nantes ou Toulouse</p>

          <div className="flex felx-wrap mt-12 ">
            <div className="block w-full md:w-1/3 md:order-1 mr-3 max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technos &#9829;</h4>
              <p className="font-normal text-gray-700 dark:text-gray-400"> JavaScript/HYML/CSS, TypeScript, Next.js</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">- Python</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">- NoSQL avec MongoDB</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">- API REST</p>
            </div>
            <div className="block w-full md:w-1/3 md:order-2 mr-3 max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">J&rsquo;apprends aussi</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">- Java</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">- PHP</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">- SQL</p>
            </div>
            <div className="block w-full md:w-1/3 md:order-3 max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Backlog</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">- Django, FAST API</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">- Dev mobile</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">- Docker</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 md:order-2">
          <MyProfilePic2 />
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row md:space-x-8 items-start m-20">
        <div className="mr-12">
          <ProjectPosts2 />
        </div>
        <div className="mr-12">
          <Post2 />
        </div>
      </div>
    </main>
  )
}
