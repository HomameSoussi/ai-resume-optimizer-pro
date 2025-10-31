# AI Resume Optimizer Pro

> **Professional AI-powered resume optimization tool with advanced scoring and ATS compatibility analysis**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HomameSoussi/ai-resume-optimizer-pro)

## 🚀 **Live Demo**

Experience the power of AI-driven resume optimization: [**Try it now**](https://ai-resume-optimizer-pro.vercel.app)

## ✨ **Features**

### 🎯 **Advanced AI Analysis**
- **5-Metric Scoring System**: Overall Score, Skills Match, Experience Relevance, ATS Compatibility, Keyword Density
- **Detailed Feedback**: Comprehensive analysis with strengths, weaknesses, and actionable recommendations
- **Smart Optimization**: AI-generated summaries and skills optimization tailored to job requirements
- **ATS Recommendations**: Specific formatting and compatibility advice for Applicant Tracking Systems

### 💼 **Professional User Experience**
- **Modern Interface**: Clean, intuitive design with tabbed navigation
- **File Upload**: Drag-and-drop PDF resume upload with validation
- **Real-time Analysis**: Fast AI processing with progress indicators
- **Mobile Responsive**: Optimized for all devices and screen sizes

### 🔧 **Technical Excellence**
- **React + Tailwind**: Modern frontend with professional UI components
- **Free AI Integration**: Multiple free AI APIs with intelligent fallback system
- **Flask Backend**: Robust API with comprehensive error handling
- **PDF Processing**: Reliable text extraction from resume files

## 🆓 **Completely Free to Use**

✅ **No API Keys Required** - Works out of the box  
✅ **Multiple AI Backends** - Hugging Face, Groq, Together AI, and local analysis  
✅ **Intelligent Fallback** - Always provides results even if external APIs fail  
✅ **Zero Cost** - No subscription or usage fees  

## 🏆 **Competitive Advantages**

✅ **Live & Functional** - Working application vs competitor waitlists  
✅ **Professional Design** - Enterprise-grade UI/UX that builds trust  
✅ **Free AI Analysis** - No API costs vs expensive OpenAI requirements  
✅ **Complete Experience** - End-to-end optimization workflow  
✅ **Always Available** - Local fallback ensures 100% uptime  

## 🛠️ **Technology Stack**

### Frontend
- **React 19** - Modern component-based architecture
- **Tailwind CSS** - Utility-first styling framework
- **shadcn/ui** - Professional component library
- **Lucide React** - Consistent iconography
- **Vite** - Fast build tool and development server

### Backend
- **Flask** - Python web framework
- **Multiple AI APIs** - Hugging Face, Groq, Together AI
- **Local Analysis** - Intelligent keyword and content analysis
- **PyPDF2** - PDF text extraction
- **Flask-CORS** - Cross-origin request handling

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+ 
- Python 3.9+
- **No API keys required!**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/HomameSoussi/ai-resume-optimizer-pro.git
cd ai-resume-optimizer-pro
```

2. **Install frontend dependencies**
```bash
npm install
# or
pnpm install
```

3. **Set up backend**
```bash
cd api
pip install -r requirements.txt
```

4. **Optional: Add free API keys for enhanced AI analysis**
```bash
# Create .env file in root directory (optional)
GROQ_API_KEY=your_free_groq_key_here  # Get free at https://console.groq.com/
TOGETHER_API_KEY=your_free_together_key_here  # Get free at https://api.together.xyz/
```

### Development

1. **Start the frontend**
```bash
npm run dev
```

2. **Start the backend** (in separate terminal)
```bash
cd api
python main.py
```

3. **Open your browser**
Navigate to `http://localhost:5173`

## 📦 **Deployment**

### Vercel (Recommended)

1. **Deploy to Vercel**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HomameSoussi/ai-resume-optimizer-pro)

2. **Optional: Set environment variables for enhanced AI**
- `GROQ_API_KEY`: Your free Groq API key (optional)
- `TOGETHER_API_KEY`: Your free Together AI key (optional)

3. **Deploy automatically**
Vercel will build and deploy your application automatically.

**Note**: The application works perfectly without any API keys using the built-in local analysis engine!

## 🤖 **AI Analysis System**

### Multi-Tier AI Architecture
1. **Hugging Face Inference API** - Free tier for text analysis
2. **Groq API** - Free tier with Llama models (optional)
3. **Together AI** - Free tier with open-source models (optional)
4. **Local Analysis Engine** - Always available fallback with intelligent algorithms

### Local Analysis Features
- **Keyword Extraction**: Identifies relevant terms from job descriptions
- **Skills Matching**: Compares resume skills with job requirements
- **Experience Analysis**: Evaluates work experience relevance
- **ATS Compatibility**: Checks resume structure and formatting
- **Content Optimization**: Generates improved summaries and suggestions

## 📊 **API Endpoints**

### `POST /api/resume/analyze-with-upload`
Analyze resume against job requirements

**Request:**
- `resume`: PDF file
- `job_title`: Job title string
- `job_description`: Job description text

**Response:**
```json
{
  "success": true,
  "analysis": {
    "overall_score": 87,
    "skills_match": 92,
    "experience_relevance": 85,
    "ats_compatibility": 89,
    "keyword_density": 78,
    "suggestions": ["..."],
    "optimized_sections": {
      "summary": "...",
      "skills": ["..."]
    }
  }
}
```

## 🎨 **Screenshots**

### Landing Page
![Landing Page](https://via.placeholder.com/800x400?text=Professional+Landing+Page)

### Analysis Interface
![Analysis Interface](https://via.placeholder.com/800x400?text=AI+Analysis+Interface)

### Results Dashboard
![Results Dashboard](https://via.placeholder.com/800x400?text=Detailed+Results+Dashboard)

## 🤝 **Contributing**

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Hugging Face** for providing free AI inference APIs
- **Groq** for fast and free Llama model access
- **Together AI** for open-source model hosting
- **Vercel** for seamless deployment platform
- **React & Tailwind** communities for excellent tools
- **shadcn/ui** for beautiful component library

## 📞 **Support**

- 📧 **Email**: support@ai-resume-optimizer-pro.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/HomameSoussi/ai-resume-optimizer-pro/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/HomameSoussi/ai-resume-optimizer-pro/discussions)

---

**Made with ❤️ by the AI Resume Optimizer Pro Team**

*Transform your resume with the power of free AI and land your dream job!*

