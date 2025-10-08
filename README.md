# Smart Librarian
### AI-powered book recommender:
Smart Librarian analyzes natural-language queries — themes, moods, or topics — and recommends the most relevant book using semantic similarity search rather than keyword matching.

### Retrieval-Augmented Generation (RAG) engine:
The backend combines a local Chroma vector store with OpenAI’s embedding models to encode and search through book summaries efficiently, ensuring fast and meaningful retrieval.

### Structured reasoning workflow:
A lightweight FastAPI server orchestrates retrieval, ranking, and tool-calling (get_summary_by_title) so the model produces concise, factual responses grounded in your dataset.

### Interactive frontend interface:
The React + Vite + TypeScript frontend provides a clean chat-style UI where users can type questions, send them to the API, and instantly receive a book title and summary.

### Fully local and extensible design:
All data (book summaries and embeddings) is stored locally in .chroma/, making the system private, offline-friendly, and easy to extend with new books, models, or UI features.

## App Flow Overview

1️⃣ Ingestion
↓
ingest.py embeds each book (title + summary) and stores vectors in .chroma/

2️⃣ Retrieval & Reasoning
↓
rag_core.py queries the vector store → gets best matches → calls the LLM
→ LLM picks one title → calls get_summary_by_title(title)

3️⃣ API Response
↓
FastAPI returns a structured JSON:
{ "answer": "Title\n\nFull summary text..." }

## Getting started
### Clone the Repository
```Command Line
git clone <your-repo-url>
cd <your-repo>
```

### Install Dependencies
```Command Line
npm install
```

### Run the Development Server
``` Command Line
npm run dev
```

    





