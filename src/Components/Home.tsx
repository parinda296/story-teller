import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-950 h-svh">
      <div className="Home-background flex flex-wrap h-svh">        
        <img src={process.env.PUBLIC_URL + "/assets/images/home4.png"} className="object-contain object-bottom w-[42%] h-[50%] md:object-center lg:object-center" />
        <img src={process.env.PUBLIC_URL + "/assets/images/home2.png"} className="object-contain object-bottom w-[20%] h-[50%] md:object-center lg:object-center" />
        <img src={process.env.PUBLIC_URL + "/assets/images/home.jpg"} className="object-contain object-bottom w-[38%] h-[50%] md:object-center lg:object-center" />
        <img src={process.env.PUBLIC_URL + "/assets/images/home3.jpg"} className="object-contain object-right-top w-[50%] h-[50%] md:object-cover lg:object-cover" />
        <img src={process.env.PUBLIC_URL + "/assets/images/home5.jpg"} className="object-contain object-left-top w-[50%] h-[50%] md:object-cover lg:object-cover" />
      </div>
      <div className="overlay">
        <h1 className='text-lg font-bold'>Welcome to My Story Teller App</h1>
        <h2 className="text-white text-base font-semibold mb-10">
          Embark on Interactive Journeys: Your Choices, Your Stories, Your Adventures
        </h2>
        <button onClick={() => navigate('/stories')} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Start
        </button>
      </div>
    </div>
  )
}
