import Link from "next/link";
import { Mail, Linkedin, ArrowUpRight, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-owais-shah-1b39962b7",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:syedowaisshah1010@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="relative mt-20">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">

            {/* Brand Column */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block mb-5">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Muhammad Owais
                  <span className="text-primary">.</span>
                </h3>
              </Link>
              <p className="text-muted-foreground leading-relaxed max-w-sm mb-6 text-sm">
                Agentic AI Engineer crafting intelligent automation systems,
                modern web experiences, and AI-powered solutions that deliver
                real business impact.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.name !== "Email" ? "_blank" : undefined}
                      rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                      aria-label={social.name}
                      className="group w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                Navigation
              </h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="group text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1.5 w-fit"
                  >
                    <span className="h-px w-0 bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                Let&apos;s Work Together
              </h4>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Have a project in mind or want to discuss AI automation
                for your business? I&apos;d love to hear from you.
              </p>
              <Link href="/contact">
                <button className="group inline-flex items-center gap-2 h-10 px-6 rounded-full text-sm font-medium bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300">
                  Start a Conversation
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </Link>

              {/* Location */}
              <div className="mt-6 text-xs text-muted-foreground/60">
                Based in Hyderabad, Sindh, Pakistan
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/60">
              &copy; {currentYear} Muhammad Owais Shah. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 flex items-center gap-1.5">
              Built with
              <Heart className="w-3 h-3 text-primary fill-primary" />
              using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
