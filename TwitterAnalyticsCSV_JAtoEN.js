function JAtoEN() {
  const ja = ['日付', 'Tweets published', 'インプレッション', 'エンゲージメント', 'エンゲージメント率', 'リツイート', '返信', 'いいね', 'ユーザープロフィールクリック', 'URLクリック数', 'ハッシュタグクリック', '詳細クリック', '固定リンクのクリック数', 'アプリ表示', 'アプリインストール', 'フォローしている', 'ツイートをメール送信', 'ダイアル式電話', 'メディアの再生数', 'メディアのエンゲージメント数', 'プロモのインプレッション', 'プロモのエンゲージメント', 'プロモのエンゲージメント率', 'プロモのリツイート', 'プロモの返信', 'プロモのいいね', 'プロモのユーザープロフィールクリック', 'プロモのURLクリック数', 'プロモのハッシュタグクリック', 'プロモの詳細クリック', 'プロモの固定リンクのクリック数', 'プロモのアプリ表示', 'プロモのアプリインストール', 'プロモのフォローしている', 'プロモのツイートをメール送信', 'プロモのダイアル式電話', 'プロモのメディアの再生数', 'プロモのメディアのエンゲージメント数']
  const en = ['Date', 'Tweets published', 'impressions', 'engagements', 'engagement rate', 'retweets', 'replies', 'likes', 'user profile clicks', 'url clicks', 'hashtag clicks', 'detail expands', 'permalink clicks', 'app opens', 'app installs', 'follows', 'email tweet', 'dial phone', 'media views', 'media engagements', 'promoted impressions', 'promoted engagements', 'promoted engagement rate', 'promoted retweets', 'promoted replies', 'promoted likes', 'promoted user profile clicks', 'promoted url clicks', 'promoted hashtag clicks', 'promoted detail expands', 'promoted permalink clicks', 'promoted app opens', 'promoted app installs', 'promoted follows', 'promoted email tweet', 'promoted dial phone', 'promoted media views', 'promoted media engagements']
  const ja2 = ['ツイートID', 'ツイートの固定リンク', 'ツイート本文', '時間', 'インプレッション', 'エンゲージメント', 'エンゲージメント率', 'リツイート', '返信', 'いいね', 'ユーザープロフィールクリック', 'URLクリック数', 'ハッシュタグクリック', '詳細クリック', '固定リンクのクリック数', 'アプリ表示', 'アプリインストール', 'フォローしている', 'ツイートをメール送信', 'ダイアル式電話', 'メディアの再生数', 'メディアのエンゲージメント数', 'プロモのインプレッション', 'プロモのエンゲージメント', 'プロモのエンゲージメント率', 'プロモのリツイート', 'プロモの返信', 'プロモのいいね', 'プロモのユーザープロフィールクリック', 'プロモのURLクリック数', 'プロモのハッシュタグクリック', 'プロモの詳細クリック', 'プロモの固定リンクのクリック数', 'プロモのアプリ表示', 'プロモのアプリインストール', 'プロモのフォローしている', 'プロモのツイートをメール送信', 'プロモのダイアル式電話', 'プロモのメディアの再生数', 'プロモのメディアのエンゲージメント数']
  const en2 = ['Tweet id', 'Tweet permalink', 'Tweet text', 'time', 'impressions', 'engagements', 'engagement rate', 'retweets', 'replies', 'likes', 'user profile clicks', 'url clicks', 'hashtag clicks', 'detail expands', 'permalink clicks', 'app opens', 'app installs', 'follows', 'email tweet', 'dial phone', 'media views', 'media engagements', 'promoted impressions', 'promoted engagements', 'promoted engagement rate', 'promoted retweets', 'promoted replies', 'promoted likes', 'promoted user profile clicks', 'promoted url clicks', 'promoted hashtag clicks', 'promoted detail expands', 'promoted permalink clicks', 'promoted app opens', 'promoted app installs', 'promoted follows', 'promoted email tweet', 'promoted dial phone', 'promoted media views', 'promoted media engagements']
  let mix = []
  const ja3 = ja.concat(ja2)
  const en3 =en.concat(en2)

  const ja4 = Array.from(new Set(ja3))
  const en4 = Array.from(new Set(en3))
  let en5 = []
  en4.forEach(res => {
    en5.push(res.toLowerCase().replace(/ /g,'_'))
  })

  for(let i = 0; i < ja4.length; i++){
    mix.push([ja4[i], en5[i]])
  }
  console.log(mix)
}
