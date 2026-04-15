import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Switch } from '../components/ui/switch';
import { Label } from '../components/ui/label';
import { Progress } from '../components/ui/progress';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ChevronLeft,
  ChevronRight,
  Filter,
  Clock,
  BookOpen,
  RotateCcw
} from 'lucide-react';
import { questions, specialties, type Question } from '../data/questions';

export function TestInterface() {
  const location = useLocation();
  const preselectedSpecialty = location.state?.selectedSpecialty;

  // Filters
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(preselectedSpecialty || 'All');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  
  // Test mode
  const [isTimedMode, setIsTimedMode] = useState(false);
  const [timePerQuestion, setTimePerQuestion] = useState(90); // seconds
  const [timeRemaining, setTimeRemaining] = useState(timePerQuestion);
  
  // Question state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Map<number, { selected: string; correct: boolean }>>(new Map());
  const [testStarted, setTestStarted] = useState(false);
  
  // Get filtered questions
  const filteredQuestions = questions.filter(q => {
    if (selectedSpecialty !== 'All' && q.specialty !== selectedSpecialty) return false;
    if (selectedSubtopic !== 'All' && q.subtopic !== selectedSubtopic) return false;
    if (selectedDifficulty !== 'All' && q.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const availableSubtopics = selectedSpecialty === 'All' 
    ? Array.from(new Set(questions.map(q => q.subtopic)))
    : Array.from(new Set(questions.filter(q => q.specialty === selectedSpecialty).map(q => q.subtopic)));

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const hasAnswered = answeredQuestions.has(currentQuestion?.id);
  const answerRecord = answeredQuestions.get(currentQuestion?.id);

  // Timer effect
  useEffect(() => {
    if (!isTimedMode || !testStarted || showExplanation) return;
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleSubmitAnswer();
          return timePerQuestion;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimedMode, testStarted, showExplanation, currentQuestionIndex]);

  const handleStartTest = () => {
    setTestStarted(true);
    setTimeRemaining(timePerQuestion);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer && currentQuestion) {
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
      setAnsweredQuestions(new Map(answeredQuestions).set(currentQuestion.id, {
        selected: selectedAnswer,
        correct: isCorrect
      }));
      setShowExplanation(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeRemaining(timePerQuestion);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeRemaining(timePerQuestion);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnsweredQuestions(new Map());
    setTestStarted(false);
    setTimeRemaining(timePerQuestion);
  };

  const getOptionClassName = (option: string) => {
    const baseClass = "w-full p-4 text-left border-2 rounded-lg transition-all cursor-pointer hover:border-blue-500";
    
    if (!showExplanation && !hasAnswered) {
      return selectedAnswer === option 
        ? `${baseClass} border-blue-500 bg-blue-50` 
        : `${baseClass} border-slate-200 bg-white hover:bg-slate-50`;
    }

    if (hasAnswered || showExplanation) {
      const userAnswer = selectedAnswer || answerRecord?.selected;
      if (option === currentQuestion.correctAnswer) {
        return `${baseClass} border-green-500 bg-green-50`;
      }
      if (option === userAnswer && option !== currentQuestion.correctAnswer) {
        return `${baseClass} border-red-500 bg-red-50`;
      }
      return `${baseClass} border-slate-200 bg-slate-100 cursor-not-allowed`;
    }
    
    return baseClass;
  };

  const calculateStats = () => {
    const total = answeredQuestions.size;
    const correct = Array.from(answeredQuestions.values()).filter(a => a.correct).length;
    return { total, correct, percentage: total > 0 ? Math.round((correct / total) * 100) : 0 };
  };

  const stats = calculateStats();

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl">Configure Your Practice Session</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Filters */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-slate-600" />
                  <h3 className="text-lg font-semibold">Filter Questions</h3>
                </div>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="specialty">Specialty</Label>
                    <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                      <SelectTrigger id="specialty">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Specialties</SelectItem>
                        {specialties.map(s => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subtopic">Subtopic</Label>
                    <Select value={selectedSubtopic} onValueChange={setSelectedSubtopic}>
                      <SelectTrigger id="subtopic">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Subtopics</SelectItem>
                        {availableSubtopics.map(s => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                      <SelectTrigger id="difficulty">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Difficulties</SelectItem>
                        <SelectItem value="Easy">Easy</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>{filteredQuestions.length}</strong> questions match your filters
                  </p>
                </div>
              </div>

              {/* Test Mode */}
              <div className="space-y-4 border-t pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-slate-600" />
                  <h3 className="text-lg font-semibold">Test Mode</h3>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <Label htmlFor="timed-mode" className="text-base font-medium cursor-pointer">
                      Timed Mode
                    </Label>
                    <p className="text-sm text-slate-600 mt-1">
                      {isTimedMode ? `${timePerQuestion} seconds per question` : 'Practice at your own pace'}
                    </p>
                  </div>
                  <Switch 
                    id="timed-mode"
                    checked={isTimedMode} 
                    onCheckedChange={setIsTimedMode}
                  />
                </div>

                {isTimedMode && (
                  <div>
                    <Label htmlFor="time-per-question">Time per question (seconds)</Label>
                    <Select value={timePerQuestion.toString()} onValueChange={(v) => setTimePerQuestion(Number(v))}>
                      <SelectTrigger id="time-per-question">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="60">60 seconds</SelectItem>
                        <SelectItem value="90">90 seconds</SelectItem>
                        <SelectItem value="120">120 seconds</SelectItem>
                        <SelectItem value="180">180 seconds</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              <Button 
                size="lg" 
                className="w-full text-lg" 
                onClick={handleStartTest}
                disabled={filteredQuestions.length === 0}
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Start Practice Session
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-lg">No questions available with current filters.</p>
            <Button onClick={handleReset} className="mt-4">
              Reset Filters
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-slate-600 hover:text-slate-900">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <div className="font-medium">
                  Question {currentQuestionIndex + 1} of {filteredQuestions.length}
                </div>
                <div className="text-sm text-slate-600">
                  {stats.total > 0 && `${stats.correct}/${stats.total} correct (${stats.percentage}%)`}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {isTimedMode && !showExplanation && (
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg">
                  <Clock className="w-4 h-4 text-slate-600" />
                  <span className="font-mono font-medium">
                    {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
                  </span>
                </div>
              )}
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
          
          <Progress 
            value={(currentQuestionIndex + 1) / filteredQuestions.length * 100} 
            className="mt-4"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">{currentQuestion.specialty}</Badge>
              <Badge variant="outline">{currentQuestion.subtopic}</Badge>
              <Badge 
                variant={
                  currentQuestion.difficulty === 'Easy' ? 'default' : 
                  currentQuestion.difficulty === 'Medium' ? 'secondary' : 
                  'destructive'
                }
              >
                {currentQuestion.difficulty}
              </Badge>
            </div>
            <CardTitle className="text-xl sm:text-2xl leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Options */}
            <div className="space-y-3">
              {(Object.keys(currentQuestion.options) as Array<keyof typeof currentQuestion.options>).map((key) => (
                <button
                  key={key}
                  onClick={() => !showExplanation && !hasAnswered && setSelectedAnswer(key)}
                  disabled={showExplanation || hasAnswered}
                  className={getOptionClassName(key)}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-lg min-w-[24px]">{key}.</span>
                    <span className="flex-1">{currentQuestion.options[key]}</span>
                    {(showExplanation || hasAnswered) && key === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    )}
                    {(showExplanation || hasAnswered) && 
                     key === (selectedAnswer || answerRecord?.selected) && 
                     key !== currentQuestion.correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Submit Button */}
            {!showExplanation && !hasAnswered && (
              <Button 
                size="lg" 
                className="w-full" 
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
              >
                Submit Answer
              </Button>
            )}

            {/* Explanation */}
            {(showExplanation || hasAnswered) && (
              <div className="border-t pt-6 space-y-4">
                <div className={`p-4 rounded-lg ${
                  (selectedAnswer || answerRecord?.selected) === currentQuestion.correctAnswer 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    {(selectedAnswer || answerRecord?.selected) === currentQuestion.correctAnswer ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-900">Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-red-600" />
                        <span className="font-semibold text-red-900">Incorrect</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm">
                    The correct answer is <strong>{currentQuestion.correctAnswer}</strong>
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Explanation</h4>
                  <p className="text-blue-900 leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-3 pt-4">
              <Button 
                variant="outline" 
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex-1"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button 
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === filteredQuestions.length - 1}
                className="flex-1"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
