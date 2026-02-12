export const categoricalChecklist = [
  {
    "name": "Governance & Accountability",
    "questions": [
      {
        "id": "NIST GOV 1.2",
        "question": "\"Can you provide your organization's official 'Acceptable Use Policy' (AUP) specifically for Generative AI? Does it explicitly state prohibited uses?\"",
        "purpose": "Verify policy existence and specificity.",
        "reference": "NIST AI RMF \u2013 Gov 1.2",
        "notes": "General IT policies are insufficient; the standard requires AI-specific mandates."
      },
      {
        "id": "NIST GOV 2.2",
        "question": "\"Who holds the title of 'AI Model Owner' or 'AI Risk Officer' for this deployment? Can I see the RACI chart defining their authority?\"",
        "purpose": "Confirm accountability and authority.",
        "reference": "NIST AI RMF \u2013 Gov 2.2",
        "notes": "There must be a specific human responsible for \"pulling the plug\" if the model fails."
      },
      {
        "id": "NIST GOV 5.2",
        "question": "\"How do you verify that developers and prompt engineers are trained on AI-specific risks? Can you share recent training logs?\"",
        "purpose": "Check workforce competence.",
        "reference": "NIST AI RMF \u2013 Gov 5.2",
        "notes": "Essential to prove that staff understand prompt injection and bias risks."
      },
      {
        "id": "ISO A.2.2",
        "question": "\"How does this specific LLM project align with your documented business strategy? Do you have a Project Charter linking it to business KPIs?\"",
        "purpose": "Ensure strategic alignment.",
        "reference": "ISO 42001 \u2013 Annex A.2.2",
        "notes": "Prevents \"Shadow AI\" or projects that exist without business justification."
      },
      {
        "id": "ISO A.3.2",
        "question": "\"If an employee notices the model generating harmful content, what is the exact mechanism (e.g., anonymous portal) to report it?\"",
        "purpose": "Test whistleblower/feedback channels.",
        "reference": "ISO 42001 \u2013 Annex A.3.2",
        "notes": "A feedback loop is a mandatory requirement for maintaining safety culture."
      }
    ]
  },
  {
    "name": "Data Integrity & Provenance",
    "questions": [
      {
        "id": "ISO A.7.1",
        "question": "\"How is the data used for fine-tuning or RAG contexts classified? Do you have a Data Classification Policy applied here?\"",
        "purpose": "Verify data governance.",
        "reference": "ISO 42001 \u2013 Annex A.7.1",
        "notes": "Ensures confidential data isn't treated as public training fodder."
      },
      {
        "id": "ISO A.7.2",
        "question": "\"Can you provide the license agreements or terms of use for all data sources used? How did you verify copyright compliance?\"",
        "purpose": "Check data acquisition legitimacy.",
        "reference": "ISO 42001 \u2013 Annex A.7.2",
        "notes": "Critical for avoiding IP lawsuits (e.g., NYT vs OpenAI scenario)."
      },
      {
        "id": "ISO A.7.3",
        "question": "\"What statistical checks did you run to ensure the training data is free from poisoning or extreme bias? Do you have a Data Quality Report?\"",
        "purpose": "Assess data quality.",
        "reference": "ISO 42001 \u2013 Annex A.7.3",
        "notes": "\"Garbage in, garbage out\"\u2014verifies the input isn't compromised."
      },
      {
        "id": "ISO A.7.4",
        "question": "\"Do you maintain a 'Data Bill of Materials' or inventory tracking the lineage of every dataset used in this model?\"",
        "purpose": "specific provenance tracking.",
        "reference": "ISO 42001 \u2013 Annex A.7.4",
        "notes": "Required for traceability if a specific dataset is later found to be illegal/harmful."
      },
      {
        "id": "NIST MAP 2.2",
        "question": "\"Have you scanned your training data for PII? Can you show me the Privacy Impact Assessment (PIA) or DLP logs?\"",
        "purpose": "Protect privacy and confidentiality.",
        "reference": "NIST AI RMF \u2013 Map 2.2",
        "notes": "Prevents the model from memorizing and regurgitating user SSNs or emails."
      }
    ]
  },
  {
    "name": "Risk Assessment & Supply Chain",
    "questions": [
      {
        "id": "NIST MAP 1.1",
        "question": "\"Please provide the 'Concept of Operations' (ConOps). Does it explicitly define what the model is NOT allowed to do?\"",
        "purpose": "Establish context and boundaries.",
        "reference": "NIST AI RMF \u2013 Map 1.1",
        "notes": "Defining \"out of scope\" is just as important as defining \"in scope.\""
      },
      {
        "id": "NIST MAP 3.1",
        "question": "\"Do you have a dedicated AI Risk Register? Does it include specific scenarios like 'Prompt Injection' or 'Hallucination'?\"",
        "purpose": "Evaluate risk identification.",
        "reference": "NIST AI RMF \u2013 Map 3.1",
        "notes": "General IT risk registers rarely capture probabilistic AI failures."
      },
      {
        "id": "ISO A.5.1",
        "question": "\"Have you conducted an Algorithmic Impact Assessment (AIA) to evaluate potential harms to individuals or society?\"",
        "purpose": "Assess societal impact.",
        "reference": "ISO 42001 \u2013 Annex A.5.1",
        "notes": "Mandatory for high-risk systems to assess fairness and civil rights impacts."
      },
      {
        "id": "ISO 8.4",
        "question": "\"If you use a third-party model (e.g., OpenAI, Azure), have you reviewed their SOC2 report or security attestation?\"",
        "purpose": "Verify supplier risk management.",
        "reference": "ISO 42001 \u2013 Clause 8.4",
        "notes": "You are responsible for the risks of the vendors you integrate."
      },
      {
        "id": "NIST MAP 4.1",
        "question": "\"Can I see a system architecture diagram showing all external APIs and vector databases the model interacts with?\"",
        "purpose": "Map system dependencies.",
        "reference": "NIST AI RMF \u2013 Map 4.1",
        "notes": "Identifies the attack surface beyond just the model weights."
      }
    ]
  },
  {
    "name": "Technical Reliability & Security",
    "questions": [
      {
        "id": "NIST MEA 2.7",
        "question": "\"Can you show me the report from your last 'Red Teaming' exercise? Did it specifically test for jailbreaks?\"",
        "purpose": "Verify adversarial testing.",
        "reference": "NIST AI RMF \u2013 Measure 2.7",
        "notes": "Security-through-obscurity fails with LLMs; active attack testing is required."
      },
      {
        "id": "NIST MEA 2.2",
        "question": "\"How do you measure hallucination rates? Do you test against a 'Golden Dataset' of verified facts? What was the score?\"",
        "purpose": "Validate reliability metrics.",
        "reference": "NIST AI RMF \u2013 Measure 2.2",
        "notes": "Subjective \"it feels right\" testing is not audit-compliant."
      },
      {
        "id": "ISO A.6.3",
        "question": "\"Do you sanitize user inputs before passing them to the LLM? Can I see the SAST report for the application wrapper?\"",
        "purpose": "Ensure secure development.",
        "reference": "ISO 42001 \u2013 Annex A.6.3",
        "notes": "The application layer is often where the prompt injection vulnerability exists."
      },
      {
        "id": "ISO A.6.4",
        "question": "\"Who signed the formal 'Go/No-Go' decision for deployment? Can I see the Validation & Verification (V&V) sign-off?\"",
        "purpose": "Confirm formal release gating.",
        "reference": "ISO 42001 \u2013 Annex A.6.4",
        "notes": "Prevents engineers from deploying code without risk oversight."
      },
      {
        "id": "ISO 27001 A.5.15",
        "question": "\"How are API keys and model weights secured? Are you using Role-Based Access Control (RBAC) with MFA?\"",
        "purpose": "Check access control.",
        "reference": "ISO 27001 \u2013 A.5.15",
        "notes": "Basic security hygiene applied to AI assets."
      }
    ]
  },
  {
    "name": "Transparency & Documentation",
    "questions": [
      {
        "id": "ISO A.8.2",
        "question": "\"Do you publish a 'Model Card' or 'System Card' for users? Does it list the training data cutoff date and limitations?\"",
        "purpose": "specific system documentation.",
        "reference": "ISO 42001 \u2013 Annex A.8.2",
        "notes": "Transparency is a core ethical and regulatory requirement."
      },
      {
        "id": "ISO A.8.1",
        "question": "\"How are users notified that they are interacting with an AI? Is there a visible UI disclaimer or watermark?\"",
        "purpose": "verify user notification.",
        "reference": "ISO 42001 \u2013 Annex A.8.1",
        "notes": "Prevents deception; ensures users know the content is synthetic."
      },
      {
        "id": "NIST MEA 2.11",
        "question": "\"For RAG systems, does the model provide citations or links to the source documents for every answer?\"",
        "purpose": "Audit explainability mechanisms.",
        "reference": "NIST AI RMF \u2013 Measure 2.11",
        "notes": "\"Explainability\" in LLMs often means being able to cite the source."
      },
      {
        "id": "ISO A.8.3",
        "question": "\"Do you have a drafted communication plan for notifying users if the AI leaks data or produces harmful advice?\"",
        "purpose": "Prepare for adverse events.",
        "reference": "ISO 42001 \u2013 Annex A.8.3",
        "notes": "Crisis communication must be pre-planned, not reactive."
      },
      {
        "id": "ISO A.10.2",
        "question": "\"Do your Terms of Service (ToS) clearly define who is liable for errors in the AI's output?\"",
        "purpose": "Review customer agreements.",
        "reference": "ISO 42001 \u2013 Annex A.10.2",
        "notes": "Legal protection against lawsuits resulting from hallucinations."
      }
    ]
  },
  {
    "name": "Monitoring & Continuous Improvement",
    "questions": [
      {
        "id": "NIST MAN 4.1",
        "question": "\"Do you have a real-time dashboard monitoring for drift, toxicity, or refusal rates? How are alerts configured?\"",
        "purpose": "Verify continuous monitoring.",
        "reference": "NIST AI RMF \u2013 Manage 4.1",
        "notes": "Models drift; static assessments become invalid quickly."
      },
      {
        "id": "NIST MAN 3.2",
        "question": "\"Is there a specific Incident Response Playbook for AI? What is the 'Killswitch' procedure?\"",
        "purpose": "Confirm incident readiness.",
        "reference": "NIST AI RMF \u2013 Manage 3.2",
        "notes": "Standard IR plans usually don't cover \"model is being racist\" scenarios."
      },
      {
        "id": "ISO A.6.6",
        "question": "\"What is your threshold for triggering a re-training or re-validation? Is it automated based on accuracy drops?\"",
        "purpose": "Check re-evaluation logic.",
        "reference": "ISO 42001 \u2013 Annex A.6.6",
        "notes": "Ensures the model is maintained over time."
      },
      {
        "id": "ISO A.6.7",
        "question": "\"When a model is retired, how do you ensure all vector embeddings and weights are securely wiped?\"",
        "purpose": "Verify decommissioning process.",
        "reference": "ISO 42001 \u2013 Annex A.6.7",
        "notes": "Prevents \"zombie models\" or data leakage after project end."
      },
      {
        "id": "NIST  GOV 2.3 and MEA 2.6",
        "question": "\"For high-stakes decisions, is there a 'Human-in-the-Loop' (HITL) workflow? Can I see the logs of human overrides?\"",
        "purpose": "Assess human oversight.",
        "reference": "NIST AI RMF \u2013 Govern 2.3 and Measure 2.6",
        "notes": "Automation bias is a major risk; humans must remain the final arbiter."
      }
    ]
  }
]