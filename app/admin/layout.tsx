export const dynamic = "force-dynamic"; // ← 追加！

import { ReactNode } from "react";
import Shell from "../(shell)/Shell";

export default function AdminLayout({ children }:{ children: ReactNode }) {
  return <Shell>{children}</Shell>;
}
