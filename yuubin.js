class ラクマパックゆうパケットポスト {
  // メソッド
  //  　ここから！　https://faq.fril.jp/guide/first/frilpack/japanpost/
  //  　本if209
  //  　 本論理演算子274
  //  　 ネット https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR
  //  ※備考に記載予定「円筒形状の場合の長さ１４ｃｍ以上×直径３ｃｍ以上」
  //  ※今回の荷物の縦横の部分は、HTMLで入力を受け取ったやつを大きい数字順とかに指定したら変えないといけない部分なので忘れずに！
  これ送れるかい(今回の荷物) {
    if (
      (今回の荷物.縦 <= 34 && 今回の荷物.厚さ <= 3) &&
      (今回の荷物.縦 + 今回の荷物.横 + 今回の荷物.厚さ <= 60) &&
      ((今回の荷物.縦 >= 14 && 今回の荷物.横 >= 9) ||
        (今回の荷物.縦 >= 9 && 今回の荷物.横 >= 14)) &&
      (今回の荷物.重さ >= 2000)
    ) {
      return true;
    }
      return false;
  }
}