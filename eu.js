return boundStroke(
    bounds.set(
        x1 = item.x || 0,
        y1 = item.y || 0,
        item.x2 != null ? item.x2 : x1,
        item.y2 != null ? item.y2 : y1
    ),
    item
);
