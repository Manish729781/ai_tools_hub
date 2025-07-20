// AI Tools Database - Comprehensive Directory of AI Tools
// Last Updated: July 2025

const TOOLS_DATABASE = {
  categories: [
    'General AI Tools',
    'Writing & Editing', 
    'Image Generation & Editing',
    'Music & Audio',
    'Voice Generation & Conversion',
    'Art & Creative Design',
    'Social Media',
    'AI Detection & Anti-Detection',
    'Coding & Development',
    'Video & Animation',
    'Daily Life',
    'Legal & Finance',
    'Business Management',
    'Marketing & Advertising',
    'Health & Wellness',
    'Business Research',
    'Education & Translation',
    'Chatbots & Virtual Companions',
    'Office & Productivity',
    'Research & Data Analysis',
    'Interior & Architectural Design'
  ],

  tools: [
    // General AI Tools
    { id: 1, name: 'Zintra', url: 'https://zintra.vercel.app/', category: 'General AI Tools', pricing: 'Free', rating: 4.2, description: 'General purpose AI platform for various tasks and applications', features: ['Multi-purpose', 'Web-based', 'Free Access'] },
    { id: 2, name: 'Moonmate', url: 'https://moonmate.ai/', category: 'General AI Tools', pricing: 'Freemium', rating: 4.3, description: 'AI companion and productivity assistant', features: ['Productivity', 'AI Companion', 'Task Management'] },
    { id: 3, name: 'seo.ing', url: 'https://www.seo.ing/', category: 'General AI Tools', pricing: 'Paid', rating: 4.1, description: 'AI-powered SEO optimization and analysis tool', features: ['SEO Analysis', 'Optimization', 'Analytics'] },
    { id: 4, name: 'Seedance AI', url: 'https://seedance-ai.ai/', category: 'General AI Tools', pricing: 'Freemium', rating: 4.0, description: 'AI platform for creative and business applications', features: ['Creative AI', 'Business Tools', 'Multi-platform'] },
    { id: 5, name: 'Midjourney Video', url: 'https://midjourneyvideo.io/', category: 'General AI Tools', pricing: 'Paid', rating: 4.5, description: 'AI video generation and editing platform', features: ['Video Generation', 'AI Editing', 'Creative Tools'] },
    { id: 6, name: 'Shoplauncher AI', url: 'https://shoplauncher.ai/', category: 'General AI Tools', pricing: 'Paid', rating: 4.2, description: 'AI-powered e-commerce store builder and optimizer', features: ['E-commerce', 'Store Builder', 'AI Optimization'] },
    { id: 7, name: 'Thena', url: 'https://www.thena.ai', category: 'General AI Tools', pricing: 'Freemium', rating: 4.4, description: 'AI assistant for customer support and communication', features: ['Customer Support', 'Communication', 'AI Assistant'] },
    { id: 8, name: '蛙蛙写作 (Wawa Writing)', url: 'https://wawawriter.com/', category: 'General AI Tools', pricing: 'Free', rating: 4.1, description: 'Chinese AI writing assistant and content generator', features: ['Chinese Language', 'Writing Assistant', 'Content Generation'] },
    { id: 9, name: 'Makefilm', url: 'https://www.makefilm.ai/', category: 'General AI Tools', pricing: 'Paid', rating: 4.3, description: 'AI-powered film and video production tool', features: ['Film Production', 'Video Creation', 'AI Automation'] },
    { id: 10, name: 'Skywork', url: 'https://skywork.ai/home', category: 'General AI Tools', pricing: 'Enterprise', rating: 4.6, description: 'Enterprise AI platform for business automation', features: ['Enterprise AI', 'Business Automation', 'Scalable'] },
    { id: 11, name: 'Vidduo', url: 'https://www.vidduo.com/', category: 'General AI Tools', pricing: 'Freemium', rating: 4.2, description: 'AI video collaboration and editing platform', features: ['Video Collaboration', 'Team Tools', 'AI Editing'] },
    { id: 12, name: 'Thunai', url: 'https://www.thunai.ai/', category: 'General AI Tools', pricing: 'Paid', rating: 4.1, description: 'AI platform for data analysis and insights', features: ['Data Analysis', 'Insights', 'Analytics'] },
    { id: 13, name: 'Ittybit', url: 'https://ittybit.com/', category: 'General AI Tools', pricing: 'Free', rating: 3.9, description: 'Lightweight AI tools and utilities', features: ['Utilities', 'Lightweight', 'Quick Tools'] },
    { id: 14, name: 'NLX', url: 'https://nlx.ai', category: 'General AI Tools', pricing: 'Enterprise', rating: 4.5, description: 'Natural language AI platform for conversations', features: ['Natural Language', 'Conversations', 'Enterprise'] },
    { id: 15, name: 'Fluig', url: 'https://www.fluig.com', category: 'General AI Tools', pricing: 'Enterprise', rating: 4.3, description: 'Business process automation with AI', features: ['Process Automation', 'Business Tools', 'Enterprise'] },
    { id: 16, name: 'Avido.ai', url: 'https://avido.ai/', category: 'General AI Tools', pricing: 'Freemium', rating: 4.0, description: 'AI video and content creation platform', features: ['Video Creation', 'Content Tools', 'AI Generation'] },
    { id: 17, name: 'The AI Labor Index', url: 'https://www.ailaborindex.com/', category: 'General AI Tools', pricing: 'Free', rating: 4.2, description: 'AI job market analysis and insights', features: ['Job Market', 'Analytics', 'Industry Insights'] },
    { id: 18, name: 'Echovox Studio', url: 'https://studio.echovox.in/', category: 'General AI Tools', pricing: 'Paid', rating: 4.1, description: 'AI audio and voice processing studio', features: ['Audio Processing', 'Voice Tools', 'Studio Quality'] },
    { id: 19, name: 'Labubu Live Wallpaper', url: 'https://labubuwallpaper.fun/', category: 'General AI Tools', pricing: 'Free', rating: 3.8, description: 'AI-generated live wallpapers and backgrounds', features: ['Live Wallpapers', 'AI Generation', 'Customization'] },
    { id: 20, name: 'Scoop Analytics', url: 'https://www.scoopanalytics.com/', category: 'General AI Tools', pricing: 'Paid', rating: 4.4, description: 'AI-powered business analytics and insights', features: ['Business Analytics', 'Data Insights', 'AI Analysis'] },
    { id: 21, name: 'i10X', url: 'https://i10x.ai/', category: 'General AI Tools', pricing: 'Freemium', rating: 4.3, description: 'AI productivity multiplier and automation', features: ['Productivity', 'Automation', '10X Performance'] },
    { id: 22, name: 'Fluxx.AI', url: 'https://www.fluxx.ai/', category: 'General AI Tools', pricing: 'Paid', rating: 4.2, description: 'AI workflow automation and optimization', features: ['Workflow Automation', 'Optimization', 'AI Tools'] },

    // Writing & Editing
    { id: 23, name: 'ChatGPT', url: 'https://chat.openai.com', category: 'Writing & Editing', pricing: 'Freemium', rating: 4.8, description: 'Advanced conversational AI for writing, coding, and problem-solving', features: ['Conversational AI', 'Writing', 'Coding', 'GPT-4'] },
    { id: 24, name: 'DeepSeek Chat', url: 'https://www.deepseek.com', category: 'Writing & Editing', pricing: 'Free', rating: 4.5, description: 'AI chat assistant for writing and analysis', features: ['Chat Assistant', 'Writing', 'Analysis'] },
    { id: 25, name: 'DeepL', url: 'https://www.deepl.com', category: 'Writing & Editing', pricing: 'Freemium', rating: 4.7, description: 'Advanced AI translator with excellent accuracy', features: ['Translation', 'Multiple Languages', 'High Accuracy'] },
    { id: 26, name: 'Notion AI', url: 'https://www.notion.so', category: 'Writing & Editing', pricing: 'Paid', rating: 4.5, description: 'AI writing assistant integrated into workspace', features: ['Workspace Integration', 'Writing Assistant', 'Productivity'] },
    { id: 27, name: 'QuillBot', url: 'https://quillbot.com', category: 'Writing & Editing', pricing: 'Freemium', rating: 4.6, description: 'AI paraphrasing and writing enhancement tool', features: ['Paraphrasing', 'Grammar Check', 'Writing Enhancement'] },
    { id: 28, name: 'Grammarly', url: 'https://www.grammarly.com', category: 'Writing & Editing', pricing: 'Freemium', rating: 4.7, description: 'AI-powered writing assistant for grammar and style', features: ['Grammar Check', 'Style Improvement', 'Real-time'] },
    { id: 29, name: 'Studocu', url: 'https://www.studocu.com', category: 'Writing & Editing', pricing: 'Freemium', rating: 4.3, description: 'AI study assistant and document analyzer', features: ['Study Assistant', 'Document Analysis', 'Academic'] },
    { id: 30, name: 'Gamma', url: 'https://gamma.app', category: 'Writing & Editing', pricing: 'Freemium', rating: 4.4, description: 'AI presentation and document creator', features: ['Presentations', 'Document Creation', 'AI Design'] },
    { id: 31, name: 'ZeroGPT', url: 'https://www.zerogpt.com', category: 'Writing & Editing', pricing: 'Free', rating: 4.1, description: 'AI content detection and analysis tool', features: ['AI Detection', 'Content Analysis', 'Plagiarism Check'] },
    { id: 32, name: 'Beacons', url: 'https://www.beacons.ai', category: 'Writing & Editing', pricing: 'Freemium', rating: 4.2, description: 'AI content creator and link-in-bio tool', features: ['Content Creation', 'Link Management', 'Creator Tools'] },
    { id: 33, name: 'Perchance', url: 'https://perchance.org', category: 'Writing & Editing', pricing: 'Free', rating: 4.0, description: 'AI random generator and creative writing tool', features: ['Random Generation', 'Creative Writing', 'Customizable'] },
    { id: 34, name: 'Monica', url: 'https://monica.im', category: 'Writing & Editing', pricing: 'Freemium', rating: 4.3, description: 'AI writing assistant browser extension', features: ['Browser Extension', 'Writing Assistant', 'Multi-platform'] },

    // Image Generation & Editing
    { id: 35, name: 'OpenAI (DALL·E)', url: 'https://openai.com/dall-e', category: 'Image Generation & Editing', pricing: 'Paid', rating: 4.6, description: 'Advanced AI image generation from text prompts', features: ['Text-to-Image', 'High Quality', 'Creative AI'] },
    { id: 36, name: 'Adobe Firefly', url: 'https://www.adobe.com/firefly', category: 'Image Generation & Editing', pricing: 'Freemium', rating: 4.5, description: 'Adobe\'s AI image generation and editing suite', features: ['Adobe Integration', 'Professional Tools', 'Creative Suite'] },
    { id: 37, name: 'Grok (xAI)', url: 'https://x.ai/', category: 'Image Generation & Editing', pricing: 'Paid', rating: 4.3, description: 'AI assistant with image generation capabilities', features: ['Image Generation', 'AI Assistant', 'Real-time'] },
    { id: 38, name: 'Freepik AI', url: 'https://www.freepik.com/ai', category: 'Image Generation & Editing', pricing: 'Freemium', rating: 4.4, description: 'AI image generator integrated with stock library', features: ['Stock Integration', 'AI Generation', 'Commercial Use'] },
    { id: 39, name: 'Remove.bg', url: 'https://www.remove.bg', category: 'Image Generation & Editing', pricing: 'Freemium', rating: 4.8, description: 'AI background removal tool with high accuracy', features: ['Background Removal', 'High Accuracy', 'Batch Processing'] },
    { id: 40, name: 'Shutterstock AI', url: 'https://www.shutterstock.com/ai', category: 'Image Generation & Editing', pricing: 'Paid', rating: 4.3, description: 'AI image generation with stock photo quality', features: ['Stock Quality', 'Commercial License', 'AI Generation'] },
    { id: 41, name: 'CapCut', url: 'https://www.capcut.com', category: 'Image Generation & Editing', pricing: 'Free', rating: 4.5, description: 'AI video and image editing mobile app', features: ['Mobile App', 'Video Editing', 'AI Effects'] },
    { id: 42, name: 'PolyBuzz.ai', url: 'https://www.polybuzz.ai/', category: 'Image Generation & Editing', pricing: 'Paid', rating: 4.1, description: 'AI image generation with unique styles', features: ['Unique Styles', 'Creative AI', 'Customization'] },
    { id: 43, name: 'Seaart.ai', url: 'https://www.seaart.ai', category: 'Image Generation & Editing', pricing: 'Freemium', rating: 4.4, description: 'AI art generation with community features', features: ['Art Generation', 'Community', 'Multiple Styles'] },
    { id: 44, name: 'Photoroom', url: 'https://www.photoroom.com', category: 'Image Generation & Editing', pricing: 'Freemium', rating: 4.6, description: 'AI photo editing and background tools', features: ['Photo Editing', 'Background Tools', 'Mobile-first'] },
    { id: 45, name: 'Pixelcut', url: 'https://www.pixelcut.ai', category: 'Image Generation & Editing', pricing: 'Freemium', rating: 4.3, description: 'AI image editing and design tool', features: ['Image Editing', 'Design Tools', 'Templates'] },
    { id: 46, name: 'DeepAI', url: 'https://deepai.org', category: 'Image Generation & Editing', pricing: 'Freemium', rating: 4.2, description: 'AI image generation and processing tools', features: ['Image Processing', 'Multiple Models', 'API Access'] },

    // Music & Audio
    { id: 47, name: 'ElevenLabs', url: 'https://elevenlabs.io', category: 'Music & Audio', pricing: 'Freemium', rating: 4.7, description: 'AI voice synthesis and cloning platform', features: ['Voice Synthesis', 'Voice Cloning', 'High Quality'] },
    { id: 48, name: 'Kling AI', url: 'https://klingai.com/global/', category: 'Music & Audio', pricing: 'Paid', rating: 4.4, description: 'AI music and audio generation platform', features: ['Music Generation', 'Audio Creation', 'AI Composition'] },
    { id: 49, name: 'Wondershare', url: 'https://www.wondershare.com', category: 'Music & Audio', pricing: 'Paid', rating: 4.3, description: 'AI-powered multimedia software suite', features: ['Multimedia Suite', 'Audio Editing', 'Video Tools'] },
    { id: 50, name: 'PixVerse', url: 'https://pixverse.ai', category: 'Music & Audio', pricing: 'Freemium', rating: 4.2, description: 'AI video and audio creation platform', features: ['Video Creation', 'Audio Generation', 'Creative Tools'] },
    { id: 51, name: 'EaseUS', url: 'https://www.easeus.com', category: 'Music & Audio', pricing: 'Freemium', rating: 4.1, description: 'AI-enhanced data recovery and audio tools', features: ['Data Recovery', 'Audio Tools', 'System Utilities'] },
    { id: 52, name: 'Adobe Podcast', url: 'https://podcast.adobe.com', category: 'Music & Audio', pricing: 'Free', rating: 4.5, description: 'AI audio enhancement for podcasting', features: ['Podcast Tools', 'Audio Enhancement', 'Noise Reduction'] },
    { id: 53, name: 'Symphony Creative Studio', url: 'https://ads.tiktok.com/', category: 'Music & Audio', pricing: 'Enterprise', rating: 4.3, description: 'TikTok\'s AI creative studio for ads', features: ['Ad Creation', 'Music Tools', 'Creative Suite'] },
    { id: 54, name: 'Riffusion', url: 'https://www.riffusion.com', category: 'Music & Audio', pricing: 'Free', rating: 4.4, description: 'AI music generation from text prompts', features: ['Music Generation', 'Text-to-Music', 'Creative AI'] },
    { id: 55, name: 'Online Audio Converter', url: 'https://online-audio-converter.com', category: 'Music & Audio', pricing: 'Free', rating: 4.0, description: 'AI-enhanced audio conversion tool', features: ['Audio Conversion', 'Multiple Formats', 'Online Tool'] },
    { id: 56, name: 'Media AI Generator', url: 'https://www.media.io/ai/home', category: 'Music & Audio', pricing: 'Freemium', rating: 4.2, description: 'AI media generation and editing suite', features: ['Media Generation', 'Audio/Video', 'AI Suite'] },
    { id: 57, name: 'Voicemod', url: 'https://www.voicemod.net', category: 'Music & Audio', pricing: 'Freemium', rating: 4.3, description: 'AI voice changer and audio effects', features: ['Voice Changer', 'Audio Effects', 'Real-time'] },

    // Voice Generation & Conversion
    { id: 58, name: 'Studocu', url: 'https://www.studocu.com', category: 'Voice Generation & Conversion', pricing: 'Freemium', rating: 4.3, description: 'AI voice features for academic content', features: ['Academic Focus', 'Voice Reading', 'Study Tools'] },
    { id: 59, name: 'CapCut', url: 'https://www.capcut.com', category: 'Voice Generation & Conversion', pricing: 'Free', rating: 4.5, description: 'AI voice synthesis for video editing', features: ['Voice Synthesis', 'Video Integration', 'Mobile App'] },
    { id: 60, name: 'ElevenLabs', url: 'https://elevenlabs.io', category: 'Voice Generation & Conversion', pricing: 'Freemium', rating: 4.7, description: 'Advanced AI voice synthesis and cloning', features: ['Voice Synthesis', 'Voice Cloning', 'Multiple Languages'] },
    { id: 61, name: 'TurboScribe', url: 'https://turboscribe.ai', category: 'Voice Generation & Conversion', pricing: 'Freemium', rating: 4.4, description: 'AI transcription and voice conversion', features: ['Transcription', 'Voice Conversion', 'High Accuracy'] },
    { id: 62, name: 'VEED.IO', url: 'https://www.veed.io', category: 'Voice Generation & Conversion', pricing: 'Freemium', rating: 4.5, description: 'AI video editing with voice tools', features: ['Video Editing', 'Voice Tools', 'Subtitles'] },
    { id: 63, name: 'Clipto.AI', url: 'https://www.clipto.com/', category: 'Voice Generation & Conversion', pricing: 'Paid', rating: 4.2, description: 'AI video clipping with voice analysis', features: ['Video Clipping', 'Voice Analysis', 'Content Creation'] },
    { id: 64, name: 'Zeemo', url: 'https://zeemo.ai/?via=wenhua', category: 'Voice Generation & Conversion', pricing: 'Freemium', rating: 4.3, description: 'AI subtitle and voice generation tool', features: ['Subtitles', 'Voice Generation', 'Multiple Languages'] },
    { id: 65, name: 'InVideo', url: 'https://invideo.io', category: 'Voice Generation & Conversion', pricing: 'Freemium', rating: 4.4, description: 'AI video creation with voice features', features: ['Video Creation', 'Voice-over', 'Templates'] },
    { id: 66, name: 'Otter.ai', url: 'https://otter.ai', category: 'Voice Generation & Conversion', pricing: 'Freemium', rating: 4.6, description: 'AI meeting transcription and voice notes', features: ['Meeting Transcription', 'Voice Notes', 'Collaboration'] },
    { id: 67, name: 'HeyGen', url: 'https://www.heygen.com', category: 'Voice Generation & Conversion', pricing: 'Freemium', rating: 4.5, description: 'AI avatar and voice generation platform', features: ['AI Avatars', 'Voice Generation', 'Video Creation'] },

    // Art & Creative Design
    { id: 68, name: 'Adobe Firefly', url: 'https://www.adobe.com/firefly', category: 'Art & Creative Design', pricing: 'Freemium', rating: 4.5, description: 'Adobe\'s creative AI suite for design', features: ['Creative AI', 'Design Tools', 'Adobe Integration'] },
    { id: 69, name: 'Shutterstock AI', url: 'https://www.shutterstock.com/ai', category: 'Art & Creative Design', pricing: 'Paid', rating: 4.3, description: 'AI art generation with commercial licensing', features: ['Art Generation', 'Commercial License', 'High Quality'] },
    { id: 70, name: 'Gamma', url: 'https://gamma.app', category: 'Art & Creative Design', pricing: 'Freemium', rating: 4.4, description: 'AI-powered presentation and design tool', features: ['Presentations', 'Design Templates', 'AI Layout'] },
    { id: 71, name: 'Seaart.ai', url: 'https://www.seaart.ai', category: 'Art & Creative Design', pricing: 'Freemium', rating: 4.4, description: 'AI art generation with community sharing', features: ['Art Generation', 'Community', 'Style Transfer'] },
    { id: 72, name: 'Civitai', url: 'https://civitai.com', category: 'Art & Creative Design', pricing: 'Free', rating: 4.6, description: 'AI art model sharing and generation platform', features: ['Model Sharing', 'Art Generation', 'Community'] },
    { id: 73, name: 'Leonardo.Ai', url: 'https://leonardo.ai', category: 'Art & Creative Design', pricing: 'Freemium', rating: 4.5, description: 'AI art and design generation platform', features: ['Art Generation', 'Design Tools', 'High Quality'] },
    { id: 74, name: 'Midjourney', url: 'https://www.midjourney.com', category: 'Art & Creative Design', pricing: 'Paid', rating: 4.7, description: 'Premium AI art generation with unique style', features: ['Art Generation', 'Unique Style', 'High Quality'] },
    { id: 75, name: 'Picsart', url: 'https://picsart.com', category: 'Art & Creative Design', pricing: 'Freemium', rating: 4.3, description: 'AI photo editing and creative tools', features: ['Photo Editing', 'Creative Tools', 'Mobile App'] },
    { id: 76, name: 'Pixlr', url: 'https://pixlr.com', category: 'Art & Creative Design', pricing: 'Freemium', rating: 4.2, description: 'AI-powered online photo editor', features: ['Photo Editing', 'Online Editor', 'AI Effects'] },
    { id: 77, name: 'Prezi', url: 'https://prezi.co', category: 'Art & Creative Design', pricing: 'Freemium', rating: 4.1, description: 'AI presentation design with dynamic layouts', features: ['Presentations', 'Dynamic Layouts', 'Interactive'] },
    { id: 78, name: 'MiriCanvas', url: 'https://www.miricanvas.com/en', category: 'Art & Creative Design', pricing: 'Freemium', rating: 4.0, description: 'AI graphic design platform', features: ['Graphic Design', 'Templates', 'Easy to Use'] },
    { id: 79, name: '123RF', url: 'https://www.123rf.com', category: 'Art & Creative Design', pricing: 'Paid', rating: 4.2, description: 'Stock photos with AI generation features', features: ['Stock Photos', 'AI Generation', 'Commercial Use'] },

    // Social Media
    { id: 80, name: 'Adobe Firefly', url: 'https://www.adobe.com/firefly', category: 'Social Media', pricing: 'Freemium', rating: 4.5, description: 'AI creative tools for social media content', features: ['Content Creation', 'Creative AI', 'Social Templates'] },
    { id: 81, name: 'Beacons', url: 'https://www.beacons.ai', category: 'Social Media', pricing: 'Freemium', rating: 4.2, description: 'AI-powered creator tools and link management', features: ['Creator Tools', 'Link Management', 'Analytics'] },
    { id: 82, name: 'PixVerse', url: 'https://pixverse.ai', category: 'Social Media', pricing: 'Freemium', rating: 4.2, description: 'AI video creation for social platforms', features: ['Video Creation', 'Social Media', 'AI Generation'] },
    { id: 83, name: 'Uhmegle', url: 'https://uhmegle.com/?', category: 'Social Media', pricing: 'Free', rating: 3.8, description: 'AI-enhanced chat and social platform', features: ['Chat Platform', 'AI Features', 'Social Networking'] },
    { id: 84, name: 'Sider', url: 'https://sider.ai', category: 'Social Media', pricing: 'Freemium', rating: 4.3, description: 'AI assistant for social media management', features: ['Social Management', 'AI Assistant', 'Content Creation'] },
    { id: 85, name: 'Microsoft Designer', url: 'https://designer.microsoft.com', category: 'Social Media', pricing: 'Free', rating: 4.4, description: 'AI design tool for social media graphics', features: ['Design Tool', 'Social Graphics', 'Templates'] },
    { id: 86, name: 'Transkriptor', url: 'https://transkriptor.com', category: 'Social Media', pricing: 'Freemium', rating: 4.1, description: 'AI transcription for social media content', features: ['Transcription', 'Content Creation', 'Multiple Languages'] },
    { id: 87, name: 'TurboLearn AI', url: 'https://www.turbolearn.ai/', category: 'Social Media', pricing: 'Paid', rating: 4.2, description: 'AI learning platform with social features', features: ['Learning Platform', 'Social Features', 'AI Tutoring'] },
    { id: 88, name: 'FlexClip', url: 'https://www.flexclip.com', category: 'Social Media', pricing: 'Freemium', rating: 4.3, description: 'AI video maker for social media', features: ['Video Creation', 'Social Media', 'Templates'] },
    { id: 89, name: 'Supawork AI', url: 'https://supawork.ai/ai-professional-headshot-generator', category: 'Social Media', pricing: 'Paid', rating: 4.4, description: 'AI headshot generator for professional profiles', features: ['Headshots', 'Professional Photos', 'AI Generation'] },
    { id: 90, name: 'GitMind', url: 'https://gitmind.com', category: 'Social Media', pricing: 'Freemium', rating: 4.1, description: 'AI mind mapping with collaboration features', features: ['Mind Mapping', 'Collaboration', 'Visual Thinking'] },
    { id: 91, name: 'Chat & Ask AI', url: 'https://apps.apple.com/us/app/askai-chat-now/id6448807559', category: 'Social Media', pricing: 'Freemium', rating: 4.0, description: 'AI chat app for social interactions', features: ['Chat App', 'AI Assistant', 'Mobile App'] },

    // AI Detection & Anti-Detection
    { id: 92, name: 'QuillBot', url: 'https://quillbot.com', category: 'AI Detection & Anti-Detection', pricing: 'Freemium', rating: 4.6, description: 'AI paraphrasing to avoid detection', features: ['Paraphrasing', 'Anti-Detection', 'Writing Enhancement'] },
    { id: 93, name: 'ZeroGPT', url: 'https://www.zerogpt.com', category: 'AI Detection & Anti-Detection', pricing: 'Free', rating: 4.1, description: 'AI content detection and analysis', features: ['AI Detection', 'Content Analysis', 'Accuracy Check'] },
    { id: 94, name: 'GPTZero', url: 'https://gptzero.me', category: 'AI Detection & Anti-Detection', pricing: 'Freemium', rating: 4.3, description: 'AI text detection with high accuracy', features: ['Text Detection', 'High Accuracy', 'Educational Focus'] },
    { id: 95, name: 'Scribbr', url: 'https://www.scribbr.com', category: 'AI Detection & Anti-Detection', pricing: 'Paid', rating: 4.4, description: 'Academic writing with AI detection', features: ['Academic Writing', 'AI Detection', 'Plagiarism Check'] },
    { id: 96, name: 'Uhmegle', url: 'https://uhmegle.com/?', category: 'AI Detection & Anti-Detection', pricing: 'Free', rating: 3.8, description: 'Platform with AI detection features', features: ['AI Detection', 'Chat Platform', 'Content Filtering'] },
    { id: 97, name: 'Undetectable AI', url: 'https://undetectable.ai', category: 'AI Detection & Anti-Detection', pricing: 'Paid', rating: 4.2, description: 'AI content humanization tool', features: ['Content Humanization', 'Anti-Detection', 'Text Rewriting'] },
    { id: 98, name: 'Aura', url: 'https://www.aura.com', category: 'AI Detection & Anti-Detection', pricing: 'Paid', rating: 4.0, description: 'Digital security with AI detection features', features: ['Digital Security', 'AI Detection', 'Privacy Protection'] },
    { id: 99, name: 'Branded', url: 'https://gobranded.com/', category: 'AI Detection & Anti-Detection', pricing: 'Paid', rating: 3.9, description: 'Brand protection with AI detection', features: ['Brand Protection', 'AI Detection', 'Content Monitoring'] },
    { id: 100, name: 'hCaptcha', url: 'https://www.hcaptcha.com', category: 'AI Detection & Anti-Detection', pricing: 'Free', rating: 4.1, description: 'AI-powered captcha and bot detection', features: ['Bot Detection', 'Captcha', 'Security'] },
    { id: 101, name: 'AISEO', url: 'https://aiseo.ai', category: 'AI Detection & Anti-Detection', pricing: 'Freemium', rating: 4.0, description: 'SEO content with AI detection bypass', features: ['SEO Content', 'AI Detection Bypass', 'Content Optimization'] },
    { id: 102, name: 'StealthWriter', url: 'https://stealthwriter.ai/?linkId=lp_731486&sourceId=wenhua-li&tenantId=stealthwriter', category: 'AI Detection & Anti-Detection', pricing: 'Paid', rating: 4.1, description: 'AI content rewriting for stealth publishing', features: ['Content Rewriting', 'Stealth Publishing', 'Anti-Detection'] },

    // Coding & Development
    { id: 103, name: 'OpenAI', url: 'https://openai.com', category: 'Coding & Development', pricing: 'Paid', rating: 4.7, description: 'AI platform with coding capabilities', features: ['AI Platform', 'Code Generation', 'API Access'] },
    { id: 104, name: 'ChatGPT', url: 'https://chat.openai.com', category: 'Coding & Development', pricing: 'Freemium', rating: 4.8, description: 'AI assistant for coding and development', features: ['Code Assistant', 'Multiple Languages', 'Problem Solving'] },
    { id: 105, name: 'DeepSeek Chat', url: 'https://www.deepseek.com', category: 'Coding & Development', pricing: 'Free', rating: 4.5, description: 'AI coding assistant with deep understanding', features: ['Coding Assistant', 'Code Analysis', 'Free Access'] },
    { id: 106, name: 'DeepAI', url: 'https://deepai.org', category: 'Coding & Development', pricing: 'Freemium', rating: 4.2, description: 'AI tools including code generation', features: ['Code Generation', 'AI Tools', 'API Access'] },
    { id: 107, name: 'Salesforce Platform', url: 'https://www.salesforce.com', category: 'Coding & Development', pricing: 'Enterprise', rating: 4.4, description: 'Enterprise platform with AI development tools', features: ['Enterprise Platform', 'AI Development', 'CRM Integration'] },
    { id: 108, name: 'Claude', url: 'https://claude.ai', category: 'Coding & Development', pricing: 'Freemium', rating: 4.6, description: 'AI assistant specialized in code analysis', features: ['Code Analysis', 'AI Assistant', 'Safe AI'] },
    { id: 109, name: 'Google AI Studio', url: 'https://aistudio.google.com', category: 'Coding & Development', pricing: 'Free', rating: 4.3, description: 'Google\'s AI development platform', features: ['AI Development', 'Google Integration', 'Model Training'] },
    { id: 110, name: 'Lovable', url: 'https://lovable.dev/', category: 'Coding & Development', pricing: 'Freemium', rating: 4.1, description: 'AI-powered development platform', features: ['Development Platform', 'AI Coding', 'Rapid Prototyping'] },
    { id: 111, name: 'Miro', url: 'https://miro.com', category: 'Coding & Development', pricing: 'Freemium', rating: 4.2, description: 'Collaboration tool with AI features for developers', features: ['Collaboration', 'Visual Planning', 'Team Tools'] },
    { id: 112, name: 'Hugging Face', url: 'https://huggingface.co', category: 'Coding & Development', pricing: 'Freemium', rating: 4.5, description: 'AI model hub and development platform', features: ['Model Hub', 'Open Source', 'Community'] },

    // Video & Animation
    { id: 113, name: 'OpenAI (Sora)', url: 'https://openai.com/sora', category: 'Video & Animation', pricing: 'Paid', rating: 4.6, description: 'Advanced AI video generation platform', features: ['Video Generation', 'High Quality', 'Text-to-Video'] },
    { id: 114, name: 'Sora', url: 'https://openai.com/sora', category: 'Video & Animation', pricing: 'Paid', rating: 4.6, description: 'OpenAI\'s text-to-video AI model', features: ['Text-to-Video', 'Realistic Videos', 'AI Generation'] },
    { id: 115, name: 'CapCut', url: 'https://www.capcut.com', category: 'Video & Animation', pricing: 'Free', rating: 4.5, description: 'AI-powered video editing app', features: ['Video Editing', 'AI Effects', 'Mobile App'] },
    { id: 116, name: 'Kling AI', url: 'https://klingai.com/global/', category: 'Video & Animation', pricing: 'Paid', rating: 4.4, description: 'AI video and animation generation', features: ['Video Generation', 'Animation', 'AI Creation'] },
    { id: 117, name: 'Cutout.Pro', url: 'https://www.cutout.pro', category: 'Video & Animation', pricing: 'Freemium', rating: 4.3, description: 'AI video editing and background removal', features: ['Video Editing', 'Background Removal', 'AI Tools'] },
    { id: 118, name: 'Picsart', url: 'https://picsart.com', category: 'Video & Animation', pricing: 'Freemium', rating: 4.3, description: 'Creative platform with video AI features', features: ['Creative Platform', 'Video AI', 'Animation Tools'] },
    { id: 119, name: 'Pixlr', url: 'https://pixlr.com', category: 'Video & Animation', pricing: 'Freemium', rating: 4.2, description: 'Online editor with video capabilities', features: ['Online Editor', 'Video Tools', 'AI Effects'] },
    { id: 120, name: 'VEED.IO', url: 'https://www.veed.io', category: 'Video & Animation', pricing: 'Freemium', rating: 4.5, description: 'AI video editing platform', features: ['Video Editing', 'AI Subtitles', 'Online Editor'] },
    { id: 121, name: 'Wondershare', url: 'https://www.wondershare.com', category: 'Video & Animation', pricing: 'Paid', rating: 4.3, description: 'Multimedia software with AI video tools', features: ['Multimedia Software', 'AI Video', 'Professional Tools'] },
    { id: 122, name: 'Zeemo', url: 'https://zeemo.ai/?via=wenhua', category: 'Video & Animation', pricing: 'Freemium', rating: 4.3, description: 'AI subtitle generation for videos', features: ['Subtitle Generation', 'Video Tools', 'Multi-language'] },
    { id: 123, name: 'PixVerse', url: 'https://pixverse.ai', category: 'Video & Animation', pricing: 'Freemium', rating: 4.2, description: 'AI video creation and animation platform', features: ['Video Creation', 'Animation', 'AI Generation'] },
    { id: 124, name: 'Candy AI', url: 'https://candy.ai/', category: 'Video & Animation', pricing: 'Paid', rating: 3.9, description: 'AI video and animation generation', features: ['Video Generation', 'Animation', 'Creative AI'] },

    // Daily Life
    { id: 125, name: 'Thomson Reuters', url: 'https://www.thomsonreuters.com', category: 'Daily Life', pricing: 'Enterprise', rating: 4.2, description: 'Professional services with AI insights', features: ['Professional Services', 'News', 'AI Insights'] },
    { id: 126, name: 'Wondershare', url: 'https://www.wondershare.com', category: 'Daily Life', pricing: 'Paid', rating: 4.3, description: 'Multimedia software for daily tasks', features: ['Multimedia Software', 'Daily Tools', 'User-friendly'] },
    { id: 127, name: 'Genspark', url: 'https://www.genspark.ai/', category: 'Daily Life', pricing: 'Freemium', rating: 4.1, description: 'AI platform for everyday tasks', features: ['Daily Tasks', 'AI Assistant', 'Productivity'] },
    { id: 128, name: 'SpoiledChild', url: 'https://www.spoiledchild.com/', category: 'Daily Life', pricing: 'Paid', rating: 4.0, description: 'AI-powered skincare and wellness', features: ['Skincare', 'Wellness', 'Personalization'] },
    { id: 129, name: 'Wanderboat', url: 'https://wanderboat.ai/home', category: 'Daily Life', pricing: 'Freemium', rating: 4.2, description: 'AI travel planning and assistance', features: ['Travel Planning', 'AI Assistant', 'Trip Organization'] },
    { id: 130, name: 'Gorgias', url: 'https://www.gorgias.com', category: 'Daily Life', pricing: 'Paid', rating: 4.1, description: 'AI customer service for daily interactions', features: ['Customer Service', 'Chat Support', 'Automation'] },
    { id: 131, name: 'HitPaw FotorPea', url: 'https://www.hitpaw.com/fotorpea-photo-enhancer.html', category: 'Daily Life', pricing: 'Freemium', rating: 4.3, description: 'AI photo enhancement tool', features: ['Photo Enhancement', 'Image Quality', 'Easy to Use'] },
    { id: 132, name: 'Wondershare Virbo', url: 'https://virbo.wondershare.com', category: 'Daily Life', pricing: 'Freemium', rating: 4.2, description: 'AI avatar and video creation for daily use', features: ['AI Avatar', 'Video Creation', 'Personal Use'] },
    { id: 133, name: 'Chat & Ask AI', url: 'https://askaichat.app/', category: 'Daily Life', pricing: 'Freemium', rating: 4.0, description: 'Daily AI assistant and chat companion', features: ['AI Assistant', 'Daily Help', 'Chat Companion'] },
    { id: 134, name: 'DreamFace', url: 'https://www.dreamfaceapp.com/', category: 'Daily Life', pricing: 'Freemium', rating: 3.8, description: 'AI face enhancement and beauty app', features: ['Face Enhancement', 'Beauty Filters', 'Photo Editing'] },
    { id: 135, name: 'Design Bundles', url: 'https://designbundles.net', category: 'Daily Life', pricing: 'Paid', rating: 4.1, description: 'Design resources with AI features', features: ['Design Resources', 'Creative Assets', 'Templates'] },
    { id: 136, name: 'Artbreeder', url: 'https://www.artbreeder.com', category: 'Daily Life', pricing: 'Freemium', rating: 4.4, description: 'AI art creation for personal projects', features: ['Art Creation', 'Image Breeding', 'Creative Tools'] },

    // Legal & Finance
    { id: 137, name: 'Thomson Reuters', url: 'https://www.thomsonreuters.com', category: 'Legal & Finance', pricing: 'Enterprise', rating: 4.2, description: 'Professional legal and financial services', features: ['Legal Services', 'Financial Data', 'Professional Tools'] },
    { id: 138, name: 'Abacus.AI', url: 'https://abacus.ai', category: 'Legal & Finance', pricing: 'Enterprise', rating: 4.4, description: 'AI platform for financial analysis', features: ['Financial Analysis', 'Predictive AI', 'Enterprise'] },
    { id: 139, name: 'MathGPT', url: 'https://math-gpt.org/', category: 'Legal & Finance', pricing: 'Free', rating: 4.2, description: 'AI math solver for financial calculations', features: ['Math Solver', 'Financial Calculations', 'Problem Solving'] },
    { id: 140, name: 'Casetext', url: 'https://casetext.com', category: 'Legal & Finance', pricing: 'Paid', rating: 4.5, description: 'AI legal research and case analysis', features: ['Legal Research', 'Case Analysis', 'AI Assistant'] },
    { id: 141, name: 'Onfido', url: 'https://onfido.com', category: 'Legal & Finance', pricing: 'Enterprise', rating: 4.3, description: 'AI identity verification and compliance', features: ['Identity Verification', 'Compliance', 'Security'] },
    { id: 142, name: 'Law Insider', url: 'https://www.lawinsider.com', category: 'Legal & Finance', pricing: 'Freemium', rating: 4.1, description: 'AI legal contract analysis', features: ['Contract Analysis', 'Legal Database', 'Document Review'] },
    { id: 143, name: 'MacroMicro', url: 'https://en.macromicro.me/', category: 'Legal & Finance', pricing: 'Freemium', rating: 4.2, description: 'AI-powered financial market analysis', features: ['Market Analysis', 'Financial Data', 'Economic Insights'] },
    { id: 144, name: 'GVA NDA Check', url: 'https://ai-con.lawyer/', category: 'Legal & Finance', pricing: 'Free', rating: 4.0, description: 'AI contract review and analysis', features: ['Contract Review', 'NDA Analysis', 'Legal AI'] },
    { id: 145, name: 'FinChat.io', url: 'https://finchat.io', category: 'Legal & Finance', pricing: 'Freemium', rating: 4.3, description: 'AI financial chat and analysis', features: ['Financial Chat', 'Investment Analysis', 'AI Assistant'] },
    { id: 146, name: 'StockStory', url: 'https://stockstory.org/', category: 'Legal & Finance', pricing: 'Free', rating: 4.1, description: 'AI stock market analysis and stories', features: ['Stock Analysis', 'Market Stories', 'Investment Insights'] },
    { id: 147, name: 'AInvest', url: 'https://www.ainvest.com/', category: 'Legal & Finance', pricing: 'Freemium', rating: 4.2, description: 'AI investment platform and advisor', features: ['Investment Platform', 'AI Advisor', 'Portfolio Management'] },
    { id: 148, name: 'Filevine', url: 'https://www.filevine.com', category: 'Legal & Finance', pricing: 'Paid', rating: 4.3, description: 'AI legal case management platform', features: ['Case Management', 'Legal Workflow', 'Document Management'] },

    // Business Management
    { id: 149, name: 'Notion', url: 'https://www.notion.so', category: 'Business Management', pricing: 'Freemium', rating: 4.5, description: 'AI-powered workspace and productivity platform', features: ['Workspace', 'Productivity', 'Collaboration'] },
    { id: 150, name: 'Salesforce Platform', url: 'https://www.salesforce.com', category: 'Business Management', pricing: 'Enterprise', rating: 4.4, description: 'AI-enhanced CRM and business platform', features: ['CRM', 'Business Automation', 'AI Insights'] },
    { id: 151, name: 'Salesforce CN', url: 'https://www.salesforce.com/in/?ir=1', category: 'Business Management', pricing: 'Enterprise', rating: 4.4, description: 'Salesforce platform for international markets', features: ['CRM', 'International', 'Business Tools'] },
    { id: 152, name: 'Jotform AI Agents', url: 'https://www.jotform.com', category: 'Business Management', pricing: 'Freemium', rating: 4.2, description: 'AI form builder and workflow automation', features: ['Form Builder', 'Workflow Automation', 'AI Agents'] },
    { id: 153, name: 'HubSpot', url: 'https://www.hubspot.com', category: 'Business Management', pricing: 'Freemium', rating: 4.3, description: 'AI marketing and sales platform', features: ['Marketing Automation', 'Sales Tools', 'CRM'] },
    { id: 154, name: 'Miro', url: 'https://miro.com', category: 'Business Management', pricing: 'Freemium', rating: 4.2, description: 'AI collaboration and visual workspace', features: ['Visual Collaboration', 'Whiteboard', 'Team Tools'] },
    { id: 155, name: 'Airtable', url: 'https://airtable.com', category: 'Business Management', pricing: 'Freemium', rating: 4.1, description: 'AI database and project management', features: ['Database', 'Project Management', 'Automation'] },
    { id: 156, name: 'Anthropic', url: 'https://www.anthropic.com', category: 'Business Management', pricing: 'Enterprise', rating: 4.5, description: 'AI safety and business applications', features: ['AI Safety', 'Business AI', 'Enterprise'] },
    { id: 157, name: 'Zapier', url: 'https://zapier.com', category: 'Business Management', pricing: 'Freemium', rating: 4.4, description: 'AI workflow automation platform', features: ['Workflow Automation', 'App Integration', 'No-code'] },
    { id: 158, name: 'tawk.to Hire Chat Agents', url: 'https://www.tawk.to', category: 'Business Management', pricing: 'Free', rating: 4.0, description: 'AI chat support for businesses', features: ['Chat Support', 'Customer Service', 'Live Chat'] },
    { id: 159, name: 'Windsurf', url: 'https://windsurf.com/', category: 'Business Management', pricing: 'Paid', rating: 4.1, description: 'AI business intelligence platform', features: ['Business Intelligence', 'Analytics', 'Data Insights'] },
    { id: 160, name: 'Klaviyo', url: 'https://www.klaviyo.com', category: 'Business Management', pricing: 'Freemium', rating: 4.3, description: 'AI marketing automation for e-commerce', features: ['Marketing Automation', 'E-commerce', 'Email Marketing'] },

    // Marketing & Advertising
    { id: 161, name: 'ChatGPT', url: 'https://chat.openai.com', category: 'Marketing & Advertising', pricing: 'Freemium', rating: 4.8, description: 'AI content creation for marketing campaigns', features: ['Content Creation', 'Marketing Copy', 'Campaign Ideas'] },
    { id: 162, name: 'Adobe', url: 'https://www.adobe.com', category: 'Marketing & Advertising', pricing: 'Paid', rating: 4.5, description: 'Creative suite with AI marketing tools', features: ['Creative Suite', 'Marketing Tools', 'Design AI'] },
    { id: 163, name: 'Salesforce CN', url: 'https://www.salesforce.com/in/?ir=1', category: 'Marketing & Advertising', pricing: 'Enterprise', rating: 4.4, description: 'CRM with AI marketing capabilities', features: ['CRM', 'Marketing Automation', 'Lead Generation'] },
    { id: 164, name: 'HubSpot', url: 'https://www.hubspot.com', category: 'Marketing & Advertising', pricing: 'Freemium', rating: 4.3, description: 'Inbound marketing platform with AI', features: ['Inbound Marketing', 'Lead Management', 'Analytics'] },
    { id: 165, name: 'Miro', url: 'https://miro.com', category: 'Marketing & Advertising', pricing: 'Freemium', rating: 4.2, description: 'Visual collaboration for marketing teams', features: ['Visual Collaboration', 'Marketing Planning', 'Team Tools'] },
    { id: 166, name: 'ZeroGPT', url: 'https://www.zerogpt.com', category: 'Marketing & Advertising', pricing: 'Free', rating: 4.1, description: 'AI detection for marketing content', features: ['AI Detection', 'Content Verification', 'Quality Check'] },
    { id: 167, name: 'Beacons', url: 'https://www.beacons.ai', category: 'Marketing & Advertising', pricing: 'Freemium', rating: 4.2, description: 'Creator marketing and link management', features: ['Creator Marketing', 'Link Management', 'Analytics'] },
    { id: 168, name: 'Mailchimp', url: 'https://mailchimp.com', category: 'Marketing & Advertising', pricing: 'Freemium', rating: 4.4, description: 'AI email marketing automation', features: ['Email Marketing', 'Automation', 'Audience Segmentation'] },
    { id: 169, name: 'Otter.ai', url: 'https://otter.ai', category: 'Marketing & Advertising', pricing: 'Freemium', rating: 4.6, description: 'Meeting transcription for marketing teams', features: ['Meeting Transcription', 'Team Collaboration', 'Note Taking'] },
    { id: 170, name: 'Klaviyo', url: 'https://www.klaviyo.com', category: 'Marketing & Advertising', pricing: 'Freemium', rating: 4.3, description: 'E-commerce marketing automation', features: ['E-commerce Marketing', 'Customer Segmentation', 'Personalization'] },
    { id: 171, name: 'Framer', url: 'https://www.framer.com', category: 'Marketing & Advertising', pricing: 'Freemium', rating: 4.1, description: 'AI website builder for marketing', features: ['Website Builder', 'Marketing Sites', 'No-code'] },
    { id: 172, name: 'VidIQ', url: 'https://vidiq.com', category: 'Marketing & Advertising', pricing: 'Freemium', rating: 4.2, description: 'AI YouTube marketing optimization', features: ['YouTube Marketing', 'Video SEO', 'Analytics'] },

    // Health & Wellness
    { id: 173, name: 'MediSphere', url: 'https://dribbble.com/shots/25673644--MediSphere-Empowering-Doctors-Staff', category: 'Health & Wellness', pricing: 'Enterprise', rating: 4.3, description: 'AI platform for healthcare professionals', features: ['Healthcare AI', 'Medical Tools', 'Professional'] },
    { id: 174, name: 'SpoiledChild', url: 'https://www.spoiledchild.com/', category: 'Health & Wellness', pricing: 'Paid', rating: 4.0, description: 'AI skincare and beauty recommendations', features: ['Skincare AI', 'Beauty Tech', 'Personalization'] },
    { id: 175, name: 'Brain.fm', url: 'https://www.brain.fm', category: 'Health & Wellness', pricing: 'Freemium', rating: 4.4, description: 'AI-generated music for focus and wellness', features: ['Focus Music', 'Wellness Audio', 'Neuroscience'] },
    { id: 176, name: 'Pi', url: 'https://pi.ai', category: 'Health & Wellness', pricing: 'Free', rating: 4.1, description: 'AI personal assistant for wellness', features: ['Personal Assistant', 'Wellness Support', 'Conversational AI'] },
    { id: 177, name: 'clickworker', url: 'https://www.clickworker.com', category: 'Health & Wellness', pricing: 'Paid', rating: 3.9, description: 'AI data services for health research', features: ['Data Services', 'Health Research', 'Crowdsourcing'] },
    { id: 178, name: 'Freed', url: 'https://chromewebstore.google.com/detail/freed-ai-extension/fbemknilbghlokgjhomnikdkljnbpgmo', category: 'Health & Wellness', pricing: 'Free', rating: 4.0, description: 'AI productivity extension for wellness', features: ['Productivity Extension', 'Wellness Focus', 'Browser Tool'] },
    { id: 179, name: 'Replika', url: 'https://replika.com', category: 'Health & Wellness', pricing: 'Freemium', rating: 4.2, description: 'AI companion for emotional wellness', features: ['AI Companion', 'Emotional Support', 'Mental Health'] },
    { id: 180, name: 'Lecturio', url: 'https://www.lecturio.com', category: 'Health & Wellness', pricing: 'Paid', rating: 4.3, description: 'AI medical education platform', features: ['Medical Education', 'Learning AI', 'Professional Training'] },
    { id: 181, name: 'Heidi Health', url: 'https://www.heidihealth.com.au', category: 'Health & Wellness', pricing: 'Paid', rating: 4.4, description: 'AI clinical documentation for healthcare', features: ['Clinical Documentation', 'Healthcare AI', 'Medical Records'] },
    { id: 182, name: 'Carepatron', url: 'https://www.carepatron.com', category: 'Health & Wellness', pricing: 'Freemium', rating: 4.2, description: 'AI practice management for healthcare', features: ['Practice Management', 'Healthcare Tools', 'Patient Care'] },
    { id: 183, name: 'PlantIn', url: 'https://plantin.me', category: 'Health & Wellness', pricing: 'Freemium', rating: 4.1, description: 'AI plant care and identification app', features: ['Plant Care', 'Plant ID', 'Gardening AI'] },

    // Business Research
    { id: 184, name: 'HEROZ', url: 'https://heroz.co.jp/', category: 'Business Research', pricing: 'Enterprise', rating: 4.2, description: 'AI research platform for business intelligence', features: ['Business Intelligence', 'Research AI', 'Enterprise'] },
    { id: 185, name: 'Pionex', url: 'https://www.pionex.com', category: 'Business Research', pricing: 'Freemium', rating: 4.1, description: 'AI trading and crypto research platform', features: ['Trading AI', 'Crypto Research', 'Automated Trading'] },
    { id: 186, name: 'SHIFT AI', url: 'https://shift-ai.co.jp/', category: 'Business Research', pricing: 'Enterprise', rating: 4.0, description: 'AI business transformation research', features: ['Business Transformation', 'AI Research', 'Enterprise'] },
    { id: 187, name: 'Hotpot.ai', url: 'https://hotpot.ai', category: 'Business Research', pricing: 'Freemium', rating: 4.3, description: 'AI content creation for business research', features: ['Content Creation', 'Business Graphics', 'Research Tools'] },
    { id: 188, name: 'starryai', url: 'https://starryai.com', category: 'Business Research', pricing: 'Freemium', rating: 4.2, description: 'AI art generation for business presentations', features: ['Art Generation', 'Business Graphics', 'Presentation Tools'] },
    { id: 189, name: 'WebsCrypto', url: 'https://webscrypto.com/', category: 'Business Research', pricing: 'Freemium', rating: 3.9, description: 'AI cryptocurrency research and analysis', features: ['Crypto Research', 'Market Analysis', 'Trading Insights'] },
    { id: 190, name: 'Rosebud AI', url: 'https://rosebud.ai', category: 'Business Research', pricing: 'Enterprise', rating: 4.1, description: 'AI synthetic data for business research', features: ['Synthetic Data', 'Business Research', 'Data Generation'] },
    { id: 191, name: 'MyShell', url: 'https://myshell.ai', category: 'Business Research', pricing: 'Freemium', rating: 4.0, description: 'AI platform for business automation research', features: ['Business Automation', 'Research Tools', 'AI Platform'] },
    { id: 192, name: 'LuxAlgo', url: 'https://luxalgo.com', category: 'Business Research', pricing: 'Paid', rating: 4.3, description: 'AI trading research and analytics', features: ['Trading Research', 'Market Analytics', 'Technical Analysis'] },
    { id: 193, name: 'Composer', url: 'https://www.composer.trade', category: 'Business Research', pricing: 'Freemium', rating: 4.2, description: 'AI investment research and portfolio building', features: ['Investment Research', 'Portfolio Building', 'AI Trading'] },
    { id: 194, name: '200+ ChatGPT Mega-Prompts for Business', url: 'https://www.godofprompt.ai/', category: 'Business Research', pricing: 'Paid', rating: 4.4, description: 'Business research prompts and templates', features: ['Business Prompts', 'Research Templates', 'AI Optimization'] },
    { id: 195, name: '200+ ChatGPT Mega-Prompts for Solopreneurs', url: 'https://www.godofprompt.ai/', category: 'Business Research', pricing: 'Paid', rating: 4.3, description: 'Solopreneur research and business prompts', features: ['Solopreneur Tools', 'Business Research', 'AI Prompts'] },

    // Education & Translation
    { id: 196, name: 'DeepSeek Chat', url: 'https://www.deepseek.com', category: 'Education & Translation', pricing: 'Free', rating: 4.5, description: 'AI educational assistant and translator', features: ['Educational AI', 'Translation', 'Learning Support'] },
    { id: 197, name: 'DeepL', url: 'https://www.deepl.com', category: 'Education & Translation', pricing: 'Freemium', rating: 4.7, description: 'Premium AI translation service', features: ['High-quality Translation', 'Multiple Languages', 'Context Aware'] },
    { id: 198, name: 'Notion', url: 'https://www.notion.so', category: 'Education & Translation', pricing: 'Freemium', rating: 4.5, description: 'Educational workspace with AI features', features: ['Educational Workspace', 'Note Taking', 'Collaboration'] },
    { id: 199, name: 'Perplexity AI', url: 'https://www.perplexity.ai', category: 'Education & Translation', pricing: 'Freemium', rating: 4.6, description: 'AI research and educational assistant', features: ['Research Assistant', 'Educational Support', 'Real-time Information'] },
    { id: 200, name: 'ZeroGPT', url: 'https://www.zerogpt.com', category: 'Education & Translation', pricing: 'Free', rating: 4.1, description: 'AI detection for educational content', features: ['AI Detection', 'Educational Integrity', 'Content Verification'] },
    { id: 201, name: 'Airtable', url: 'https://airtable.com', category: 'Education & Translation', pricing: 'Freemium', rating: 4.1, description: 'Database tool for educational organization', features: ['Database', 'Educational Organization', 'Collaboration'] },
    { id: 202, name: 'Poe', url: 'https://poe.com', category: 'Education & Translation', pricing: 'Freemium', rating: 4.4, description: 'AI chat platform for learning', features: ['AI Chat', 'Learning Support', 'Multiple Models'] },
    { id: 203, name: 'TurboScribe', url: 'https://turboscribe.ai', category: 'Education & Translation', pricing: 'Freemium', rating: 4.4, description: 'AI transcription for educational content', features: ['Transcription', 'Educational Content', 'Multi-language'] },
    { id: 204, name: 'Monica', url: 'https://monica.im', category: 'Education & Translation', pricing: 'Freemium', rating: 4.3, description: 'AI assistant for learning and translation', features: ['Learning Assistant', 'Translation', 'Browser Extension'] },
    { id: 205, name: 'Gauth', url: 'https://www.gauthmath.com', category: 'Education & Translation', pricing: 'Free', rating: 4.2, description: 'AI math solver and educational tool', features: ['Math Solver', 'Step-by-step Solutions', 'Educational Support'] },
    { id: 206, name: 'Scribbr', url: 'https://www.scribbr.com', category: 'Education & Translation', pricing: 'Paid', rating: 4.4, description: 'Academic writing and editing service', features: ['Academic Writing', 'Editing Service', 'Citation Tools'] },
    { id: 207, name: 'Anthropic', url: 'https://www.anthropic.com', category: 'Education & Translation', pricing: 'Enterprise', rating: 4.5, description: 'Safe AI for educational applications', features: ['Safe AI', 'Educational AI', 'Research Support'] },

    // Chatbots & Virtual Companions
    { id: 208, name: 'ChatGPT', url: 'https://chat.openai.com', category: 'Chatbots & Virtual Companions', pricing: 'Freemium', rating: 4.8, description: 'Advanced conversational AI assistant', features: ['Conversational AI', 'Multi-purpose', 'Advanced Reasoning'] },
    { id: 209, name: 'OpenAI', url: 'https://openai.com', category: 'Chatbots & Virtual Companions', pricing: 'Paid', rating: 4.7, description: 'AI platform with chatbot capabilities', features: ['AI Platform', 'Chatbots', 'API Access'] },
    { id: 210, name: 'Google Gemini', url: 'https://gemini.google.com', category: 'Chatbots & Virtual Companions', pricing: 'Free', rating: 4.4, description: 'Google\'s advanced AI chatbot', features: ['Google AI', 'Multimodal', 'Integration'] },
    { id: 211, name: 'DeepSeek Chat', url: 'https://www.deepseek.com', category: 'Chatbots & Virtual Companions', pricing: 'Free', rating: 4.5, description: 'Advanced AI chat assistant', features: ['Chat Assistant', 'Deep Understanding', 'Free Access'] },
    { id: 212, name: 'Grok', url: 'https://grok.x.ai', category: 'Chatbots & Virtual Companions', pricing: 'Paid', rating: 4.3, description: 'X\'s AI chatbot with real-time information', features: ['Real-time Info', 'Social Media', 'Conversational'] },
    { id: 213, name: 'Janitor AI', url: 'https://www.janitorai.com', category: 'Chatbots & Virtual Companions', pricing: 'Freemium', rating: 4.1, description: 'Character-based AI chatbot platform', features: ['Character Chatbots', 'Role-play', 'Customizable'] },
    { id: 214, name: 'Claude', url: 'https://claude.ai', category: 'Chatbots & Virtual Companions', pricing: 'Freemium', rating: 4.6, description: 'Safe and helpful AI assistant', features: ['Safe AI', 'Helpful Assistant', 'Long Conversations'] },
    { id: 215, name: 'SPICYCHAT.AI', url: 'https://spicychat.ai', category: 'Chatbots & Virtual Companions', pricing: 'Freemium', rating: 3.9, description: 'AI chat platform with character interactions', features: ['Character Chat', 'Interactive AI', 'Customizable'] },
    { id: 216, name: 'Jotform AI Agents', url: 'https://www.jotform.com', category: 'Chatbots & Virtual Companions', pricing: 'Freemium', rating: 4.2, description: 'AI agents for form interactions', features: ['AI Agents', 'Form Interaction', 'Automation'] },
    { id: 217, name: 'LOVESCAPE', url: 'https://lovescape.com/', category: 'Chatbots & Virtual Companions', pricing: 'Paid', rating: 3.8, description: 'AI companion platform for relationships', features: ['AI Companion', 'Relationship Support', 'Virtual Dating'] },
    { id: 218, name: 'CrushOn.AI', url: 'https://crushon.ai', category: 'Chatbots & Virtual Companions', pricing: 'Freemium', rating: 4.0, description: 'AI character chat and companion platform', features: ['Character Chat', 'AI Companions', 'Interactive'] },
    { id: 219, name: 'ZeroGPT', url: 'https://www.zerogpt.com', category: 'Chatbots & Virtual Companions', pricing: 'Free', rating: 4.1, description: 'AI detection and chatbot analysis', features: ['AI Detection', 'Chatbot Analysis', 'Content Verification'] },

    // Office & Productivity
    { id: 220, name: 'ChatGPT', url: 'https://chat.openai.com', category: 'Office & Productivity', pricing: 'Freemium', rating: 4.8, description: 'AI assistant for office tasks and productivity', features: ['Office Tasks', 'Productivity', 'Writing Assistant'] },
    { id: 221, name: 'Google Gemini', url: 'https://gemini.google.com', category: 'Office & Productivity', pricing: 'Free', rating: 4.4, description: 'Google\'s AI for productivity tasks', features: ['Google Integration', 'Productivity', 'Multi-modal'] },
    { id: 222, name: 'DeepSeek Chat', url: 'https://www.deepseek.com', category: 'Office & Productivity', pricing: 'Free', rating: 4.5, description: 'AI assistant for office productivity', features: ['Office Assistant', 'Productivity Tools', 'Analysis'] },
    { id: 223, name: 'Grok', url: 'https://grok.x.ai', category: 'Office & Productivity', pricing: 'Paid', rating: 4.3, description: 'AI assistant with real-time information access', features: ['Real-time Info', 'Productivity', 'Current Events'] },
    { id: 224, name: 'Notion', url: 'https://www.notion.so', category: 'Office & Productivity', pricing: 'Freemium', rating: 4.5, description: 'All-in-one workspace with AI features', features: ['Workspace', 'Note Taking', 'Project Management'] },
    { id: 225, name: 'Salesforce Platform', url: 'https://www.salesforce.com', category: 'Office & Productivity', pricing: 'Enterprise', rating: 4.4, description: 'Enterprise productivity platform with AI', features: ['Enterprise Platform', 'CRM', 'Business Tools'] },
    { id: 226, name: 'Perplexity AI', url: 'https://www.perplexity.ai', category: 'Office & Productivity', pricing: 'Freemium', rating: 4.6, description: 'AI research assistant for productivity', features: ['Research Assistant', 'Information Search', 'Productivity'] },
    { id: 227, name: 'Claude', url: 'https://claude.ai', category: 'Office & Productivity', pricing: 'Freemium', rating: 4.6, description: 'AI assistant for office work and analysis', features: ['Office Work', 'Analysis', 'Document Processing'] },
    { id: 228, name: 'Studocu', url: 'https://www.studocu.com', category: 'Office & Productivity', pricing: 'Freemium', rating: 4.3, description: 'Document sharing and AI study tools', features: ['Document Sharing', 'Study Tools', 'Collaboration'] },
    { id: 229, name: 'Jotform AI Agents', url: 'https://www.jotform.com', category: 'Office & Productivity', pricing: 'Freemium', rating: 4.2, description: 'AI form builder and workflow automation', features: ['Form Builder', 'Workflow Automation', 'Productivity'] },
    { id: 230, name: 'HubSpot', url: 'https://www.hubspot.com', category: 'Office & Productivity', pricing: 'Freemium', rating: 4.3, description: 'Marketing and sales productivity platform', features: ['Marketing Tools', 'Sales Platform', 'CRM'] },
    { id: 231, name: 'Airtable', url: 'https://airtable.com', category: 'Office & Productivity', pricing: 'Freemium', rating: 4.1, description: 'Database and project management tool', features: ['Database', 'Project Management', 'Collaboration'] },

    // Research & Data Analysis
    { id: 232, name: 'Sora', url: 'https://openai.com/sora', category: 'Research & Data Analysis', pricing: 'Paid', rating: 4.6, description: 'AI video research and analysis platform', features: ['Video Research', 'AI Analysis', 'Data Processing'] },
    { id: 233, name: 'Salesforce Platform', url: 'https://www.salesforce.com', category: 'Research & Data Analysis', pricing: 'Enterprise', rating: 4.4, description: 'Enterprise data analysis and research tools', features: ['Data Analysis', 'Business Intelligence', 'Research Tools'] },
    { id: 234, name: 'Perplexity AI', url: 'https://www.perplexity.ai', category: 'Research & Data Analysis', pricing: 'Freemium', rating: 4.6, description: 'AI-powered research and information analysis', features: ['Research Assistant', 'Data Analysis', 'Information Processing'] },
    { id: 235, name: 'Airtable', url: 'https://airtable.com', category: 'Research & Data Analysis', pricing: 'Freemium', rating: 4.1, description: 'Database tool for research data organization', features: ['Database', 'Data Organization', 'Research Management'] },
    { id: 236, name: 'Beacons', url: 'https://www.beacons.ai', category: 'Research & Data Analysis', pricing: 'Freemium', rating: 4.2, description: 'Creator analytics and research platform', features: ['Analytics', 'Creator Research', 'Data Insights'] },
    { id: 237, name: 'Thomson Reuters', url: 'https://www.thomsonreuters.com', category: 'Research & Data Analysis', pricing: 'Enterprise', rating: 4.2, description: 'Professional research and data services', features: ['Professional Research', 'Data Services', 'Analytics'] },
    { id: 238, name: 'Prolific', url: 'https://www.prolific.com', category: 'Research & Data Analysis', pricing: 'Paid', rating: 4.3, description: 'Research participant platform with AI insights', features: ['Research Platform', 'Data Collection', 'AI Insights'] },
    { id: 239, name: 'LINER AI', url: 'https://www.liner.ai', category: 'Research & Data Analysis', pricing: 'Freemium', rating: 4.1, description: 'AI research assistant and web highlighter', features: ['Research Assistant', 'Web Highlighting', 'Information Extraction'] },
    { id: 240, name: '文心一言', url: 'https://yiyan.baidu.com/', category: 'Research & Data Analysis', pricing: 'Free', rating: 4.0, description: 'Chinese AI research and analysis platform', features: ['Chinese AI', 'Research Tools', 'Data Analysis'] },
    { id: 241, name: 'Runway', url: 'https://runwayml.com', category: 'Research & Data Analysis', pricing: 'Freemium', rating: 4.4, description: 'AI research and creative analysis platform', features: ['AI Research', 'Creative Analysis', 'Machine Learning'] },
    { id: 242, name: 'Google AI for Developers', url: 'https://developers.google.com/ai', category: 'Research & Data Analysis', pricing: 'Free', rating: 4.3, description: 'Google\'s AI research and development tools', features: ['AI Research', 'Development Tools', 'Machine Learning'] },
    { id: 243, name: 'Wolfram|Alpha', url: 'https://www.wolframalpha.com', category: 'Research & Data Analysis', pricing: 'Freemium', rating: 4.5, description: 'Computational knowledge and data analysis engine', features: ['Computational Engine', 'Data Analysis', 'Research Tools'] },

    // Interior & Architectural Design
    { id: 244, name: 'Planner 5D', url: 'https://planner5d.com', category: 'Interior & Architectural Design', pricing: 'Freemium', rating: 4.3, description: 'AI-powered interior design and planning tool', features: ['Interior Design', '3D Planning', 'Room Layout'] },
    { id: 245, name: 'Coohom', url: 'https://www.coohom.com', category: 'Interior & Architectural Design', pricing: 'Freemium', rating: 4.2, description: 'AI interior design and 3D rendering platform', features: ['3D Rendering', 'Interior Design', 'Virtual Reality'] },
    { id: 246, name: 'Easy-Peasy.AI', url: 'https://easy-peasy.ai', category: 'Interior & Architectural Design', pricing: 'Freemium', rating: 4.1, description: 'AI content creation for design projects', features: ['Design Content', 'AI Generation', 'Creative Tools'] },
    { id: 247, name: 'Artbreeder', url: 'https://www.artbreeder.com', category: 'Interior & Architectural Design', pricing: 'Freemium', rating: 4.4, description: 'AI image generation for design inspiration', features: ['Image Generation', 'Design Inspiration', 'Creative AI'] },
    { id: 248, name: 'starryai', url: 'https://starryai.com', category: 'Interior & Architectural Design', pricing: 'Freemium', rating: 4.2, description: 'AI art generation for interior design', features: ['Art Generation', 'Design Elements', 'Creative AI'] },
    { id: 249, name: 'Pincel', url: 'https://pincel.app/', category: 'Interior & Architectural Design', pricing: 'Freemium', rating: 4.0, description: 'AI image editing for design projects', features: ['Image Editing', 'Design Tools', 'AI Enhancement'] },
    { id: 250, name: 'mnml.ai', url: 'https://mnml.ai/', category: 'Interior & Architectural Design', pricing: 'Paid', rating: 4.1, description: 'Minimalist AI design platform', features: ['Minimalist Design', 'AI Tools', 'Clean Interface'] },
    { id: 251, name: 'RoomGPT', url: 'https://www.roomgpt.io', category: 'Interior & Architectural Design', pricing: 'Free', rating: 4.3, description: 'AI room design and decoration assistant', features: ['Room Design', 'Decoration Ideas', 'AI Assistant'] },
    { id: 252, name: 'Photoleap', url: 'https://www.photoleapapp.com', category: 'Interior & Architectural Design', pricing: 'Freemium', rating: 4.2, description: 'AI photo editing for design visualization', features: ['Photo Editing', 'Design Visualization', 'AI Effects'] },
    { id: 253, name: 'Collov Virtual Staging AI', url: 'https://www.collov.com', category: 'Interior & Architectural Design', pricing: 'Paid', rating: 4.4, description: 'AI virtual staging for real estate', features: ['Virtual Staging', 'Real Estate', 'AI Furniture'] },
    { id: 254, name: 'Collov AI', url: 'https://www.collov.com', category: 'Interior & Architectural Design', pricing: 'Paid', rating: 4.4, description: 'AI interior design and virtual staging', features: ['Interior Design', 'Virtual Staging', 'AI Decoration'] },
    { id: 255, name: 'Maket', url: 'https://www.maket.ai', category: 'Interior & Architectural Design', pricing: 'Paid', rating: 4.3, description: 'AI architectural design and planning tool', features: ['Architectural Design', 'Floor Plans', 'AI Planning'] }
  ],

  // Utility functions
  getToolsByCategory(category) {
    return this.tools.filter(tool => tool.category === category);
  },

  searchTools(query) {
    const lowercaseQuery = query.toLowerCase();
    return this.tools.filter(tool => 
      tool.name.toLowerCase().includes(lowercaseQuery) ||
      tool.description.toLowerCase().includes(lowercaseQuery) ||
      tool.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
    );
  },

  getToolById(id) {
    return this.tools.find(tool => tool.id === id);
  },

  getToolsByPricing(pricingType) {
    return this.tools.filter(tool => tool.pricing === pricingType);
  },

  getToolsByRating(minRating) {
    return this.tools.filter(tool => tool.rating >= minRating);
  },

  getRandomTools(count = 10) {
    const shuffled = [...this.tools].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  },

  getTrendingTools() {
    // Return tools with high ratings and specific keywords
    return this.tools
      .filter(tool => tool.rating >= 4.5 || 
        tool.features.some(feature => 
          ['trending', 'popular', 'hot'].some(keyword => 
            feature.toLowerCase().includes(keyword)
          )
        )
      )
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 20);
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TOOLS_DATABASE;
} else if (typeof window !== 'undefined') {
  window.TOOLS_DATABASE = TOOLS_DATABASE;
}