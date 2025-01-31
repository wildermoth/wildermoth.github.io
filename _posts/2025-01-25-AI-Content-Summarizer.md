---
title: "Building an AI Content Summarizer"
layout: single
read_time: true
related: true
show_date: true
excerpt: "Using transcribe-anything to summarize video links in obsidian notes"
header:
  teaser: /assets/images/ai-summarizer.png

author_profile: true
toc: true
toc_sticky: true
---
**My solution:** A Python script that automatically processes URLs, generates summaries using local AI, and organizes them in Obsidian. No apis, no subscriptions, no cloud storage.

{% include video id="sz6w_2Gpdow" provider="youtube" %}

## **Why Build This? My 3 Motivations**

1. **The Quick Capture Bottleneck**  
I kept saving interesting links to a "read later" file that became a graveyard of unprocessed content.
2. **Context Switching Killer**  
Manually summarizing YouTube videos, Instagram posts, and articles is tedious.
3. **AI Assistant, Not Crutch**  
I wanted an AI system that _augments_ my thinking rather than replacing it.

## **The Tech Stack Breakdown**

### **Core Components**

- **Obsidian** as knowledge base ([Why Obsidian?](https://obsidian.md))
- **Ollama** for local LLM processing (using Deepseek-R1 8B model)
- **transcribe-anything** for video/audio processing
- **Selenium** for JS-heavy site handling

### **Key Features**

1. Automatic URL detection and classification
2. Social media transcription pipeline
3. AI-assisted summarization with thought process preservation
4. Markdown formatting compatible with Zettelkasten

## **How It Works: A Technical Walkthrough**

### **1. The Config Loader**

```python
class ConfigLoader:
"""Merge default and user configs"""
def load_config(self) -> Dict[str, Any]:
return {default_config, loaded_config}
```

Handles configuration with sensible defaults while allowing customization.

### **2. Content Processing Pipeline**

```python
def process_section(self, section_info) -> str:
if "instagram.com" in url:
return self.process_instagram(url)
elif "youtube.com" in url:
return self.process_youtube(url)
else:

return self.summarize_webpage(url)
```

Different processing paths for different content types while maintaining a unified interface.

### **3. AI Interaction**

```python
def clean_response(self, text: str) -> str:
"""Keep thought patterns visible but separate"""
return re.sub(r'<think>.?</think>', '', text, flags=re.DOTALL)
```

Preserves AI's reasoning in special tags while keeping final output clean.

## **Why This Beats Manual Note-Taking**

- **Time**  
Processing a YouTube video went from 5-10 minutes to 30 seconds
- **Consistent Formatting**  
All notes follow Zettelkasten principles automatically
- **Local Processing**  
No data leaves my machine (crucial for client work)
- **Visible Thinking**  
AI's reasoning is captured but separated from final output

## **Challenges & Lessons Learned**

1. **Selenium Headaches**  
Had to implement smart retries and explicit waits for JS-heavy sites:

```python
WebDriverWait(driver, 10).until(
EC.presence_of_element_located((By.TAG_NAME, "article"))
)
```

2. **Model Hallucinations**  
Added strict prompt engineering to keep outputs focused:

```python
prompt = f"Respond only with the summary and hashtags: {text[:2000]}"
```

3. **Config Management**  
Created a configuration loader that merges defaults with user overrides.
