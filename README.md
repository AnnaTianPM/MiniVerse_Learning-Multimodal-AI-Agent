Miniverse  
MiniVerse: First Real-Time Vision & Audio Adaptive Learning Agent.
Bridges the Audio-Visual gap.
The first tutor to sync creating, seeing and speaking for hands-on learning.
## Inspiration｜Why I Built   
It begin with Love for my kids.  
I’m a mother of three.  My oldest son is six—curious, energetic, and bright—but he struggles to stay focused.   
Traditional learning methods bore him quickly. Books lose his attention, explanations don’t land, and too often, learning ends in frustration—for him, and for me.  
He asks endless “why” questions.  And when he looks at me with that spark of curiosity, I sometimes realize—I don’t know how to explain it in a way he can truly understand. Even with an iPad, even with AI-generated lessons, I still couldn’t meet him where he was. What hurt most wasn’t the lack of tools—it was the feeling that there was no learning partner who truly understood my child and could help me guide him.  
Later, I used Gemini to generate interactive webpages, and he was excited—for a moment. But when the deeper “why” came, I still couldn’t catch it. His curiosity was waiting. I didn’t have the answer.
We also tried real-time voice-based AI explanations, such as Live voice in Gemeni APP. But without something visual and interactive to explore, the concepts still felt abstract to him.  
At the same time, I was volunteering to remotely tutor children in other countries—helping kids with English and math. I saw the same pattern again and again:  
- textbooks felt dull, learning wasn’t personalized,  
- real-time teacher feedback was incredibly valuable,  
- but private tutoring was expensive and unsustainable.  

