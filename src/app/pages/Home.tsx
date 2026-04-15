import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Brain, 
  Heart, 
  Stethoscope, 
  Activity, 
  Zap, 
  Target, 
  TrendingUp, 
  Award,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export function Home() {
  const specialties = [
    { 
      name: 'Cardiology', 
      icon: Heart, 
      description: 'Master cardiac conditions and interventions',
      count: 62,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Surgery', 
      icon: Activity, 
      description: 'Surgical techniques and procedures',
      count: 60,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Internal Medicine', 
      icon: Stethoscope, 
      description: 'Comprehensive internal medicine topics',
      count: 66,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Neurology', 
      icon: Brain, 
      description: 'Neurological disorders and management',
      count: 68,
      color: 'from-purple-500 to-violet-500'
    },
    { 
      name: 'Pediatrics', 
      icon: Heart, 
      description: 'Child health and development',
      count: 70,
      color: 'from-orange-500 to-amber-500'
    },
    { 
      name: 'Emergency Medicine', 
      icon: Zap, 
      description: 'Critical care and emergency interventions',
      count: 92,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'Targeted Practice',
      description: 'Filter by specialty, subtopic, and difficulty to focus on your weak areas'
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your performance and improvement over time with detailed analytics'
    },
    {
      icon: Award,
      title: 'Evidence-Based',
      description: 'Questions crafted based on latest clinical guidelines and best practices'
    },
    {
      icon: Zap,
      title: 'Timed & Untimed Modes',
      description: 'Practice at your own pace or simulate real exam conditions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold">MCQ Doctor</span>
          </div>
          <Link to="/test">
            <Button>Start Practicing</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Master Medical Knowledge
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                One Question at a Time
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8">
              Practice with expertly crafted clinical scenarios across all major specialties. 
              Build confidence for your exams with comprehensive explanations and flexible study modes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/test">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                  Start Free Practice
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/test">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
                  Browse Questions
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600">100+</div>
                <div className="text-sm sm:text-base text-slate-600 mt-1">Questions</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-purple-600">10+</div>
                <div className="text-sm sm:text-base text-slate-600 mt-1">Specialties</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-green-600">24/7</div>
                <div className="text-sm sm:text-base text-slate-600 mt-1">Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-lg text-slate-600">Powerful features designed for effective learning</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Practice by Specialty</h2>
            <p className="text-lg text-slate-600">Focus on the areas that matter most to you</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <Link key={index} to="/test" state={{ selectedSpecialty: specialty.name }}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${specialty.color} rounded-xl flex items-center justify-center mb-4`}>
                      <specialty.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{specialty.name}</h3>
                    <p className="text-slate-600 text-sm mb-4">{specialty.description}</p>
                    <div className="flex items-center text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 mr-1 text-green-500" />
                      {specialty.count}+ questions available
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Join thousands of medical students and professionals improving their knowledge every day
          </p>
          <Link to="/test">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Begin Your Practice Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto text-center text-slate-600">
          <p>&copy; 2026 MCQ Doctor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
