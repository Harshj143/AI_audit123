import pandas as pd
import json
import os

def extract_dialogue_flow():
    excel_path = 'data_assets/Final_Checklist.xlsx'
    output_path = 'src/data/checklist.js'
    
    if not os.path.exists(excel_path):
        print(f"Error: {excel_path} not found")
        return
        
    # Read the sheet
    df = pd.read_excel(excel_path, sheet_name='Final Dialogue Flow', header=2)
    
    categories = []
    current_category = None
    
    for _, row in df.iterrows():
        cid = str(row.get('Framework / Control ID'))
        
        # Detect Category/Phase headers
        if cid != 'nan' and "Phase" in cid:
            if current_category:
                categories.append(current_category)
            
            # Extract phase name from "Phase 1: Governance & Accountability"
            phase_name = cid.split(':', 1)[1].strip() if ':' in cid else cid
            current_category = {
                "name": phase_name,
                "questions": []
            }
            continue
            
        if cid == 'nan' or cid.strip() == "":
            continue
            
        if current_category is not None:
            item = {
                'id': cid,
                'question': str(row.get('Audit Agent Question', '')),
                'purpose': str(row.get('Purpose / Intent', '')),
                'reference': str(row.get('Reference', '')),
                'notes': str(row.get('Notes / Justification', ''))
            }
            current_category["questions"].append(item)
            
    if current_category:
        categories.append(current_category)
        
    os.makedirs('src/data', exist_ok=True)
    with open(output_path, 'w') as f:
        f.write('export const categoricalChecklist = ' + json.dumps(categories, indent=2))
    print(f"Successfully cleaned and exported {len(categories)} categories to {output_path}")

if __name__ == "__main__":
    extract_dialogue_flow()
