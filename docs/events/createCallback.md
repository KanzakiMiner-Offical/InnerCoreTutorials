---
sidebar_position: 1
---

# Cách tạo Callback (sự kiện)

## Tạo callback
```javascript
Callback.addCallback('<tên callback>', function() {});
```

## Tên callback khả dụng
|  Tên Callback  |         Callback function        |                            Miêu tả                           |
|:--------------:|:--------------------------------:|:------------------------------------------------------------:|
|  LevelCreated  |           function(){}           |                Được gọi khi thế giới được tạo                |
|  LevelSelected | function(levelName, levelPath){} |  Sẽ trả về tên thế giới và đường dẫn đến tệp của thế giới đó |
| LevelPreLoaded |           function(){}           |             Được gọi khi thế giới được tải trước             |
|   LevelLoaded  |           function(){}           |              Được gọi khi thế giới BẮT ĐẦU load              |
| LevelDisplayed |           function(){}           |               Được gọi khi thế giới load đầy đủ              |
|  LevelPreLeft  |           function(){}           |          Được gọi khi người chơi đang thoát thế giới         |
|    LevelLeft   |           function(){}           |           Được gọi khi người chơi đã thoát thế giới          |