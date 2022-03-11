(window.webpackJsonp=window.webpackJsonp||[]).push([[498],{1138:function(a,s,e){"use strict";e.r(s);var t=e(35),l=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"エイリアス"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#エイリアス"}},[a._v("#")]),a._v(" エイリアス")]),a._v(" "),e("p",[a._v("Nuではパイプラインを利用して自由にデータやシステムを操作できますが、その反面多くのタイピングを要してしまいます。一度作成したパイプラインを保存しておき再利用できるようにしておきたいところです。")]),a._v(" "),e("p",[a._v("そこでエイリアスの出番です。")]),a._v(" "),e("p",[a._v("エイリアスを使うとコマンドのブロックに名前をつけることができます。エイリアスを実行するとそのコマンドブロックが実行されます。")]),a._v(" "),e("p",[a._v("例:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("> alias ls-names [] { ls | select name }\n> ls-names\n────┬────────────────────\n #  │ name \n────┼────────────────────\n  0 │ 404.html \n  1 │ CONTRIBUTING.md \n  2 │ Gemfile \n  3 │ Gemfile.lock \n  4 │ LICENSE \n")])])]),e("h2",{attrs:{id:"パラメータ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#パラメータ"}},[a._v("#")]),a._v(" パラメータ")]),a._v(" "),e("p",[a._v("エイリアスは、ブロックに渡されるオプションのパラメータをもつことができます。これらはブロック内の新しい変数になります。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('> alias e [msg] { echo $msg }\n> e "hello world"\nhello world\n')])])]),e("p",[a._v("パラメータは任意の数設定することができ、ユーザが値を提供しなかった場合、ブロック内ではNothingと評価されて削除されます。")]),a._v(" "),e("h2",{attrs:{id:"保存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保存"}},[a._v("#")]),a._v(" 保存")]),a._v(" "),e("p",[a._v("デフォルトでは、エイリアスは現在のセッションでのみ有効です。これは一時的なヘルパーや新しいエイリアスをテストするのに便利ですが、エイリアスを有効に活用するには保存しておく必要があります。エイリアスを保存するには、aliasを"),e("code",[a._v("--save")]),a._v("(もしくは"),e("code",[a._v("-s")]),a._v(")つきで実行します。例えば")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("alias e --save [msg] { echo $msg }\n")])])]),e("p",[a._v("エイリアスは起動時の設定に保存され、"),e("code",[a._v("config get startup")]),a._v("で確認することができます。"),e("code",[a._v("startup")]),a._v("設定がまだ存在していない場合はエラーが表示されます。")]),a._v(" "),e("p",[a._v("config.tomlファイルのエイリアスを直接編集することもできます。"),e("code",[a._v("vi")]),a._v("を使う場合は")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("config path | vi $it\n")])])])])}),[],!1,null,null,null);s.default=l.exports}}]);