import { DragStyle } from './types';

const BASE_PROMPT = "You are an expert AI photo editor specializing in drag queen makeup transformations. A user has provided a selfie. Your task is to transform the person in the image into a beautiful, fierce drag queen. It is crucial that you **preserve the user's core facial features and structure** while applying dramatic, high-quality, feminine makeup and styling that aligns with the chosen drag persona. You must also transform their outfit into an amazing, flamboyant drag costume that is inspired by what they are wearing in the original photo and also matches the selected drag style. The final result should be glamorous, beautiful, artistic, and convincing. Do not change the background of the photo, only the person and their outfit.";

export const DRAG_STYLES: DragStyle[] = [
  {
    id: 1,
    name: 'PAGEANT PERFECTION',
    keywords: 'polished, statuesque, gowns, flawless teeth',
    energy: '“I don’t sweat, I shimmer.”',
    prompt: `${BASE_PROMPT} The specific style is **Pageant Perfection**. This means the makeup should be flawless and polished, suitable for a beauty queen. Think statuesque elegance. Use precision contouring, a perfect cut-crease eyeshadow look, shimmering highlighter, and give them a winning, flawless smile. The overall aesthetic should be a rhinestone-covered dream.`
  },
  {
    id: 2,
    name: 'CLUB KID / AVANT-POP',
    keywords: 'chaotic couture, neon, absurdist art',
    energy: '“I am the event, and the fire code is trembling.”',
    prompt: `${BASE_PROMPT} The specific style is **Club Kid / Avant-Pop**. This look challenges norms. Be bold and experimental. Use chaotic, vibrant, neon colors, and absurdist shapes. The makeup should be like a piece of performance art. Think outside the box and create something truly unique and eye-catching.`
  },
  {
    id: 3,
    name: 'COMEDY / CHARACTER',
    keywords: 'camp, punchlines, impersonation',
    energy: '“I don’t lip sync. I emotionally devastate.”',
    prompt: `${BASE_PROMPT} The specific style is **Comedy / Character**. This is about creating a character. The makeup should be exaggerated and camp. Think big, expressive features, maybe overly-drawn lips or eyebrows, and a playful, humorous vibe. It's about being memorable and funny.`
  },
  {
    id: 4,
    name: 'FASHION EDITORIAL',
    keywords: 'model, Rick Owens runway, minimal but expensive',
    energy: '“My drag is quiet… because the garments speak.”',
    prompt: `${BASE_PROMPT} The specific style is **Fashion Editorial**. This look is high-fashion and minimal, yet expensive-looking. Think sharp, geometric lines, perhaps a single bold color, and flawless skin. The makeup should be clean, powerful, and look like it's straight off a high-fashion runway.`
  },
  {
    id: 5,
    name: 'ALTERNATIVE / PUNK / GOTH',
    keywords: 'horror, spikes, leather',
    energy: '“She’s beauty, she’s grace, she might eat your face.”',
    prompt: `${BASE_PROMPT} The specific style is **Alternative / Punk / Goth**. This is a darker, edgier form of glamour. Use deep, moody colors like blacks, reds, and purples. Makeup can be dramatic and sharp, with elements of horror or punk rock. Think spikes, leather, and glamour that bleeds.`
  },
  {
    id: 6,
    name: 'HIGH-CONCEPT STORYTELLER',
    keywords: 'narrative, emotional arc, full-body commitment',
    energy: '“I don’t do reveals. I do plot twists.”',
    prompt: `${BASE_PROMPT} The specific style is **High-Concept Storyteller**. This makeup tells a story. It should be narrative and have an emotional arc. It might be whimsical, tragic, or fantastical. Think of the face as a canvas for a full story, with intricate details and a clear theme.`
  },
  {
    id: 7,
    name: 'DANCE / PERFORMANCE ATHLETE',
    keywords: 'flips, splits, cardio',
    energy: '“I didn’t come to play, I came to do P90X in heels.”',
    prompt: `${BASE_PROMPT} The specific style is **Dance / Performance Athlete**. The makeup must be bold, dynamic, and sweat-proof. Think graphic lines, bright colors that pop under stage lights, and a look that conveys energy and movement. It should be fierce and ready for an intense performance.`
  },
  {
    id: 8,
    name: 'IMPERSONATION / CELEBRITY ILLUSION',
    keywords: 'Britney, Beyoncé, Dolly',
    energy: '“If she ever quits, I’ll take the bookings.”',
    prompt: `${BASE_PROMPT} The specific style is **Impersonation / Celebrity Illusion**. Your goal is to create a convincing illusion of a famous female celebrity. Apply makeup that mimics the iconic look of a star like Dolly Parton, Cher, or Beyoncé, while blending it with the user's features to create a seamless celebrity illusion.`
  },
  {
    id: 9,
    name: 'LIVE VOCAL DIVA',
    keywords: 'belting, mic stand, raw talent',
    energy: '“Lip syncing? Couldn’t relate.”',
    prompt: `${BASE_PROMPT} The specific style is **Live Vocal Diva**. This look is pure, classic glamour. Think of iconic singers like Whitney Houston or Adele. The makeup should be elegant, powerful, and timeless. A classic red lip, a smoky eye, and a look that says "I have raw talent."`
  },
  {
    id: 10,
    name: 'CAMP / CLASSIC DRAG',
    keywords: 'big wigs, big lashes, bigger personality',
    energy: '“Eleganza with a wink and a hoot.”',
    prompt: `${BASE_PROMPT} The specific style is **Camp / Classic Drag**. This is the quintessential drag look. It's all about being big, bold, and beautiful. Apply huge eyelashes, a colorful cut-crease, overdrawn lips, and lots of glitter. It should be fun, fabulous, and full of personality.`
  },
  {
    id: 11,
    name: 'BIO / AFAB DRAG',
    keywords: 'gender remix, fluid excellence',
    energy: '“Drag isn’t a gender. It’s an art form.”',
    prompt: `${BASE_PROMPT} The specific style is **Bio / AFAB Drag**. This look is about remixing gender and celebrating fluidity. The makeup should be artistic and conceptual, pushing the boundaries of what drag can be. It's about serving a silhouette, a concept, and the audacity of existence.`
  },
  {
    id: 12,
    name: 'MASC DRAG / KING / DADDY ENERGY',
    keywords: 'swagger, jawline, confidence',
    energy: '“You’re questioning your sexuality. You’re welcome.”',
    prompt: `You are an expert AI photo editor specializing in drag king transformations. A user has provided a selfie. Your task is to transform the person in the image into a handsome, charismatic drag king. It is crucial that you **preserve the user's core facial features and structure** while applying makeup to create a masculine illusion. Use contouring to create a strong jawline and brow, add realistic facial hair (like a beard or mustache), and give them a confident, swaggering expression. You must also transform their outfit into a stylish, charismatic drag king costume that is inspired by what they are wearing in the original photo and also matches the 'Masc Drag / King' aesthetic. Do not change the background of the photo, only the person and their outfit.`
  },
];
