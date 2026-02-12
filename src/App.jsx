import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
    Shield,
    ChevronRight,
    ChevronLeft,
    Building2,
    User,
    CheckCircle2,
    AlertTriangle,
    BarChart3,
    Download,
    BrainCircuit,
    MessageSquare,
    Sparkles,
    RefreshCw,
    LayoutGrid,
    TrendingUp,
    ArrowRight,
    Info,
    Layers,
    FileCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categoricalChecklist } from './data/checklist';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';

// --- Shared Components ---

const ProgressBar = ({ current, total }) => (
    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-white/5 mb-8">
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(current / total) * 100}%` }}
            className="bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)] h-full"
        />
    </div>
);

const SectionLabel = ({ children, icon: Icon }) => (
    <div className="flex items-center gap-2 mb-3">
        {Icon && <Icon className="w-3.5 h-3.5 text-indigo-500" />}
        <span className="label-caps !text-[10px]">{children}</span>
    </div>
);

// --- Pages ---

const Landing = ({ onStart }) => {
    const [formData, setFormData] = useState({ name: '', organization: '' });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container-center pt-20"
        >
            <div className="max-w-xl mx-auto text-center mb-12">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex p-5 rounded-[2rem] bg-indigo-600/10 border border-indigo-500/20 mb-8"
                >
                    <BrainCircuit className="w-12 h-12 text-indigo-400" />
                </motion.div>
                <h1 className="text-6xl font-black mb-6 tracking-tighter gradient-text leading-tight">
                    AI Audit Agent <br /> <span className="text-secondary text-4xl">Compliance Intelligence</span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed">
                    The industry standard for evaluating Large Language Model policy alignment, security posture, and data provenance.
                </p>
            </div>

            <div className="max-w-lg mx-auto glass-card p-10 mt-12">
                <SectionLabel icon={User}>Personnel Verification</SectionLabel>
                <div className="space-y-4 mb-8">
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="text"
                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all font-medium"
                            placeholder="Auditor Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="text"
                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all font-medium"
                            placeholder="Organization"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        />
                    </div>
                </div>

                <button
                    onClick={() => formData.name && formData.organization && onStart(formData)}
                    disabled={!formData.name || !formData.organization}
                    className="w-full bg-white text-slate-950 font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-20 shadow-2xl shadow-white/5"
                >
                    Initialize Audit <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </motion.div>
    );
};

const AuditStep = ({ item, index, total, categoryName, categoryIndex, response, setResponse, onNext, onPrev }) => {
    const [isEvaluating, setIsEvaluating] = useState(false);

    const handleNext = () => {
        setIsEvaluating(true);
        setTimeout(() => {
            setIsEvaluating(false);
            onNext();
        }, 1000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="container-center pt-8"
        >
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <span className="label-caps text-indigo-500 mb-1 block">Phase {categoryIndex + 1}</span>
                        <h2 className="text-3xl font-black">{categoryName}</h2>
                    </div>
                    <div className="text-right">
                        <div className="text-slate-500 font-mono text-sm font-bold">{index + 1} / {total}</div>
                    </div>
                </div>

                <ProgressBar current={index + 1} total={total} />

                <div className="space-y-8">
                    <div className="glass-card p-10 border-l-[6px] border-l-indigo-600">
                        <div className="flex items-start gap-4 mb-6">
                            <MessageSquare className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                            <p className="text-2xl font-semibold leading-tight text-white italic">
                                "{item.question.replace(/^"|"$/g, '')}"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                            <div>
                                <SectionLabel icon={Info}>Audit Objective</SectionLabel>
                                <p className="text-slate-400 text-sm font-medium">{item.purpose}</p>
                            </div>
                            <div>
                                <SectionLabel icon={Shield}>Compliance Mapping</SectionLabel>
                                <div className="flex items-center gap-2">
                                    <span className="bg-indigo-500/10 text-indigo-400 font-black text-[11px] px-2 py-1 rounded border border-indigo-500/20">
                                        {item.reference}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <SectionLabel icon={Sparkles}>Implementation Evidence</SectionLabel>
                        <div className="glass-card bg-slate-950/20 border-white/5 overflow-hidden ring-1 ring-white/5 focus-within:ring-indigo-500/40 transition-all">
                            <textarea
                                className="w-full bg-transparent border-none p-8 h-56 text-lg text-white placeholder:text-slate-700 focus:outline-none resize-none leading-relaxed"
                                placeholder="Describe your controls, policies, or technical implementations here..."
                                value={response}
                                onChange={(e) => setResponse(e.target.value)}
                            />
                            <div className="absolute bottom-4 right-6 pointer-events-none">
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-700 tracking-widest">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                                    Agent Active
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                        <button
                            onClick={onPrev}
                            disabled={index === 0 && categoryIndex === 0}
                            className="px-8 py-4 rounded-xl text-slate-500 font-bold hover:text-white hover:bg-white/5 transition-all text-sm disabled:opacity-0"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={!response || isEvaluating}
                            className="bg-indigo-600 hover:bg-indigo-500 text-white pl-12 pr-10 py-5 rounded-2xl flex items-center gap-3 transition-all font-black uppercase text-xs tracking-widest shadow-2xl shadow-indigo-900/40"
                        >
                            {isEvaluating ? (
                                <RefreshCw className="w-5 h-5 animate-spin" />
                            ) : (
                                <>Submit Result <ChevronRight className="w-5 h-5" /></>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const CategoryResult = ({ category, results, onContinue }) => {
    const avgScore = (results.reduce((acc, r) => acc + r.score, 0) / results.length).toFixed(1);
    const verdict = avgScore >= 4 ? 'Compliant' : avgScore >= 3 ? 'Caution' : 'High Risk';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="container-center pt-20"
        >
            <div className="max-w-2xl mx-auto text-center">
                <label className="label-caps text-indigo-500 mb-2 block">Section Finalized</label>
                <h2 className="text-6xl font-black mb-12 tracking-tighter">{category.name}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="glass-card p-12">
                        <SectionLabel>Compliance Magnitude</SectionLabel>
                        <div className="text-8xl font-black text-white mt-2 leading-none">{avgScore}</div>
                        <div className="text-slate-600 font-black text-[10px] uppercase mt-4">Total Phase Score / 5.0</div>
                    </div>

                    <div className="glass-card p-12 flex flex-col justify-center">
                        <SectionLabel>Evaluated Verdict</SectionLabel>
                        <div className={`text-4xl font-black mb-4 ${avgScore >= 4 ? 'text-emerald-500' : avgScore >= 3 ? 'text-amber-500' : 'text-rose-500'}`}>
                            {verdict.toUpperCase()}
                        </div>
                        <p className="text-slate-500 text-xs font-medium leading-relaxed">
                            The evidence denotes {avgScore >= 4 ? 'strong' : 'significant'} {avgScore >= 4 ? 'alignment' : 'developmental gaps'}. It is recommended to {avgScore >= 4 ? 'maintain' : 'formalize'} the control artifacts and technical validation procedures for this phase.
                        </p>
                    </div>
                </div>

                <button
                    onClick={onContinue}
                    className="w-full bg-white text-slate-950 font-black py-6 rounded-[2rem] flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-2xl shadow-white/5"
                >
                    Continue Assessment <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </motion.div>
    );
};

const Report = ({ userData, results, onRestart }) => {
    const averageScore = (results.reduce((acc, curr) => acc + curr.score, 0) / results.length).toFixed(1);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container-center py-16"
        >
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-8 h-8 text-indigo-500" />
                            <span className="label-caps !text-indigo-400">Compliance Artifact</span>
                        </div>
                        <h1 className="text-7xl font-black tracking-tighter mb-4 leading-none">Final Audit</h1>
                        <div className="flex gap-4 font-bold text-xs text-slate-500 font-mono uppercase">
                            <span>Organization: <span className="text-white">{userData.organization}</span></span>
                            <span className="text-slate-700">|</span>
                            <span>Auditor: <span className="text-white">{userData.name}</span></span>
                        </div>
                    </div>
                    <button
                        onClick={() => window.print()}
                        className="no-print bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-sm transition-all hover:bg-indigo-500 shadow-2xl shadow-indigo-900/40 flex items-center gap-3"
                    >
                        <Download className="w-5 h-5" /> Download PDF
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    <div className="glass-card p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5"><TrendingUp className="w-20 h-20" /></div>
                        <SectionLabel>Aggregate Context</SectionLabel>
                        <div className="text-8xl font-black text-white mt-2 leading-none">{averageScore}</div>
                        <div className="label-caps mt-4 text-[9px]">Normalized Score / 5.0</div>
                    </div>

                    <div className="lg:col-span-2 glass-card p-12 flex flex-col justify-center border-t-4" style={{ borderColor: averageScore >= 4 ? '#10B981' : averageScore >= 3 ? '#F59E0B' : '#EF4444' }}>
                        <SectionLabel>Conformity Rating</SectionLabel>
                        <div className="text-5xl font-black mb-6 tracking-tight uppercase">
                            {averageScore >= 4 ? 'Excellent Compliance' : averageScore >= 3 ? 'Foundational Gaps' : 'High Risk Profile'}
                        </div>
                        <p className="text-slate-400 font-medium leading-relaxed">
                            Based on the 30 analyzed controls, the target environment demonstrates {averageScore >= 4 ? 'a robust' : 'an emergent'} security posture. {averageScore < 4 && 'Immediate attention to Phase 3 and 4 gap items is recommended to achieve enterprise-grade resilience.'}
                        </p>
                    </div>
                </div>

                <div className="space-y-12">
                    <h3 className="text-3xl font-black tracking-tight flex items-center gap-3 border-l-4 border-indigo-600 pl-6">
                        <FileCheck className="w-8 h-8 text-indigo-600" /> Evidence Audit Logs
                    </h3>

                    {results.map((res, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.02 }}
                            key={i}
                            className="glass-card p-10 bg-slate-900/10 border-white/5"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-2.5 py-1 bg-white/5 text-slate-300 text-[10px] font-black rounded border border-white/10 uppercase">{res.id}</span>
                                        <span className="text-[10px] text-indigo-500 font-bold tracking-widest uppercase">{res.reference}</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-white leading-tight">
                                        {res.question.replace(/^"|"$/g, '')}
                                    </h4>
                                </div>
                                <div className="w-24 h-24 rounded-[2rem] bg-slate-950 border border-white/10 flex flex-col items-center justify-center flex-shrink-0">
                                    <span className="text-[9px] text-slate-600 font-black uppercase mb-1">Impact</span>
                                    <span className={`text-4xl font-black ${res.score >= 4 ? 'text-emerald-500' : res.score >= 3 ? 'text-amber-500' : 'text-rose-500'}`}>{res.score}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5">
                                    <SectionLabel icon={MessageSquare}>Auditor Testimony</SectionLabel>
                                    <p className="text-slate-400 text-sm leading-relaxed italic pr-4">"{res.response}"</p>
                                </div>
                                <div className="bg-indigo-600/5 p-6 rounded-2xl border border-indigo-500/10">
                                    <SectionLabel icon={Sparkles}>Agent Logic Evaluation</SectionLabel>
                                    <p className="text-slate-300 text-sm leading-relaxed">{res.rationale}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="pt-24 pb-12 text-center no-print">
                    <button
                        onClick={onRestart}
                        className="text-slate-600 hover:text-white font-bold text-sm flex items-center gap-3 mx-auto transition-all uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white/5"
                    >
                        Secure Sign-out & Reset
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default function App() {
    const [mode, setMode] = useState('landing');
    const [userData, setUserData] = useState({ name: '', organization: '' });
    const [catIndex, setCatIndex] = useState(0);
    const [quesIndex, setQuesIndex] = useState(0);
    const [responses, setResponses] = useState({});
    const [auditResults, setAuditResults] = useState([]);

    const currentCategory = categoricalChecklist[catIndex];
    const currentQuestion = currentCategory?.questions[quesIndex];

    const handleStart = (data) => {
        setUserData(data);
        setMode('audit');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNext = () => {
        const key = `${catIndex}_${quesIndex}`;
        const resp = responses[key] || "";

        // Auto-evaluate logic
        const evaluate = (r) => {
            let score = 0;
            if (r.length > 10) score = 1;
            if (r.length > 50) score = 2;
            if (r.length > 120) score = 3;
            if (r.length > 200 || r.toLowerCase().includes('policy') || r.toLowerCase().includes('control') || r.toLowerCase().includes('evidence')) score = 4;
            if (score === 4 && r.length > 350) score = 5;

            const rationales = {
                5: "Verification complete. Detailed evidence provided correlates directly with the suggested compliance artifacts.",
                4: "Strong alignment. Substantial evidence provided with documented procedural references.",
                3: "Acceptable alignment. Core requirements are addressed but lack enterprise-grade documentation depth.",
                2: "Substantial gaps detected. Implementation details provided do not sufficiently address the control objective.",
                1: "Non-compliant. Significant missing elements or misunderstanding of the control mandate identified.",
                0: "No qualitative evidence provided."
            };

            return { score, rationale: rationales[score] };
        };

        const evalResult = evaluate(resp);
        const resultItem = {
            ...currentQuestion,
            response: resp,
            ...evalResult
        };

        setAuditResults([...auditResults, resultItem]);

        if (quesIndex < currentCategory.questions.length - 1) {
            setQuesIndex(quesIndex + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setMode('category_result');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleContinueCategory = () => {
        if (catIndex < categoricalChecklist.length - 1) {
            setCatIndex(catIndex + 1);
            setQuesIndex(0);
            setMode('audit');
        } else {
            setMode('final_report');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentCategoryResults = useMemo(() => {
        return auditResults.filter(r => currentCategory.questions.some(q => q.id === r.id));
    }, [auditResults, currentCategory]);

    return (
        <div className="min-h-screen text-slate-50 selection:bg-indigo-500/40 selection:text-white">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/10 blur-[180px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-purple-900/10 blur-[180px] rounded-full"></div>
            </div>

            <nav className="fixed top-0 left-0 right-0 h-24 border-b border-white/5 z-50 bg-slate-950/20 backdrop-blur-md">
                <div className="container-center h-full flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                            <Shield className="w-7 h-7 text-slate-950" />
                        </div>
                        <div>
                            <span className="text-xl font-black tracking-tighter block leading-tight">AI AUDITOR</span>
                            <span className="label-caps !text-[9px] !text-indigo-500 !tracking-[0.3em]">Professional Suite</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                            <span className="text-[10px] font-black tracking-widest uppercase text-slate-500">System Ready</span>
                        </div>
                        {mode !== 'landing' && (
                            <div className="px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest">
                                Audit Active
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <main className="pt-24 pb-20">
                <AnimatePresence mode="wait">
                    {mode === 'landing' && (
                        <Landing onStart={handleStart} key="landing" />
                    )}

                    {mode === 'audit' && (
                        <AuditStep
                            key={`${catIndex}_${quesIndex}`}
                            item={currentQuestion}
                            index={quesIndex}
                            total={currentCategory.questions.length}
                            categoryName={currentCategory.name}
                            categoryIndex={catIndex}
                            response={responses[`${catIndex}_${quesIndex}`] || ''}
                            setResponse={(val) => setResponses({ ...responses, [`${catIndex}_${quesIndex}`]: val })}
                            onNext={handleNext}
                            onPrev={() => {
                                if (quesIndex > 0) {
                                    setQuesIndex(quesIndex - 1);
                                    setAuditResults(auditResults.slice(0, -1));
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                        />
                    )}

                    {mode === 'category_result' && (
                        <CategoryResult
                            key="cat-result"
                            category={currentCategory}
                            results={currentCategoryResults}
                            onContinue={handleContinueCategory}
                        />
                    )}

                    {mode === 'final_report' && (
                        <Report
                            userData={userData}
                            results={auditResults}
                            onRestart={() => {
                                setMode('landing');
                                setCatIndex(0);
                                setQuesIndex(0);
                                setResponses({});
                                setAuditResults([]);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            key="report"
                        />
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
