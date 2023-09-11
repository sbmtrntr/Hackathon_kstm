# Hackathon_kstm
2023年9月に開催された部内ハッカソンにおけるwatabezz & shibarinチームのリポジトリ

## kstmのHPにLT会発表資料閲覧ページを追加

### 概要説明
- 毎月開催されるLT会において、発表者が作成した資料を閲覧できるページを作ることにした

### 使用環境
- とりあえずローカルで所望の動作を実現できるようにする
- 後々サーバにデプロイできるようにしたい

### 作成したページ
- 後で書く

## 今後の計画
- 設計決め
    - サイトの構成、ページレイアウトを決める
- 役割決め
    - 上記の内容をまとめて役割を決める
- 開発
    - 〆9/20

<details>
<summary>kstm ホームページのREADME</summary>

# kstm Homepage
VuePressで再構成したkstm HP

## インストール方法
cloneした後に以下を実行してください。
branchはmasterではなく、新たに切ってください。
```bash
yarn install
```

## 新規記事の作り方

### localで環境を立ち上げる

```bash
# install dependencies
yarn

# up develop server at localhost:8080
yarn src:dev
```

### 新しく記事を作る

```bash
touch src/posts/new-post.md
```

サイドバーに記事へのリンクを追加する

`/posts`からパスを書く必要があります
```js
# src/.vuepress/config.js

sidebar: [
      {
        ...,
        children: [
            '/posts/',
            '/posts/new-post',
            ...
```

### 編集する
先ほど作ったmdファイルを編集してください

```markdown
<!-- vim src/posts/new-post.md -->

---
title: 'awesome title here' # サイドバーとウィンドウタイトルになります
---

# めっちゃめちゃいい見出し

面白い話 ...

画像は `src/.vuepress/public` 以下に置いてください  
`src/.vuepress/public` を `/` としてパスを解決することができます
```

See also: [Markdown extensions | VuePress](https://v1.vuepress.vuejs.org/guide/markdown.html#markdown-extensions)

### 確認事項

1. blogのページで作った記事タイトルがサイドバーに表示されているか
2. 記事は期待通りに表示されているか(画像・リンクを含む)
3. [deploy](#deploy)のコマンドを実行したか

### deploy
commitする前に次のコマンドを実行する必要があります

❗注意❗: 以下を実行するとdocs以下のファイルが再生成されるためCNAMEファイルが削除されますが、変更を取り消してください！

間違えてCNAMEを削除したままmasterにpushした場合は、GitHubPagesの設定の[CustomDomain](https://github.com/kstm-su/kstm-su.github.io/settings/pages)から再度追加ができます

```bash
yarn src:build
```
NOTE: 自動でビルド->公開できるようにしたい

## old homepage
https://github.com/kstm-su/old-kstm-su.github.io

</details>