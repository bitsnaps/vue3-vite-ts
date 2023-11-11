# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# How this app was created
```
pnpm create vite

# then choose vite with TypeScript support...
# then cd into app...
# then run
pnpm install
```

# Installed Libraries:
```bash
pnpm add vue-router@4 axios vue-meta@next pinia@next @vueuse/core
```

# Testing with Vitest

```bash
pnpm add -D vitest

# Code Coverage
pnpm i -D @vitest/coverage-v8

# You can also use istanbul instead of v8:
#pnpm -D @vitest/coverage-istanbul
```
Do not forget to add these lines to `package.json`:
```
  "scripts": {
    ...
    "test":"vitest",
    "coverage": "vitest run --coverage"
  }
```
A simple unit test example can be found at `tests/test.sum.js`, then run:
```
pnpm test # for testing
pnpm coverage # for code coverage
```

In order to test components in an isolated environnement we'll need to add `jsdom` (latest Node v14 compatible) and `@vue/test-utils` to `mount()` and test components and using a `stub`:
```
pnpm add -D jsdom@^21.1.2 @vue/test-utils
```
Now, check the `tests/About.spec.js` test file.

You can also -optionally- install `@vitest/ui` then run it using: `vitest --ui` or by passing `test --ui` to your `test` command.


## Updated Configurations
Original config `tsconfig.josn`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

Updated:
```json
{
  "compilerOptions": {
    /* Updated */
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    /* Updated */
    "lib": ["esnext", "DOM"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "node",
    "experimentalDecorators": false,

    /* Added */
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true, /* for debugging */
    "baseUrl": ".", /* allows you to use absolute path in import with @ symbol */
    "paths": {
      "@/*": [
        "src/*"
      ]
    },

    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  /* Added */
  "exclude": ["node_modules"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```
