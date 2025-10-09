const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Mock AI responses database
const aiResponses = {
    'cybersecurity': 'La cybersecurity è fondamentale nel 2025. Le minacce si evolvono costantemente: ransomware, phishing, attacchi zero-day. Consiglio di implementare autenticazione multi-fattore, backup regolari, formazione del personale e monitoraggio continuo.',
    'cloud': 'Il cloud computing offre scalabilità, flessibilità e riduzione costi. AWS, Azure e Google Cloud sono le piattaforme leader. La migrazione richiede pianificazione attenta: valuta workload, sicurezza, compliance e governance.',
    'ai': 'L\'intelligenza artificiale sta rivoluzionando ogni settore. Machine Learning, NLP, Computer Vision sono applicazioni chiave. È importante usare AI in modo etico, con trasparenza e attenzione alla privacy.',
    'sviluppo': 'Lo sviluppo software moderno richiede metodologie agile, CI/CD, testing automatizzato. Framework popolari: React, Vue, Angular per frontend; Node.js, Python, Java per backend.',
    'web': 'Lo sviluppo web nel 2025 si concentra su performance, accessibilità, SEO e UX. Tecnologie chiave: HTML5, CSS3, JavaScript moderno, framework reattivi, PWA.',
    'automazione': 'L\'automazione migliora efficienza e riduce errori. Strumenti: RPA, workflow automation, infrastructure as code (Terraform, Ansible). Automazione è chiave per scalabilità.',
    'devops': 'DevOps unisce sviluppo e operations per delivery più veloce. Pratiche chiave: CI/CD, Infrastructure as Code, monitoring, containerization (Docker, Kubernetes).',
    'app': 'Lo sviluppo di applicazioni mobili richiede approcci nativi (Swift, Kotlin) o cross-platform (React Native, Flutter). Focus su UX, performance e sicurezza.',
};

// Helper function to find best match
function findBestResponse(question) {
    const lowerQuestion = question.toLowerCase();
    
    // Check for keyword matches
    for (const [key, response] of Object.entries(aiResponses)) {
        if (lowerQuestion.includes(key)) {
            return response;
        }
    }
    
    // Default responses based on common patterns
    if (lowerQuestion.includes('ciao') || lowerQuestion.includes('hello') || lowerQuestion.includes('salve')) {
        return 'Ciao! Sono l\'assistente AI di Michele Siddi. Come posso aiutarti oggi con domande su IT, cybersecurity, cloud, sviluppo software o AI?';
    }
    
    if (lowerQuestion.includes('chi sei') || lowerQuestion.includes('who are you')) {
        return 'Sono l\'assistente AI di Michele Siddi, esperto IT e Software Engineer. Posso rispondere a domande su sviluppo software, cybersecurity, cloud computing, AI e molto altro. Come posso aiutarti?';
    }
    
    if (lowerQuestion.includes('grazie') || lowerQuestion.includes('thank')) {
        return 'Prego! Se hai altre domande su temi IT, sono qui per aiutarti. 😊';
    }
    
    // Default response
    return `Interessante domanda! Come esperto IT, posso dirti che ${question} è un argomento importante. Ti consiglio di approfondire aspetti come sicurezza, scalabilità e best practices. Per consulenze specifiche, contatta Michele direttamente!`;
}

// API Endpoint for chat
app.post('/api/chat', (req, res) => {
    const { question } = req.body;
    
    if (!question) {
        return res.status(400).json({ 
            error: 'La domanda è richiesta',
            answer: 'Per favore, inserisci una domanda.' 
        });
    }
    
    // Simulate processing delay
    setTimeout(() => {
        const answer = findBestResponse(question);
        res.json({ 
            answer,
            timestamp: new Date().toISOString()
        });
    }, 500);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server running' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server in esecuzione su http://localhost:${PORT}`);
    console.log(`📡 API chatbot disponibile su http://localhost:${PORT}/api/chat`);
});
