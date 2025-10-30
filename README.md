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
- **OpenAI Integration**: GPT-4.1-mini for advanced resume analysis
- **Flask Backend**: Robust API with comprehensive error handling
- **PDF Processing**: Reliable text extraction from resume files

## 🏆 **Competitive Advantages**

✅ **Live & Functional** - Working application vs competitor waitlists  
✅ **Professional Design** - Enterprise-grade UI/UX that builds trust  
✅ **Real AI Integration** - Actual OpenAI analysis vs marketing promises  
✅ **Complete Experience** - End-to-end optimization workflow  
✅ **Advanced Features** - Comprehensive scoring and detailed feedback  

## 🛠️ **Technology Stack**

### Frontend
- **React 19** - Modern component-based architecture
- **Tailwind CSS** - Utility-first styling framework
- **shadcn/ui** - Professional component library
- **Lucide React** - Consistent iconography
- **Vite** - Fast build tool and development server

### Backend
- **Flask** - Python web framework
- **OpenAI API** - GPT-4.1-mini for AI analysis
- **PyPDF2** - PDF text extraction
- **Flask-CORS** - Cross-origin request handling

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+ 
- Python 3.9+
- OpenAI API key

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

4. **Configure environment variables**
```bash
# Create .env file in root directory
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_API_BASE=https://api.openai.com/v1
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

2. **Set environment variables in Vercel dashboard**
- `OPENAI_API_KEY`: Your OpenAI API key
- `OPENAI_API_BASE`: `https://api.openai.com/v1`

3. **Deploy automatically**
Vercel will build and deploy your application automatically.

### Manual Deployment

1. **Build the frontend**
```bash
npm run build
```

2. **Deploy to your preferred platform**
- Frontend: Deploy `dist/` folder to any static hosting
- Backend: Deploy `api/` folder to Python hosting service

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

- **OpenAI** for providing advanced AI capabilities
- **Vercel** for seamless deployment platform
- **React & Tailwind** communities for excellent tools
- **shadcn/ui** for beautiful component library

## 📞 **Support**

- 📧 **Email**: support@ai-resume-optimizer-pro.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/HomameSoussi/ai-resume-optimizer-pro/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/HomameSoussi/ai-resume-optimizer-pro/discussions)

---

**Made with ❤️ by the AI Resume Optimizer Pro Team**

*Transform your resume with the power of AI and land your dream job!*

