
import { GoogleGenAI, Modality } from "@google/genai";

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        return reject(new Error("FileReader did not return a string."));
      }
      // The result is 'data:image/jpeg;base64,xxxx...', we need to strip the prefix
      const base64 = reader.result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};

export const transformImage = async (imageFile: File, prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const base64ImageData = await fileToBase64(imageFile);
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64ImageData,
              mimeType: imageFile.type,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    const part = response.candidates?.[0]?.content?.parts?.[0];
    if (part?.inlineData) {
      const base64ImageBytes: string = part.inlineData.data;
      const mimeType = part.inlineData.mimeType;
      return `data:${mimeType};base64,${base64ImageBytes}`;
    } else {
      throw new Error("API did not return an image. The prompt may have been blocked.");
    }
  } catch (error) {
    console.error("Error transforming image:", error);
    throw new Error("Failed to transform image. Please try a different photo or style.");
  }
};
