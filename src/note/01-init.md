### 创建项目

脚手架搭建

```bash
npm create vue@latest
```

下载依赖

```
npm i
```

使用了eslint后初始格式化代码

```
npm run format
```

运行项目

```
npm run dev
```

### 修改Vue快捷代码片段

C:\Users\86131\.vscode\extensions\sdras.vue-vscode-snippets-3.1.1\snippets

### 引入CSS

- JS中引入css

```js
import './test.css'
```

- CSS中引入css

```css
@import './test.css';
```

### setup语法糖下配置组件名

下载

```bash
npm i vite-plugin-vue-setup-path-extend -D
```

配置：vite.config.js

```js
export default defineConfig({
  plugins: [vue(), vueSetupExtend()]
})
```

使用

```html
<script setup name="Hello123"></script>
```

### Github配置SSH

用ls -al ~/.ssh 若没有rsa相关文件，说明没有该电脑上没有连接github账号的SSH-key

1. 查看git配置：git config list
2. 配置要修改的参数，如用户名 git config --global user.name yixing
3. 查看密钥对：ls -al ~/.ssh
4. 生成密钥对：ssh-keygen -t rsa -C startjcu
5. 查看公钥：cat ~/.ssh/id_rsa.pub
6. 在github账号的settings里找到“SSH and GPG keys”New SSH key添加第5步提供的key

### 常用Git命令

```bash
# 查看状态
git status

# 拉取远程伙伴代码
git stash list
git stash
git stash pop

# 处理至无冲突状态
git add .
git reset xxx
git commit -m 'xxx'
git push
```
