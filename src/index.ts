import * as blessed from 'blessed';

// 画面（スクリーン）を作成
const screen = blessed.screen({
  smartCSR: true,
  title: 'Multi-line Paste Demo',
  fullUnicode: true,
});

// テキストエリアを作成
const textArea = blessed.textarea({
  top: 'center',
  left: 'center',
  width: '80%',
  height: '80%',
  keys: true,
  mouse: true,
  vi: true,
  border: {
    type: 'line',
  },
  style: {
    fg: 'white',
    bg: 'black',
    border: { fg: 'cyan' },
  },
  inputOnFocus: true,
  unicode: true,
});

// テキストエリアを画面に追加
screen.append(textArea);

// フォーカスを与えないと入力を受け付けない
textArea.focus();

// 貼り付けイベント
textArea.on('paste', (text: string) => {
  // ここに貼り付けされたテキストが入る
  console.log(`Paste event detected!\n${text}`);
});

// 画面をレンダリング
screen.render();

// 画面終了処理
screen.key(['escape', 'C-c'], () => {
  return process.exit(0);
}); 
