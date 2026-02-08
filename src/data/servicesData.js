import pd from "../assets/pd1.jpg";
import md from "../assets/md2.webp";
import soft from "../assets/skills1.png";
import training from "../assets/corporate.jpg";
import outbound from "../assets/outbond1.png";

export const servicesData = [

/* ======================================================
   01. PERSONALITY DEVELOPMENT
====================================================== */
{
  slug: "personality",
  id: "01",
  title: "Personality Development",
  shortDesc:
    "Comprehensive learning programmes designed to build confidence, communication clarity, emotional maturity, and professional presence.",

  heroDesc:
    "Our Personality Development programmes help individuals understand themselves deeply, build authentic confidence, and develop a strong professional presence. Through structured reflection, practical application, and guided facilitation, participants learn to communicate effectively, manage emotions, and present themselves with credibility in professional and personal environments.",

  image: pd,

  highlights: [
    "Builds deep-rooted self-confidence by helping participants recognise their strengths, values, and personal identity, enabling them to interact with clarity and assurance.",
    "Enhances verbal and non-verbal communication skills to express ideas clearly, listen actively, and engage meaningfully with others.",
    "Strengthens professional etiquette, workplace behaviour, and interpersonal maturity essential for corporate and institutional environments.",
    "Develops emotional intelligence to manage stress, emotions, and relationships effectively under pressure.",
    "Encourages a growth-oriented mindset that supports accountability, adaptability, and continuous self-improvement."
  ],

  whoItsFor: [
    "College students preparing to transition from academics to professional environments.",
    "Early-career professionals seeking confidence and communication clarity.",
    "Working professionals aiming to enhance interpersonal effectiveness.",
    "Individuals transitioning into leadership or client-facing roles."
  ],

  outcomes: [
    "Noticeable improvement in confidence, self-awareness, and emotional stability.",
    "Clear enhancement in communication effectiveness and interpersonal impact.",
    "Stronger professional image reflected in conduct and behaviour.",
    "Ability to handle feedback, pressure, and conflict constructively.",
    "Greater clarity in personal goals and professional direction."
  ],

  modules: [
    "Self-awareness, mindset, and values exploration.",
    "Confidence building and overcoming self-doubt.",
    "Verbal, non-verbal, and listening communication skills.",
    "Professional etiquette, grooming, and workplace behaviour.",
    "Emotional intelligence and stress management.",
    "Personal effectiveness and goal alignment."
  ],

  methodology: [
    "Guided self-reflection and personality assessments.",
    "Practical exercises and real-life simulations.",
    "Role plays and group-based learning activities.",
    "Facilitator feedback and peer learning.",
    "Action planning for real-world application."
  ],

  whyPalms: [
    "Experienced facilitators with strong behavioural expertise.",
    "Safe, engaging, and highly interactive learning environment.",
    "Strong focus on real-world application.",
    "Customisable programme design based on audience needs."
  ],

  approach:
    "An experiential learning approach combining reflection, practice, feedback, and immediate application to ensure lasting behavioural change.",

  duration: "1–5 days (customisable)",

  deliveryFormats: [
    "Classroom workshops",
    "Corporate in-house programmes",
    "Campus interventions",
    "Short-format bootcamps"
  ],
},

/* ======================================================
   02. MANAGEMENT DEVELOPMENT
====================================================== */
{
  slug: "management",
  id: "02",
  title: "Management Development",
  shortDesc:
    "Structured programmes that strengthen managerial capability, decision-making, and people leadership.",

  heroDesc:
    "Management Development programmes equip managers with practical tools and frameworks to lead people, manage performance, and deliver results. The focus is on developing confident, accountable, and people-centric managers who can operate effectively in dynamic work environments.",

  image: md,

  highlights: [
    "Strengthens people management capability to lead teams with clarity, fairness, and accountability.",
    "Improves decision-making skills through structured thinking and practical frameworks.",
    "Enhances delegation, monitoring, and feedback for improved productivity.",
    "Develops result-oriented leadership aligned with organisational goals.",
    "Builds confidence in handling performance challenges and difficult conversations."
  ],

  whoItsFor: [
    "First-time managers and supervisors.",
    "Middle-level managers and team leads.",
    "Professionals transitioning into people-management roles."
  ],

  outcomes: [
    "Improved people leadership and team engagement.",
    "Stronger decision-making confidence.",
    "Better delegation and follow-through.",
    "Increased team productivity and accountability."
  ],

  modules: [
    "Managerial roles and responsibilities.",
    "Managing people and performance.",
    "Decision-making and problem-solving frameworks.",
    "Delegation, monitoring, and feedback.",
    "Building accountability and ownership."
  ],

  methodology: [
    "Real workplace case discussions.",
    "Practical tools and frameworks.",
    "Group exercises and simulations.",
    "Facilitated reflection and action planning."
  ],

  whyPalms: [
    "Strong practical orientation.",
    "Industry-relevant examples.",
    "Immediate workplace applicability."
  ],

  approach:
    "A hands-on learning approach focused on real managerial challenges and practical solutions.",

  duration: "2–4 days (customisable)",
},

/* ======================================================
   03. LEADERSHIP & SKILL WORKSHOPS
====================================================== */
{
  slug: "leadership",
  id: "03",
  title: "Leadership & Skill Workshops",
  shortDesc:
    "High-impact workshops designed to strengthen leadership mindset and workplace effectiveness.",

  heroDesc:
    "These focused workshops are designed to sharpen leadership thinking, interpersonal effectiveness, and professional skills. They enable participants to lead with influence, collaborate effectively, and respond confidently to complex workplace challenges.",

  image: soft,

  highlights: [
    "Develops leadership mindset and personal ownership.",
    "Strengthens communication and influence skills.",
    "Enhances strategic and critical thinking.",
    "Improves collaboration and team alignment.",
    "Builds confidence in problem-solving and decision-making."
  ],

  whoItsFor: [
    "Emerging leaders and supervisors.",
    "High-potential professionals.",
    "Team leads and project managers."
  ],

  outcomes: [
    "Stronger leadership presence.",
    "Improved influence and communication.",
    "Better collaboration and alignment.",
    "Enhanced problem-solving capability."
  ],

  modules: [
    "Leadership mindset and self-awareness.",
    "Communication and influence.",
    "Critical thinking and problem solving.",
    "Team collaboration exercises."
  ],

  methodology: [
    "Interactive workshops.",
    "Experiential activities.",
    "Group discussions and reflection."
  ],

  approach:
    "Short-format experiential workshops designed for maximum impact.",

  duration: "1–3 days",
},

/* ======================================================
   04. CORPORATE TRAINING PROGRAMMES
====================================================== */
{
  slug: "corporate",
  id: "04",
  title: "Corporate Training Programmes",
  shortDesc:
    "Custom-designed learning solutions aligned with organisational goals and culture.",

  heroDesc:
    "Our Corporate Training programmes are tailored learning interventions aligned with organisational strategy, culture, and performance objectives. Each programme is designed to deliver measurable business impact and sustainable capability development.",

  image: training,

  highlights: [
    "Custom-designed programmes based on organisational needs.",
    "Focus on real business challenges and outcomes.",
    "Alignment with leadership behaviour and culture.",
    "Measurable learning and performance impact."
  ],

  whoItsFor: [
    "Corporate teams and departments.",
    "Leadership and management groups.",
    "Organisation-wide learning initiatives."
  ],

  outcomes: [
    "Improved workforce capability.",
    "Aligned leadership behaviour.",
    "Enhanced productivity and engagement.",
    "Sustainable performance improvement."
  ],

  modules: [
    "Needs analysis and programme design.",
    "Leadership and behavioural capability.",
    "Team effectiveness and collaboration.",
    "Performance and culture alignment."
  ],

  methodology: [
    "Diagnostic assessment.",
    "Custom learning design.",
    "Facilitated delivery and reinforcement."
  ],

  approach:
    "End-to-end learning solutions from diagnosis to sustained impact.",

  duration: "Custom-designed",
},

/* ======================================================
   05. OUTBOUND TRAINING PROGRAMMES
====================================================== */
{
  slug: "outbound",
  id: "05",
  title: "Outbound Training Programmes",
  shortDesc:
    "Experiential learning programmes that strengthen teamwork and leadership through action.",

  heroDesc:
    "Outbound Training programmes create powerful learning experiences through structured outdoor activities, reflection, and facilitation. Participants learn leadership, collaboration, and communication by doing — not just discussing.",

  image: outbound,

  highlights: [
    "Builds trust and collaboration through shared challenges.",
    "Develops leadership through real-time decision-making.",
    "Improves communication under pressure.",
    "Encourages learning through experience and reflection."
  ],

  whoItsFor: [
    "Corporate teams.",
    "Leadership groups.",
    "Cross-functional teams."
  ],

  outcomes: [
    "Stronger team bonding.",
    "Improved trust and collaboration.",
    "Enhanced leadership behaviour.",
    "Better communication in challenging situations."
  ],

  modules: [
    "Experiential team challenges.",
    "Leadership simulations.",
    "Reflection and learning integration.",
    "Action planning for workplace transfer."
  ],

  methodology: [
    "Facilitated experiential learning.",
    "Structured reflection sessions.",
    "Application planning."
  ],

  approach:
    "Learning by doing, supported by reflection and practical integration.",

  duration: "1–2 days",
},
];
