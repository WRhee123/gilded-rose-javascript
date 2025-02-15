export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class basicItem extends Item {
  constructor(n, sI, q) {
    super(n, sI, q)
  }
  update() {
    if(this.sellIn < 0) {
      this.quality -= 2;
      this.sellIn --;
    } else if(this.sellIn > 0) {
      this.sellIn --;
      this.quality --;
    }
    if(this.quality < 0) {
      this.quality = 0
    }
  }
}

export class agedBrie extends Item {
  constructor(n, sI, q) {
    super(n, sI, q)
  }
  update(){
    if(this.quality < 50) {
      this.quality++
    }
    this.sellIn--
  }
}

export class sulfuras extends Item {
  constructor(n, sI, q) {
    super(n, sI, q)
  }
  update(){
    if(this.quality !== 80) {
      this.quality = 80
    }
  }
}

export class backstagePass extends Item {
  constructor(n, sI, q) {
    super(n, sI, q)
  }
  update(){
    if(this.quality < 50) {
      this.quality ++;
      this.sellIn --;
    }
    if(this.sellIn <= 5) {
      this.quality += 3
    } else if(this.sellIn <= 10) {
      this.quality += 2
    } else if(this.sellIn === 0) {
      this.quality = 0
    }
  }
}
// "Conjured" items degrade in quality twice as fast as normal items.
export class conjuredItem extends Item{
  constructor(n, sI, q) {
    super(n, sI, q)
  }
  update(){
    if(this.quality < 50) {
      this.quality -= 2
    }
  }
}

export let items = [];

items.push(new basicItem("+5 Dexterity Vest", 10, 20));
items.push(new agedBrie("Aged Brie", 2, 0));
items.push(new basicItem("Elixir of the Mongoose", 5, 7));
items.push(new sulfuras("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new backstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new conjuredItem("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    console.log(item)
    item.update()
    // if (
    //   item.name != "Aged Brie" &&
    //   item.name != "Backstage passes to a TAFKAL80ETC concert"
    // ) {
    //   if (item.quality > 0) {
    //     if (item.name != "Sulfuras, Hand of Ragnaros") {
    //       item.quality = item.quality - 1;
    //     }
    //   }
    // } else {
    //   if (item.quality < 50) {
    //     item.quality = item.quality + 1;
    //     if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
    //       if (item.sellIn < 11) {
    //         if (item.quality < 50) {
    //           item.quality = item.quality + 1;
    //         }
    //       }
    //       if (item.sellIn < 6) {
    //         if (item.quality < 50) {
    //           item.quality = item.quality + 1;
    //         }
    //       }
    //     }
    //   }
    // }
    // if (item.name != "Sulfuras, Hand of Ragnaros") {
    //   item.sellIn = item.sellIn - 1;
    // }
    // if (item.sellIn < 0) {
    //   if (item.name != "Aged Brie") {
    //     if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
    //       if (item.quality > 0) {
    //         if (item.name != "Sulfuras, Hand of Ragnaros") {
    //           item.quality = item.quality - 1;
    //         }
    //       }
    //     } else {
    //       item.quality = item.quality - item.quality;
    //     }
    //   } else {
    //     if (item.quality < 50) {
    //       item.quality = item.quality + 1;
    //     }
    //   }
    // }
  }
};

// updateQuality();
