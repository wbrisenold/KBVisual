import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 py-16 text-center">
        <CheckCircle className="h-12 w-12 text-yellow-700" />
        <p className="max-w-sm text-lg leading-relaxed text-white">
          Thanks — I'll review your message and reach out within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <div className="space-y-6">
        <div>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full border-0 border-b border-white/20 bg-transparent px-0 pb-3 pt-0 text-base text-white placeholder-stone-600 transition-all focus:border-yellow-700 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full border-0 border-b border-white/20 bg-transparent px-0 pb-3 pt-0 text-base text-white placeholder-stone-600 transition-all focus:border-yellow-700 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            placeholder="Phone (optional)"
            className="w-full border-0 border-b border-white/20 bg-transparent px-0 pb-3 pt-0 text-base text-white placeholder-stone-600 transition-all focus:border-yellow-700 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={4}
            placeholder="Preferred date, portrait type, location ideas, or any questions..."
            className="w-full resize-none border-0 border-b border-white/20 bg-transparent px-0 pb-3 pt-0 text-base text-white placeholder-stone-600 transition-all focus:border-yellow-700 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <div className="flex items-center justify-between border-t border-white/10 pt-6">
        <p className="text-xs text-stone-500 leading-relaxed max-w-xs">
          Your information is used only to respond to your inquiry.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 border-b border-white/30 pb-0.5 text-sm font-semibold text-white transition-all hover:border-yellow-700 focus-visible:border-yellow-700 focus-visible:outline-none disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send"}
          {status !== "sending" && <ArrowRight className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
