"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { ReactNode, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Item = { href: string; label: string };

export default function Shell({ children }:{ children: ReactNode }){
  const { data: session } = useSession();
  const role = (session as any)?.role;
  const pathname = usePathname();

  const menu: Item[] = useMemo(()=>{
    if (role === "admin") return [
      { href: "/admin", label: "アカウント管理" },
      { href: "/admin/inquiries", label: "問い合わせ一覧" },
    ];
    return [
      { href: "/client/reports", label: "レポート" },
      { href: "/client/analytics", label: "アクセス解析" },
      { href: "/client/contact", label: "お問い合わせ" },
      { href: "/client/simulation", label: "試算作成" },
    ];
  }, [role]);

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-white border-r flex flex-col">
        <div className="h-14 flex items-center px-4 text-lg font-semibold border-b">ADMaster <span className="ml-2 text-xs text-gray-500">{role === "admin" ? "管理者" : "店舗A"}</span></div>
        <nav className="p-3 space-y-1">
          {menu.map(m => (
            <Link key={m.href} href={m.href} className={cn("block rounded-md px-4 py-2.5 text-sm", pathname===m.href ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100")}>{m.label}</Link>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <Button variant="outline" className="w-full" onClick={() => signOut({ callbackUrl: "/login" })}>ログアウト</Button>
        </div>
      </aside>
      <main className="flex-1">
        <div className="h-14 bg-gray-800 text-white flex items-center px-6">ダッシュボード</div>
        <div className="max-w-6xl mx-auto px-6 py-6">{children}</div>
      </main>
    </div>
  );
}
