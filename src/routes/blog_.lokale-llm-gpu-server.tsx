import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Cpu, Server, Wallet, Wrench } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/contexts/LangContext";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/blog_/lokale-llm-gpu-server")({
  head: ({ match }) => seoHead({
    path: "/blog/lokale-llm-gpu-server",
    search: match.search,
    title: {
      de: "Lokale LLMs trainieren mit eigenem GPU-Server — vuxuantiep.de",
      en: "Training local LLMs on your own GPU server — vuxuantiep.de",
      vi: "Huấn luyện LLM cục bộ với máy chủ GPU riêng — vuxuantiep.de",
    },
    description: {
      de: "Welche GPU 2026 für lokales LLM-Training geeignet ist, wie Sie das Projekt technisch aufsetzen und wie Sie die Hardware zwischen Training und Vermietung optimal auslasten.",
      en: "Which GPUs are suitable for local LLM training in 2026, how to set up the project technically, and how to keep the hardware utilized between training runs and rental income.",
      vi: "GPU nào phù hợp để huấn luyện LLM cục bộ năm 2026, cách thiết lập dự án về mặt kỹ thuật, và cách tận dụng tối đa phần cứng giữa huấn luyện và cho thuê.",
    },
  }),
  component: LokaleLlmGpuServer,
});

