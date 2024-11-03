import React, { useState } from 'react';
 
const Quiz = () => {
    // Array of quiz questions, each with options and a correct answer
    const questions = [
        {
            questionText: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Paris"
        },
        {
            questionText: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
        },
        {
            questionText: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
            correctAnswer: "Harper Lee"
        }
    ];
 
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");
 
    // Handle answer selection
    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer);
    };
 
    // Handle answer submission and feedback
    const handleSubmitAnswer = () => {
        const currentQuestion = questions[currentQuestionIndex];
        
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1);
            setFeedback("Correct!");
        } else {
            setFeedback("Incorrect!");
        }
        
        // Move to the next question after a delay for feedback
        setTimeout(() => {
            setSelectedAnswer(null);
            setFeedback("");
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }, 1000);
    };
 
    // If all questions are answered, show the final score
    if (currentQuestionIndex >= questions.length) {
        return <h2>Your final score: {score} / {questions.length}</h2>;
    }
 
    // Get current question
    const currentQuestion = questions[currentQuestionIndex];
 
    return (
        <div>
            <h2>{currentQuestion.questionText}</h2>
            <div>
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerSelect(option)}
                        style={{
                            backgroundColor: selectedAnswer === option ? 'lightblue' : 'white'
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <button onClick={handleSubmitAnswer} disabled={!selectedAnswer}>
                Submit Answer
            </button>
            {feedback && <p>{feedback}</p>}
            <p>Score: {score}/{questions.length}</p>
        </div>
    );
};
 
export default Quiz;