import { useState } from "react";

const QUESTIONS = [
  {
    id: "hook_moment",
    label: "¿Cuál fue el momento exacto en que decidiste enviar propuestas a Europa?",
    placeholder: "Ej: 'Estaba analizando el mercado energético europeo a las 2am y vi que nadie estaba haciendo lo que yo podía hacer...'",
    video: 1,
  },
  {
    id: "roof_memory",
    label: "Descríbeme UN recuerdo específico de cuando reparabas techos. ¿Qué pensabas?",
    placeholder: "Ej: 'Estaba en un techo en pleno verano, 35°C, y veía cómo el capataz anotaba todo en papel. Pensé: esto es absurdo.'",
    video: 3,
  },
  {
    id: "acciona_moment",
    label: "¿Qué sentiste exactamente cuando llegó el correo de Acciona? ¿Dónde estabas?",
    placeholder: "Ej: 'Estaba en mi cuarto, eran las 11pm, vi la notificación y tuve que releerlo tres veces para creerlo.'",
    video: 1,
  },
  {
    id: "research_process",
    label: "¿Cómo personalizas cada propuesta? ¿Qué investigas de cada empresa antes de escribir?",
    placeholder: "Ej: 'Leo sus reportes anuales, identifico su pain point energético específico, adapto el dossier a su lenguaje corporativo...'",
    video: 2,
  },
  {
    id: "vibe_coding",
    label: "¿Qué es 'Vibe Coding' para ti en la práctica? Dame un ejemplo real de tu proceso.",
    placeholder: "Ej: 'A veces estoy en una reunión gestionando un contrato físico y al mismo tiempo tengo el editor abierto construyendo el módulo de alertas del software...'",
    video: 2,
  },
  {
    id: "biggest_fear",
    label: "¿Cuál fue tu mayor miedo antes de enviar la primera propuesta a una multinacional?",
    placeholder: "Ej: 'Que ni siquiera la abrieran. Que pensaran: ¿quién es este nadie de Panamá hablándonos de energía?'",
    video: 1,
  },
  {
    id: "jg_evolution",
    label: "¿En qué momento exacto JG Soluciones PA se convirtió en Grupo JG? ¿Hubo un antes y después?",
    placeholder: "Ej: 'Cuando firmé mi primer contrato de gestión y vi que podía escalar sin estar yo físicamente ahí. Ahí supe que era tecnología, no servicios.'",
    video: 3,
  },
  {
    id: "message_to_viewer",
    label: "¿Qué quieres que sienta alguien de 22 años en Latinoamérica al ver estos videos?",
    placeholder: "Ej: 'Que si yo pude, ellos también. Que la geografía no es un límite. Que el único requisito es no parar.'",
    video: 3,
  },
];

const VIDEO_META = {
  1: { title: "Video 1: El Salto", color: "#00c6ff", accent: "#0050a0", emoji: "🚀" },
  2: { title: "Video 2: El Proceso / Vibe Coding", color: "#00e5a0", accent: "#007a50", emoji: "⚙️" },
  3: { title: "Video 3: El Repara-Techos", color: "#ff8c00", accent: "#8c3a00", emoji: "🏗️" },
};

