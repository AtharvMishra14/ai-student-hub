export type ToolCategory =
  | "Notes & Study"
  | "Presentations"
  | "Research & Writing";

export interface AITool {
  slug: string;
  name: string;
  category: ToolCategory;
  description: string;
  shortDescription: string;
  bestFor: string;
  pricing: string;
  pricingType: "Free" | "Freemium" | "Paid";
  website: string;
  tags: string[];

  academicVerdict: string;

  studentUseCases: {
    title: string;
    description: string;
  }[];

  workflow: {
    step: string;
    description: string;
  }[];

  examplePrompt: string;

  pros: string[];
  cons: string[];

  alternatives: {
    name: string;
    slug: string;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];
}

export const aiTools: AITool[] = [
  // ============================================================
  // NOTES & STUDY
  // ============================================================

  {
    slug: "google-notebooklm",
    name: "Google NotebookLM",
    category: "Notes & Study",
    description:
      "An AI research and study assistant that helps students understand and work with their own documents, notes, course material, and other sources.",
    shortDescription:
      "Study and understand your notes and documents with an AI assistant grounded in your sources.",
    bestFor: "Studying from notes, PDFs, lectures, and course material",
    pricing: "Free access with additional features and limits depending on the plan",
    pricingType: "Freemium",
    website: "https://notebooklm.google.com/",
    tags: ["study", "notes", "PDFs", "research", "summaries"],

    academicVerdict:
      "NotebookLM is particularly useful when a student already has reliable course material and wants help understanding it. Because the workflow is centered around supplied sources, it can be useful for turning lecture notes, readings, and course documents into a more interactive study resource. Students should still check important explanations against their original material.",

    studentUseCases: [
      {
        title: "Study from lecture notes",
        description:
          "Upload or provide relevant course material and use NotebookLM to ask questions about the content instead of repeatedly searching through long documents.",
      },
      {
        title: "Prepare for exams",
        description:
          "Use your course material to identify important concepts, create revision questions, and find areas that need additional study.",
      },
      {
        title: "Understand long documents",
        description:
          "Ask focused questions about lengthy readings, reports, or academic documents and use the responses as a starting point for deeper study.",
      },
    ],

    workflow: [
      {
        step: "Add your course sources",
        description:
          "Start with lecture notes, readings, PDFs, or other material that you are actually expected to study.",
      },
      {
        step: "Ask focused questions",
        description:
          "Ask questions about concepts, relationships, definitions, or sections that you find difficult.",
      },
      {
        step: "Turn the results into revision material",
        description:
          "Use the information to create your own notes, questions, summaries, and revision plan.",
      },
    ],

    examplePrompt:
      "Using only the course material I provided, explain the five most important concepts I need to understand for my upcoming exam. For each concept, give a simple explanation, an example, and one question I can use to test myself.",

    pros: [
      "Useful for working with your own study material",
      "Good fit for document-based studying",
      "Useful for asking questions about long sources",
    ],

    cons: [
      "Quality depends heavily on the sources provided",
      "Students still need to verify important information",
      "Not every academic workflow requires a source-grounded notebook",
    ],

    alternatives: [
      {
        name: "ChatGPT",
        slug: "chatgpt",
      },
      {
        name: "Notion AI",
        slug: "notion-ai",
      },
    ],

    faqs: [
      {
        question: "Is NotebookLM useful for college students?",
        answer:
          "Yes. It can be particularly useful for students who want to study from their own lecture notes, readings, PDFs, and other course material.",
      },
      {
        question: "Can students use NotebookLM for exam preparation?",
        answer:
          "Students can use their course sources to ask questions, review concepts, and create study material for exam preparation.",
      },
      {
        question: "Should I trust every answer from NotebookLM?",
        answer:
          "No. Students should compare important information with their original course material and other reliable sources.",
      },
    ],
  },

  {
    slug: "notion-ai",
    name: "Notion AI",
    category: "Notes & Study",
    description:
      "An AI assistant integrated into Notion that can help students organize notes, summarize information, brainstorm ideas, and improve written content.",
    shortDescription:
      "Organize notes, summarize information, and work with AI directly inside your workspace.",
    bestFor: "Organizing notes, planning coursework, and productivity",
    pricing: "Free access with additional AI features depending on the plan",
    pricingType: "Freemium",
    website: "https://www.notion.com/product/ai",
    tags: ["notes", "productivity", "planning", "writing"],

    academicVerdict:
      "Notion AI is most useful for students who already use Notion as their workspace. Its main advantage is combining notes, planning, documents, and AI assistance in one place. It is better suited to organizing an ongoing academic workflow than simply answering isolated questions.",

    studentUseCases: [
      {
        title: "Organize semester notes",
        description:
          "Keep subjects, lecture notes, assignments, deadlines, and revision material together in a structured workspace.",
      },
      {
        title: "Summarize class material",
        description:
          "Use AI assistance to turn long notes into shorter summaries that can serve as a starting point for revision.",
      },
      {
        title: "Plan assignments",
        description:
          "Break larger assignments into smaller tasks and maintain a structured workspace for deadlines and progress.",
      },
    ],

    workflow: [
      {
        step: "Create a subject workspace",
        description:
          "Organize your subjects, notes, assignments, and deadlines in separate but connected pages.",
      },
      {
        step: "Add your existing material",
        description:
          "Bring your lecture notes and academic information into the relevant pages.",
      },
      {
        step: "Use AI where it saves time",
        description:
          "Summarize, reorganize, brainstorm, or improve drafts while keeping your own academic judgment in the process.",
      },
    ],

    examplePrompt:
      "Turn these lecture notes into a structured revision sheet. Organize the material into key concepts, definitions, examples, and topics I should revise before the exam.",

    pros: [
      "AI is integrated into a broader productivity workspace",
      "Useful for organizing academic information",
      "Good for combining notes and planning",
    ],

    cons: [
      "More useful if you already like the Notion workflow",
      "AI access and limits depend on the plan",
      "Can require time to set up a good workspace",
    ],

    alternatives: [
      {
        name: "Google NotebookLM",
        slug: "google-notebooklm",
      },
      {
        name: "ChatGPT",
        slug: "chatgpt",
      },
    ],

    faqs: [
      {
        question: "Is Notion AI useful for students?",
        answer:
          "It can be useful for students who want to combine notes, planning, documents, and AI assistance in one workspace.",
      },
      {
        question: "Can Notion AI summarize notes?",
        answer:
          "Yes. Students can use AI features within their Notion workspace to summarize and reorganize written material.",
      },
      {
        question: "Is Notion AI free?",
        answer:
          "Notion provides limited AI access depending on the plan, while broader AI functionality is available through eligible paid plans.",
      },
    ],
  },

  {
    slug: "quizlet",
    name: "Quizlet",
    category: "Notes & Study",
    description:
      "A learning platform that helps students create and use flashcards, practice questions, study guides, and other revision activities.",
    shortDescription:
      "Turn study material into flashcards and practice activities for revision.",
    bestFor: "Flashcards, memorization, and exam revision",
    pricing: "Free access with additional features depending on the plan",
    pricingType: "Freemium",
    website: "https://quizlet.com/",
    tags: ["flashcards", "revision", "exams", "practice"],

    academicVerdict:
      "Quizlet is especially useful when the learning task involves memorization and repeated practice. Flashcards and practice activities can complement traditional studying, particularly for terminology, definitions, formulas, and factual material.",

    studentUseCases: [
      {
        title: "Create flashcards",
        description:
          "Turn definitions, terminology, formulas, and important facts into reusable flashcard sets.",
      },
      {
        title: "Practice before exams",
        description:
          "Use practice activities to identify topics that you remember well and topics that need more revision.",
      },
      {
        title: "Review difficult terminology",
        description:
          "Build focused study sets for technical terms, vocabulary, concepts, and definitions.",
      },
    ],

    workflow: [
      {
        step: "Collect important material",
        description:
          "Start with your syllabus, notes, textbook material, or lecturer-provided content.",
      },
      {
        step: "Create a focused study set",
        description:
          "Separate large topics into manageable groups of concepts or terms.",
      },
      {
        step: "Practice repeatedly",
        description:
          "Use retrieval practice to identify weak areas and revisit them rather than simply rereading notes.",
      },
    ],

    examplePrompt:
      "Create a study set from these notes containing the key terms and concepts I need to memorize. Keep each definition concise and suitable for exam revision.",

    pros: [
      "Strong fit for flashcard-based revision",
      "Useful for repeated practice",
      "Can make memorization more structured",
    ],

    cons: [
      "Less suitable for deep open-ended reasoning",
      "Students still need to check generated study material",
      "Some features depend on the plan",
    ],

    alternatives: [
      {
        name: "Google NotebookLM",
        slug: "google-notebooklm",
      },
      {
        name: "ChatGPT",
        slug: "chatgpt",
      },
    ],

    faqs: [
      {
        question: "Is Quizlet useful for college students?",
        answer:
          "Yes. It can be useful for memorization, terminology, definitions, and exam revision.",
      },
      {
        question: "Can Quizlet help with exam preparation?",
        answer:
          "Students can use flashcards and practice activities to reinforce concepts and identify areas that require additional revision.",
      },
      {
        question: "Is Quizlet free?",
        answer:
          "Quizlet offers free access alongside additional features available through paid plans.",
      },
    ],
  },

  {
    slug: "otter-ai",
    name: "Otter.ai",
    category: "Notes & Study",
    description:
      "An AI transcription tool that can convert spoken lectures, meetings, and discussions into searchable text and notes.",
    shortDescription:
      "Transcribe lectures and conversations into searchable notes.",
    bestFor: "Lecture transcription and meeting notes",
    pricing: "Free Basic access with higher limits on paid plans",
    pricingType: "Freemium",
    website: "https://otter.ai/",
    tags: ["transcription", "lectures", "notes", "audio"],

    academicVerdict:
      "Otter.ai can be useful for students who need to revisit spoken information from permitted recordings. Its biggest academic value is reducing the amount of manual transcription required, allowing students to spend more time reviewing and understanding material.",

    studentUseCases: [
      {
        title: "Review recorded lectures",
        description:
          "Create a searchable transcript from permitted lecture recordings and use it when revising difficult sections.",
      },
      {
        title: "Capture group discussions",
        description:
          "Use transcription for project discussions or meetings when all participants have given appropriate permission.",
      },
      {
        title: "Find information quickly",
        description:
          "Search transcripts instead of manually scanning through an entire recording.",
      },
    ],

    workflow: [
      {
        step: "Record with permission",
        description:
          "Only record lectures or meetings when recording is allowed and everyone who needs to consent has done so.",
      },
      {
        step: "Generate the transcript",
        description:
          "Use transcription to turn the recording into searchable text.",
      },
      {
        step: "Review and correct",
        description:
          "Check important terminology and corrections because automated transcription can contain mistakes.",
      },
    ],

    examplePrompt:
      "Turn this lecture transcript into structured revision notes. Separate the material into major concepts, definitions, examples, and topics that I should review again.",

    pros: [
      "Reduces manual transcription work",
      "Searchable transcripts can help with revision",
      "Useful for meetings and discussions",
    ],

    cons: [
      "Transcription accuracy can vary",
      "Recording permissions and privacy matter",
      "Free usage has limits",
    ],

    alternatives: [
      {
        name: "Google NotebookLM",
        slug: "google-notebooklm",
      },
      {
        name: "Notion AI",
        slug: "notion-ai",
      },
    ],

    faqs: [
      {
        question: "Can students use Otter.ai for lectures?",
        answer:
          "Students can use it for permitted lecture recordings to create transcripts and searchable notes.",
      },
      {
        question: "Is Otter.ai free?",
        answer:
          "Otter provides a free Basic plan with usage limits, while paid plans provide higher limits and additional functionality.",
      },
      {
        question: "Should I record a lecture without asking?",
        answer:
          "No. Students should follow their university's recording rules and obtain permission when required.",
      },
    ],
  },

  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "Notes & Study",
    description:
      "A general-purpose AI assistant that students can use for explanations, brainstorming, practice questions, study planning, writing assistance, and many other academic workflows.",
    shortDescription:
      "A versatile AI assistant for explanations, brainstorming, studying, and practice.",
    bestFor: "Explaining concepts, brainstorming, and study assistance",
    pricing: "Free access with additional capabilities available on paid plans",
    pricingType: "Freemium",
    website: "https://chatgpt.com/",
    tags: ["study", "writing", "brainstorming", "explanations"],

    academicVerdict:
      "ChatGPT is highly flexible for student workflows, but its usefulness depends on how specifically the student uses it. It works particularly well as a tutor, brainstorming partner, practice-question generator, and writing assistant. Students should verify factual claims and follow their institution's academic-integrity requirements.",

    studentUseCases: [
      {
        title: "Learn difficult concepts",
        description:
          "Ask for explanations at different levels of complexity, examples, analogies, and step-by-step reasoning.",
      },
      {
        title: "Practice for exams",
        description:
          "Generate practice questions, mock interviews, quizzes, and explanations of incorrect answers.",
      },
      {
        title: "Brainstorm assignments",
        description:
          "Use AI to explore possible approaches, research questions, outlines, and project ideas before producing your own work.",
      },
    ],

    workflow: [
      {
        step: "Explain your academic context",
        description:
          "Tell the AI your subject, level, assignment type, and what you already understand.",
      },
      {
        step: "Ask for a specific learning task",
        description:
          "Request an explanation, quiz, example, outline, or critique instead of simply asking it to complete the work.",
      },
      {
        step: "Check and apply the result",
        description:
          "Verify important claims and use the output as study assistance rather than blindly submitting generated content.",
      },
    ],

    examplePrompt:
      "Act as a tutor for my college course. Explain this concept in simple language first, then give me a technical explanation, one real-world example, and five questions that test whether I actually understand it. Do not give me the answers until I attempt them.",

    pros: [
      "Very flexible across academic tasks",
      "Useful for interactive learning",
      "Can adapt explanations to the student's level",
    ],

    cons: [
      "Can produce incorrect information",
      "Generic prompts often produce generic answers",
      "Academic-integrity rules still apply",
    ],

    alternatives: [
      {
        name: "Google NotebookLM",
        slug: "google-notebooklm",
      },
      {
        name: "Perplexity AI",
        slug: "perplexity-ai",
      },
    ],

    faqs: [
      {
        question: "Can college students use ChatGPT for studying?",
        answer:
          "Yes. Students can use it for explanations, practice questions, brainstorming, study planning, and other learning activities.",
      },
      {
        question: "Can ChatGPT do my college assignment?",
        answer:
          "It can help with brainstorming, explanations, outlines, and feedback, but students should follow their institution's academic-integrity rules and complete work they are required to do themselves.",
      },
      {
        question: "Is ChatGPT free?",
        answer:
          "ChatGPT offers free access, with additional capabilities and limits available through paid plans.",
      },
    ],
  },

  // ============================================================
  // PRESENTATIONS
  // ============================================================

  {
    slug: "gamma",
    name: "Gamma",
    category: "Presentations",
    description:
      "An AI-powered presentation and document creation tool that can turn ideas and written content into structured visual presentations.",
    shortDescription:
      "Generate polished presentations and visual documents from a simple prompt.",
    bestFor: "Creating presentations quickly",
    pricing: "Free access with additional AI generation and export capabilities on paid plans",
    pricingType: "Freemium",
    website: "https://gamma.app/",
    tags: ["presentations", "slides", "design", "AI"],

    academicVerdict:
      "Gamma is useful when a student needs to turn an idea or structured outline into a presentation quickly. Its main benefit is reducing the time spent on initial slide creation. Students should still rewrite and verify the content and make sure the final presentation matches their professor's requirements.",

    studentUseCases: [
      {
        title: "Create a presentation outline",
        description:
          "Start with a topic and use AI assistance to turn it into a logical presentation structure.",
      },
      {
        title: "Build project presentations",
        description:
          "Turn project information into a visual presentation that can later be edited and refined.",
      },
      {
        title: "Improve visual structure",
        description:
          "Use presentation layouts as a starting point instead of manually designing every slide from scratch.",
      },
    ],

    workflow: [
      {
        step: "Define the presentation goal",
        description:
          "Specify your topic, audience, presentation length, and required academic content.",
      },
      {
        step: "Generate the first structure",
        description:
          "Use Gamma to create an initial presentation based on your instructions.",
      },
      {
        step: "Edit and verify",
        description:
          "Replace generic content, verify facts, add your own research, and adapt the slides to your professor's requirements.",
      },
    ],

    examplePrompt:
      "Create a 10-slide college presentation about cloud computing. Include an introduction, key concepts, real-world examples, benefits, limitations, a case study, and a concise conclusion. Keep each slide focused and presentation-friendly.",

    pros: [
      "Fast initial presentation generation",
      "Useful visual layouts",
      "Can reduce repetitive slide-design work",
    ],

    cons: [
      "Generated content still needs editing",
      "Free usage has limitations",
      "Templates may require customization for academic presentations",
    ],

    alternatives: [
      {
        name: "Canva Magic Studio",
        slug: "canva",
      },
      {
        name: "Beautiful.ai",
        slug: "beautiful-ai",
      },
    ],

    faqs: [
      {
        question: "Is Gamma useful for college presentations?",
        answer:
          "Yes. It can help students quickly create an initial presentation structure and visual layout.",
      },
      {
        question: "Is Gamma free?",
        answer:
          "Gamma provides free access with usage limits, while paid plans provide additional generation and export capabilities.",
      },
      {
        question: "Should I submit an AI-generated Gamma presentation directly?",
        answer:
          "Students should review, verify, personalize, and adapt generated presentations before submission.",
      },
    ],
  },

  {
    slug: "canva",
    name: "Canva Magic Studio",
    category: "Presentations",
    description:
      "Canva's AI-powered creative tools help students create presentations, graphics, documents, and other visual content.",
    shortDescription:
      "Create presentations and visual coursework with AI-powered design tools.",
    bestFor: "Presentation design and visual coursework",
    pricing: "Free plan with additional AI features and usage available on paid plans",
    pricingType: "Freemium",
    website: "https://www.canva.com/magic-studio/",
    tags: ["presentations", "design", "graphics", "visuals"],

    academicVerdict:
      "Canva is particularly useful for students who care about presentation design and visual communication. Its strength is combining templates, design tools, and AI assistance, making it useful for presentations, posters, infographics, and other visual coursework.",

    studentUseCases: [
      {
        title: "Design college presentations",
        description:
          "Create visually consistent slides using templates and AI-assisted design features.",
      },
      {
        title: "Create infographics",
        description:
          "Turn research findings or complicated concepts into visual material that is easier to present.",
      },
      {
        title: "Build academic posters",
        description:
          "Create posters for college events, projects, research presentations, or student organizations.",
      },
    ],

    workflow: [
      {
        step: "Collect your content",
        description:
          "Prepare your verified research, key points, images, and required presentation structure.",
      },
      {
        step: "Choose a suitable design",
        description:
          "Start with a presentation or visual template that matches the academic context.",
      },
      {
        step: "Use AI selectively",
        description:
          "Use AI for design assistance or content transformation while keeping the academic information under your control.",
      },
    ],

    examplePrompt:
      "Design a clean and professional 8-slide college presentation about artificial intelligence in healthcare. Use a minimal academic style, short bullet points, clear section headings, and visual elements that support the content rather than distracting from it.",

    pros: [
      "Large range of visual templates",
      "Useful for presentations and other visual assignments",
      "Combines design tools with AI features",
    ],

    cons: [
      "Too many design choices can become distracting",
      "Some features require paid access",
      "Students still need to create and verify the academic content",
    ],

    alternatives: [
      {
        name: "Gamma",
        slug: "gamma",
      },
      {
        name: "Beautiful.ai",
        slug: "beautiful-ai",
      },
    ],

    faqs: [
      {
        question: "Is Canva useful for college students?",
        answer:
          "Yes. It can help students create presentations, posters, infographics, and other visual academic material.",
      },
      {
        question: "Is Canva free for students?",
        answer:
          "Canva has a free plan, while additional features and AI usage are available through paid plans and eligible education offerings.",
      },
      {
        question: "Can Canva create presentations with AI?",
        answer:
          "Canva provides AI-assisted tools that can help with presentation and visual-content creation.",
      },
    ],
  },

  {
    slug: "tome",
    name: "Tome",
    category: "Presentations",
    description:
      "An AI-powered storytelling and presentation platform designed to help users turn ideas into visual presentations.",
    shortDescription:
      "Turn ideas into structured visual presentations with AI assistance.",
    bestFor: "Story-driven presentations",
    pricing: "Availability and features depend on the current plan",
    pricingType: "Freemium",
    website: "https://tome.app/",
    tags: ["presentations", "storytelling", "slides", "design"],

    academicVerdict:
      "Tome can be useful when a presentation needs a clear narrative rather than a collection of disconnected slides. Students can use it to develop the structure of a project explanation, pitch, case study, or presentation before refining the content themselves.",

    studentUseCases: [
      {
        title: "Structure project presentations",
        description:
          "Use a narrative approach to explain a college project from the problem through the proposed solution and results.",
      },
      {
        title: "Create case-study presentations",
        description:
          "Organize a case study into a logical sequence that is easier for an audience to follow.",
      },
      {
        title: "Build presentation drafts",
        description:
          "Generate an initial visual draft that can later be adapted to your university's requirements.",
      },
    ],

    workflow: [
      {
        step: "Define the story",
        description:
          "Decide what your audience needs to understand by the end of the presentation.",
      },
      {
        step: "Create the first presentation draft",
        description:
          "Use the topic and structure to generate an initial visual narrative.",
      },
      {
        step: "Replace generic material",
        description:
          "Add your actual research, data, examples, and conclusions before presenting.",
      },
    ],

    examplePrompt:
      "Create a college project presentation explaining a smart campus application. Structure the presentation around the problem, target users, proposed solution, main features, technology used, benefits, limitations, and conclusion.",

    pros: [
      "Useful for narrative presentation structures",
      "Can speed up presentation drafting",
      "Visual-first approach",
    ],

    cons: [
      "Students need to verify generated information",
      "Not every academic presentation benefits from a storytelling format",
      "Current feature availability can change",
    ],

    alternatives: [
      {
        name: "Gamma",
        slug: "gamma",
      },
      {
        name: "Canva Magic Studio",
        slug: "canva",
      },
    ],

    faqs: [
      {
        question: "Can students use Tome for presentations?",
        answer:
          "Yes. It can be used to create presentation drafts and visual narratives for projects and other college work.",
      },
      {
        question: "Is Tome suitable for academic presentations?",
        answer:
          "It can be useful when the presentation benefits from a strong narrative structure, although students should adapt the result to academic requirements.",
      },
    ],
  },

  {
    slug: "beautiful-ai",
    name: "Beautiful.ai",
    category: "Presentations",
    description:
      "A presentation platform with AI-assisted design features that help users create polished slides while maintaining consistent layouts.",
    shortDescription:
      "Create polished presentations with AI-assisted slide design.",
    bestFor: "Professional-looking academic presentations",
    pricing: "Paid plans with trial and education options depending on eligibility",
    pricingType: "Paid",
    website: "https://www.beautiful.ai/",
    tags: ["presentations", "slides", "design", "templates"],

    academicVerdict:
      "Beautiful.ai is useful for students who want consistent slide design without manually adjusting every layout. It is more focused on presentation design than open-ended academic research, so students should bring their own verified content and use the platform primarily for communicating it clearly.",

    studentUseCases: [
      {
        title: "Create polished project slides",
        description:
          "Use structured layouts to create consistent slides for project demonstrations and academic presentations.",
      },
      {
        title: "Improve visual consistency",
        description:
          "Maintain typography, spacing, and layout consistency across a longer presentation.",
      },
      {
        title: "Reduce formatting work",
        description:
          "Spend less time manually arranging elements and more time refining the actual presentation content.",
      },
    ],

    workflow: [
      {
        step: "Prepare your content",
        description:
          "Write the important facts, arguments, findings, and examples before designing the presentation.",
      },
      {
        step: "Choose an appropriate layout",
        description:
          "Select slide structures that match the type of information being communicated.",
      },
      {
        step: "Refine the presentation",
        description:
          "Check readability, evidence, flow, and whether every visual element supports your message.",
      },
    ],

    examplePrompt:
      "Create a clean academic presentation structure for a college seminar on cybersecurity. Use concise slide titles, one main idea per slide, and layouts suitable for diagrams, comparisons, and technical explanations.",

    pros: [
      "Strong focus on consistent presentation design",
      "Useful structured slide layouts",
      "Can reduce manual formatting work",
    ],

    cons: [
      "Primarily a presentation-design tool",
      "Paid access may be required for continued use",
      "Academic content still needs to come from the student",
    ],

    alternatives: [
      {
        name: "Gamma",
        slug: "gamma",
      },
      {
        name: "Canva Magic Studio",
        slug: "canva",
      },
    ],

    faqs: [
      {
        question: "Is Beautiful.ai useful for college presentations?",
        answer:
          "It can be useful for students who want consistent, polished slide designs without manually formatting every element.",
      },
      {
        question: "Is Beautiful.ai free?",
        answer:
          "Beautiful.ai primarily offers paid plans, with trial and education options depending on the current eligibility and offering.",
      },
    ],
  },

  {
    slug: "slidesai",
    name: "SlidesAI",
    category: "Presentations",
    description:
      "An AI presentation tool that can transform text into presentation slides and support common presentation workflows.",
    shortDescription:
      "Convert written content into presentation slides with AI.",
    bestFor: "Turning assignments and notes into slides",
    pricing: "Free access with additional features available on paid plans",
    pricingType: "Freemium",
    website: "https://www.slidesai.io/",
    tags: ["presentations", "slides", "text-to-slides"],

    academicVerdict:
      "SlidesAI is useful when the student already has written content and needs to transform it into a presentation format. It can save time during the first draft, but the resulting slides should be edited for accuracy, structure, and visual clarity.",

    studentUseCases: [
      {
        title: "Convert assignments into slides",
        description:
          "Use existing written material as the starting point for a presentation draft.",
      },
      {
        title: "Create seminar presentations",
        description:
          "Turn a topic outline into a structured set of presentation slides.",
      },
      {
        title: "Save formatting time",
        description:
          "Reduce the repetitive work involved in converting paragraphs into slide-sized sections.",
      },
    ],

    workflow: [
      {
        step: "Prepare the source text",
        description:
          "Start with your own assignment, notes, research summary, or presentation outline.",
      },
      {
        step: "Generate slides",
        description:
          "Provide the content and let the tool create an initial presentation structure.",
      },
      {
        step: "Edit for presentation quality",
        description:
          "Shorten text, correct errors, add evidence, and make sure every slide communicates one clear idea.",
      },
    ],

    examplePrompt:
      "Convert the following college assignment into a 10-slide presentation. Keep each slide concise, preserve the important evidence, include a clear introduction and conclusion, and suggest where diagrams or charts would improve understanding.",

    pros: [
      "Useful for turning text into slides",
      "Can reduce presentation formatting work",
      "Good fit for existing written material",
    ],

    cons: [
      "Generated slides still need editing",
      "Design quality depends on the input and chosen format",
      "Free usage has limits",
    ],

    alternatives: [
      {
        name: "Gamma",
        slug: "gamma",
      },
      {
        name: "Beautiful.ai",
        slug: "beautiful-ai",
      },
    ],

    faqs: [
      {
        question: "Can SlidesAI turn text into presentations?",
        answer:
          "Yes. Its core workflow is designed around transforming written content into presentation slides.",
      },
      {
        question: "Is SlidesAI free?",
        answer:
          "SlidesAI provides free access alongside paid plans with additional functionality and usage.",
      },
    ],
  },

  // ============================================================
  // RESEARCH & WRITING
  // ============================================================

  {
    slug: "perplexity-ai",
    name: "Perplexity AI",
    category: "Research & Writing",
    description:
      "An AI-powered answer engine that combines conversational responses with web-based research and linked sources.",
    shortDescription:
      "Research topics with conversational answers and linked sources.",
    bestFor: "Initial research and exploring unfamiliar topics",
    pricing: "Free Standard access with additional capabilities on paid plans",
    pricingType: "Freemium",
    website: "https://www.perplexity.ai/",
    tags: ["research", "search", "sources", "citations"],

    academicVerdict:
      "Perplexity can be useful during the early stages of research when a student needs to understand a topic, discover terminology, and locate potentially useful sources. It should be treated as a research starting point rather than a replacement for reading and evaluating the original sources.",

    studentUseCases: [
      {
        title: "Explore unfamiliar topics",
        description:
          "Use conversational search to build an initial understanding of a subject before moving to primary or academic sources.",
      },
      {
        title: "Find starting sources",
        description:
          "Use cited results to discover websites, reports, articles, and other material worth investigating.",
      },
      {
        title: "Build a research direction",
        description:
          "Identify important subtopics and terminology that can improve later searches.",
      },
    ],

    workflow: [
      {
        step: "Start with a focused research question",
        description:
          "Ask a specific question rather than using a broad topic with no defined purpose.",
      },
      {
        step: "Inspect the sources",
        description:
          "Open the cited sources and determine whether they are appropriate for your academic work.",
      },
      {
        step: "Move to original material",
        description:
          "Use the discovered sources as a pathway toward reliable evidence and primary or scholarly material.",
      },
    ],

    examplePrompt:
      "I am researching the impact of serverless computing on application scalability for a college project. Give me an overview of the topic, identify the major concepts I should investigate, and provide sources I can examine directly. Separate established information from areas that require further research.",

    pros: [
      "Useful for initial web research",
      "Provides source links with answers",
      "Good for discovering research directions",
    ],

    cons: [
      "Search results still need evaluation",
      "Not every cited source is suitable for academic citation",
      "Should not replace reading original sources",
    ],

    alternatives: [
      {
        name: "Consensus",
        slug: "consensus",
      },
      {
        name: "Elicit",
        slug: "elicit",
      },
    ],

    faqs: [
      {
        question: "Is Perplexity useful for college research?",
        answer:
          "It can be useful for initial research, topic exploration, terminology discovery, and finding sources to investigate further.",
      },
      {
        question: "Can I cite Perplexity directly in a research paper?",
        answer:
          "Students should generally inspect and cite the original sources rather than treating an AI-generated answer as the underlying academic evidence.",
      },
      {
        question: "Is Perplexity free?",
        answer:
          "Perplexity provides a free Standard plan, with additional features available through paid plans.",
      },
    ],
  },

  {
    slug: "consensus",
    name: "Consensus",
    category: "Research & Writing",
    description:
      "An AI research tool designed to help users search and understand findings from academic research papers.",
    shortDescription:
      "Search academic research and understand findings from scientific papers.",
    bestFor: "Literature discovery and academic research",
    pricing: "Free access with additional research features available on paid plans",
    pricingType: "Freemium",
    website: "https://consensus.app/",
    tags: ["research", "papers", "academic", "literature"],

    academicVerdict:
      "Consensus is particularly relevant to students working with academic literature. It can help narrow broad research questions and identify papers that may be relevant to a topic. Students should still read the original papers and evaluate methodology, sample, limitations, and context before drawing conclusions.",

    studentUseCases: [
      {
        title: "Find relevant papers",
        description:
          "Search academic literature around a specific research question instead of relying only on general web results.",
      },
      {
        title: "Explore evidence",
        description:
          "Use research summaries as an entry point for understanding what studies have investigated.",
      },
      {
        title: "Build literature-review candidates",
        description:
          "Identify papers that may deserve closer reading when developing a literature review.",
      },
    ],

    workflow: [
      {
        step: "Write a research question",
        description:
          "Turn your broad topic into a question that can actually be investigated through academic literature.",
      },
      {
        step: "Search for relevant studies",
        description:
          "Use the question to find papers and identify recurring themes or findings.",
      },
      {
        step: "Read the original studies",
        description:
          "Open important papers and evaluate their methodology and conclusions before using them in academic work.",
      },
    ],

    examplePrompt:
      "I am researching whether AI-assisted learning tools improve student learning outcomes. Help me identify relevant academic research and organize the literature around evidence supporting, challenging, or qualifying this claim.",

    pros: [
      "Focused on academic research",
      "Useful for literature discovery",
      "Can help narrow research questions",
    ],

    cons: [
      "Research summaries are not substitutes for original papers",
      "Coverage depends on available academic literature",
      "Students still need to evaluate methodology and limitations",
    ],

    alternatives: [
      {
        name: "Elicit",
        slug: "elicit",
      },
      {
        name: "Perplexity AI",
        slug: "perplexity-ai",
      },
    ],

    faqs: [
      {
        question: "What is Consensus useful for?",
        answer:
          "Consensus is useful for discovering and exploring academic research around specific questions.",
      },
      {
        question: "Can students use Consensus for literature reviews?",
        answer:
          "Yes. It can help students discover potentially relevant papers that can then be read and evaluated in detail.",
      },
      {
        question: "Is Consensus free?",
        answer:
          "Consensus provides free access with additional research functionality available through paid plans.",
      },
    ],
  },

  {
    slug: "elicit",
    name: "Elicit",
    category: "Research & Writing",
    description:
      "An AI research assistant that helps users discover academic papers, summarize research, and organize information from scholarly literature.",
    shortDescription:
      "Find, summarize, and organize academic research papers.",
    bestFor: "Literature reviews and research discovery",
    pricing: "Free Basic access with additional research workflows on paid plans",
    pricingType: "Freemium",
    website: "https://elicit.com/",
    tags: ["research", "papers", "literature review", "academic"],

    academicVerdict:
      "Elicit is useful for students who need to work systematically with academic papers. Its strongest use case is helping organize and explore literature rather than generating a finished literature review without human verification.",

    studentUseCases: [
      {
        title: "Discover academic papers",
        description:
          "Search for research related to a question and identify papers worth reading.",
      },
      {
        title: "Organize literature",
        description:
          "Use structured information to compare papers and identify themes across a research area.",
      },
      {
        title: "Start a literature review",
        description:
          "Build an initial collection of relevant papers and identify gaps that require closer investigation.",
      },
    ],

    workflow: [
      {
        step: "Define the research question",
        description:
          "Make the research question specific enough to guide literature discovery.",
      },
      {
        step: "Collect relevant papers",
        description:
          "Search for papers and create a focused set of sources relevant to your question.",
      },
      {
        step: "Compare and evaluate",
        description:
          "Review methods, findings, limitations, and relevance before using information in your writing.",
      },
    ],

    examplePrompt:
      "Help me investigate the research question: How does cloud computing affect the scalability of modern web applications? Identify important academic themes, suggest relevant papers to examine, and organize the literature by major findings and research gaps.",

    pros: [
      "Designed around academic research workflows",
      "Useful for discovering papers",
      "Can help organize literature",
    ],

    cons: [
      "AI summaries require verification",
      "Does not replace reading important papers",
      "Research quality depends on the underlying literature",
    ],

    alternatives: [
      {
        name: "Consensus",
        slug: "consensus",
      },
      {
        name: "Perplexity AI",
        slug: "perplexity-ai",
      },
    ],

    faqs: [
      {
        question: "Is Elicit useful for college research?",
        answer:
          "Yes. It can help students discover, organize, and explore academic literature.",
      },
      {
        question: "Can Elicit help with a literature review?",
        answer:
          "It can support the discovery and organization stages of a literature review, but students should evaluate and read the underlying papers.",
      },
      {
        question: "Is Elicit free?",
        answer:
          "Elicit provides a free Basic level with additional capabilities available through paid plans.",
      },
    ],
  },

  {
    slug: "grammarly",
    name: "Grammarly",
    category: "Research & Writing",
    description:
      "A writing assistant that helps students improve grammar, clarity, tone, spelling, and overall written communication.",
    shortDescription:
      "Improve grammar, clarity, tone, and readability in academic writing.",
    bestFor: "Editing and improving academic writing",
    pricing: "Free access with additional writing features available on paid plans",
    pricingType: "Freemium",
    website: "https://www.grammarly.com/",
    tags: ["writing", "grammar", "editing", "proofreading"],

    academicVerdict:
      "Grammarly is most useful as an editing and revision assistant. Students can use it to identify grammar issues, improve clarity, and refine writing, but they should retain ownership of the argument, evidence, and ideas in their academic work.",

    studentUseCases: [
      {
        title: "Proofread assignments",
        description:
          "Check drafts for grammar, spelling, punctuation, and clarity issues before submission.",
      },
      {
        title: "Improve readability",
        description:
          "Identify unnecessarily complicated sentences and improve the overall clarity of writing.",
      },
      {
        title: "Refine professional writing",
        description:
          "Improve emails, applications, reports, project documentation, and other college communication.",
      },
    ],

    workflow: [
      {
        step: "Write your own first draft",
        description:
          "Develop your argument and ideas before using AI-assisted editing.",
      },
      {
        step: "Run the draft through Grammarly",
        description:
          "Review suggestions for grammar, clarity, tone, and readability.",
      },
      {
        step: "Accept only useful changes",
        description:
          "Do not accept every suggestion automatically; make sure the final wording still represents your intended meaning.",
      },
    ],

    examplePrompt:
      "Review this college assignment for grammar, clarity, sentence structure, and academic tone. Do not change my argument or add new claims. Explain the most important improvements so I can revise the writing myself.",

    pros: [
      "Useful for proofreading",
      "Can improve clarity and readability",
      "Useful beyond academic assignments",
    ],

    cons: [
      "Some advanced features require paid access",
      "Suggestions can change intended meaning",
      "Should complement rather than replace student writing",
    ],

    alternatives: [
      {
        name: "QuillBot",
        slug: "quillbot",
      },
      {
        name: "ChatGPT",
        slug: "chatgpt",
      },
    ],

    faqs: [
      {
        question: "Is Grammarly useful for college students?",
        answer:
          "Yes. It can help students proofread assignments, improve clarity, and refine academic or professional writing.",
      },
      {
        question: "Can Grammarly write my assignment?",
        answer:
          "Grammarly is primarily useful for writing assistance and revision. Students should follow their institution's rules regarding AI-generated writing.",
      },
      {
        question: "Is Grammarly free?",
        answer:
          "Grammarly provides free writing assistance with additional capabilities available through paid plans.",
      },
    ],
  },

  {
    slug: "quillbot",
    name: "QuillBot",
    category: "Research & Writing",
    description:
      "A writing tool that provides paraphrasing, grammar checking, summarization, and other writing assistance features.",
    shortDescription:
      "Paraphrase, summarize, and improve written content.",
    bestFor: "Paraphrasing and editing drafts",
    pricing: "Free access with additional features available on paid plans",
    pricingType: "Freemium",
    website: "https://quillbot.com/",
    tags: ["paraphrasing", "writing", "summarization", "editing"],

    academicVerdict:
      "QuillBot can be useful during revision when a student needs to improve clarity or experiment with alternative wording. Paraphrasing should never be used to disguise copied material, and students should properly cite ideas and sources that are not their own.",

    studentUseCases: [
      {
        title: "Improve sentence clarity",
        description:
          "Use alternative wording to identify clearer ways of expressing your own ideas.",
      },
      {
        title: "Summarize material",
        description:
          "Use summarization features as a starting point for understanding longer written material.",
      },
      {
        title: "Revise a draft",
        description:
          "Review sentences that are repetitive, unclear, or unnecessarily complicated.",
      },
    ],

    workflow: [
      {
        step: "Write your original idea",
        description:
          "Start with your own understanding and wording rather than asking AI to generate the entire assignment.",
      },
      {
        step: "Use paraphrasing selectively",
        description:
          "Experiment with wording while preserving the actual meaning of your original idea.",
      },
      {
        step: "Check attribution",
        description:
          "Make sure source-based ideas remain properly cited and are not presented as your own.",
      },
    ],

    examplePrompt:
      "Improve the clarity of this paragraph while preserving my original meaning. Keep the tone appropriate for a college assignment and do not add new information or claims.",

    pros: [
      "Useful for rewriting and editing",
      "Can help improve sentence clarity",
      "Includes summarization features",
    ],

    cons: [
      "Paraphrasing still requires careful source attribution",
      "Free usage has limitations",
      "Students should check that rewritten text preserves the intended meaning",
    ],

    alternatives: [
      {
        name: "Grammarly",
        slug: "grammarly",
      },
      {
        name: "ChatGPT",
        slug: "chatgpt",
      },
    ],

    faqs: [
      {
        question: "Is QuillBot useful for students?",
        answer:
          "It can be useful for editing, paraphrasing your own writing, and summarizing material during study.",
      },
      {
        question: "Can I use QuillBot to paraphrase academic sources?",
        answer:
          "Students should cite the original source even when wording has been changed. Paraphrasing does not remove the need for attribution.",
      },
      {
        question: "Is QuillBot free?",
        answer:
          "QuillBot provides free access with additional functionality available through paid plans.",
      },
    ],
  },
];

export const categories = [
  {
    name: "Notes & Study",
    slug: "notes-study",
    description:
      "AI tools for studying, note-taking, revision, lectures, and understanding difficult concepts.",
  },
  {
    name: "Presentations",
    slug: "presentations",
    description:
      "AI tools for creating, designing, and improving college presentations and slides.",
  },
  {
    name: "Research & Writing",
    slug: "research",
    description:
      "AI tools for academic research, literature discovery, writing, editing, and source exploration.",
  },
];

export function getToolBySlug(slug: string) {
  return aiTools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: ToolCategory) {
  return aiTools.filter((tool) => tool.category === category);
}