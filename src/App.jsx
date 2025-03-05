import { useEffect, useState } from "react"
import Card from "./components/Card"
import Frame from "./components/Frame"
import { categories } from './components/Words'

function App() {
  const availableCategories = [
    "Famous Anime",
    "Famous Cartoons",
    "Asian Novelas",
    "Filipino TV Shows",
    "Filipino Movies",
    "Filipino Idioms / Sayings",
    "90s Anime",
    "Disney and Pixar Movies",
    "Superhero  Cartoons"
  ]
  const [chosenCategory, setchosenCategory] = useState('')
  const [currentWord, setCurrentWord] = useState('')
  const [wordPool, setWordPool] = useState(null)
  const [wordCount, setWordCount] = useState(0)

  const chooseCategory = (category) =>{
    setchosenCategory(category)
    setCurrentWord('')
    const index = availableCategories.findIndex((c) => c === category)
    console.log(index)
    switch(index){
      case 0:
        setWordPool(categories.famousAnime)
        setWordCount(categories.famousAnime.length)
        break
      case 1:
        setWordPool(categories.famousCartoons)
        setWordCount(categories.famousCartoons.length)
        break
      case 2:
        setWordPool(categories.asianNovelas)
        setWordCount(categories.asianNovelas.length)
        break
      case 3:
        setWordPool(categories.filipinoMovies)
        setWordCount(categories.filipinoMovies.length)
        break
      case 4:
        setWordPool(categories.filipinoIdiomsSayings)
        setWordCount(categories.filipinoIdiomsSayings.length)
        break
      case 5:
        setWordPool(categories.filipinoTVShows)
        setWordCount(categories.filipinoTVShows.length)
        break
      case 6:
        setWordPool(categories.ninetiesAnime)
        setWordCount(categories.ninetiesAnime.length)
        break
      case 7:
        setWordPool(categories.superheroCartoons)
        setWordCount(categories.superheroCartoons.length)
        break
      case 8:
        setWordPool(categories.disneyPixarMovies)
        setWordCount(categories.disneyPixarMovies.length)
        break
      
      default:
        setWordPool(null)

    }
  }

  const generateWord = () =>{
    if(wordPool){
      let count = wordCount
      let newWordPool = wordPool
      let index = parseInt(Math.floor((Math.random() * count -1)))
      setCurrentWord(wordPool[index])
      newWordPool.splice(index, 1)
      count--
      setWordPool(newWordPool)
      setWordCount(count)
    }else{
      setCurrentWord('Please choose a category!')
    }
    
  }


  return (
    <>
      <section>
        <div className="text-center mb-5">
          <h1 className="text-2xl font-bold tracking-wider">Word Game Generator v1</h1>
          <p className="text-sm font-light tracking-wider">Choose words from my variety of categories!</p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Frame>
            <div className="lg:grid grid-cols-2 gap-3">
              {availableCategories.map((category) =>
                <Card
                  key={category}
                  handleClick={() => chooseCategory(category)}
                >
                  {category}
                </Card>
              )}
            </div>
          </Frame>

          <Frame>
            <div className="flex justify-between items-baseline">
              <div className="flex items-baseline gap-2 mb-3">
                <h2 className="text-lg font-light">
                  Generate word/ phrase for:
                </h2>
                <span className="font-medium">{chosenCategory}</span>
              </div>
              <div>{wordCount}/100</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl font-medium my-3 py-1 text-center">
                {currentWord}
              </p>
              <button 
                onClick={() => generateWord()}
                className="bg-gray-500 px-3 py-2 rounded-md cursor-pointer text-gray-800 hover:bg-gray-700 hover:text-gray-200"
              >
                Generate
              </button>
            </div>
          </Frame>
        </div>
      </section>
      <div className="my-3 text-center">
        <span className="text-sm font-semibold me-1">
          Designed and developed by
        </span>
        <span>
          <a 
            href="https://github.com/gabify"
            target="_blank"
            className="text-yellow-400 text-sm font-semibold underline underline-offset-3"
          >
            Gabify
          </a>
        </span>
      </div>
    </>
  )
}

export default App
