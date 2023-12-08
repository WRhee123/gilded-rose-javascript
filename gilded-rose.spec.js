import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";
import { basicItem } from "./gilded-rose.js";
import { agedBrie } from "./gilded-rose.js";
import { sulfuras } from "./gilded-rose.js";
import { backstagePass } from "./gilded-rose.js";
import { conjuredItem } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new basicItem("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });

  it('checks if sellIn is less than zero and degrades quality twice as fast', () => {
    const testItem = new Item('doubleQuality', -1, 2);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(-2);
    expect(testItem.quality).toBe(0);
  })
  
  it('check if quality of is NOT negative', () => {
    const testItem = new Item('notNegative', 2, 1);
    items.push(testItem);

    updateQuality();
    expect(testItem.sellIn).toBe(1);
    expect(testItem.quality).toBeGreaterThan(-1);
  })

  it('Aged Brie quality increases as sellIn decreases', () => {
    const testItem = new agedBrie('Aged Brie', 2, 0);
    items.push(testItem);
    updateQuality();
    expect(testItem.sellIn).toBe(1);
    expect(testItem.quality).toBe(1);
  })

  it('quality of item is never more than 50', () => {
    const testItem = new Item('qualityNoMoreThan50', 2, 50);
    items.push(testItem)
    updateQuality();
    expect(testItem.sellIn).toBe(1);
    expect(testItem.quality).toBeLessThan(50);
  })

  it('Sulfuras, Hand of Ragnaros never has to be sold nor does it decrease in quality', () => {
    const testItem = new sulfuras("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem);
    updateQuality();
    expect(testItem.sellIn).toBe(0);
    expect(testItem.quality).toBe(80)
  })

  it('Backstage passes to a TAFKAL80ETC concert, increase in quality as its sellIn value decreases', () => {
    const testItem = new backstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20);
    let sellInPass = testItem.sellIn;
    let qualityPass = testItem.quality;
    items.push(testItem);
    updateQuality();
    if(sellInPass <= 10){
      qualityPass += 2
    } else {
      if(sellInPass <= 5) {
        qualityPass += 3
      } else {
        if(sellInPass === 0) {
          qualityPass = 0
        }
      }
    }
  })

  it('conjured items degrade in quality twice as fast as normal items', () => {
    const testItem = new conjuredItem("Conjured Mana Cake", 3, 6);
    let sellIn = testItem.sellIn;
    let quality = testItem.quality;
    items.push(testItem);
    updateQuality();
    if(quality){
      
    }
  })
});




