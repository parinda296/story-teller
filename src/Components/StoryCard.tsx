import { useNavigate } from 'react-router-dom';

interface Story {
    id: string;
    image: string;
    title: string;
    description: string;
}

export default function StoryCard({ story }: {story: Story}) {
    const navigate = useNavigate();
    return (
        <li className="transition shadow-md hover:-translate-y-1 hover:scale-105
         w-[1/3] border rounded-xl border-gray-300 cursor-pointer duration-300" 
         onClick={() => navigate('/stories/' + story.id)}>
            <img
                className="max-h-[160px]  md:max-h-[400px] w-full object-cover rounded-t-xl"
                src={process.env.PUBLIC_URL + story.image}
                alt="/"
            />
            <h3 className='text-gray-600 text-center'><b>{story.title}</b></h3>
            <p className='text-gray-500 text-center'>{story.description}</p>
        </li>
    )
}