function generateScript(videoNum, answers) {
  const a = answers;

  if (videoNum === 1) {
    return `🎬 VIDEO 1 – "EL SALTO" (30-45 seg)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[HOOK – primeros 3 segundos, texto en pantalla + voz en off]
"Enviando mi software a las mayores empresas de energía de Europa... hasta que una diga sí."

[CORTE RÁPIDO – pantalla grabada: lista de empresas, Iberdrola, Naturgy, Enel, Acciona]
VOZ: "${a.hook_moment || 'Vi una oportunidad que nadie estaba atacando. No esperé permiso.'}"

[B-ROLL: oficina, código en pantalla, manos en teclado – ritmo acelerado]
VOZ: "10 correos. 10 empresas. Cada una con un dossier hecho a medida. No spam. Ingeniería de contacto."

[PAUSA DRAMÁTICA – pantalla negra, 1 segundo]

[NOTIFICACIÓN DE CORREO EN PANTALLA – zoom al asunto: Acciona]
VOZ: "${a.acciona_moment || 'Y entonces llegó el correo que cambió todo.'}"
TEXTO EN PANTALLA: "10 puertas cerradas. Una se abrió."

[CIERRE – cara a cámara o texto final]
"¿Qué pasa cuando una startup de Panamá llega a jugar con las grandes? Sigue el proceso. 👇"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 DIRECTOR'S NOTE: El mayor miedo que tenías: "${a.biggest_fear || 'el rechazo'}" — úsalo en la transición antes de la notificación. Ese momento de vulnerabilidad es lo que engancha.`;
  }

  if (videoNum === 2) {
    return `🎬 VIDEO 2 – "EL PROCESO / VIBE CODING" (45-60 seg)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[HOOK – voz directa a cámara, confianza total]
"La gente ve el correo de Acciona. No ve las 40 horas antes."

[PANTALLA GRABADA – proceso de investigación en tiempo real]
VOZ: "Antes de escribir una sola línea de propuesta, hago esto:"
TEXTO EN PANTALLA (aparece uno a uno):
→ Reporte anual de la empresa
→ Pain points energéticos específicos
→ Stack tecnológico actual
→ Lenguaje que usa su C-suite

VOZ: "${a.research_process || 'No es spam. Es ingeniería de contacto. Cada propuesta es un traje a medida.'}"

[CORTE – editor de código abierto, otra ventana con reunión activa]
VOZ: "Esto es lo que yo llamo Vibe Coding."
"${a.vibe_coding || 'Gestionando el presente, construyendo el futuro. Al mismo tiempo. Siempre.'}"

[TEXTO EN PANTALLA – brutalista, letras grandes]
"PROMESAS NO. HECHOS."

[CIERRE]
"¿Quieres ver qué responde Acciona cuando les entrego el siguiente entregable? Activa la campana. 👇"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 DIRECTOR'S NOTE: Muestra el proceso sin cortes ni edición perfecta. La autenticidad del escritorio real vale más que cualquier stock.`;
  }

  if (videoNum === 3) {
    return `🎬 VIDEO 3 – "EL REPARA-TECHOS" (45-60 seg)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[HOOK – voz lenta, casi íntima]
"Mucha gente ve el software hoy. Nadie vio al muchacho en el techo."

[B-ROLL sugerido: imágenes de techos bajo el sol, herramientas, calor]
VOZ: "${a.roof_memory || 'Estaba ahí arriba, sudando, y veía cómo todo se podía hacer diferente. Solo necesitaba el cómo.'}"

[CORTE LIMPIO – a la oficina actual, pantallas, código]
VOZ: "JG Soluciones PA reparaba techos. Hoy, Grupo JG diseña la infraestructura del futuro."

VOZ: "${a.jg_evolution || 'No fue de la noche a la mañana. Fue una decisión, y luego otra, y luego otra.'}"

[TEXTO EN PANTALLA – transición elegante]
"De los techos de Panamá → a las salas de Acciona, Europa."

[CARA A CÁMARA – directo, sin filtros]
VOZ: "${a.message_to_viewer || 'Si estás esperando tener todo perfecto para empezar: eso no existe. Empieza con lo que tienes. Yo empecé con un techo.'}"

[CIERRE con CTA]
"Esto es solo el comienzo del viaje. Síguelo. 👇 #GrupoJG #EmprendimientoReal"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 DIRECTOR'S NOTE: Este es el video más emocional. No tengas miedo del silencio dramático entre el recuerdo del techo y el corte al presente. Ese gap es el mensaje.`;
  }
}

