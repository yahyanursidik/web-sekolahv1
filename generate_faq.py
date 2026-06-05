import json
import re

def process_faq():
    with open('scratch_faq.txt', 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    
    data = {
        "title": "Tanya Jawab Seputar TS Lab School",
        "description": "Temukan jawaban untuk pertanyaan yang sering diajukan seputar pendaftaran, program, dan kegiatan di TS Lab School.",
        "sections": []
    }
    
    current_section = None
    current_question = None
    current_answer_lines = []
    
    section_pattern = re.compile(r'^[A-Z]\.\s+.*$')
    question_pattern = re.compile(r'^\d+\.\s+(.*)$')
    
    for line in lines:
        line_stripped = line.strip()
        if not line_stripped:
            if current_answer_lines:
                current_answer_lines.append("")
            continue
            
        if section_pattern.match(line_stripped) and len(line_stripped) < 100 and not '?' in line_stripped:
            # Save previous question if exists
            if current_question:
                answer_text = '\n'.join(current_answer_lines).strip()
                current_section['faqs'].append({
                    "question": current_question,
                    "answer": answer_text
                })
                current_question = None
                current_answer_lines = []
            
            # Start new section
            current_section = {
                "title": line_stripped,
                "faqs": []
            }
            data['sections'].append(current_section)
        
        elif question_pattern.match(line_stripped) and len(line_stripped) < 200:
            # Save previous question if exists
            if current_question:
                answer_text = '\n'.join(current_answer_lines).strip()
                current_section['faqs'].append({
                    "question": current_question,
                    "answer": answer_text
                })
            
            match = question_pattern.match(line_stripped)
            current_question = match.group(1).strip()
            current_answer_lines = []
        else:
            if current_question:
                current_answer_lines.append(line_stripped)
                
    # Save last question
    if current_question and current_section:
        answer_text = '\n'.join(current_answer_lines).strip()
        current_section['faqs'].append({
            "question": current_question,
            "answer": answer_text
        })
        
    with open('src/content/settings/faq.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        
    print("FAQ processed successfully.")

if __name__ == '__main__':
    process_faq()
