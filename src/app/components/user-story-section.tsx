import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface UserStory {
  id: string;
  name: string;
  stage: string;
  location: string;
  avatar: string;
  thumbnail: string;
  mainImage: string;
  category: string;
  tags: string[];
  pain: string;
  moment: string;
  solution: string;
  result: string;
  isFeatured?: boolean;
}

// ==========================================
// CONFIGURATION: UPDATE MAIN STORIES HERE
// ==========================================
const stories: UserStory[] = [
  {
    id: '1',
    name: 'Anna',
    stage: 'Kindergarten Parent Volunteer',
    location: 'United States',
    avatar: 'https://images.unsplash.com/photo-1758691737605-69a0e78bd193?auto=format&fit=crop&q=80&w=150&h=150',
    thumbnail: 'https://images.unsplash.com/photo-1588075592405-d3d4f0846961?auto=format&fit=crop&q=80&w=800',
    mainImage: 'https://imgur.com/6Ii70en.mp4',
    category: 'Cross-Cultural Learning',
    tags: ['Culture', 'Language', 'Live Teaching', 'Multimodal'],
    pain: 'As a parent volunteer, Anna wanted to introduce Chinese New Year to her child’s kindergarten class, but struggled to prepare engaging materials, accurate pronunciation, and age-appropriate explanations in English.',
    moment: 'Her child came home saying, “My teacher said China has a New Year. Do they have fun things like ours?” The teacher then invited Anna to share Chinese New Year with the class.',
    solution: 'Using Miniverse, Anna quickly generated a live, interactive lesson with an AI teacher—featuring standard Mandarin pronunciation, clear English explanations, festive visuals, short videos, and real-time Q&A designed for 6-year-olds.',
    result: 'The children were fully engaged—laughing, asking questions, and learning together. Anna felt confident, prepared, and proud to share her culture.',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Harrison',
    stage: 'Middle School',
    location: 'United States',
    avatar: 'https://images.unsplash.com/photo-1750378053005-50641b3dbc1e?auto=format&fit=crop&q=80&w=150&h=150',
    thumbnail: 'https://images.unsplash.com/photo-1755936270631-55f55e8f330b?auto=format&fit=crop&q=80&w=800',
    mainImage: 'https://i.imgur.com/NmoijRx.mp4',
    category: 'Ancient Poetry',
    tags: ['Humanities', 'Visual'],
    pain: 'Interested in Chinese poem, but found ancient Chinese poetry abstract and difficult to memorize.',
    moment: 'Struggling to visualize the imagery behind "Thinking on a Quiet Night".',
    solution: 'Real-time AI visual reconstruction and interactive storytelling of poems.',
    result: 'Harrison can now recite and explain over 20 ancient poems with ease.',
    isFeatured: false,
  },
  {
    id: '3',
    name: 'Sophia',
    stage: 'Grade 2',
    location: 'United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1514960919797-5ff58c52e5ba?auto=format&fit=crop&q=80&w=150&h=150',
    thumbnail: 'https://images.unsplash.com/photo-1630983358494-96012d838b84?auto=format&fit=crop&q=80&w=800',
    mainImage: 'https://images.unsplash.com/photo-1630983358494-96012d838b84?auto=format&fit=crop&q=80&w=800',
    category: 'Geometry',
    tags: ['STEM', '3D'],
    pain: 'Found spatial concepts abstract and difficult to visualize.',
    moment: 'Trying to understand 3D shapes from a 2D textbook page.',
    solution: 'Interactive 3D manipulation with AI real time teacher guiding the spatial reasoning.',
    result: 'She finally understands spatial concepts after just two interactive sessions.',
    isFeatured: false,
  },
  {
    id: '4',
    name: 'Leo',
    stage: 'Elementary',
    location: 'Canada',
    avatar: 'https://images.unsplash.com/photo-1618673747378-7e0d3561371a?auto=format&fit=crop&q=80&w=150&h=150',
    thumbnail: 'https://images.unsplash.com/photo-1712064136254-a86090d1110f?auto=format&fit=crop&q=80&w=800',
    mainImage: 'https://images.unsplash.com/photo-1712064136254-a86090d1110f?auto=format&fit=crop&q=80&w=800',
    category: 'Algorithms',
    tags: ['STEM', 'Logic'],
    pain: 'Coding felt like a chore with no visual feedback.',
    moment: 'Hitting a wall with complex loop logic in a text editor.',
    solution: 'Visual logic blocks synchronized with real-time AI explanations.',
    result: 'Leo built his first working script using the AI visual logic blocks.',
    isFeatured: false,
  },
  {
    id: '5',
    name: 'Maya',
    stage: 'Preschool',
    location: 'Japan',
    avatar: 'https://images.unsplash.com/photo-1603541708761-0738d2bc0519?auto=format&fit=crop&q=80&w=150&h=150',
    thumbnail: 'https://images.unsplash.com/photo-1638996030249-abc99a735463?auto=format&fit=crop&q=80&w=800',
    mainImage: 'https://images.unsplash.com/photo-1638996030249-abc99a735463?auto=format&fit=crop&q=80&w=800',
    category: 'Phonics',
    tags: ['Humanities', 'Speech'],
    pain: 'Shy about speaking English and pronouncing difficult sounds.',
    moment: 'Hesitating to participate in traditional group classes.',
    solution: 'A patient, non-judgmental AI companion for 1-on-1 speech practice.',
    result: 'The real-time pronunciation coach gave her the confidence to speak.',
    isFeatured: false,
  },
  {
    id: '6',
    name: 'Ethan',
    stage: 'Grade 3',
    location: 'Australia',
    avatar: 'https://images.unsplash.com/photo-1544120190-275d3f2403a2?auto=format&fit=crop&q=80&w=150&h=150',
    thumbnail: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
    mainImage: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
    category: 'Astronomy',
    tags: ['STEM', 'Science'],
    pain: 'Fascinated by space but found reading textbooks overwhelming.',
    moment: 'Staring at complex star charts without understanding depth.',
    solution: 'Interactive 3D solar system exploration with real-time AI narration.',
    result: 'Ethan can now explain the lifecycle of a star to his classmates.',
    isFeatured: false,
  },
  {
    id: '7',
    name: 'Lucas',
    stage: 'Grade 2',
    location: 'Germany',
    avatar: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=150&h=150',
    thumbnail: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800',
    mainImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800',
    category: 'Music Theory',
    tags: ['Humanities', 'Creative'],
    pain: 'Quitting piano lessons because sheet music felt "boring".',
    moment: 'Trying to memorize notes on a page with no musical context.',
    solution: 'Real-time visual note mapping that lights up as he plays.',
    result: 'Lucas started composing his own short melodies within weeks.',
    isFeatured: false,
  }
];

