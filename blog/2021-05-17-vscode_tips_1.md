---
slug: vscode-tips-1
title: Nhắc lệnh trong Visual Studio Code
author: MintoD
author_title: Working at home 🏠
author_url: https://github.com/MintoD
author_image_url: https://avatars.githubusercontent.com/u/75960371?v=4
tags: [developer, vscode]
---

# Nhắc lệnh là gì
Là khi bạn gõ 1 chữ cái như `f` thì nó sẽ gởi ý cho bạn `function` hoặc `float` bạn chỉ cần bấm enter thì nó sẽ tự động viết từ đó ra.

# Khi nào nên dùng nó
- Nhắc lệnh khá là hữu dụng nhưng đôi khi những lệnh được nhắc không đúng yêu cầu của bạn buộc bạn phải "lăn chuột" để tìm lệnh phụ hợp rồi bấm enter. Việc này tốn khá nhiều thời gian của bạn.
- Cái hại của nhắc lệnh là khi bạn quá quen (phụ thuộc) với nó thì bạn sẽ không thể nhớ được các câu lệnh cơ bạn. Vì vậy, hãy dùng nhắc lệnh khi bạn đã nhớ hết các dòng code cơ bản

# Làm sao để nhắc lệnh trong quá trình tôi làm mod
**Trước hết là bạn cần phải biết `TypeScript` vì nhắc lệnh chỉ có thể dùng cho TypeScript**

## TypeScript là gì ? Cài đặt như thế nào ?

### TypeScript là gì
- TypeScript là một ngôn ngữ lập trình, khác với các ngôn ngữ khác là TypeScript là bản nâng cấp của JavaScript giống tương tự như `C` và `C++`.
- Nhưng bạn vẫn phải học TypeScript vì các kiến thức của TypeScript lhas là nâng cao

### Cài đặt TypeScript
**Chắc chắn rằng máy bạn đã cài <a href="https://nodejs.org">NodeJS</a>.**
Sau đó dùng lệnh
```shell
npm i -g typescript
```
**Lưu ý**: nếu trên Linux thì nhớ dùng `sudo`
### Chạy TypeScript trong mod

#### Dành cho Linux/MacOS
Mở Terminal lên, gõ
```shell
python3 path/toolchain/python task.py clearOutput buildScripts buildResources compileNativeDebug compileJavaDebug buildAdditional buildInfo
```
path là đường dẫn đến thư mục toolchain

#### Dành cho Window
Dùng `Ctr + Shift + B` sao đó chọn `Build Everything`  
**Thế là bạn đã có thể dùng nhắc lệnh trong quá trình mod rồi**