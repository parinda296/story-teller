import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Choice, Story } from '../types';
import useFetch from '../custom-hooks/useFetch';
import StoryImage from './Story/StoryImage';
import StoryContent from './Story/StoryContent';
import StoryChoices from './Story/StoryChoices';
import StoryTitle from './Story/StoryTitle';

export default function StoryPage({ }) {
  const { storyId } = useParams();
  const story: Story = useFetch<Story>('/assets/data/stories/' + storyId + '.json');
  const [selectedChoice, setSelectedChoice] = useState<Choice>();

  const isIntro = !selectedChoice;

  const onChoiceSelect = (choiceId: string) => {
    const choiceList = isIntro ? story.choices : selectedChoice.choices;
    if (choiceList) {
      const choiceIndex = choiceList.findIndex(item => item.choiceId === choiceId);
      setSelectedChoice(choiceList[choiceIndex]);
    }
  }

  if (!story) {
    return <div>Loading...</div>
  }

  const imageUrl = isIntro ? story.intro.image : selectedChoice.outcome.image;
  const title = isIntro ? story.title : selectedChoice.text;
  const text = isIntro ? story.intro.text : selectedChoice.outcome.text

  return (
    <div className='bg-gradient-to-r from-gray-50 to-gray-950 md:h-screen lg:h-screen'>
      <div className="min-h-screen flex flex-row items-center">
        <StoryChoices choices={isIntro ? story?.choices : selectedChoice?.choices} onChoiceSelect={onChoiceSelect}>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden order-first md:order-none">
            <div className="flex flex-col lg:flex-row">
              <StoryImage image={imageUrl} />
              <div className="lg:w-1/2 p-8 flex flex-col justify-center bg-black">
                <StoryTitle title={title} />
                <StoryContent text={text} />
              </div>
            </div>
          </div>
        </StoryChoices>

      </div>
    </div>
  )
}