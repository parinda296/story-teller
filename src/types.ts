export interface StoriesList {
    id: string;
    title: string;
    description: string;
    image: string;
}

export interface Story {
    storyId: string;
    title: string;
    intro: {text: string, image: string},
    choices: Choice[]
}

export interface Choice {
    choiceId: string;
    text: string;
    outcome: {text: string, image: string}
    choices?: Choice[]
}