// ==========================================
// CONFIGURATION: ADD DIVERSE MINI-STORIES HERE
// ==========================================
const DIVERSE_USER_STORIES = [
  {
    name: "Annie",
    tag: "Spanish Self-Learner",
    story: "“I’m busy and starting Spanish from zero. Other apps felt disconnected from real life. With Miniverse, I just said ‘how to greet someone in Spanish,’ and it instantly generated a lesson. The AI teacher guided my pronunciation, answered my questions, and I learned five useful sentences in ten minutes.”"
  },
  {
    name: "Sumit",
    tag: "Parent of a 7th Grader",
    story: "“My child struggled with Singapore Math, even with tutors. I took a photo of the page he couldn’t understand, and Miniverse generated a lesson with a live AI teacher guiding his thinking. After one session, it finally clicked.”"
  },
  {
    name: "Shirley",
    tag: "Parent of a 5-Year-Old",
    story: "“My child asks ‘why’ all day. I use Miniverse to turn his questions—like why a microwave heats food—into interactive lessons by simply taking a photo. The AI teacher keeps him engaged, and he never wants to stop learning.”"
  },
  {
    name: "Simon",
    tag: "Parent & Gamer",
    story: "“My son and I read Minecraft guidebooks together, but English isn’t my native language. With Miniverse, we scan the page and get an interactive lesson. Learning through his interests helped improve his reading skills naturally.”"
  },
  {
    name: "Justin",
    tag: "Middle School Student",
    story: "“In physics class, I use Miniverse to run virtual experiments like circuits. I can ask why things matter and what they’re used for in real life. Learning feels meaningful, not just for exams.”"
  },
  {
    name: "Cindy",
    tag: "International Language Teacher",
    story: "“I teach English remotely to children in different countries. Miniverse turns textbook photos into interactive lessons. The AI teacher supports multilingual explanations and pronunciation practice, helping students continue learning even when parents don’t speak English.”"
  }
];