That’s when it clicked:  
**The problem isn’t that children don’t love learning.  
The problem is that learning hasn’t been designed for different children.**  
![User pain points](https://imgur.com/T6qdFxn.jpg)    
That’s why I built **Miniverse**.
Children don’t learn by listening or seeing alone. They learn by seeing, doing, and asking.
Miniverse is a learning universe designed for children, parents, and teachers together.  
- It generates personalized, interactive learning content in real time, understands a child’s actions and learning state, and adapts instantly.  
- It offers an AI teacher with patience and empathy—using Socratic questioning to spark curiosity, not just deliver answers.  
- Through visual understanding, voice guidance, and continuous companionship, it supports how children actually learn.

Miniverse doesn’t replace parents—it partners with them.  
- It reduces the pressure of explaining.  
- It helps teachers create interactive lessons and simulate coaching.  
- And for children, it becomes a learning companion who truly understands them.

My hope is that every child can have a learning partner that feels human—  one that guides, discusses, waits, and grows with them.  
Build for different children, build for education equality regardless of children personality, family location, income, language etc.  

That is where Miniverse begins.
## What it does
**Miniverse** is the first learning agent that syncs seeing and speaking for real understanding.  
- It was designed to help children learn through seeing, interacting, and guided conversation—not passive listening or seeing.  
- By synchronizing what learners see and hear,  Miniverse bridges the audio-visual gap and turns abstract explanations into hands-on understanding.    
![Miniverse Unique value](https://imgur.com/GaKa600.jpg)  
Four core user value it provides: 
- Course agent: Custom Courseware in seconds
- AI live teacher: Live vision and voice interaction 
- Personal agent: adaptive AI agent with memory
- Learning community: discovery high quality and easy to start
![Miniverse key value](https://imgur.com/ci7Kcat.jpg)  

Miniverse offers four core capabilities:

### **1. Interactive Courseware Agent**
Generates personalized, professional-grade interactive animated learning materials from a single prompt.  
Powered by the Gemini 3/ Generative UI.   
User Flow:  
- Intent understanding with memory → Personalize for child, parent, or teacher. 
- Lesson planning → Define objectives and structure
- Interaction strategy → Animations, game templates, 3D simulations, etc.
- Content generation → Retrieval reference, search, image creation, Generative UI
- Human-in-the-loop → Refine content
- Preview & download → Community publishing (select subject and topic)
![Miniverse course Agent](https://imgur.com/TBtxZm9.jpg)  

### **2. Real-Time Vision & Audio Adaptive Learning Agent  (Unique value)**
Understands the needs of children, parents, and teachers, and provides real-time teaching, correction, and guided exploration based on the interactive courseware.
Powered by the Gemini Multimodal Live API.
Key Capabilities:  
- Live Vision Understanding: Analyzes interactive courseware and learner actions in real time, explaining and guiding based on what the child is currently seeing.  
- Personalized Tone & Emotional Awareness (Affective Dialogue): Detects emotional cues such as anxiety, excitement, or hesitation, and responds with warmth and patience—not a cold synthetic voice.  
- Barge-in Interaction: Learners can interrupt the AI tutor at any time, just like with a human teacher. The AI immediately adapts its response and pace.  
- Learning Issue Detection: Combines visual from interaction on courseware and audio signals to identify whether the learner made an incorrect action, misunderstood a concept, or is forming a new question.  
- Vision and Voice-Guided, Hands-On Learning:  Provides real-time voice guidance alongside in-course hints, encouraging children to learn by doing and build true understanding through interaction.  
![Miniverse teacher Agent](https://imgur.com/BEFOhZr.jpg)  

### 3. Learning Community
Organizes content by subject and topic, enabling discovery, creation, and sharing of generated learning experiences.
You can find various interactive courseware that best match your learning way. 
e.g. html interactive cards for English or other language or math learning, 3D courseware for solar system, virtual hands-on lab for Physics or chemistry experiment, immersive spatial class to experience the art work of Monet.   
![Miniverse community](https://imgur.com/YfYN7Un.jpg)  
### 4. Remix · Clone & Customize
A prompt and asset library for content-generation agents, allowing one-click customization of agents and content based on high-quality community creations.
![Miniverse remix](https://imgur.com/b0G178m.jpg)  

## How we built it
We target to built Miniverse as a production-grade, multimodal AI learning agent system, designed for real-time, child-centered learning driven by curiosity and exploration at scale.  
The architecture follows a layered, agent-based design, combining multimodal perception, generative systems, real-time interaction, and strict data governance.  
![Architecture](https://imgur.com/3lRYy2w.jpg)  
### 1. AI & Agent Intelligence Layer  
Miniverse is composed of multiple specialized agents orchestrated through a shared state and memory system.

The Interactive Courseware Agent is powered by Gemini 3 and Generative UI.  
It converts a single high-level prompt into structured, interactive learning experiences through a multi-stage generation pipeline:
- Intent parsing and user profiling (child, parent, teacher) with persistent memory
- Learning objective decomposition and lesson graph construction
- Interaction strategy planning (animated explanations, task-based games, 3D simulations)
- Retrieval-augmented generation (RAG) combining reference content, search results, and visual assets
- Dynamic UI synthesis using generative layout components

The Real-Time Vision & Audio Adaptive Learning Agent
- Built on the Gemini Multimodal Live API and operates as a continuous perception–reasoning–response loop. 
- Real-time visual understanding of courseware state and learner interactions
- Streaming speech recognition combined with affective signal detection
- Multimodal fusion to infer learner intent, confusion, errors, or curiosity
- Adaptive response planning that adjusts explanation depth, pacing, and emotional tone
- True barge-in handling with immediate interruption and replanning of responses

### 2. Real-Time Multimodal Interaction Layer  
To support human-like tutoring experiences, Miniverse uses a low-latency, event-driven architecture:
- Audio, vision, and interaction signals are streamed via WebRTC and WebSocket channels
- Session-level context is maintained through ephemeral state stores
- Multimodal inference is performed incrementally to avoid blocking or turn-based latency
- Short-term memory is isolated per session to ensure safety and consistency

### 3. Application & Community Layer  
Agent capabilities are exposed through modular product surfaces:
- Interactive courseware creation with human-in-the-loop refinement
- Preview, export, and publishing workflows
- A subject- and topic-based learning community for discovery and sharing
- Remix · Clone & Customize, where agent prompts, interaction strategies, and assets are abstracted as reusable templates, enabling rapid personalization

### 4. Data Infrastructure, Security, and Compliance Layer  
Miniverse is targeted to design with child safety, privacy, and regulatory compliance as first-class system constraints.
Data architecture follows strict separation and minimization principles:
- Identity data, learning behavior data, and content data are logically and physically separated
- Real-time audio and visual streams are processed in memory and are not persisted by default
- Stored data is pseudonymized and scoped to explicit educational purposes
Identity and access control:
- Firebase Authentication with role-based access control (children, parents, teachers, admins)
- Fine-grained permissions for content creation, publishing, and export
Security and compliance by design:
- End-to-end encryption for data in transit and at rest
- Short-lived credentials for real-time sessions
- Built-in parental consent, data access, and deletion support
- No advertising profiling or cross-product tracking

This architecture enables Miniverse to deliver real-time, multimodal, and emotionally aware learning experiences, while meeting enterprise-grade standards for safety, privacy, and scalability.


## Next Release Plan

### 1. Real-time World Model powered by Google Genie 3

Integrate **Google Genie 3**, a real-time world model capable of generating **interactive 720P video at 24fps** with multi-minute scene consistency.
This enables AI teachers to guide learners inside persistent, explorable learning environments.

**Example:**
Students learning U.S. history enter a 1776 Philadelphia scene, where the AI teacher navigates the environment, explains key events, and shifts viewpoints in real time based on student questions.


### 2. Gemini 3 Flash · Agentic Vision — Guided Visual Reasoning

Leverage **Agentic Vision** in Gemini 3 Flash to enable a **Think–Act–Observe** loop, allowing the AI teacher to actively manipulate visual content instead of passively interpreting it.

**Example:**
In a geometry lesson, the AI teacher highlights key edges and angles directly on the problem image, guiding students on where to focus and why.


### 3. Gemini 3 Flash · Agentic Vision — Real-time Image Annotation for Hands-on Learning

Use **image annotation** to allow the AI teacher to draw and mark directly on visual inputs, providing pixel-level visual guidance during learning activities.

**Example:**
During a simple physics experiment, the AI teacher annotates force directions and motion paths on the live camera feed, correcting student actions in real time.


## Challenges we ran into

### 1. Real-Time Multimodal Understanding  
Children’s learning behavior is highly dynamic and unpredictable.  
The system must simultaneously interpret courseware state, learner interactions, speech, and emotional cues—and respond within real-time constraints.  
Fusing vision, audio, and interaction signals without introducing noticeable latency was a core technical challenge.

### 2. Just Listening Is Not Teaching  
Pure voice explanations are insufficient for helping children understand abstract concepts.  
The real difficulty lies in deciding what to explain, when to speak, when to pause, and when to guide through interaction—all while staying synchronized with live courseware.

### 3. Ambiguity in Emotion and Learning State Detection  
Emotion recognition in children is inherently ambiguous.  
Silence, interruptions, or repeated actions may indicate confusion, distraction, or deep thinking.  
The challenge was to avoid over-intervening while still providing timely and meaningful guidance.

### 4. Balancing Real-Time Interaction and System Stability  
Supporting true barge-in, continuous questioning, and dynamic teaching paths places significant demands on system architecture.  
Even small delays or state inconsistencies can break the learning flow and trust.

### 5. Child Data Privacy and Regulatory Compliance  
Real-time vision and audio understanding must coexist with strict data governance.  
Designing a system that is intelligent enough to adapt in real time—without persisting sensitive data—and compliant with COPPA and GDPR required careful architectural and policy decisions.

## Accomplishments that we're proud of
### 1. Impact on Real User and community
Miniverse started as a personal solution, not a product.  
As a parent, I struggled to support my child’s endless curiosity, emotional ups and downs, and learning challenges—especially when I lacked the knowledge, the language, or simply the energy to explain things well.
With Miniverse, my child began exploring school questions he didn’t understand, practicing Chinese writing, and even expressing emotions like frustration or confusion in a healthier way.  
He finds it fun and engaging, and I finally feel that learning together can be calm, joyful, and guilt-free.  
![real user story](https://imgur.com/hNb41WR.jpg)  
![real user story 1](https://imgur.com/NNBMmRI.jpg)  
![real user story 2](https://imgur.com/oPYYbW5.jpg)  
![real user story 2](https://imgur.com/8rTXsew.jpg)  
### 2. Organic Adoption Through Real Use  
Without marketing or promotion, friends began sharing and using the trial links.  
ESL volunteer teachers we met at the library, playdate families, and children from different countries started using Miniverse.
![real user story](https://imgur.com/ks4mMYL.jpg)  
One example that deeply moved us was a child from a highly exam-focused education system who struggled with math concepts that neither parents nor teachers could clearly explain.  
Through interactive games and real-time AI guidance, he finally understood by doing.  
Every time someone tells us, “My child can’t stop using this,” it reinforces that we are building something meaningful.

### 3. Expanding Possibilities with AI  
The multimodal capabilities of Gemini and the Google ecosystem gave us the tools to turn vision, voice, interaction, and reasoning into a single learning experience.  
They allowed us not just to implement ideas, but to imagine entirely new ways children can learn.
I start build it in Google AI Studio, quick demo it. Proud could do it in short time with AI Studio.

### 4. Building Safety and Compliance by Design  
From the beginning, we treated data privacy, child safety, and compliance as core product requirements—not afterthoughts.  
Our system architecture reflects a strong commitment to responsible AI and trustworthy learning environments.

### 5. Continuous Improvement Through Evaluation  
We implemented evaluation mechanisms to measure quality and learning effectiveness.  
While there is still much to improve, each iteration delivers more stable experiences, clearer guidance, and higher-quality interactions.  
We are proud of this continuous progress and the discipline behind it.

## What learned
### 1. Idea Generation: Focus on Irreplaceable, High-Frequency, Useful, Unique  
During the early stages of Miniverse, I explored many ideas.  
The key insight was learning how to evaluate if an idea is truly worth building: is it irreplaceable? high-frequency? genuinely useful? unique?  
Starting from my own and my family’s perspective—if my child and I would use it frequently and enjoy it, and if friends would feel excited—then the idea has real potential.  
There are countless AI ideas, but solving real problems versus “building AI for the sake of AI” is fundamentally different.

### 2. Idea Validation: Start with Small Modules and Iterate Fast  
In validation, I learned to test ideas with minimal viable modules.  
We didn’t start with a full agent—just core interaction prototypes—to see where users struggled or were confused.  
Feedback then guided the next steps, making iterations faster and more precise.

### 3. Systematic Evaluation: Record and Measure Every Step  
From prompt design to individual agent functions, every step was systematically recorded and evaluated.  
We implemented Evals to track user behavior, interaction, and learning outcomes, providing data-driven support for problem discovery, prioritization, and continuous iteration.

### 4. Storytelling & Demo: Making the Product Tangible  
Creating the Miniverse demo was my first attempt at telling a product story through video.  
Using AI tools to quickly generate scripts, animations, scenes, and voiceovers, I could see how children, parents, and friends actually experienced the product—curiosity, reassurance, delight.  
I learned that features alone aren’t enough—product value must be felt through story.  
The demo also served as a validation tool, showing whether the product was engaging, intuitive, and met user needs.  
AI is not just a backend capability; it can support expression and storytelling, allowing a first-time demo maker like me to produce work that feels professional and emotionally resonant.

### 5. Technical Learnings  
- Deepened understanding of multimodal AI (Gemini, Imagen 3, Text-to-Speech) and its use in real-time interactive learning  
- Learned to integrate generative UI, 3D simulations, animations, and interaction templates to create personalized learning content  
- Gained practical experience in implementing live vision, voice processing, barge-in interaction, and emotion detection  
- Data infrastructure design: real-time audio/video stream processing, in-memory computation, minimal storage, encryption, and access control  
- Security and compliance: applied child privacy regulations (COPPA, GDPR) in system architecture and workflows  
- Frontend/backend integration: built scalable end-to-end platform with Firebase, Flask, Bootstrap, JS/CSS/HTML  
- Cloud usage: learned resource optimization, scalability, and cost control for educational applications  

### 6. Product Design and User Value  
- Always user-centered: features, interactions, and content built from the perspective of children, parents, and teachers  
- Safety and compliance as foundations: child privacy, data minimization, parental governance  
- Continuous iteration: each round of Evals improved stability, clarity of guidance, and interaction quality

## What's Next & Vision  

The next phase for Miniverse is more than technical iteration—its vision is a reimagining of learning, ensuring every child is seen, understood, and guided.  

### 1. User Expansion and Educational Equity  
- Bring Miniverse to families, libraries, offline kids workshops, schools, and online education platforms worldwide, independent of country, language, income, or parental background, giving every child access to high-quality, personalized learning.  
- Special attention to diverse personalities: hyperactive, easily distracted, or highly curious children can find ways to explore the world, build, and satisfy their innate curiosity.  

### 2. Intelligent Ecosystem and Community Building  
- Create an open learning community where users can share, publish, and remix interactive courseware, forming a self-sustaining growth ecosystem.  
- Expand to offline workshops, community classes, and interest-based sessions, letting children experience exploration, creativity, and collaboration in real-world settings.  
- Curriculum focuses on future-ready skills for the AI era: curiosity, exploration, hands-on ability, communication, and collaboration, ensuring learning shapes capability, not just knowledge.  

### 3. Technical Advancement and Differentiation  
- Deep integration of multimodal AI technologies to provide real-time vision, voice, emotion recognition, and interaction, creating learning experiences that feel human-like.  
- Optimized personalized learning paths and adaptive strategies, allowing AI to understand each child’s interests, emotions, and learning pace, and provide the best experience for every personality.  

### 4. Business and Strategic Opportunities  
- Offer SaaS or subscription models for educational institutions, and online platforms, establishing stable revenue.  
- Position Miniverse as an attractive acquisition target for EdTech giants or AI education platforms.  
- Long-term vision: every child has an AI teacher who understands, guides, and accompanies them—bringing educational equity to every corner of the world, and enabling children to grow in curiosity, exploration, and creativity in the AI era.  

## Vision: need your support to start
Imagine a weekend morning: my son sits in the living room, iPad in hand, struggling with a math problem he didn’t understand at school. His brows furrow in frustration. I’m preparing a work report and feel a little anxious—but I open Miniverse, and the AI teacher appears immediately. Using a warm voice and lively interactive animations, it guides him step by step, giving real-time encouragement as he answers.  

Suddenly, his eyes light up. He starts exploring alternative solutions, even asking several “why” questions. I watch his curiosity spark, and I can relax—no stress, no repeating explanations, just him learning joyfully.  

This scene isn’t limited to my home. In libraries, or remotely across countries, children from different languages and backgrounds experience the same guidance and companionship: every child can find a learning path that fits them, feel understood, encouraged, and inspired.  


This is the future of Miniverse: every child has an AI teacher who understands, guides, and accompanies them, exploring the world without boundaries and cultivating skills for the AI era—setting a new standard for learning.  
Hope we have the opportunity to build the dream to reality together with your support and like!
![Vision](https://imgur.com/8sw18Qi.jpg)  


Thanks  
Anna  
