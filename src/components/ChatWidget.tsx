import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, RotateCcw } from "lucide-react";

/* ── Types ────────────────────────────────────────────────── */
type Bubble = { from: "bot" | "user"; text: string };
type Option = { label: string; act: string };

interface BotReply {
  text: string;
  options?: Option[];
  nextTopic?: Topic;
  action?: "wa" | "contact";
}

type Topic = "none" | "esg" | "itam" | "circular" | "pricing" | "about" | "engagement";

/* ── Intent detection ─────────────────────────────────────── */
type Intent =
  | "greeting"
  | "acknowledgement"
  | "negative"
  | "farewell"
  | "esg"
  | "itam"
  | "circular"
  | "pricing"
  | "about"
  | "engagement"
  | "contact"
  | "unknown";

function detect(raw: string): Intent {
  const t = raw.toLowerCase().trim();

  /* Farewell — checked FIRST so "thanks bye" is caught here, not as acknowledgement */
  if (/bye|goodbye|see (you|ya)|take care|farewell|ciao|ttyl|(that'?s? all)|(all for now)/.test(t)) return "farewell";

  /* Negative responses */
  if (/^(no+|nope|nah|not really|nothing( else)?|i'?m (good|fine|all good|all set)|no thanks?|that'?s? (all|it|fine|ok)|not at the moment|not now)/.test(t)) return "negative";

  /* Greetings */
  if (/^(hi+|hello|hey|good (morning|afternoon|evening)|howdy|greetings|what'?s up|sup)/.test(t)) return "greeting";

  /* Acknowledgements */
  if (/^(ok(ay)?|done|thanks?|thank(s| you)|got it|great|perfect|cool|sounds good|alright|noted|sure|nice|wonderful|excellent|appreciate|awesome|brilliant|understood|makes sense|clear)/.test(t)) return "acknowledgement";

  /* Topics */
  if (/esg|sustainab|climate|ghg|scope [123]|carbon|tcfd|sgx|mas green|reporting|net.zero|green plan|disclosure|emission/.test(t)) return "esg";
  if (/itam|it asset|asset (manage|program|lifecycle|disposal|refresh)|hardware|laptop|device|end.of.life|eol/.test(t)) return "itam";
  if (/circular( economy)?|waste|resource (effic|flow|optim)|recycle|upcycl|reuse/.test(t)) return "circular";
  if (/price|cost|fee|rate|charge|how much|budget|expensive|afford|package/.test(t)) return "pricing";
  if (/who are|about (you|zelvra)|what (is|does) zelvra|tell me about|your (company|firm|team|founder|background)|services/.test(t)) return "about";
  if (/engag|how does it work|process|steps?|what happens?|discovery call|deliverable|timeline/.test(t)) return "engagement";
  if (/whatsapp|call|speak|talk|contact|reach|meet|connect|phone|email/.test(t)) return "contact";

  return "unknown";
}

/* ── Response engine ──────────────────────────────────────── */
const MAIN_MENU: Option[] = [
  { label: "ESG & Sustainability reporting", act: "esg" },
  { label: "IT Asset Management",            act: "itam" },
  { label: "Circular Economy advisory",      act: "circular" },
  { label: "About Zelvra",                   act: "about" },
  { label: "Pricing & engagement",           act: "pricing" },
];

const CONNECT_OPTIONS: Option[] = [
  { label: "💬 WhatsApp  +65 9323 8150", act: "wa" },
  { label: "📝 Use contact form",         act: "contact" },
  { label: "↩ Back to menu",              act: "menu" },
];

function topicLabel(t: Topic): string {
  const map: Record<string, string> = {
    esg: "ESG reporting", itam: "IT Asset Management",
    circular: "Circular Economy", pricing: "pricing",
    about: "Zelvra", engagement: "our engagement model",
  };
  return map[t] || "this";
}

function buildReply(intent: Intent, topic: Topic, waOpened: boolean): BotReply {
  /* ── Acknowledgements — context-aware ── */
  if (intent === "acknowledgement") {
    if (waOpened) {
      return {
        text: "We look forward to hearing from you! Feel free to come back if you have any other questions.",
        options: [{ label: "Back to main menu", act: "menu" }],
      };
    }
    if (topic !== "none") {
      return {
        text: `Glad I could help with ${topicLabel(topic)}! Anything else on your mind?`,
        options: [...MAIN_MENU, { label: "Connect with the team", act: "connect" }],
      };
    }
    return {
      text: "Happy to help! What would you like to know about?",
      options: MAIN_MENU,
    };
  }

  /* ── Negative responses ── */
  if (intent === "negative") {
    return {
      text: "No problem at all! Feel free to come back anytime. You can also reach us directly at talk.to.us@zelvra.com.sg or WhatsApp +65 9323 8150.",
      options: [{ label: "↩ Back to main menu", act: "menu" }],
    };
  }

  /* ── Farewells ── */
  if (intent === "farewell") {
    return {
      text: "Thanks for stopping by! If you ever need help with ESG, ITAM or Circular Economy — reach us at talk.to.us@zelvra.com.sg or WhatsApp +65 9323 8150. Take care!",
    };
  }

  /* ── Greetings ── */
  if (intent === "greeting") {
    return {
      text: "Hi! Great to hear from you. What can I help you with today?",
      options: MAIN_MENU,
    };
  }

  /* ── Contact ── */
  if (intent === "contact") {
    return {
      text: "The best way to reach us is WhatsApp Business (+65 9323 8150) or our contact form — we respond within one business day, Mon–Fri SGT.",
      options: CONNECT_OPTIONS,
      nextTopic: topic,
    };
  }

  /* ── ESG ── */
  if (intent === "esg") {
    return {
      nextTopic: "esg",
      text: "ESG and sustainability reporting is at the core of what we do. We cover SGX mandatory climate disclosure, GHG inventories (Scope 1–3 to ISO 14064), TCFD alignment, and MAS green finance taxonomy. Are you working to a specific deadline or still scoping your needs?",
      options: [
        { label: "We have a reporting deadline", act: "esg_deadline" },
        { label: "Still scoping / early stage",  act: "esg_early" },
        { label: "Just exploring",               act: "esg_explore" },
      ],
    };
  }

  /* ── ITAM ── */
  if (intent === "itam") {
    return {
      nextTopic: "itam",
      text: "Our IT Asset Management service runs audit-ready, circular-economy-aligned programmes — covering asset baseline, lifecycle tracking, ESG-reportable disposition, and data security. What are you looking to solve?",
      options: [
        { label: "Manage existing assets better", act: "itam_manage" },
        { label: "Asset disposal or refresh",     act: "itam_dispose" },
        { label: "Build a programme from scratch", act: "itam_build" },
      ],
    };
  }

  /* ── Circular ── */
  if (intent === "circular") {
    return {
      nextTopic: "circular",
      text: "Our Circular Economy advisory follows an Assess → Optimise → Report framework — mapping your resource flows, identifying value leakage, and producing KPIs that feed directly into your sustainability reports. Is this for a reporting requirement, cost reduction, or broader ESG strategy?",
      options: [
        { label: "Reporting requirement",  act: "circ_report" },
        { label: "Cost / resource savings", act: "circ_cost" },
        { label: "Broader ESG strategy",   act: "circ_esg" },
      ],
    };
  }

  /* ── Pricing ── */
  if (intent === "pricing") {
    return {
      nextTopic: "pricing",
      text: "We scope every engagement individually — no off-the-shelf packages. Pricing reflects the complexity and duration of the programme, and we're transparent about it from the first call. The fastest way to get a sense of scope is a short discovery conversation.",
      options: [
        { label: "Book a call on WhatsApp", act: "wa" },
        { label: "Send a message first",    act: "contact" },
        { label: "How does an engagement work?", act: "engagement" },
      ],
    };
  }

  /* ── About ── */
  if (intent === "about") {
    return {
      nextTopic: "about",
      text: "Zelvra Group is a Singapore advisory firm founded by a senior professional with 20+ years across a global IT managed services firm, an energy major in Singapore, and a regional resources company — plus an NTU Executive MSc in Sustainability Management. All engagements are led personally by the founding principal.",
      options: [
        { label: "What services do you offer?", act: "menu" },
        { label: "How does an engagement work?", act: "engagement" },
        { label: "Connect with the team",        act: "connect" },
      ],
    };
  }

  /* ── Engagement ── */
  if (intent === "engagement") {
    return {
      nextTopic: "engagement",
      text: "Every engagement runs through four steps: (1) Discovery call to map objectives and gaps, (2) Programme design with tailored milestones, (3) Hands-on delivery led by the principal throughout, and (4) Outcome review with regulatory-ready outputs. You work directly with the person who scoped it — no junior team handoffs.",
      options: [
        { label: "Start with a discovery call", act: "wa" },
        { label: "Back to services",            act: "menu" },
      ],
    };
  }

  /* ── Unknown ── */
  return {
    text: "I didn't quite catch that — here's what I can help with:",
    options: MAIN_MENU,
  };
}

/* Sub-flow replies triggered by option buttons */
function subReply(act: string, topic: Topic): BotReply {
  /* Top-level topic selections from main menu → delegate to buildReply */
  const topLevelMap: Partial<Record<string, Intent>> = {
    esg: "esg", itam: "itam", circular: "circular",
    about: "about", pricing: "pricing", engagement: "engagement", contact: "contact",
  };
  if (topLevelMap[act]) return buildReply(topLevelMap[act]!, topic, false);

  switch (act) {
    /* ESG sub-flows */
    case "esg_deadline":
      return {
        text: "Understood — deadlines make everything sharper. Is it SGX mandatory climate disclosure, a GHG Scope 1–3 inventory, or another requirement like a sustainability-linked covenant?",
        options: [
          { label: "SGX climate disclosure",      act: "esg_sgx" },
          { label: "GHG / Scope 1–3 inventory",  act: "esg_ghg" },
          { label: "Something else",             act: "connect" },
        ],
      };
    case "esg_early":
      return {
        text: "Early stage is a good time to get clarity before the pressure builds. Our discovery sessions map your gaps, regulatory exposure, and a realistic programme structure. Is this for one entity or a group of companies?",
        options: [
          { label: "One entity",                 act: "connect" },
          { label: "Group / multiple entities",  act: "connect" },
        ],
      };
    case "esg_explore":
      return {
        text: "No problem at all. Our ESG work spans SGX climate reporting, GHG inventories, TCFD gap assessments, and MAS green finance alignment — all principal-led, no junior teams. What sector is your business in?",
        options: [
          { label: "Energy / Petrochemicals",    act: "connect" },
          { label: "Logistics / Supply Chain",   act: "connect" },
          { label: "Technology / Data Centres",  act: "connect" },
          { label: "Healthcare",                 act: "connect" },
          { label: "Other",                      act: "connect" },
        ],
      };
    case "esg_sgx":
      return {
        text: "SGX mandatory climate reporting is our core specialisation — TCFD scenario analysis, climate risk register, Scope 1–3 boundary setting, and a disclosure-ready report. We work within your deadline. Ready to scope it?",
        options: CONNECT_OPTIONS,
      };
    case "esg_ghg":
      return {
        text: "We build GHG inventories to ISO 14064 and GHG Protocol standards — audit-ready and reportable. Are you a listed company, an SME, or responding to a supply chain request?",
        options: [
          { label: "Listed company",             act: "connect" },
          { label: "SME",                        act: "esg_sme" },
          { label: "Supply chain request",       act: "connect" },
        ],
      };
    case "esg_sme":
      return {
        text: "SMEs are increasingly pulled into ESG through procurement requirements and investor pressure. We design proportionate, practical programmes for this exact situation — not oversized enterprise frameworks. Want a quick scoping call?",
        options: CONNECT_OPTIONS,
      };

    /* ITAM sub-flows */
    case "itam_manage":
      return {
        text: "Are you focused on cost visibility and audit readiness, or on connecting asset data to ESG and circular economy reporting?",
        options: [
          { label: "Cost & audit readiness",    act: "connect" },
          { label: "ESG / circular reporting",  act: "itam_esg" },
          { label: "Both",                      act: "connect" },
        ],
      };
    case "itam_esg":
      return {
        text: "Most ITAM programmes don't connect to ESG yet — that's exactly the circular economy gap we address. We turn asset lifecycle data into reportable sustainability metrics. Want to explore what that looks like for your setup?",
        options: CONNECT_OPTIONS,
      };
    case "itam_dispose":
      return {
        text: "Disposal and refresh cycles carry data security, environmental liability, and ESG reporting implications. Our programmes are audit-ready and aligned with Singapore's circular economy targets. Roughly how large is the asset base?",
        options: [
          { label: "Under 500 assets",    act: "connect" },
          { label: "500–5,000 assets",    act: "connect" },
          { label: "5,000+ assets",       act: "connect" },
        ],
      };
    case "itam_build":
      return {
        text: "Building from scratch is actually the cleanest starting point — we can design the programme to be audit-ready and ESG-reportable from day one. Shall we set up a discovery call?",
        options: CONNECT_OPTIONS,
      };

    /* Circular sub-flows */
    case "circ_report":
      return {
        text: "Getting ahead of reporting requirements with real operational circular changes is exactly the right approach. We map your resource flows and build a measurable programme around them. Ready to set up a scoping session?",
        options: CONNECT_OPTIONS,
      };
    case "circ_cost":
      return {
        text: "Resource efficiency and cost reduction go hand in hand. Our Assess → Optimise → Report framework pinpoints where value is leaking from your operations and builds a recovery pathway. What's your sector?",
        options: [
          { label: "Manufacturing / Petrochemicals", act: "connect" },
          { label: "Logistics / Supply Chain",       act: "connect" },
          { label: "Technology / Data Centres",      act: "connect" },
          { label: "Other",                          act: "connect" },
        ],
      };
    case "circ_esg":
      return {
        text: "Circular economy sits at the heart of a credible ESG strategy — it's where you move beyond reporting language to operational changes with measurable outcomes. Want to talk through what that looks like for your business?",
        options: CONNECT_OPTIONS,
      };

    /* Connect */
    case "connect":
      return {
        text: "The best next step is a direct conversation. You can reach us on WhatsApp Business (+65 9323 8150) or through our contact form — we respond within one business day, Mon–Fri SGT.",
        options: CONNECT_OPTIONS,
      };

    /* Engagement info */
    case "engagement":
      return subReply("_engagement", topic);
    case "_engagement":
      return {
        text: "Four steps: (1) Discovery call — map objectives and gaps. (2) Programme design — tailored milestones and deliverables. (3) Delivery — principal-led throughout. (4) Outcome review — regulatory-ready outputs and next steps.",
        options: [
          { label: "Start a discovery call", act: "wa" },
          { label: "Back to menu",           act: "menu" },
        ],
      };

    /* Main menu */
    case "menu":
      return {
        text: "Here's what I can help with:",
        options: MAIN_MENU,
      };

    default:
      return {
        text: "Here's what I can help with:",
        options: MAIN_MENU,
      };
  }
}

function waLink(firstMsg: string) {
  const preview = firstMsg.slice(0, 100);
  const msg = preview
    ? `Hi Zelvra! I visited your website and had a question: "${preview}". Could we connect?`
    : "Hi Zelvra! I visited your website and would like to connect.";
  return `https://wa.me/6593238150?text=${encodeURIComponent(msg)}`;
}

/* ── Component ────────────────────────────────────────────── */
const GREETING =
  "Hi there! I'm Zelvra's assistant. I can help with ESG reporting, IT Asset Management, Circular Economy advisory, and more. What can I help you with today?";

export default function ChatWidget() {
  const [open,      setOpen]      = useState(false);
  const [bubbles,   setBubbles]   = useState<Bubble[]>([]);
  const [options,   setOptions]   = useState<Option[]>(MAIN_MENU);
  const [input,     setInput]     = useState("");
  const [topic,     setTopic]     = useState<Topic>("none");
  const [waOpened,  setWaOpened]  = useState(false);
  const [started,   setStarted]   = useState(false);
  const [firstMsg,  setFirstMsg]  = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && !started) {
      setBubbles([{ from: "bot", text: GREETING }]);
      setOptions(MAIN_MENU);
      setStarted(true);
    }
  }, [open, started]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [bubbles, options]);

  function applyReply(reply: BotReply, userText: string, isFirstUser: boolean) {
    if (isFirstUser) setFirstMsg(userText);
    if (reply.nextTopic) setTopic(reply.nextTopic);

    setBubbles(b => [...b, { from: "bot", text: reply.text }]);
    setOptions(reply.options ?? []);

    if (reply.action === "wa") {
      setWaOpened(true);
      setTimeout(() => window.open(waLink(firstMsg || userText), "_blank"), 400);
    }
    if (reply.action === "contact") {
      setTimeout(() => (window.location.href = "/contact"), 400);
    }
  }

  function onOption(opt: Option) {
    const isFirst = bubbles.filter(b => b.from === "user").length === 0;
    setBubbles(b => [...b, { from: "user", text: opt.label }]);
    setOptions([]);

    if (opt.act === "wa") {
      const reply: BotReply = {
        text: "Opening WhatsApp now — we look forward to hearing from you!",
        action: "wa",
        options: [{ label: "↩ Back to menu", act: "menu" }],
      };
      setTimeout(() => applyReply(reply, opt.label, isFirst), 300);
      return;
    }
    if (opt.act === "contact") {
      const reply: BotReply = {
        text: "Taking you to our contact form — describe your programme in detail and we'll respond within one business day.",
        action: "contact",
      };
      setTimeout(() => applyReply(reply, opt.label, isFirst), 300);
      return;
    }

    const reply = subReply(opt.act, topic);
    setTimeout(() => applyReply(reply, opt.label, isFirst), 300);
  }

  function onSend() {
    const text = input.trim();
    if (!text) return;
    setInput("");

    const isFirst = bubbles.filter(b => b.from === "user").length === 0;
    setBubbles(b => [...b, { from: "user", text }]);
    setOptions([]);

    const intent = detect(text);
    const reply = buildReply(intent, topic, waOpened);
    setTimeout(() => applyReply(reply, text, isFirst), 350);
  }

  function reset() {
    setBubbles([{ from: "bot", text: GREETING }]);
    setOptions(MAIN_MENU);
    setTopic("none");
    setWaOpened(false);
    setFirstMsg("");
    setInput("");
  }

  const showReset = bubbles.filter(b => b.from === "user").length > 0;

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close chat" : "Chat with us"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-transform duration-200 hover:scale-105 focus:outline-none"
        style={{ background: "linear-gradient(135deg,#6B21C8,#06C9E8)" }}
      >
        {open ? <X className="h-5 w-5 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex w-[340px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl shadow-2xl"
          style={{ background: "oklch(0.10 0.045 262)", border: "1px solid oklch(0.24 0.04 268 / 0.45)" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5" style={{ background: "linear-gradient(135deg,#6B21C8,#06C9E8)" }}>
            <img src="/zelvra-logo.png" alt="Zelvra" className="h-7 w-auto" />
            <div className="flex-1">
              <div className="text-[0.8125rem] font-bold text-white">Zelvra Assistant</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                <span className="text-[0.6875rem] text-white/75">Online · 1-day response</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-white/70 hover:text-white transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-2.5 overflow-y-auto p-4" style={{ maxHeight: "390px" }}>
            {bubbles.map((b, i) => (
              <div key={i} className={`flex ${b.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[0.8125rem] leading-[1.6] ${
                    b.from === "user" ? "rounded-tr-sm text-white" : "rounded-tl-sm text-white/85"
                  }`}
                  style={
                    b.from === "user"
                      ? { background: "linear-gradient(135deg,#6B21C8,#06C9E8)" }
                      : { background: "oklch(0.16 0.05 265)", border: "1px solid oklch(0.24 0.04 268 / 0.5)" }
                  }
                >
                  {b.text}
                </div>
              </div>
            ))}

            {/* Option buttons */}
            {options.length > 0 && (
              <div className="flex flex-col gap-1.5 pt-1">
                {options.map(opt => (
                  <button
                    key={opt.act + opt.label}
                    onClick={() => onOption(opt)}
                    className="rounded-xl border border-white/[0.10] px-3.5 py-2.5 text-left text-[0.8125rem] font-semibold text-white/65 transition-colors duration-150 hover:border-white/25 hover:text-white/90"
                    style={{ background: "oklch(0.13 0.05 265)" }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Reset */}
            {showReset && options.length === 0 && (
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-[0.6875rem] text-white/25 hover:text-white/50 transition-colors mx-auto pt-1"
              >
                <RotateCcw className="h-3 w-3" /> Start over
              </button>
            )}

            <div ref={endRef} />
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 border-t px-3 py-2.5"
            style={{ borderColor: "oklch(0.24 0.04 268 / 0.45)", background: "oklch(0.12 0.048 262)" }}
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && onSend()}
              placeholder="Or type a question…"
              className="flex-1 bg-transparent text-[0.8125rem] text-white/80 outline-none placeholder:text-white/25"
            />
            <button
              onClick={onSend}
              disabled={!input.trim()}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white transition-all duration-150 hover:brightness-110 disabled:opacity-30"
              style={{ background: "linear-gradient(135deg,#6B21C8,#06C9E8)" }}
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="px-4 py-2 text-center text-[0.625rem] text-white/20" style={{ background: "oklch(0.10 0.045 262)" }}>
            Powered by Zelvra · Singapore
          </div>
        </div>
      )}
    </>
  );
}
