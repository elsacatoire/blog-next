import MyProfilePic2 from "./components/MyProfilePic2";
import Post2 from "./components/Posts2";
import ProjectPosts2 from "./components/ProjectPosts2";
import Link from "next/link";


export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-gray-200">
        Bonjour et bienvenue 👋&nbsp;
        <p><span className="whitespace-nowrap">
          Hi I&apos;m <span className="font-bold">Elsa</span>.
        </span></p>

      </p>
      <div className="flex">
        <div className="md:w-2/3 md:order-1 ml-12 mr-12 text-lg text-left">
          <p>
            Je m&rsquo;appelle Elsa, j&rsquo;ai 34 ans, et je suis étudiante en développement web et logiciel chez
            <span className="underline"><Link href="https://adatechschool.fr/"> Ada Tech School</Link></span> à Nantes.
            <br />
            <br />
            <p>Je recherche une <span className="font-bold">alternance en contrat pro</span> :</p>
            <ul className="ml-5">
              <li>- Durée : 12 mois</li>
              <li>- Début : octobre/novembre 2023</li>
              <li>- Rythme : 4 jours par semaine en entreprise</li>
              <li>- Secteur : Bordeaux, Nantes ou Toulouse</li>
            </ul>
          </p></div>
        <div className="md:w-1/3 md:order-2">
          <MyProfilePic2 />
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row md:space-x-8 items-start m-20">
        <div className="mr-12">
          <ProjectPosts2 />
        </div>
        <div><Post2 /></div>
      </div>
    </main>
  )
}
