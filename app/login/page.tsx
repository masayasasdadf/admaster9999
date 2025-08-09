"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/textarea"; // ← ない時はこの行を削除

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null);
    const res = await signIn("credentials", {
      redirect: false,
      email, password,
      callbackUrl: "/client/reports",
    });
    setLoading(false);
    if (res?.error) { setError("ID または PASS が正しくありません"); return; }
    window.location.href = res?.url ?? "/client/reports";
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">ADMaster</CardTitle>
          <div className="text-center text-sm text-muted-foreground">ログイン</div>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid gap-3">
            <Label htmlFor="id">ID</Label>
            <Input id="id" placeholder="IDを入力してください" value={email} onChange={e=>setEmail(e.target.value)} />
            <Label htmlFor="pass" className="mt-2">PASS</Label>
            <Input id="pass" type="password" placeholder="パスワードを入力してください" value={password} onChange={e=>setPassword(e.target.value)} />
            {/* チェックボックス欲しければ shadcnのCheckboxがある前提 */}
            {/* <label className="flex items-center gap-2 text-sm mt-2"><Checkbox /> ログインを記憶する</label> */}
            {error && <div className="text-sm text-red-600">{error}</div>}
            <Button className="w-full mt-2" disabled={loading}>{loading?"ログイン中...":"ログイン"}</Button>
            <div className="text-xs text-red-600 mt-4 text-center">
              管理者: admin@example.com / ADMIN_PASSWORD<br/>
              クライアント: client@example.com / CLIENT_PASSWORD
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
