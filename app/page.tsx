import Post2 from "./components/Posts2";


export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Elsa</span>.
        </span>
      </p>
      <div className="max-w-screen-xl mx-auto text-l text-left">
        <p>
          Je m'appelle Elsa, j'ai 34 ans, et je suis étudiante en développement web et logiciel chez Ada Tech School à Nantes,
          je recherche une alternance d'un an à partir d'octobre ou novembre 2023,
          pour travailler 4 jours par semaine.
        </p>

      </div>
      <Post2 />
    </main>
  )
}
