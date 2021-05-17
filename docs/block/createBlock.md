---
side_position: 1
---

# Tạo block

Tương tự vời tạo Item đầu tiên phải:
## Khai báo id của Block 

Khai báo id của Block bằng cách

```javascript
IDRegistry.genBlockID("<id>");
```

Ví dụ

```javascript
IDRegistry.genBlockID("test.luckyblock");
```

## Làm textures

Đặt texture của bạn vào thư mục terrain-atlas và thêm `_0` vào đuôi của tên ảnh  
Ví dụ  
`luckyblock.png` -> `luckyblock_0.png`

## Tạo BLock

Sau khi tạo ID xong thì việc tiếp theo là tạo nó

```javascript
 Block.createBlock(nameID, name, texture, { isTech; stack });
```
`nameID` là id của item bạn vừa tạo  
`name` là tên item  
`texture` là texture của item  
`isTech` là có cho item đó xuất hiện trong sáng tạo hay không. Nếu `true` thì có, `false` thì không  
`stack` là số item trong 1 stack 

Ví dụ
```javascript
 IDRegistry.genBlockID ("heavyEngineer");
 Block.createBlock ("heavyEngineer", [{name: "Heavy Engineering Block", texture: [["heavy_engineering_0", 0]], inCreative: true}]); // name: là tên của texture lúc nãy, meta thì luôn để 0
```
*Lưu ý: Nếu không viết thêm {stack: 64} thì mặc định là 64 
*Custom Stack:

 IDRegistry.genItemID ("bucket");
 Item.createItem ("bucket", "Bucket Of Clear Water", {name: "bucketwater", meta: 0}, {stack: 1});
