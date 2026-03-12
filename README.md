# VoiceFlow: AI-Powered Speech Recognition Chat

VoiceFlow is a modern, responsive web application that leverages the Web Speech API to facilitate seamless, real-time voice-to-text communication. Designed with a focus on accessibility and intuitive user experience, it allows users to interact with a chat interface entirely through vocal commands.

## 🚀 Live Demo

Experience the application here: speech-chat-app.netlify.app

![Screenshot (10)](https://user-images.githubusercontent.com/65927932/179872093-2c07b0cf-94c7-4d2a-bd77-37b25e4e6151.png)


## ✨ Key Features

Real-time Transcription: High-accuracy speech-to-text processing using the native browser Speech Recognition engine.

Interactive UI: A fluid, mobile-responsive chat interface built with modern CSS principles.

Visual Feedback: Dynamic status indicators to show when the application is actively listening.

Zero Latency: Client-side processing ensures fast response times without unnecessary server overhead.

## 🛠 Tech Stack

Frontend: HTML5, CSS3 (Flexbox/Grid)

Engine: Vanilla JavaScript (ES6+)

API: Web Speech API (SpeechRecognition interface)

Deployment: Netlify

## ⚙️ Core Logic

The application utilizes a SpeechRecognition instance to capture audio streams, which are then parsed into text strings. These strings are dynamically injected into the DOM as chat bubbles, maintaining a continuous conversation state in the local session.

## 📥 Installation & Setup

To run this project locally:

Clone the repository:

```bash
git clone [https://github.com/your-username/speech-recognition-chat-app.git](https://github.com/your-username/speech-recognition-chat-app.git)
```

Navigate to the directory:

```
cd speech-recognition-chat-app
```

Launch the application:
Open `index.html` in any modern browser (Chrome or Edge recommended for best Speech API support).

### 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

Developed as a study in Web APIs and Interactive Design.
