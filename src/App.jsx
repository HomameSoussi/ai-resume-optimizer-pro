import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Upload, FileText, Zap, Target, CheckCircle, AlertCircle, Download, Star, Users, TrendingUp } from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('upload')
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [uploadedFile, setUploadedFile] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file)
      setActiveTab('analyze')
    } else {
      alert('Please upload a PDF file')
    }
  }

  const handleAnalyze = async () => {
    if (!uploadedFile || !jobTitle || !jobDescription) {
      alert('Please upload a resume and fill in job details')
      return
    }

    setIsAnalyzing(true)
    
    try {
      const formData = new FormData()
      formData.append('resume', uploadedFile)
      formData.append('job_title', jobTitle)
      formData.append('job_description', jobDescription)

      const response = await fetch('/api/resume/analyze-with-upload', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setAnalysisResult({
          overallScore: data.analysis.overall_score,
          skillsMatch: data.analysis.skills_match,
          experienceRelevance: data.analysis.experience_relevance,
          atsCompatibility: data.analysis.ats_compatibility,
          keywordDensity: data.analysis.keyword_density,
          suggestions: data.analysis.suggestions,
          optimizedSections: {
            summary: data.analysis.optimized_sections.summary,
            skills: data.analysis.optimized_sections.skills
          },
          detailedAnalysis: data.analysis.detailed_analysis,
          atsRecommendations: data.analysis.ats_recommendations
        })
        setActiveTab('results')
      } else {
        alert('Analysis failed: ' + data.error)
      }
    } catch (error) {
      console.error('Error analyzing resume:', error)
      alert('Failed to analyze resume. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const ScoreCard = ({ title, score, icon: Icon, description }) => (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon className="h-5 w-5 text-primary" />
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
          </div>
          <Badge variant={score >= 85 ? "default" : score >= 70 ? "secondary" : "destructive"}>
            {score}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Progress value={score} className="mb-2" />
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Resume Optimizer Pro
                </h1>
                <p className="text-sm text-muted-foreground">Smart Resume Customization</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="hidden sm:flex">
                <Users className="h-3 w-3 mr-1" />
                10,000+ Users
              </Badge>
              <Badge variant="secondary" className="hidden sm:flex">
                <Star className="h-3 w-3 mr-1" />
                4.9/5 Rating
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transform Your Resume with AI
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload your resume, analyze job requirements, and get instant ATS-friendly optimizations with detailed scoring and professional insights.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
              <div className="text-sm text-muted-foreground">Average Score Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
              <div className="text-sm text-muted-foreground">More Interview Callbacks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">30s</div>
              <div className="text-sm text-muted-foreground">Analysis Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Application */}
      <section className="px-4 pb-12">
        <div className="container mx-auto max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="upload" className="flex items-center space-x-2">
                <Upload className="h-4 w-4" />
                <span>Upload Resume</span>
              </TabsTrigger>
              <TabsTrigger value="analyze" className="flex items-center space-x-2">
                <Target className="h-4 w-4" />
                <span>Job Analysis</span>
              </TabsTrigger>
              <TabsTrigger value="results" className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>Results</span>
              </TabsTrigger>
            </TabsList>

            {/* Upload Tab */}
            <TabsContent value="upload" className="space-y-6">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Upload Your Resume</span>
                  </CardTitle>
                  <CardDescription>
                    Upload your current resume in PDF format to get started with AI-powered optimization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div 
                    className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">
                      {uploadedFile ? uploadedFile.name : 'Click to upload your resume'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      PDF files only, max 10MB
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                  {uploadedFile && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-green-800 font-medium">Resume uploaded successfully!</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analyze Tab */}
            <TabsContent value="analyze" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Details</CardTitle>
                    <CardDescription>
                      Enter the job title and description you're applying for
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        placeholder="e.g., Senior Product Manager - Fintech"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="jobDescription">Job Description</Label>
                      <Textarea
                        id="jobDescription"
                        placeholder="Paste the complete job description here..."
                        rows={8}
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                    </div>
                    <Button 
                      onClick={handleAnalyze} 
                      disabled={!uploadedFile || !jobTitle || !jobDescription || isAnalyzing}
                      className="w-full"
                      size="lg"
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Analyzing Resume...
                        </>
                      ) : (
                        <>
                          <Zap className="h-4 w-4 mr-2" />
                          Analyze & Optimize
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What We Analyze</CardTitle>
                    <CardDescription>
                      Our AI examines multiple aspects of your resume
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Skills Alignment</h4>
                          <p className="text-sm text-muted-foreground">Match your skills with job requirements</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">ATS Compatibility</h4>
                          <p className="text-sm text-muted-foreground">Ensure your resume passes ATS systems</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Experience Relevance</h4>
                          <p className="text-sm text-muted-foreground">Highlight most relevant experience</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="h-5 w-5 text-indigo-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Keyword Optimization</h4>
                          <p className="text-sm text-muted-foreground">Strategic keyword placement and density</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Results Tab */}
            <TabsContent value="results" className="space-y-6">
              {analysisResult ? (
                <>
                  {/* Overall Score */}
                  <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-center">Overall Resume Score</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        {analysisResult.overallScore}%
                      </div>
                      <Badge variant="default" className="text-lg px-4 py-2">
                        Excellent Match
                      </Badge>
                    </CardContent>
                  </Card>

                  {/* Detailed Scores */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <ScoreCard
                      title="Skills Match"
                      score={analysisResult.skillsMatch}
                      icon={Target}
                      description="How well your skills align with job requirements"
                    />
                    <ScoreCard
                      title="Experience Relevance"
                      score={analysisResult.experienceRelevance}
                      icon={TrendingUp}
                      description="Relevance of your experience to the role"
                    />
                    <ScoreCard
                      title="ATS Compatibility"
                      score={analysisResult.atsCompatibility}
                      icon={CheckCircle}
                      description="How well your resume passes ATS systems"
                    />
                    <ScoreCard
                      title="Keyword Density"
                      score={analysisResult.keywordDensity}
                      icon={FileText}
                      description="Strategic use of relevant keywords"
                    />
                  </div>

                  {/* Suggestions and Optimized Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <AlertCircle className="h-5 w-5" />
                          <span>Improvement Suggestions</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {analysisResult.suggestions.map((suggestion, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Optimized Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-relaxed mb-4">
                          {analysisResult.optimizedSections.summary}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Optimized Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {analysisResult.optimizedSections.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Download Button */}
                  <div className="text-center">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download Optimized Resume
                    </Button>
                  </div>
                </>
              ) : (
                <Card className="max-w-2xl mx-auto">
                  <CardContent className="text-center py-12">
                    <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">No Analysis Yet</h3>
                    <p className="text-muted-foreground">
                      Upload your resume and analyze it against a job description to see results here.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 AI Resume Optimizer Pro. Powered by advanced AI technology.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

