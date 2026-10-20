import { PricingCardProps } from "@/components/pricing-card";

export const projectPlans: {
  title: string;
  icon: string;
}[] = [
  { title: "Crafted Websites", icon: "globe" },
  { title: "Website Redesign", icon: "camera-lens" },
  { title: "Maintenance & Ongoing Support", icon: "package-01" },
  { title: "SOP", icon: "pencil-02" },
  { title: "Branding", icon: "book-01" },
  { title: "Social Media Management", icon: "message-chat-011" },
];

export const partTime: PricingCardProps = {
  planName: "Part-Time",
  planDescription:
    "Continuous operational continuity backed by a bilingual representative and zero HR liability.",
  benefits: [
    {
      icon: "globe-01",
      text: "Bilingual (English & Spanish)",
      isIncluded: true,
    },
    {
      icon: "user-profile-check",
      text: "1 Dedicated Representative (Customer Success, SDR, or EA)",
      isIncluded: true,
    },
    {
      icon: "file-edit-02",
      text: "Standard Operating Procedure (SOP)",
      isIncluded: true,
    },
    {
      icon: "calendar-02",
      text: "Monthly retainer options",
      isIncluded: true,
    },
    {
      icon: "computer",
      text: "Enterprise-grade secured hardware & software included",
      isIncluded: true,
    },
    {
      icon: "shield-02",
      text: "Zero local HR, payroll, or legal compliance liabilities",
      isIncluded: true,
    },
    {
      icon: "activity",
      text: "Tracker software",
      isIncluded: true,
    },
  ],
  cta: {
    label: "Book Discovery Call",
    href: "https://calendly.com/interactiveworkersgm/30min",
    variant: "primary",
  },
  isFeatured: false,
};

export const fullTime: PricingCardProps = {
  planName: "Full-Time",
  planDescription:
    "Build operational capacity with a cross-trained team, built-in redundancy, and a dedicated supervisor.",
  includes: partTime,
  benefits: [
    {
      icon: "user-profile-star",
      text: "Operations Support Leader",
      isIncluded: true,
    },
    {
      icon: "calendar-check",
      text: "Flexible monthly terms with customizable capacity",
      isIncluded: true,
    },
    {
      icon: "signal",
      text: "Guaranteed uptime SLA with built-in standby backup support",
      isIncluded: true,
    },
    {
      icon: "receipt",
      text: "Single flat, tax-deductible monthly invoice",
      isIncluded: true,
    },
  ],
  cta: {
    label: "Book Discovery Call",
    href: "https://calendly.com/interactiveworkersgm/30min",
    variant: "primary",
  },
  isFeatured: true,
};

export const longTermPlans: PricingCardProps[] = [
  // Long-Term Engagement Tiers
  partTime,
  fullTime,
];