export const UserStorySection = () => {
  const [activeId, setActiveId] = useState(stories[0].id);
  const [isMuted, setIsMuted] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeStory = stories.find(s => s.id === activeId) || stories[0];

  const getTagColors = (tag: string) => {
    const stemTags = ['STEM', '3D', 'Logic', 'Science'];
    const humanitiesTags = ['Humanities', 'Visual', 'Speech', 'Creative', 'Culture', 'Language', 'Live Teaching', 'Multimodal'];
    
    if (stemTags.includes(tag)) {
      return 'bg-blue-500/10 text-blue-300 border-blue-500/20';
    }
    if (humanitiesTags.includes(tag)) {
      return 'bg-pink-500/10 text-pink-300 border-pink-500/20';
    }
    return 'bg-white/10 text-white/60 border-white/20';
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const isYouTube = (url: string) => url.includes('youtube.com') || url.includes('youtu.be');
  const isDirectVideo = (url: string) => url.match(/\.(mp4|webm|ogg|mov)$/);

  return (
    <section className="relative z-10 w-full py-24 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20 rounded-full"
          >
            <span className="text-sm font-bold text-indigo-200 uppercase tracking-widest">Success Stories</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-fredoka font-bold text-white leading-tight"
          >
            Real Stories. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-300">Real Learning.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            See how families are transforming education with AI-driven, real-time interactive learning.
          </motion.p>
        </div>

        {/* More Journeys Carousel */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">Discover More Journeys</h3>
            <div className="flex items-center gap-4">
              <span className="text-white/30 text-xs hidden sm:block">Click cards to view details</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll('left')}
                  className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all active:scale-90"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all active:scale-90"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                onClick={() => setActiveId(story.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`flex-none w-[280px] md:w-[320px] snap-start group relative backdrop-blur-xl border rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  activeId === story.id 
                    ? 'border-indigo-500 ring-2 ring-indigo-500/20 bg-indigo-500/20 shadow-2xl shadow-indigo-500/30 hover:bg-indigo-500/30 hover:shadow-indigo-500/40' 
                    : 'border-white/10 bg-slate-800/20 hover:bg-white/10 hover:shadow-xl hover:shadow-indigo-500/20'
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={story.thumbnail}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {activeId === story.id && (
                    <div className="absolute inset-0 bg-indigo-600/20 mix-blend-overlay" />
                  )}
                </div>
                <div className="p-4 space-y-3 flex flex-col h-full">
                  <div className="space-y-2">
                    <span className="inline-block text-[10px] font-bold text-indigo-400 uppercase tracking-widest leading-none">
                      {story.category}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-white text-base leading-tight group-hover:text-indigo-200 transition-colors">
                        {story.name}
                      </h4>
                      <p className="text-white text-xs font-medium leading-relaxed">
                        {story.stage}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {story.tags.slice(0, 2).map(tag => (
                      <span 
                        key={tag} 
                        className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${getTagColors(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-white text-[11px] line-clamp-2 italic flex-1 leading-relaxed">
                    {story.result}
                  </p>

                  <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 text-[10px] text-white font-medium uppercase tracking-tight">
                    <span className="opacity-100">📍</span> {story.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Story Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col">
                {/* Visual Part */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                  <AnimatePresence mode="wait">
                    {isYouTube(activeStory.mainImage) || isDirectVideo(activeStory.mainImage) ? (
                      <motion.div 
                        key={`video-${activeId}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <video
                          src={activeStory.mainImage.includes('imgur.com') && !activeStory.mainImage.endsWith('.mp4') 
                            ? activeStory.mainImage.replace('imgur.com', 'i.imgur.com') + '.mp4' 
                            : activeStory.mainImage}
                          autoPlay
                          loop
                          muted={isMuted}
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsMuted(!isMuted);
                          }}
                          className="absolute bottom-6 right-6 p-3 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-black/60 transition-all z-30"
                        >
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`image-${activeId}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <ImageWithFallback
                          src={activeStory.mainImage}
                          alt={activeStory.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-indigo-600/90 backdrop-blur-md rounded-full text-white text-[10px] font-bold tracking-wider z-20">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    REAL-TIME INTERACTION
                  </div>
                </div>

                {/* Content Part */}
                <div className="p-8 lg:p-12 space-y-10 flex flex-col justify-center">
                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-indigo-500/30">
                      <ImageWithFallback 
                        src={activeStory.avatar} 
                        alt={activeStory.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <h4 className="text-4xl font-bold text-white tracking-tight leading-none">{activeStory.name}</h4>
                          <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded-lg border border-indigo-500/20 uppercase tracking-widest w-fit">
                            {activeStory.category}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {activeStory.tags.map(tag => (
                            <span 
                              key={tag} 
                              className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest ${getTagColors(tag)}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-4 text-white/50 text-sm font-medium">
                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                          {activeStory.stage}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block"></div>
                        <span className="flex items-center gap-2">
                          <span className="text-base leading-none">📍</span>
                          {activeStory.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Story Timeline */}
                  <div className="space-y-6">
                    {[
                      { label: 'THE PAIN', content: activeStory.pain, color: 'bg-red-500', textColor: 'text-red-400' },
                      { label: 'THE MOMENT', content: activeStory.moment, color: 'bg-amber-500', textColor: 'text-amber-400' },
                      { label: 'THE SOLUTION', content: activeStory.solution, color: 'bg-blue-500', textColor: 'text-blue-400' },
                      { label: 'THE RESULT', content: activeStory.result, color: 'bg-green-500', textColor: 'text-green-400', isQuote: true },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        className="flex gap-4 group"
                      >
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.2)] mt-1.5`} />
                          {index < 3 && <div className="w-px flex-1 bg-white/10 my-1" />}
                        </div>
                        <div>
                          <span className={`text-[10px] font-bold tracking-widest ${item.textColor}`}>{item.label}</span>
                          <p className={`text-white/80 leading-relaxed ${item.isQuote ? 'text-xl font-bold italic text-white' : 'text-sm'}`}>
                            {item.isQuote ? `"${item.content}"` : item.content}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Learning for Every Curious Mind - Diverse User Stories */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12 py-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-white">Learning for Every Curious Mind</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#5c56f2] to-blue-400 mx-auto rounded-full"></div>
            <p className="text-indigo-200 font-bold uppercase tracking-widest text-sm pt-2">Diverse User Stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIVERSE_USER_STORIES.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="flex flex-col h-full space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">{item.name}</h3>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{item.tag}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed italic">
                    {item.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-2xl border border-white/10"></div>
          <div className="relative p-12 text-center space-y-8">
            <h2 className="text-4xl font-fredoka font-bold text-white">Join the Miniverse Community</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Experience the future of AI-driven education today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://miniverse-ai.com/explore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-4 bg-[#5c56f2] hover:bg-indigo-500 text-white font-bold rounded-full shadow-lg transition-all inline-block text-center"
              >
                Start Free
              </a>
              <button className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all">
                View All Stories
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
