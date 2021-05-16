---
sidebar_position: 1
---

# Chuẩn bị cho việc làm mod

Chùng nhau xem làm thế nào để làm ra một mod hoàn chỉnh.

## Chuẩn bị

### Trên PC/Laptop/Mac
- Bạn phải chắn rằng <a href="https://www.python.org/">Python</a> và <a href="https://git-scm.com/">Git</a> đã được cài đặt trên máy của bạn.
- Bạn phải biết và **hiểu rõ** về OPP trong ngôn ngữ lập trình JavaScript hoặc tốt hơn là <a href="https://www.typescriptlang.org/">TypeScript</a>
- Phải có ý chí

### Trên điện thoại
- Bạn phải có một chiếc điện thoại Android để làm mod và test mod. Điện thoại chạy iOS chỉ có thể giúp bạn viết mod và không thể giúp bạn test mod
- Bạn phải biết và **hiểu rõ** về OPP trong ngôn ngữ lập trình JavaScript hoặc tốt hơn là <a href="https://www.typescriptlang.org/">TypeScript</a>
- Phải có ý chí

## Tải mod mẫu
Mod mẫu là một mod bao gồm các file và thư mục có sẵn giúp bạn làm mod nhanh hơn

### Trên PC/Laptop/Mac
- Chuẩn bị một code editor (nên dùng <a href="https://code.visualstudio.com/">Visual Studio Code</a>) hoặc IDE
- Tạo một thư mục (bạn sẽ làm mod trong thư mục này) tên là Workspace (bạn có thể chọn tên khác)
- Mở Terminal hoặc Cmd lên, gõ 
```shell
git clone https://github.com/zheka2304/innercore-mod-toolchain.git 
```
Việc này sẽ tải một tệp về máy bạn, sao đó dùng lệnh
```shell
cd innercore-mod-toolchain
```

Nếu trên MacOS/Linux thì dùng
```shell
python3 toolchain-setup.py
```
Còn nếu trên Window thì dùng
```shell
python toolchain-setup.py
```
Thế là bạn đã có mod mẫu để bắt đầu làm mod rồi

### Trên điện thoại
**Mình khuyên các bạn nên dùng trên máy tính tốt hơn**
- Vào trang <a href="https://icmods.mineprogramming.org/pattern">web</a>
- Nhập đầy đủ và bấm `Generate Pattern`
- Sau đó sẽ tự đồng tại về mod mẫu cơ bản

## Cấu trúc thư mục trong mod mẫu cơ bản

innercore-mod-toolchain
- make.json  
- README.md  
- src/  
    - assets/  
        - behavior_packs/  
        - gui/  
        - res/ 
            - items-opaque/  Chứa textures của item
            - terran-atlas/ Chứa textures của block
        - resource_packs/
    - dev/  Nơi chứa code của mod
    - icon.png  Logo của mod (có thể thay đổi)
    - launcher.js  
    - lib/  Thư viện
    - native/  
    - preloader/
- toolchain/  
- toolchain-mod/
