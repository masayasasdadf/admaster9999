import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default async function InquiriesPage(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/inquiries`, { cache: "no-store" });
  const data = await res.json();
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>問い合わせ一覧</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input placeholder="名前/文言で検索（ダミー）" />
            <Select><SelectTrigger className="w-40"><SelectValue placeholder="すべてのステータス" /></SelectTrigger><SelectContent><SelectItem value="all">すべて</SelectItem><SelectItem value="新規">新規</SelectItem><SelectItem value="対応中">対応中</SelectItem><SelectItem value="完了">完了</SelectItem></SelectContent></Select>
          </div>
          <ul className="space-y-2 text-sm">
            {data.map((q:any, i:number)=>(
              <li key={i} className="border rounded-xl p-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{q.name} <Badge variant="secondary" className="ml-2">{q.status}</Badge></div>
                  <div className="text-muted-foreground">{q.message}</div>
                </div>
                <Button variant="outline">対応中に変更</Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
