function Operaciones() {
    ///Cinematica en una dimension;
    var ejerciosOp = /** @class */ (function () {
        function ejerciosOp(v1, t1) {
            this.t1 = t1;
            this.v1 = v1;
        }
        return ejerciosOp;
    }());
    var VelocidadP = new ejerciosOp();
    var vel = VelocidadP.t1 * VelocidadP.v1;
    console.log(vel);
}
