export function newShape(startPoint, endPoint, bottom, isLeftItem) {
    const arrClass = new Array('circle', 'triangle', 'rectangle');
    const type = Math.floor(Math.random() * 3);
    const weight = Math.floor(Math.random() * 10) + 1;
    const width = weight * 10;
    const left = Math.floor(Math.random() * (endPoint - startPoint)) + startPoint;
    var height = width;

    return {
        class: arrClass[type],
        type,
        width,
        weight,
        bottom: bottom,
        left,
        height,
        isLeftItem
    }
}