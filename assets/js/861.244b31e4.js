(window.webpackJsonp=window.webpackJsonp||[]).push([[861],{1374:function(t,v,_){"use strict";_.r(v);var d=_(35),e=Object(d.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"从-bash-到-nu"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从-bash-到-nu"}},[t._v("#")]),t._v(" 从 Bash 到 Nu")]),t._v(" "),_("p",[t._v("如果你是来自 Windows 上的"),_("code",[t._v("Git Bash")]),t._v("用户，那么你习惯的外部命令（bash、grep 等）在"),_("code",[t._v("nu")]),t._v("中默认是不可用的（除非你在 Windows 路径环境变量中明确包含了它们）。\n要使这些命令在"),_("code",[t._v("nu")]),t._v("中可用，请在你的"),_("code",[t._v("config.nu")]),t._v("中添加以下一行，用"),_("code",[t._v("append")]),t._v("或"),_("code",[t._v("prepend")]),t._v("。")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("let-env Path "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(".Path "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" prepend "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Program Files\\Git\\usr\\bin'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),_("p",[t._v("注意：本表针对 Nu 0.14.1 或更高版本。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Bash")]),t._v(" "),_("th",[t._v("Nu")]),t._v(" "),_("th",[t._v("Task")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("ls")])]),t._v(" "),_("td",[_("code",[t._v("ls")])]),t._v(" "),_("td",[t._v("列出当前目录中的文件")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("ls <dir>")])]),t._v(" "),_("td",[_("code",[t._v("ls <dir>")])]),t._v(" "),_("td",[t._v("列出给定目录中的文件")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("ls pattern*")])]),t._v(" "),_("td",[_("code",[t._v("ls pattern*")])]),t._v(" "),_("td",[t._v("列出匹配给定模式的文件")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("ls -la")])]),t._v(" "),_("td",[_("code",[t._v("ls --long --all")]),t._v(" or "),_("code",[t._v("ls -la")])]),t._v(" "),_("td",[t._v("列出包含所有可用信息的文件，包括隐藏文件")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("ls -d */")])]),t._v(" "),_("td",[_("code",[t._v("ls | where type == dir")])]),t._v(" "),_("td",[t._v("列出目录")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("find . -name *.rs")])]),t._v(" "),_("td",[_("code",[t._v("ls **/*.rs")])]),t._v(" "),_("td",[t._v("递归地查找匹配给定模式的所有文件")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("find . -name Makefile | xargs vim")])]),t._v(" "),_("td",[_("code",[t._v("ls \\*\\*/Makefile | get name | vim $in")])]),t._v(" "),_("td",[t._v("将值作为命令参数传递")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("cd <directory>")])]),t._v(" "),_("td",[_("code",[t._v("cd <directory>")])]),t._v(" "),_("td",[t._v("切换到给定目录")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("cd")])]),t._v(" "),_("td",[_("code",[t._v("cd")])]),t._v(" "),_("td",[t._v("切换到用户主目录")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("cd -")])]),t._v(" "),_("td",[_("code",[t._v("cd -")])]),t._v(" "),_("td",[t._v("切换到前一个目录")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("mkdir <path>")])]),t._v(" "),_("td",[_("code",[t._v("mkdir <path>")])]),t._v(" "),_("td",[t._v("创建给定的路径")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("mkdir -p <path>")])]),t._v(" "),_("td",[_("code",[t._v("mkdir <path>")])]),t._v(" "),_("td",[t._v("创建给定的路径，如果父目录不存在则自动创建")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("touch test.txt")])]),t._v(" "),_("td",[_("code",[t._v("touch test.txt")])]),t._v(" "),_("td",[t._v("新建文件")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("> <path>")])]),t._v(" "),_("td",[_("code",[t._v("| save --raw <path>")])]),t._v(" "),_("td",[t._v("保存字符串到给定文件")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v(">> <path>")])]),t._v(" "),_("td",[_("code",[t._v("| save --raw --append <path>")])]),t._v(" "),_("td",[t._v("追加字符串到给定文件")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("cat <path>")])]),t._v(" "),_("td",[_("code",[t._v("open --raw <path>")])]),t._v(" "),_("td",[t._v("显示给定文件的内容")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[_("code",[t._v("open <path>")])]),t._v(" "),_("td",[t._v("将文件作为结构化数据读取")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("mv <source> <dest>")])]),t._v(" "),_("td",[_("code",[t._v("mv <source> <dest>")])]),t._v(" "),_("td",[t._v("移动文件到新的位置")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("cp <source> <dest>")])]),t._v(" "),_("td",[_("code",[t._v("cp <source> <dest>")])]),t._v(" "),_("td",[t._v("复制文件到新的位置")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("cp -r <source> <dest>")])]),t._v(" "),_("td",[_("code",[t._v("cp -r <source> <dest>")])]),t._v(" "),_("td",[t._v("递归地将目录复制到一个新的位置")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("rm <path>")])]),t._v(" "),_("td",[_("code",[t._v("rm <path>")])]),t._v(" "),_("td",[t._v("删除给定的文件")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[_("code",[t._v("rm -t <path>")])]),t._v(" "),_("td",[t._v("将给定的文件移到系统垃圾箱")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("rm -rf <path>")])]),t._v(" "),_("td",[_("code",[t._v("rm -r <path>")])]),t._v(" "),_("td",[t._v("递归地删除给定的路径")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("chmod")])]),t._v(" "),_("td",[_("code",[t._v("<not yet possible>")])]),t._v(" "),_("td",[t._v("改变文件属性")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("date -d <date>")])]),t._v(" "),_("td",[_("code",[t._v('"<date>" | into datetime -f <format>')])]),t._v(" "),_("td",[t._v("解析日期 ("),_("a",{attrs:{href:"https://docs.rs/chrono/0.4.15/chrono/format/strftime/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("日期格式文档"),_("OutboundLink")],1),t._v(")")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("sed")])]),t._v(" "),_("td",[_("code",[t._v("str find-replace")])]),t._v(" "),_("td",[t._v("查找和替换一个字符串中的模式")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("grep <pattern>")])]),t._v(" "),_("td",[_("code",[t._v("where $it =~ <substring>")]),t._v(" or "),_("code",[t._v("find <substring>")])]),t._v(" "),_("td",[t._v("过滤包含特定字符串的字符串")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("man <command>")])]),t._v(" "),_("td",[_("code",[t._v("help <command>")])]),t._v(" "),_("td",[t._v("获得特定命令的帮助信息")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[_("code",[t._v("help commands")])]),t._v(" "),_("td",[t._v("列出所有可用的命令")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[_("code",[t._v("help --find <string>")])]),t._v(" "),_("td",[t._v("在所有可用的命令中搜索")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("command1 && command2")])]),t._v(" "),_("td",[_("code",[t._v("command1; command2")])]),t._v(" "),_("td",[t._v("运行一条命令，如果成功的话，再运行第二条")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("stat $(which git)")])]),t._v(" "),_("td",[_("code",[t._v("stat (which git).path")])]),t._v(" "),_("td",[t._v("使用命令输出作为其他命令的参数")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("echo $PATH")])]),t._v(" "),_("td",[_("code",[t._v("echo $env.PATH")])]),t._v(" "),_("td",[t._v("查看当前路径")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("<update ~/.bashrc>")])]),t._v(" "),_("td",[_("code",[t._v("vim $nu.config-path")])]),t._v(" "),_("td",[t._v("永久地更新 PATH")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("export PATH = $PATH:/usr/other/bin")])]),t._v(" "),_("td",[_("code",[t._v("let-env PATH = ($env.PATH | append /usr/other/bin)")])]),t._v(" "),_("td",[t._v("临时更新 PATH")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("export")])]),t._v(" "),_("td",[_("code",[t._v("echo $env")])]),t._v(" "),_("td",[t._v("列出当前的环境变量")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("<update ~/.bashrc>")])]),t._v(" "),_("td",[_("code",[t._v("vim $nu.config-path")])]),t._v(" "),_("td",[t._v("永久地更新环境变量")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("FOO=BAR ./bin")])]),t._v(" "),_("td",[_("code",[t._v("FOO=BAR ./bin")])]),t._v(" "),_("td",[t._v("临时修改环境变量")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("export FOO=BAR")])]),t._v(" "),_("td",[_("code",[t._v("let-env FOO = BAR")])]),t._v(" "),_("td",[t._v("为当前会话设置环境变量")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("echo $FOO")])]),t._v(" "),_("td",[_("code",[t._v("echo $env.FOO")])]),t._v(" "),_("td",[t._v("使用环境变量")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("unset FOO")])]),t._v(" "),_("td",[_("code",[t._v("hide FOO")])]),t._v(" "),_("td",[t._v("取消对当前会话的环境变量设置")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v('alias s="git status -sb"')])]),t._v(" "),_("td",[_("code",[t._v("alias s = git status -sb")])]),t._v(" "),_("td",[t._v("临时定义一个别名")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("type FOO")])]),t._v(" "),_("td",[_("code",[t._v("which FOO")])]),t._v(" "),_("td",[t._v("显示一个命令的信息（内置、别名或可执行）")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("<update ~/.bashrc>")])]),t._v(" "),_("td",[_("code",[t._v("vim $nu.config-path")])]),t._v(" "),_("td",[t._v("永久添加和编辑别名（新开Shell会话生效）")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("bash -c <commands>")])]),t._v(" "),_("td",[_("code",[t._v("nu -c <commands>")])]),t._v(" "),_("td",[t._v("运行一组命令（需要0.9.1或更高版本）")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("bash <script file>")])]),t._v(" "),_("td",[_("code",[t._v("nu <script file>")])]),t._v(" "),_("td",[t._v("运行一个脚本文件（需要0.9.1或更高版本）")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\")])]),t._v(" "),_("td",[_("code",[t._v("(")]),t._v(" followed by "),_("code",[t._v(")")])]),t._v(" "),_("td",[t._v("目前还不支持换行延续性")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);