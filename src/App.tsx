import { MagnifyingGlassPlus } from 'phosphor-react';

import './styles/main.css';
import logoImg from "./assets/logo-nlw-esports.svg";

interface gameCardProps {
  imagePath: string;
  gameName: string;
  adNumb: number;
}

export function GameCard(props: gameCardProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.imagePath} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.gameName}</strong>
      <span className="text-zinc-300 text-sm block">{props.adNumb} anúncio{(props.adNumb == 0) ? "":"s"}</span>
      </div>
    </a>
  )
}

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameCard imagePath="/game-1.png" gameName="League of Legends" adNumb={4} />
        <GameCard imagePath="/game-2.png" gameName="Dota 2" adNumb={8} />
        <GameCard imagePath="/game-3.png" gameName="Counter Strike" adNumb={23} />
        <GameCard imagePath="/game-4.png" gameName="Fortnite" adNumb={0} />
        <GameCard imagePath="/game-5.png" gameName="World of Warcraft" adNumb={300} />
        <GameCard imagePath="/game-6.png" gameName="Apex" adNumb={1} />
      </div>

      <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="block text-2xl font-black text-white">Não encontrou seu duo?</strong>
            <span className="text-zinc-400">Publique seu anúncio para encontrar novos players!</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 rounded text-white hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
