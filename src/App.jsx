import Header from "./components/Header"
import NewIdea from "./components/NewIdea"
import SearchBar from "./components/SearchBar"

function App() {

  return (
    <main className="bg-slate-100 min-h-screen">
      <Header />
      <div className="w-full max-w-2xl mx-auto my-4">
        <SearchBar />
      </div>
      <NewIdea />
    </main>
  )
}

export default App
