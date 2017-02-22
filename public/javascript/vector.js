var vector = {
  _x: 1,
  _y: 0,
    create: function (x,y) {
        var obj = Object.create(this);
        obj.setX(x);
        obj.setY(y);
        return obj;
    },
    setX: function (value) {
        this._x = value;
    },

    getX: function () {
        return this._x;

    },
    setY: function (value) {
        this._y = value;
    },
    getY: function () {
        return this._y;
    },

    setAngle: function (value) {
        var length = this.getLength();
        this._x = Math.cos(value)*length;
        this._y = Math.sin(value)*length;

    },

    getAngle: function () {
      return Math.atan2(this._y,this._x);
    },

    setLength: function (value) {
      var angle = this.getAngle();
      this._x = Math.cos(angle)*value;
      this._y = Math.sin(angle)*value;

    },
    getLength: function () {
        return Math.sqrt(Math.pow(this._x,2)+Math.pow(this._y,2));
    },

    add: function (v2) {
      return vector.create(this._x + v2.getX(),this._y+v2.getY());
    },
    substract: function (v2) {
      return vector.create(this._x - v2.getX(),this._y-v2.getY());
    },

    multiply: function (n) {
      return vector.create(this._x*n,this._y*n);
    },
    divide: function (n) {
      return vector.create(this._x/n,this._y/n);
    },
    addTo: function (v2) {
      this._x += v2.getX();
      this._y += v2.getY();
    },
    substractFrom: function (v2) {
      this._x -= v2.getX();
      this._y -= v2.getY();
    },
    multiplyBy: function (v2) {
      this._x *= v2.getX();
      this._y *= v2.getY();
    },
    divideBy: function (v2) {
      this._x /= v2.getX();
      this._y /= v2.getY();
    }
};