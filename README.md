## ■ 図面管理アプリ Zumens
![top](https://github.com/turtle-brothers/zumens/assets/62471053/e76f7842-ba9e-4c82-bad5-35b62a608e96)

## ■ アプリURL
[https:/dev.zumnes.jp](https:/dev.zumnes.jp)

[ゲストユーザー]
<br>
ID : guest_user
<br>
PASSWORD : guest_user_password

## ■ サービス概要
自動車部品メーカーの機械設計エンジニアが、アプリケーションを通して、ノンコア業務(図面印刷・図面折り・図面配布など)の不要な工数を削減し、コア業務である設計業務に注力する事を目指しています。

## ■ ターゲット
自動車部品メーカーの機械設計エンジニア(40代後半、50代前半、60代前半)

## ■ 困りごと
1. 設計者が共有フォルダへ登録したデータが、第三者によって内容を書き換えられる。
1. 設計者が共有フォルダへ登録した、最新データではない古いデータ、を発注者が参照している場合があり、最新データでないため、誤発注に繋がる。
1. 設計変更履歴が管理されていないので、なぜ設計変更しなければならなかったのか、設計担当者以外わからない(情報共有されていない)。
1. 設計者から、発注者や現場作業者・社内工場に渡す図面が1セット(1製品につきA3用紙を100枚程度)ずつ必要で、ペーパーレス化できていない。
1. 設計者から、発注者や現場作業者・社内工場に渡す図面を印刷し、図面を折る工数や配布する工数がかかる課題。
1. 図面を紙媒体で管理している為、図面を保管している倉庫やキャビネットが一杯になって、新規の図面が収まらなくなっている課題。

## ■ なぜ解決したいのか
ノンコア業務(設計業務以外)に多くの工数を費やす必要があり、コア業務(設計業務)に注力出来ないため解決したい。また、所属部署が目標とするペーパーレス化と課題解決の方向性が合っていると感じた為、解決したいと考えた。

## ■ 解決方法
図面を管理するアプリケーションを開発し、権限管理機能・バージョン管理機能などの機能を追加する事により、課題を解決する。


## ■ 解説記事( Qiita )
開発の背景から解説しています。

URL: https://qiita.com/mkame/items/655a04688998ae43214a

## ■ 画面遷移図
![wire_frame](https://github.com/turtle-brothers/zumens/assets/62471053/b45579b1-2a0e-45f8-919d-9477e176ae2d)

## ■ 主なページ
### ■ ログインページ(ログイン・新規登録)
https://github.com/turtle-brothers/zumens/assets/62471053/7db34ce6-2fdc-47a6-8a9b-e6dcb1721da7

### ■ Homeページ(絞込み検索)
https://github.com/turtle-brothers/zumens/assets/62471053/4aa7dd16-c14e-42bf-8e7a-95020b25d06b

### ■ Homeページ(詳細画面)
https://github.com/turtle-brothers/zumens/assets/62471053/432958aa-b987-46e8-b460-5ef672ae4fd9

### ■ Uploadページ(図面登録)
https://github.com/turtle-brothers/zumens/assets/62471053/21139d7a-6b9f-4bc9-acb5-9c233c1a3fe8

### ■ UserUploadページ(ユーザー登録)
https://github.com/turtle-brothers/zumens/assets/62471053/557d9ca0-f86d-4ed1-8b3c-04709e3a664d

## ■ 技術スタック
- **``Frontend``:** **React** / **TypeScript** / Chakura-UI / eslint&prettier
- **``Backend``:** **Rails** / RSpec / rubocop
- **``Infra``:** **AWS** ( EC2 / CloudFront/ RDS / ELB / Route53 / S3 / ACM ) / **Terraform** / **Docker&docker-compose** / **GitActions** / nginx / unicorn

## ■ インフラ構成図
![infra_stracture](https://github.com/turtle-brothers/zumens/assets/62471053/7e045f9b-ef06-4653-adea-a89cef7d491a)
