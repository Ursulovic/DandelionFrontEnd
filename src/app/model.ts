export interface TextSimilarityResponse {
  time: number,
  similarity: number,
  lang: string,
  langConfidence: number,
  timestamp: string
}

export interface LangDetectionResponse {
  timestamp: string,
  time: number,
  detectedLangs: DetectedLang[]
}

export interface DetectedLang {
  lang: string,
  confidence: number
}

export interface EntityExtractionResponse {
  lang: string,
  timestamp: string,
  time: number,
  annotations: Annotation[]
}

export interface Annotation {
  start: number,
  end: number,
  spot: string,
  confidence: number,
  id: number,
  title: string,
  uri: string,
  abstract: string,
  label: string,
  categories: string[],
  types: string[],
  lod: Lod,
  image: Image,
}

export interface Lod {
  wikipedia: string,
  dbpedia: string,
}

export interface Image {
  full: string,
  thumbnail: string,
}

export interface SentimentAnalysisResponse {
  time : number,
  lang: string,
  timestamp: string,
  sentiment: Sentiment
}

export interface Sentiment {
  type: string,
  score: number
}

export interface History {
  date: string,
  method: string,
  url: string,
}






