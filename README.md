# sandbox-bun

## bun shell

- 公式
  - <https://bun.sh/docs/runtime/shell>

```sh
npm install -g bun
```

### typescript

```sh
bun src/shell.ts
```

### shell script

```sh
bun src/simple_shell.sh 
```

## compile

```sh
cd dist
bun build ../src/shell.ts --compile --outfile myapp
```
