export function newShape(bottom, isLeftItem, maxWidth) {
    const arrClass = new Array('circle', 'triangle', 'rectangle');
    const type = Math.floor(Math.random() * 3);
    const weight = Math.floor(Math.random() * 10) + 1;
    const width = weight * 10;
    var startPoint = isLeftItem ? 0 : Math.floor(maxWidth / 2);
    var endPoint = isLeftItem ? Math.floor(maxWidth / 2) : maxWidth;
    var left = Math.floor((Math.floor(Math.random() * (endPoint - startPoint)) + startPoint));
    console.log(isLeftItem, startPoint, endPoint, left);
    var height = width;
    if (isLeftItem && left + width > Math.floor(maxWidth / 2)) {
        left = Math.floor(maxWidth / 2 - width);
    }
    if (!isLeftItem && left + width > maxWidth) {
        left = Math.floor(maxWidth - width);
    }
    console.log(isLeftItem, startPoint, endPoint, left);

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    return {
        id: uuidv4(),
        class: arrClass[type],
        type,
        width,
        weight,
        bottom: bottom,
        left,
        height,
        isLeftItem,
        isNewItem: isLeftItem
    }
}