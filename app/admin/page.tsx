import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AdminAccount(){
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader><CardTitle>新規アカウント発行</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["法人名","法人ID","法人PASS","掛け率","店舗名","店舗ID"].map((label,i)=>(
              <div key={i}>
                <Label>{label}</Label>
                <Input placeholder={label + "を入力"} />
              </div>
            ))}
            <div className="md:col-span-2">
              <Label>業種</Label>
              <Select><SelectTrigger><SelectValue placeholder="業種を選択" /></SelectTrigger><SelectContent><SelectItem value="food">飲食</SelectItem><SelectItem value="beauty">美容</SelectItem></SelectContent></Select>
            </div>
            <div className="md:col-span-2"><Label>GA4計測ID</Label><Input placeholder="G-XXXXXXXXXX"/></div>
            <div className="md:col-span-2"><Label>GA4 APIキー</Label><Input placeholder="例: AlzaSy..."/></div>
            <div className="md:col-span-2"><Label>Google Ad Manager APIキー</Label><Input placeholder="例: am-..."/></div>
            <div className="md:col-span-2"><Label>Google Ad Manager ネットワークID</Label><Input placeholder="例: 12345"/></div>
            <div className="md:col-span-2"><Label>Gemini/GPT APIキー</Label><Input placeholder="例: sk-..."/></div>
          </div>
          <Button className="mt-6">アカウント作成</Button>
        </CardContent>
      </Card>
    </div>
  );
}
