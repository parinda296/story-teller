import StoryCard from './StoryCard';
import useFetch from '../custom-hooks/useFetch';
import { StoriesList } from '../types';

export default function Stories() {
    const storiesList: StoriesList[] = useFetch<StoriesList[]>('/assets/data/storiesList.json');

    if(!storiesList || storiesList.length === 0) {
        return null;
    }

    return (
        <ul className="grid grid-cols-2 gap-10 m-10 md:grid-cols-3 lg:grid-cols-3">
            {storiesList.map((story) => (
                <StoryCard key={story.id} story={story} />
            ))}
            {storiesList.map((story) => (
                <StoryCard key={story.id} story={story} />
            ))}
        </ul>
    );

}
