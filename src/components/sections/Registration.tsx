"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// ✅ Set NEXT_PUBLIC_GOOGLE_SHEET_URL in your .env.local file to your Google Apps Script /exec URL.
// See the setup guide in the project root or ask your developer.
const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || "";

const emptyForm = {
  fullName: "",
  parentName: "",
  email: "",
  whatsapp: "",
  country: "",
  course: "",
  message: "",
};

export function Registration() {
  const [form, setForm] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!SCRIPT_URL) {
      setError("Registration is not configured yet. Please contact us via WhatsApp.");
      return;
    }
    setIsSubmitting(true);
    setError("");

    const params = new URLSearchParams({
      Time: new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }),
      "Full Name": form.fullName,
      "Parent Name": form.parentName,
      "Email Address": form.email,
      "WhatsApp Number": form.whatsapp,
      Country: form.country,
      "Select Course": form.course,
      "Preferred Timing / Message": form.message,
    });

    try {
      await fetch(`${SCRIPT_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });

      setForm(emptyForm);
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitting(false);
      setError("Something went wrong. Please try again or contact us via WhatsApp.");
    }
  };

  return (
    <section id="registration" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur-sm border border-white/20">
              Start Your Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Register Now for <span className="text-secondary">Free Trial Classes</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-lg">
              Begin your beautiful journey of learning the Quran. Fill out the form, and our academic counselor will contact you shortly to schedule your first free assessment class.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary h-6 w-6 shrink-0" />
                <span className="text-white/90">3 Days Free Trial Classes</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary h-6 w-6 shrink-0" />
                <span className="text-white/90">No Credit Card Required</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary h-6 w-6 shrink-0" />
                <span className="text-white/90">Cancel Anytime</span>
              </li>
            </ul>
          </motion.div>

          {/* Right: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-2xl border-0 overflow-hidden relative">
              {isSuccess && (
                <div className="absolute inset-0 bg-white/95 z-50 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Registration Successful!</h3>
                  <p className="text-muted-foreground">JazakAllah Khair. We have received your details. Our team will contact you via WhatsApp shortly.</p>
                </div>
              )}

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <Input
                        name="fullName"
                        required
                        placeholder="Enter student's name"
                        className="bg-slate-50 border-slate-200"
                        value={form.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Parent Name</label>
                      <Input
                        name="parentName"
                        placeholder="If student is a child"
                        className="bg-slate-50 border-slate-200"
                        value={form.parentName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <Input
                        name="email"
                        required
                        type="email"
                        placeholder="your@email.com"
                        className="bg-slate-50 border-slate-200"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">WhatsApp Number *</label>
                      <Input
                        name="whatsapp"
                        required
                        type="tel"
                        placeholder="+92 314 2658679"
                        className="bg-slate-50 border-slate-200"
                        value={form.whatsapp}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Country *</label>
                      <Input
                        name="country"
                        required
                        placeholder="e.g. USA, UK, UAE"
                        className="bg-slate-50 border-slate-200"
                        value={form.country}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Select Course *</label>
                      <select
                        name="course"
                        required
                        value={form.course}
                        onChange={handleChange}
                        className="flex h-9 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Choose a course</option>
                        <option value="Noorani Qaida">Noorani Qaida</option>
                        <option value="Quran Reading">Quran Reading</option>
                        <option value="Quran with Tajweed">Quran with Tajweed</option>
                        <option value="Hifz-ul-Quran">Hifz-ul-Quran</option>
                        <option value="Islamic Studies">Islamic Studies</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Preferred Timing / Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="flex min-h-[100px] w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Any specific timings or questions?"
                    ></textarea>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}

                  <Button type="submit" size="lg" className="w-full text-base font-semibold h-12" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Submit Registration
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