function LokaleLlmGpuServer() {
  const { t } = useLang();

  const gpus = [
    {
      name: "RTX 3090 (gebraucht)",
      vram: "24 GB GDDR6X",
      note: t(
        "Bestes VRAM-pro-Euro-Verhältnis auf dem Gebrauchtmarkt. Kein NVLink-Ersatz, aber für LoRA-Finetuning bis ~13B-Modelle völlig ausreichend.",
        "Best VRAM-per-euro on the used market. No NVLink, but plenty for LoRA fine-tuning up to ~13B models.",
        "Tỷ lệ VRAM/giá tốt nhất trên thị trường đã qua sử dụng. Không có NVLink, nhưng đủ dùng cho fine-tuning LoRA tới mô hình ~13B."
      ),
    },
    {
      name: "RTX 4090",
      vram: "24 GB GDDR6X",
      note: t(
        "Der Praxis-Standard für Einzelplatz-Setups: schnell, verfügbar, gute Software-Unterstützung (CUDA, Flash-Attention).",
        "The practical standard for single-card setups: fast, available, great software support (CUDA, Flash-Attention).",
        "Tiêu chuẩn thực tế cho thiết lập một card: nhanh, dễ mua, hỗ trợ phần mềm tốt (CUDA, Flash-Attention)."
      ),
    },
    {
      name: "RTX 5090",
      vram: "32 GB GDDR7",
      note: t(
        "Mehr VRAM erlaubt größere Batch-Sizes oder Modelle bis ~30B in 4-bit-Quantisierung. Lohnt sich, wenn Sie regelmäßig trainieren statt nur zu experimentieren.",
        "More VRAM allows larger batch sizes or ~30B models at 4-bit quantization. Worth it if you train regularly rather than just experimenting.",
        "Nhiều VRAM hơn cho phép batch size lớn hơn hoặc mô hình ~30B ở lượng tử hóa 4-bit. Đáng đầu tư nếu bạn huấn luyện thường xuyên."
      ),
    },
    {
      name: "RTX 6000 Ada / Blackwell",
      vram: "48 GB GDDR6",
      note: t(
        "Workstation-Karte ohne Gaming-Treiber-Kompromisse, ECC-Speicher. Sinnvoll, sobald mehrere Personen denselben Server nutzen.",
        "Workstation card without gaming-driver compromises, ECC memory. Makes sense once several people share the same server.",
        "Card workstation không có sự đánh đổi driver gaming, bộ nhớ ECC. Hợp lý khi nhiều người cùng dùng chung server."
      ),
    },
    {
      name: "H100 / H200 (Cloud oder gemietet)",
      vram: "80–141 GB HBM3",
      note: t(
        "Für echtes Pretraining oder große Fine-Tunes. Auf eigener Hardware finanziell selten sinnvoll — hier lohnt sich stundenweises Mieten mehr als Kaufen.",
        "For real pretraining or large fine-tunes. Rarely worth owning outright — renting by the hour usually beats buying here.",
        "Dành cho pretraining thực sự hoặc fine-tune lớn. Hiếm khi đáng mua đứt — thuê theo giờ thường hợp lý hơn."
      ),
    },
  ];

  const setupSteps = [
    {
      title: t("Basis: OS, Treiber, Container", "Base: OS, drivers, containers", "Nền tảng: OS, driver, container"),
      text: t(
        "Ubuntu Server LTS + aktueller NVIDIA-Treiber + CUDA Toolkit. Danach Docker mit dem NVIDIA Container Toolkit, damit Trainings-Jobs sauber isoliert laufen und die GPU bei Bedarf auch an andere Container (z.B. für Vermietung) durchgereicht werden kann.",
        "Ubuntu Server LTS + current NVIDIA driver + CUDA Toolkit. Then Docker with the NVIDIA Container Toolkit, so training jobs stay isolated and the GPU can be passed to other containers (e.g. for rental) when needed.",
        "Ubuntu Server LTS + driver NVIDIA mới nhất + CUDA Toolkit. Sau đó Docker với NVIDIA Container Toolkit, để các job huấn luyện được cô lập và GPU có thể chuyển cho container khác (ví dụ để cho thuê) khi cần."
      ),
    },
    {
      title: t("Framework: PyTorch + PEFT/LoRA", "Framework: PyTorch + PEFT/LoRA", "Framework: PyTorch + PEFT/LoRA"),
      text: t(
        "Volles Pretraining ist auf Consumer-GPUs unrealistisch. Praxisrelevant ist Fine-Tuning per LoRA/QLoRA über Hugging Face PEFT — damit passen auch größere Modelle in 24 GB VRAM. Tools wie Axolotl oder Unsloth nehmen Ihnen die Konfigurationsarbeit ab.",
        "Full pretraining is unrealistic on consumer GPUs. What matters in practice is LoRA/QLoRA fine-tuning via Hugging Face PEFT — it fits larger models into 24 GB of VRAM. Tools like Axolotl or Unsloth handle most of the configuration for you.",
        "Pretraining đầy đủ không thực tế trên GPU tiêu dùng. Điều quan trọng là fine-tuning LoRA/QLoRA qua Hugging Face PEFT — giúp mô hình lớn hơn vừa với 24 GB VRAM. Công cụ như Axolotl hay Unsloth lo phần cấu hình cho bạn."
      ),
    },
    {
      title: t("Daten & Monitoring", "Data & monitoring", "Dữ liệu & giám sát"),
      text: t(
        "Saubere, deduplizierte Trainingsdaten schlagen jede Modell-Wahl. Für die Beobachtung reichen nvidia-smi (Auslastung/Temperatur) und Weights & Biases oder TensorBoard (Loss-Kurven) völlig aus.",
        "Clean, deduplicated training data beats any model choice. For monitoring, nvidia-smi (utilization/temperature) plus Weights & Biases or TensorBoard (loss curves) is completely sufficient.",
        "Dữ liệu huấn luyện sạch, đã khử trùng lặp quan trọng hơn việc chọn mô hình. Để giám sát, nvidia-smi (mức sử dụng/nhiệt độ) cùng Weights & Biases hoặc TensorBoard (đường cong loss) là đủ."
      ),
    },
    {
      title: t("Fernzugriff & Betrieb", "Remote access & operations", "Truy cập từ xa & vận hành"),
      text: t(
        "Der Server muss nicht im selben Raum stehen: Mit Tailscale erreichen Sie ihn sicher aus jedem Netz, ohne Ports am Router zu öffnen — dieselbe Lösung, die sich auch für andere Self-Hosting-Projekte bewährt hat.",
        "The server doesn't need to sit in the same room: Tailscale gives you secure access from any network without opening router ports — the same approach that works well for other self-hosting projects.",
        "Server không cần đặt cùng phòng: Tailscale cho phép truy cập an toàn từ bất kỳ mạng nào mà không cần mở cổng router — giải pháp tương tự cũng hiệu quả cho các dự án self-hosting khác."
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <Nav />

      <article className="mx-auto max-w-3xl px-6 pt-20 pb-24">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> {t("Zurück zum Blog", "Back to blog", "Quay lại Blog")}
        </Link>

        <div className="mt-6 flex items-center gap-2 text-xs">
          <span className="rounded bg-primary/20 px-2 py-0.5 text-primary font-medium">GPU · Self-Hosting</span>
          <span className="text-muted-foreground">
            {t("26. Juli 2026 · 9 min", "July 26, 2026 · 9 min", "26 Tháng 7, 2026 · 9 phút")}
          </span>
        </div>

        <h1 className="mt-4 font-display text-[1.75rem] md:text-[2.25rem] font-semibold leading-tight">
          {t(
            "Lokale LLMs trainieren mit eigenem GPU-Server",
            "Training local LLMs on your own GPU server",
            "Huấn luyện LLM cục bộ với máy chủ GPU riêng"
          )}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          {t(
            "Ein eigener GPU-Server lohnt sich, sobald Sie regelmäßig fine-tunen, sensible Daten nicht in fremde Clouds geben wollen oder einfach verstehen möchten, wie Training wirklich funktioniert. Dieser Artikel deckt drei Fragen ab: welche GPU aktuell sinnvoll ist, wie das Projekt technisch aufgesetzt wird, und wie Sie die Hardware zwischen Training und Leerlauf optimal auslasten.",
            "A dedicated GPU server pays off once you fine-tune regularly, don't want sensitive data leaving your control, or simply want to understand how training actually works. This article covers three questions: which GPU makes sense right now, how to set the project up technically, and how to keep the hardware utilized between training and idle time.",
            "Một máy chủ GPU riêng đáng đầu tư khi bạn fine-tune thường xuyên, không muốn dữ liệu nhạy cảm rời khỏi tầm kiểm soát, hoặc đơn giản muốn hiểu cách huấn luyện thực sự hoạt động. Bài viết này trả lời ba câu hỏi: GPU nào hợp lý hiện tại, cách thiết lập dự án về kỹ thuật, và cách tận dụng phần cứng giữa lúc huấn luyện và lúc rảnh rỗi."
          )}
        </p>

        {/* GPU-Auswahl */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <Cpu className="h-5 w-5 text-primary" />
            {t("Welche GPU ist aktuell geeignet?", "Which GPU is currently suitable?", "GPU nào hiện phù hợp?")}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t(
              "Die Antwort hängt vom Ziel ab: Experimentieren, regelmäßiges Fine-Tuning oder Pretraining. Preise am GPU-Markt schwanken stark — die folgende Einschätzung bezieht sich auf VRAM und Eignung, nicht auf Tagespreise.",
              "The answer depends on the goal: experimenting, regular fine-tuning, or pretraining. GPU market prices swing a lot — the assessment below is about VRAM and fit, not day-to-day pricing.",
              "Câu trả lời phụ thuộc vào mục tiêu: thử nghiệm, fine-tuning thường xuyên, hay pretraining. Giá trên thị trường GPU biến động mạnh — đánh giá dưới đây tập trung vào VRAM và mức độ phù hợp, không phải giá theo ngày."
            )}
          </p>
          <div className="mt-6 space-y-3">
            {gpus.map((gpu) => (
              <div key={gpu.name} className="rounded-xl border border-border bg-surface/40 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-semibold">{gpu.name}</span>
                  <span className="text-xs text-primary font-medium">{gpu.vram}</span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{gpu.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projekt aufsetzen */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <Wrench className="h-5 w-5 text-primary" />
            {t("Das Projekt aufsetzen", "Setting up the project", "Thiết lập dự án")}
          </h2>
          <div className="mt-6 space-y-6">
            {setupSteps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Auslastungsstrategie */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <Wallet className="h-5 w-5 text-primary" />
            {t("GPU-Auslastungsstrategie: Training + Vermietung", "GPU utilization strategy: training + rental", "Chiến lược tận dụng GPU: huấn luyện + cho thuê")}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t(
              "Eine GPU, die 20 Stunden am Tag ungenutzt herumsteht, ist totes Kapital. Die naheliegende Strategie: Training in planbaren Blöcken fahren (z.B. nachts oder am Wochenende) und die Karte in der restlichen Zeit über Marktplätze wie Vast.ai, RunPod (Community Cloud) oder io.net stundenweise vermieten. So finanziert sich die Hardware selbst mit, statt nur Stromkosten zu verursachen.",
              "A GPU sitting idle 20 hours a day is dead capital. The obvious strategy: run training in scheduled blocks (e.g. at night or on weekends) and rent the card out by the hour the rest of the time via marketplaces like Vast.ai, RunPod (Community Cloud), or io.net. That way the hardware helps pay for itself instead of just running up your power bill.",
              "GPU nằm không 20 giờ mỗi ngày là vốn chết. Chiến lược hiển nhiên: chạy huấn luyện theo khối có lịch trình (ví dụ ban đêm hoặc cuối tuần) và cho thuê card theo giờ phần thời gian còn lại qua các sàn như Vast.ai, RunPod (Community Cloud), hoặc io.net. Nhờ vậy phần cứng tự trả một phần chi phí thay vì chỉ tốn tiền điện."
            )}
          </p>
          <p className="mt-4 text-muted-foreground">
            {t(
              "Praktisch heißt das: ein Scheduler (z.B. ein einfacher Cron-Job oder systemd-Timer) fährt den Vermietungs-Container herunter, bevor der eigene Trainingsjob startet, und danach wieder hoch. Wer mehrere Karten betreibt, kann Training und Vermietung sogar parallel auf getrennten GPUs laufen lassen. Wichtig: Erträge aus GPU-Vermietung sind steuerlich relevant — das ist keine rechtliche Beratung, sondern lediglich der Hinweis, dies vorher mit einem Steuerberater zu klären.",
              "In practice: a scheduler (a simple cron job or systemd timer works fine) shuts the rental container down before your own training job starts, then brings it back up afterward. If you run multiple cards, training and rental can even happen in parallel on separate GPUs. One note: income from GPU rental has tax implications — this isn't legal advice, just a reminder to clarify that with a tax advisor upfront.",
              "Trong thực tế: một scheduler (cron job đơn giản hoặc systemd timer) tắt container cho thuê trước khi job huấn luyện của bạn bắt đầu, rồi bật lại sau đó. Nếu chạy nhiều card, huấn luyện và cho thuê thậm chí có thể chạy song song trên các GPU riêng biệt. Lưu ý: thu nhập từ cho thuê GPU có liên quan đến thuế — đây không phải tư vấn pháp lý, chỉ là lời nhắc nên trao đổi trước với chuyên gia thuế."
            )}
          </p>
        </section>

        <div className="mt-14 rounded-xl border border-border bg-surface/40 p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="font-medium">
              {t("Eigenes GPU-Setup oder Fine-Tuning-Projekt geplant?", "Planning your own GPU setup or fine-tuning project?", "Đang lên kế hoạch cho GPU hoặc dự án fine-tuning?")}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {t("Von Hardware-Wahl bis Deployment — sprechen wir drüber.", "From hardware choice to deployment — let's talk.", "Từ chọn phần cứng đến triển khai — hãy trao đổi.")}
            </div>
          </div>
          <Link to="/kontakt" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            {t("Kontakt aufnehmen", "Get in touch", "Liên hệ")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
