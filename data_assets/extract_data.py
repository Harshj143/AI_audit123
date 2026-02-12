import pypdf
import pandas as pd
import json
import os

def extract_pdf_text(pdf_path):
    print(f"Extracting PDF: {pdf_path}")
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text

def extract_excel_data(excel_path):
    print(f"Extracting Excel: {excel_path}")
    df = pd.read_excel(excel_path)
    return df.to_dict(orient='records')

if __name__ == "__main__":
    pdf_file = "AI Security Compliance and Risk Assessment Framework for Large Language Model Systems_Thesis Plan.pdf"
    excel_file = "Final_Checklist.xlsx"
    
    data = {
        "thesis_text": extract_pdf_text(pdf_file),
        "checklist": extract_excel_data(excel_file)
    }
    
    with open("extracted_data.json", "w") as f:
        json.dump(data, f, indent=2)
    print("Data extracted to extracted_data.json")
