"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Check,
  X,
  Zap,
  Crown,
  Building2,
  ArrowRight,
  Info,
  DollarSign,
  Users,
  Briefcase,
  Shield,
  BarChart3,
  Brain,
  Clock,
  Star,
  TrendingUp,
  FileText,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses getting started with HUBZone hiring",
    monthlyPrice: 99,
    annualPrice: 990,
    icon: Zap,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    popular: false,
    features: [
      { text: "Up to 5 active job postings", included: true },
      { text: "Basic candidate search", included: true },
      { text: "Application management", included: true },
      { text: "HUBZone compliance verification", included: true },
      { text: "Email support", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "AI job description generator", included: false, ai: true },
      { text: "AI candidate screening", included: false, ai: true },
      { text: "Advanced analytics", included: false },
      { text: "Priority support", included: false },
      { text: "Custom integrations", included: false },
      { text: "Dedicated account manager", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "Ideal for growing companies with higher hiring needs",
    monthlyPrice: 299,
    annualPrice: 2990,
    icon: TrendingUp,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    popular: true,
    features: [
      { text: "Up to 25 active job postings", included: true },
      { text: "Advanced candidate search & filters", included: true },
      { text: "Application management", included: true },
      { text: "HUBZone compliance verification", included: true },
      { text: "Priority email & phone support", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "AI job description generator (50/month)", included: true, ai: true, limit: "50/month" },
      { text: "AI candidate screening (100/month)", included: true, ai: true, limit: "100/month" },
      { text: "Team collaboration tools", included: true },
      { text: "Custom branding", included: false },
      { text: "API access", included: false },
      { text: "Dedicated account manager", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with unlimited hiring needs",
    monthlyPrice: 799,
    annualPrice: 7990,
    icon: Crown,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    popular: false,
    features: [
      { text: "Unlimited job postings", included: true },
      { text: "Advanced candidate search & filters", included: true },
      { text: "Application management", included: true },
      { text: "HUBZone compliance verification", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Advanced analytics & reporting", included: true },
      { text: "Unlimited AI job descriptions", included: true, ai: true },
      { text: "Unlimited AI candidate screening", included: true, ai: true },
      { text: "Team collaboration tools", included: true },
      { text: "Custom branding", included: true },
      { text: "Full API access", included: true },
      { text: "Dedicated account manager", included: true },
    ],
  },
];

const aiUsagePricing = [
  {
    feature: "AI Job Description Generator",
    description: "Generate optimized job descriptions instantly",
    price: "$2.50",
    unit: "per generation",
    icon: FileText,
  },
  {
    feature: "AI Candidate Screening",
    description: "Screen and score candidate resumes automatically",
    price: "$1.00",
    unit: "per resume",
    icon: Brain,
  },
  {
    feature: "AI Interview Question Generator",
    description: "Generate personalized interview questions",
    price: "$1.50",
    unit: "per set",
    icon: MessageSquare,
  },
  {
    feature: "AI Compliance Checker",
    description: "Automated HUBZone eligibility verification",
    price: "$0.50",
    unit: "per check",
    icon: Shield,
  },
];

const faqs = [
  {
    question: "What happens during the beta period?",
    answer:
      "During our beta development phase, all current features are completely free. Once AI features and integrations are complete, the pricing plans will go into effect. Beta users will receive special early-bird pricing.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated, and you'll only pay the difference for the remaining billing period.",
  },
  {
    question: "How does AI usage pricing work?",
    answer:
      "AI features are charged on a pay-per-use basis. Professional plan includes monthly AI credits, and Enterprise includes unlimited AI usage. Starter plan users can purchase AI credits as needed.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! All plans come with a 14-day free trial. No credit card required. You can explore all features risk-free before committing to a plan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, ACH transfers, and wire transfers for Enterprise plans. All payments are processed securely through our payment partners.",
  },
  {
    question: "Can I get a custom plan?",
    answer:
      "Yes, Enterprise customers can work with our sales team to create custom plans tailored to their specific needs, including volume discounts and custom integrations.",
  },
];

export default function EmployerPricing() {
  const [mounted, setMounted] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      <div className="relative">
        {/* Hero Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              {mounted && (
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block mb-4"
                >
                  <Badge
                    variant="outline"
                    className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm"
                  >
                    <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                    Beta Development
                  </Badge>
                </motion.div>
              )}
              {!mounted && (
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm mb-4"
                >
                  <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                  Beta Development
                </Badge>
              )}
            </motion.div>
            <TypingText
              text="Simple, Transparent Pricing"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              speed={50}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto space-y-4"
            >
              <p className="text-xl text-muted-foreground">
                Choose the perfect plan for your hiring needs. All plans include a 14-day free trial.
              </p>
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <Info className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold mb-2">Beta Development Notice</p>
                    <p className="text-sm text-muted-foreground">
                      During our beta development phase, <strong>all current features are completely free</strong>.
                      Once AI features and integrations are complete, the pricing plans below will go into effect.
                      Beta users will receive special early-bird pricing and priority access to new features.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <Label htmlFor="billing-toggle" className="text-sm font-medium">
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={billingCycle === "annual"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
            />
            <Label htmlFor="billing-toggle" className="text-sm font-medium">
              Annual
            </Label>
            {billingCycle === "annual" && (
              <Badge variant="secondary" className="ml-2">
                Save 17%
              </Badge>
            )}
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid gap-8 md:grid-cols-3 mb-20">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  >
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="mr-1 h-3 w-3" />
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                <Card
                  className={`p-6 md:p-8 h-full relative overflow-hidden ${
                    plan.popular
                      ? "border-2 border-primary shadow-xl shadow-primary/20 scale-105"
                      : "border-2 hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${plan.bgColor} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <plan.icon className={`h-5 w-5 ${plan.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold leading-none">
                        ${billingCycle === "annual" ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground text-sm ml-1">/mo</span>
                    </div>
                    {billingCycle === "annual" && (
                      <p className="text-xs text-muted-foreground mt-1">
                        ${plan.annualPrice.toLocaleString()}/yr
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 + featureIndex * 0.02 }}
                        className="flex items-start gap-3"
                      >
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <span
                            className={feature.included ? "text-foreground" : "text-muted-foreground/50"}
                          >
                            {feature.text}
                          </span>
                          {feature.ai && feature.included && feature.limit && (
                            <Badge variant="outline" className="ml-2 text-xs border-primary/40">
                              <Sparkles className="mr-1 h-3 w-3 text-primary" />
                              {feature.limit}
                            </Badge>
                          )}
                          {feature.ai && !feature.included && (
                            <Badge variant="outline" className="ml-2 text-xs border-primary/40">
                              <Sparkles className="mr-1 h-3 w-3 text-primary" />
                              AI
                            </Badge>
                          )}
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/employer/signup">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* AI Usage Pricing Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 bg-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Feature Usage Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pay only for what you use. Professional plan includes monthly credits, and Enterprise
              includes unlimited AI usage.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {aiUsagePricing.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.feature}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold">{item.price}</span>
                    <span className="text-sm text-muted-foreground">{item.unit}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Card className="p-6 bg-primary/5 border-primary/20 max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-sm mb-1">AI Features Coming Soon</p>
                  <p className="text-sm text-muted-foreground">
                    All AI features are currently in development. Usage pricing will apply once features
                    are launched. Beta users will receive discounted rates.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Feature Comparison Table */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Plans</h2>
            <p className="text-lg text-muted-foreground">See what's included in each plan</p>
          </motion.div>

          <div className="overflow-x-auto">
            <Card className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="text-left py-4 px-4 font-semibold">Features</th>
                    <th className="text-center py-4 px-4 font-semibold">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold bg-primary/5">Professional</th>
                    <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Job Postings", starter: "5", professional: "25", enterprise: "Unlimited" },
                    { feature: "Candidate Search", starter: "Basic", professional: "Advanced", enterprise: "Advanced" },
                    { feature: "AI Job Descriptions", starter: "Pay per use", professional: "50/month", enterprise: "Unlimited" },
                    { feature: "AI Candidate Screening", starter: "Pay per use", professional: "100/month", enterprise: "Unlimited" },
                    { feature: "HUBZone Compliance", starter: "✓", professional: "✓", enterprise: "✓" },
                    { feature: "Analytics Dashboard", starter: "Basic", professional: "Advanced", enterprise: "Advanced" },
                    { feature: "Team Collaboration", starter: "—", professional: "✓", enterprise: "✓" },
                    { feature: "Custom Branding", starter: "—", professional: "—", enterprise: "✓" },
                    { feature: "API Access", starter: "—", professional: "—", enterprise: "Full" },
                    { feature: "Support", starter: "Email", professional: "Priority", enterprise: "24/7 Priority" },
                    { feature: "Account Manager", starter: "—", professional: "—", enterprise: "✓" },
                  ].map((row, index) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-border/40 hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-4 px-4 font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{row.starter}</td>
                      <td className="py-4 px-4 text-center bg-primary/5 font-semibold">{row.professional}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{row.enterprise}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative mx-auto max-w-4xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about pricing</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 md:p-16 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block mb-6"
              >
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your 14-day free trial today. No credit card required. All features available
                during beta development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/employer/signup">
                    Start Free Trial
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/employer/contact">Contact Sales</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
