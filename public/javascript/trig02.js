/**
 * Created by ema on 09/02/2017.
 */
window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;


    var centerY = height * 0.5,
        centerX = width * 0.5,
        radius = 100,
        angle = 0,
        numbObjects = 10,
        slice = Math.PI * 2/numbObjects;



    for (var i = 0; i<numbObjects;i++) {
        angle = i  * slice;
        var x = centerX + Math.sin(angle) * radius;
        var y = centerY + Math.cos(angle) * radius;
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();
    }

}