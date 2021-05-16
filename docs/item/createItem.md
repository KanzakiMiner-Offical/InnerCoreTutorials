---
side_position: 1
---

# Cách tạo một item

`Chú ý` Nhớ tạo một file trong thư mục dev và đặt tên nó trong file .includes

## Khai báo id của item trước

Khai báo id của item bằng cách

```javascript
IDRegistry.genItemID("<id>");
```

Ví dụ

```javascript
IDRegistry.genItemID("test.luckyblock");
```

## Làm textures
Đặt texture của bạn vào thư mục items-opaque và thêm `_0` vào đuôi của tên ảnh  
Ví dụ  
`sword.png` -> `sword_0.png`

## Tạo item

Tạo item bằng cách

```javascript
Item.createItem(nameID, name, texture, { isTech; stack });
```
`nameID` là id của item bạn vừa tạo  
`name` là tên item  
`texture` là texture của item  
`isTech` là có cho item đó xuất hiện trong sáng tạo hay không. Nếu `true` thì có, `false` thì không  
`stack` là số item trong 1 stack 

Ví dụ
```javascript
IDRegistry.genItemID("testItem");
Item.createItem("testItem", "test item", {name: "stick", meta: 0}, {}); // name: là tên của texture lúc nãy, meta thì luôn để 0
```