export interface QuizResponse {
    response_code: number;
    results: QuizQuestion[];
}

export interface QuizQuestion {
    type: Type;
    difficulty: Difficulty;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    user_answer?: string;
}

export enum Difficulty {
    Easy = "easy",
    Hard = "hard",
    Medium = "medium",
}

export enum Type {
    Multiple = "multiple",
    Boolean = "boolean"
}
