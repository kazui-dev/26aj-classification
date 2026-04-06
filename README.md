# 26AJ クラス分け判定

履修登録のクラス分けを自動判定するWebアプリケーション。

## 🚀 技術スタック

- **Astro 6** - 静的サイトジェネレーター
- **Tailwind CSS** - スタイリング
- **TypeScript** - 型安全な開発
- **Cloudflare Pages** - デプロイ環境

## 🎨 テーマシステム

このプロジェクトには、Astroネイティブなダークモード対応が実装されています：

### コンポーネント構成

- **`ThemeSelector.astro`** - テーマ切り替えボタンとメニュー
- **`ThemeScript.astro`** - フラッシュ防止のための初期化スクリプト
- **`lib/theme.ts`** - テーマ管理のユーティリティ関数

### 使い方

```astro
---
import ThemeSelector from '@/components/ThemeSelector.astro';
import ThemeScript from '@/components/ThemeScript.astro';
---

<html lang="ja">
  <head>
    <!-- Theme color meta tag -->
    <meta id="themeColorMeta" name="theme-color" content="#ffffff" />
    
    <!-- Theme initialization script (prevents flash) -->
    <ThemeScript />
  </head>
  <body class="bg-white dark:bg-slate-900">
    <header>
      <ThemeSelector />
    </header>
  </body>
</html>
```

### 特徴

- ✅ ライト/ダーク/システムテーマの3モード
- ✅ ローカルストレージに設定を保存
- ✅ フラッシュ防止（FOUC対策）
- ✅ システムテーマ変更の自動検知
- ✅ Tailwindのdarkモードと完全連携
- ✅ アクセシビリティ対応

## 🧞 コマンド

| コマンド | 説明 |
| :--- | :--- |
| `pnpm install` | 依存関係をインストール |
| `pnpm dev` | 開発サーバー起動（localhost:4321） |
| `pnpm build` | 本番ビルド（./dist/） |
| `pnpm preview` | ビルドをローカルでプレビュー |

## 📦 プロジェクト構造

```text
/
├── src/
│   ├── components/
│   │   ├── ThemeSelector.astro  # テーマ切り替えコンポーネント
│   │   └── ThemeScript.astro    # テーマ初期化スクリプト
│   ├── lib/
│   │   └── theme.ts              # テーマユーティリティ
│   ├── pages/
│   │   └── index.astro           # メインページ
│   └── utils/
│       └── classification.ts     # クラス分け判定ロジック
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```