export default function App() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState("form"); // form | scripts
  const [activeScript, setActiveScript] = useState(1);
  const [copied, setCopied] = useState(false);

  const filled = QUESTIONS.filter((q) => answers[q.id]?.trim()).length;
  const progress = Math.round((filled / QUESTIONS.length) * 100);

  const handleChange = (id, val) => setAnswers((prev) => ({ ...prev, [id]: val }));

  const copyScript = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scriptText = generateScript(activeScript, answers);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#e8e8e8",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1e1e2e",
        padding: "24px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#0d0d18",
      }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#555", textTransform: "uppercase", fontFamily: "monospace" }}>GRUPO JG</div>
          <div style={{ fontSize: "22px", fontWeight: "bold", color: "#fff", marginTop: "2px" }}>Script Intelligence System</div>
        </div>
        <div style={{
          background: "#111",
          border: "1px solid #222",
          borderRadius: "6px",
          padding: "8px 16px",
          fontSize: "12px",
          fontFamily: "monospace",
          color: "#00c6ff",
        }}>
          {filled}/{QUESTIONS.length} respuestas
        </div>
      </div>

      {/* Nav tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #1a1a2e", background: "#0d0d18" }}>
        {["form", "scripts"].map((tab) => (
          <button
            key={tab}
            onClick={() => setStep(tab)}
            style={{
              padding: "14px 28px",
              background: "none",
              border: "none",
              borderBottom: step === tab ? "2px solid #00c6ff" : "2px solid transparent",
              color: step === tab ? "#00c6ff" : "#555",
              cursor: "pointer",
              fontSize: "13px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontFamily: "monospace",
              transition: "all 0.2s",
            }}
          >
            {tab === "form" ? "📝 Intake" : "🎬 Guiones"}
          </button>
        ))}
      </div>

      {step === "form" && (
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "40px 24px" }}>
          {/* Progress */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "12px", fontFamily: "monospace", color: "#555" }}>
              <span>PROGRESO DEL INTAKE</span>
              <span style={{ color: progress === 100 ? "#00e5a0" : "#00c6ff" }}>{progress}%</span>
            </div>
            <div style={{ height: "3px", background: "#1a1a2e", borderRadius: "2px" }}>
              <div style={{
                height: "100%",
                width: `${progress}%`,
                background: progress === 100 ? "#00e5a0" : "#00c6ff",
                borderRadius: "2px",
                transition: "width 0.4s ease",
              }} />
            </div>
          </div>

          {/* Questions grouped by video */}
          {[1, 2, 3].map((vnum) => {
            const meta = VIDEO_META[vnum];
            const vquestions = QUESTIONS.filter((q) => q.video === vnum);
            return (
              <div key={vnum} style={{ marginBottom: "48px" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "24px",
                  paddingBottom: "12px",
                  borderBottom: `1px solid ${meta.color}22`,
                }}>
                  <span style={{ fontSize: "20px" }}>{meta.emoji}</span>
                  <div>
                    <div style={{ fontSize: "10px", letterSpacing: "3px", color: meta.color, fontFamily: "monospace", textTransform: "uppercase" }}>
                      PREGUNTAS PARA
                    </div>
                    <div style={{ fontSize: "16px", color: "#fff", fontWeight: "bold" }}>{meta.title}</div>
                  </div>
                </div>
                {vquestions.map((q) => {
                  const answered = answers[q.id]?.trim();
                  return (
                    <div key={q.id} style={{ marginBottom: "28px" }}>
                      <label style={{
                        display: "block",
                        fontSize: "14px",
                        color: answered ? "#ccc" : "#888",
                        marginBottom: "10px",
                        lineHeight: "1.5",
                        transition: "color 0.2s",
                      }}>
                        {answered && <span style={{ color: meta.color, marginRight: "8px" }}>✓</span>}
                        {q.label}
                      </label>
                      <textarea
                        value={answers[q.id] || ""}
                        onChange={(e) => handleChange(q.id, e.target.value)}
                        placeholder={q.placeholder}
                        rows={3}
                        style={{
                          width: "100%",
                          background: answered ? "#0f0f1a" : "#0a0a12",
                          border: `1px solid ${answered ? meta.color + "55" : "#1e1e2e"}`,
                          borderRadius: "8px",
                          color: "#ddd",
                          padding: "14px 16px",
                          fontSize: "14px",
                          lineHeight: "1.6",
                          resize: "vertical",
                          outline: "none",
                          fontFamily: "Georgia, serif",
                          transition: "border-color 0.2s",
                          boxSizing: "border-box",
                        }}
                        onFocus={(e) => e.target.style.borderColor = meta.color}
                        onBlur={(e) => e.target.style.borderColor = answered ? meta.color + "55" : "#1e1e2e"}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}

          <button
            onClick={() => setStep("scripts")}
            style={{
              width: "100%",
              padding: "18px",
              background: "#00c6ff",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: "pointer",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontFamily: "monospace",
              transition: "opacity 0.2s",
            }}
            onMouseOver={(e) => e.target.style.opacity = "0.85"}
            onMouseOut={(e) => e.target.style.opacity = "1"}
          >
            → Generar Guiones
          </button>
        </div>
      )}

      {step === "scripts" && (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 24px" }}>
          {/* Video selector */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "32px" }}>
            {[1, 2, 3].map((vnum) => {
              const meta = VIDEO_META[vnum];
              return (
                <button
                  key={vnum}
                  onClick={() => setActiveScript(vnum)}
                  style={{
                    flex: 1,
                    padding: "14px 10px",
                    background: activeScript === vnum ? meta.color + "15" : "#0d0d18",
                    border: `1px solid ${activeScript === vnum ? meta.color : "#1e1e2e"}`,
                    borderRadius: "8px",
                    color: activeScript === vnum ? meta.color : "#555",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontFamily: "monospace",
                    letterSpacing: "0.5px",
                    transition: "all 0.2s",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "18px", marginBottom: "4px" }}>{meta.emoji}</div>
                  Video {vnum}
                </button>
              );
            })}
          </div>

          {/* Script display */}
          <div style={{
            background: "#0d0d18",
            border: `1px solid ${VIDEO_META[activeScript].color}33`,
            borderRadius: "12px",
            overflow: "hidden",
          }}>
            <div style={{
              padding: "16px 20px",
              borderBottom: `1px solid ${VIDEO_META[activeScript].color}22`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: VIDEO_META[activeScript].color + "08",
            }}>
              <div style={{ fontFamily: "monospace", fontSize: "12px", color: VIDEO_META[activeScript].color, letterSpacing: "2px" }}>
                GUION GENERADO
              </div>
              <button
                onClick={() => copyScript(scriptText)}
                style={{
                  background: copied ? "#00e5a0" : "transparent",
                  border: `1px solid ${copied ? "#00e5a0" : "#333"}`,
                  color: copied ? "#000" : "#888",
                  padding: "6px 14px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  transition: "all 0.2s",
                }}
              >
                {copied ? "✓ COPIADO" : "COPIAR"}
              </button>
            </div>
            <pre style={{
              padding: "28px",
              margin: 0,
              whiteSpace: "pre-wrap",
              fontSize: "13.5px",
              lineHeight: "1.8",
              color: "#ccc",
              fontFamily: "Georgia, serif",
              overflowX: "auto",
            }}>
              {scriptText}
            </pre>
          </div>

          {filled < QUESTIONS.length && (
            <div style={{
              marginTop: "20px",
              padding: "14px 18px",
              background: "#ff8c0010",
              border: "1px solid #ff8c0033",
              borderRadius: "8px",
              fontSize: "13px",
              color: "#ff8c00",
              fontFamily: "monospace",
            }}>
              ⚠ {QUESTIONS.length - filled} preguntas sin responder — el guion usa marcadores de posición. Completa el intake para máxima autenticidad.
            </div>
          )}

          <button
            onClick={() => setStep("form")}
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              background: "transparent",
              border: "1px solid #333",
              color: "#666",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "12px",
              fontFamily: "monospace",
              letterSpacing: "1px",
            }}
          >
            ← Volver al Intake
          </button>
        </div>
      )}
    </div>
  );
}
