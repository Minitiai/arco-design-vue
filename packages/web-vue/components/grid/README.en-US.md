```yaml
meta:
  type: Component
  category: Layout
title: Grid
description: Grid can effectively ensure the consistency and logic of the page, strengthen teamwork and unity.
```

*Auto translate by google.*

@import ./__demo__/basic.md

@import ./__demo__/offset.md

@import ./__demo__/gutter.md

@import ./__demo__/flex-justify.md

@import ./__demo__/flex-align.md

@import ./__demo__/order.md

@import ./__demo__/adaptation.md

@import ./__demo__/adaptation-object.md

@import ./__demo__/flex.md

@import ./__demo__/grid.md


### `<row>` Props

|Attribute|Description|Type|Default|version|
|---|---|---|:---:|:---|
|gutter|Grid interval in `px`. Pass in the responsive object like {xs: 4, sm: 6, md: 12}. Pass in the array [horizontal spacing, vertical spacing] to set two directions.|`number\| Partial<Record<'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs', number>>\| GridRowGutter[]`|`0`||
|justify|Horizontal alignment (`justify-content`)|`'start' \| 'center' \| 'end' \| 'space-around' \| 'space-between'`|`'start'`||
|align|Vertical alignment (`align-items`)|`'start' \| 'center' \| 'end' \| 'stretch'`|`'start'`||
|div|Enabling this option `Row` and `Col` will be treated as divs without any Grid-related classes and styles|`boolean`|`false`||
|wrap|Whether `Col` can wrap onto multiple lines|`boolean`|`true`|2.13.0|




### `<col>` Props

|Attribute|Description|Type|Default|version|
|---|---|---|:---:|:---|
|span|Number of grid space|`number`|`24`||
|offset|The number of grids on the left side of the grid. There can be no grids in the grid.|`number`|`-`||
|order|Sort elements|`number`|`-`||
|xs|<576px responsive grid|`number \| { [key: string]: any }`|`-`||
|sm|>= 576px responsive grid|`number \| { [key: string]: any }`|`-`||
|md|>= 768px responsive grid|`number \| { [key: string]: any }`|`-`||
|lg|>= 992px responsive grid|`number \| { [key: string]: any }`|`-`||
|xl|>= 1200px responsive grid|`number \| { [key: string]: any }`|`-`||
|xxl|>= 1600px responsive grid|`number \| { [key: string]: any }`|`-`||
|flex|Set flex layout properties|`number \| string \| 'initial' \| 'auto' \| 'none'`|`-`|2.10.0|




### `<grid>` Props (2.15.0)

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|cols|Number of columns displayed in each row|`number`|`24`|
|row-gap|The space in row-to-row|`number`|`0`|
|col-gap|The space in column-to-column|`number`|`0`|
|collapsed|Whether to collapsed|`boolean`|`false`|
|collapsed-rows|Number of rows displayed when collapsed|`number`|`1`|




### `<grid-item>` Props (2.15.0)

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|span|Number of grids spanned|`number`|`1`|
|offset|Number of grids on the left|`number`|`0`|
|suffix|Is it a suffix element|`boolean`|`false`|


