// import { Button } from '@/components/ui/button'
import React from 'react'

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold text-white mb-4">
            Coming Soon
        </h1>
        <p className="text-xl text-blue-100 mb-8">
        <b>GoBoolean:</b> Your ultimate platform for tech tips, programming resources, and interactive coding quizzes.
        </p>
        
        {/* <Card className="bg-white/10 text-white">
          <CardHeader>
            <CardTitle>Try our Programming Quiz!</CardTitle>
          </CardHeader>
          <CardContent>
            {!quizCompleted ? (
              <>
                <p className="mb-4 text-lg">{quizQuestions[currentQuestion].question}</p>
                <RadioGroup
                  value={selectedAnswer?.toString()}
                  onValueChange={(value) => setSelectedAnswer(parseInt(value))}
                  className="space-y-2"
                >
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="text-white">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <Button 
                  onClick={handleAnswerSubmit} 
                  className="mt-4 bg-blue-500 hover:bg-blue-600"
                  disabled={selectedAnswer === null}
                >
                  {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              </>
            ) : (
              <div>
                <p className="mb-4 text-lg">Quiz completed! Your score: {score}/{quizQuestions.length}</p>
                <Button onClick={resetQuiz} className="bg-blue-500 hover:bg-blue-600">
                  Try Again
                </Button>
              </div>
            )}
          </CardContent>
        </Card> */}

      </main>

      <footer className="mt-8 text-blue-200 text-sm flex flex-col items-center gap-2">
        <p className='text-center'>Stay tuned for our full launch, featuring comprehensive tech tips, resources, and more challenging quizzes!</p>
        © {new Date().getFullYear()} goboolean.in. All rights reserved.
      </footer>
      
    </div>
  )
}

export default ComingSoon