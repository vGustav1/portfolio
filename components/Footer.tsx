"use client";

import { ui, useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <span className="lbl" style={{ fontSize: 14 }}>© {new Date().getFullYear()} GUSTAVO VIEIRA</span>
      <a href="#inicio" className="link-strong">{t(ui.footer.top)}</a>
    </footer>
  );
}
