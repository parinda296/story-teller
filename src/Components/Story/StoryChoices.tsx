import { Choice } from '../../types';

const StoryChoices = ({ choices, onChoiceSelect, children }: { choices: Choice[] | undefined, onChoiceSelect: Function, children: any }) => {
  return (
    <div className="m-auto flex justify-between items-center px-4 flex-col md:flex-row">
      {choices && choices.length && <button
        onClick={() => onChoiceSelect(choices[0].choiceId)}
        className="w-60 bg-gray-600 m-10 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        {choices[0].text}
      </button>}
      {children}
      {choices && choices.length && <button
        onClick={() => onChoiceSelect(choices[1].choiceId)}
        className="w-60 bg-gray-600 m-10 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        {choices[1].text}
      </button>}
    </div>
  );
};

export default StoryChoices;
