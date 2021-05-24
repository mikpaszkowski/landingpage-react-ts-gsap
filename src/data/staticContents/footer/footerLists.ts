export interface IFooterLink {
  label: string;
  url: string;
}

export const lists: Record<string, Array<IFooterLink>> = {
  products: [
    { label: "Updates", url: "#" },
    { label: "Security", url: "#" },
    { label: "Help", url: "#" },
  ],
  company: [
    { label: "About", url: "#" },
    { label: "Blog", url: "#" },
    { label: "Join Us", url: "#" },
  ],
  help: [
    { label: "Talk to Support", url: "#" },
    { label: "Support Docs", url: "#" },
    { label: "API Docs", url: "#" },
    { label: "System Status", url: "#" },
  ],
};
