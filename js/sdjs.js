



function drawDiagram(ctx, startOffset, items) {
    for (var i = 0; i < items.length; i++) {
        console.log("start:" + items[i][0] + " end:" + items[i][1]);

        var topOffset = 20;
        var rectangleHeight = 50;

        ctx.rect(items[i][0], topOffset, items[i][1], rectangleHeight); // start x, start y, stop x, stop y

        ctx.font = "1em serif";
        ctx.strokeText(items[i][2], items[i][0] + (items[i][1] / 4), 50);

        ctx.moveTo(items[i][0] + (items[i][1] / 2), 70);
        ctx.lineTo(items[i][0] + (items[i][1] / 2), 400);

        ctx.stroke();

    }
}

function connectItems(ctx, items, startItem, endItem) {
    ctx.beginPath();
    ctx.setLineDash([5, 10]);

    var lineStart = items[startItem][0] + (items[startItem][1] / 2);
    var lineEnd = items[endItem][0] + (items[endItem][1] / 2);
    ctx.moveTo(lineStart, level * 100);
    ctx.lineTo(lineEnd, level * 100);

    arrow(ctx, lineStart, level * 100, lineEnd, level * 100, false, true);

    ctx.stroke();
    level++;
}

function arrow(ctx, x1, y1, x2, y2, start, end) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    var rot = -Math.atan2(dx, dy);
    var len = Math.sqrt(dx * dx + dy * dy);
    var arrowHeadLen = 10;
    ctx.save();
    ctx.translate(x1, y1);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.moveTo(0, start ? arrowHeadLen : 0);
    ctx.lineTo(0, len - (end ? arrowHeadLen : 0));
    ctx.stroke();
    if (end) {
        ctx.save();
        ctx.translate(0, len);
        arrowHead(ctx);
        ctx.restore();
    }
    if (start) {
        ctx.rotate(Math.PI);
        arrowHead(ctx);
    }
    ctx.restore();
}

function arrowHead(ctx) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-5, -12);
    ctx.lineTo(5, -12);
    ctx.closePath();
    ctx.fill();
}

