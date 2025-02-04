const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainLinks: [],
  getLength() {
    return this.chainLinks.length;
  },
  addLink(value = "") {
    this.chainLinks.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position > this.getLength()
    ) {
      this.chainLinks = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainLinks.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainLinks.reverse();
    return this;
  },
  finishChain() {
    let finalChain = this.chainLinks.join("~~");
    this.chainLinks = [];
    return finalChain;
  },
};

module.exports = {
  chainMaker,
};
