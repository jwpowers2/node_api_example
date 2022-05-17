class Filters {
  constructor(bins) {
    this.bins = bins;
  }
  africa() {
    let ghana = this.bins.filter(c => {
      return c.country === "ghana";
    });
    let southAfrica = this.bins.filter(c => {
      return c.country === "south africa";
    });
    let nigeria = this.bins.filter(c => {
      return c.country === "nigeria";
    });
    let uganda = this.bins.filter(c => {
      return c.country === "uganda";
    });
    let rwanda = this.bins.filter(c => {
      return c.country === "rwanda";
    });
    let kenya = this.bins.filter(c => {
      return c.country === "kenya";
    });
    let tanzania = this.bins.filter(c => {
      return c.country === "tanzania";
    });

    let out = {
      ghana: ghana,
      south_africa: southAfrica,
      nigeria: nigeria,
      uganda: uganda,
      rwanda,
      rwanda,
      kenya: kenya,
      tanzania: tanzania
    };

    return out;
  }
  type() {
    let credit = this.bins.filter(c => {
      return c.type === "credit";
    });
    let debit = this.bins.filter(c => {
      return c.type === "debit";
    });

    return { credit: credit, debit: debit };
  }
  validate(req) {
    let country = req.params.country.toLowerCase();
    let result = this.bins.filter(c => {
      if (c.country === country && c.key === req.params.bin) {
        return true;
      } else {
        return false;
      }
    });
    let out;
    if (result.length > 0) {
      out = true;
    } else {
      out = false;
    }
    return { validated: out };
  }
}

module.exports = Filters;
