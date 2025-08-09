# ADMaster (Next.js + shadcn + next-auth)

このプロジェクトは、あなたが提供したV0のUIトーンを取り込み、実運用できる形に配線したものです。  
**Vercelにそのまま上げれば動きます。**

## できること
- Next.js 14 App Router + TypeScript
- Tailwind + shadcn/ui（V0のUIコンポーネントを同梱）
- next-auth（Credentials）で `admin` / `client` ロール
- ルーティング
  - 管理者: `/admin` (アカウント管理), `/admin/inquiries` (問い合わせ一覧)
  - クライアント: `/client/reports`, `/client/analytics`, `/client/contact`, `/client/simulation`
- APIスタブ `/api/*`（ダミーデータ）

## 使い方
1. 依存をインストール
   ```bash
   npm i
   ```
2. `.env.local` を作成（下の例をコピー）
3. 開発起動
   ```bash
   npm run dev
   ```
4. ログイン
   - 管理者: `admin@example.com` / `ADMIN_PASSWORD`
   - クライアント: `client@example.com` / `CLIENT_PASSWORD`

## 環境変数（.env.local）
```
NEXTAUTH_SECRET=replace-with-32char-secret
NEXTAUTH_URL=http://localhost:3000
ADMIN_PASSWORD=AdminPass!234
CLIENT_PASSWORD=ClientPass!234
```

## デプロイ（Vercel）
- プロジェクトをGitHubにPush → VercelでImport
- **Environment Variables** に上の4つを追加（Production/Preview）
- Deploy で完了

