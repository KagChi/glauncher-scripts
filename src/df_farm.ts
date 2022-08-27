EditToggle("ModFly", true);

/** @noSelf */
function breakBlock(x: number, y: number): void {
    const packet = {
        px: x,
        py: y,
        x: x * 32,
        y: (y - 2) * 32,
        type: 3,
        value: 18
    };

    SendPacketRaw(false, packet);
    Sleep(180);
}

/** @noSelf */
function findDirts(): void {
    for (const tile of GetTiles()) {
        if (((tile.y % 2) === 1) || (tile.x === 0) || (tile.x === 1) || (tile.x === 99) || (tile.x === 98)) {
            if ((tile.fg === 2) || (tile.bg === 14 && tile.fg === 0) || (tile.fg === 10) || (tile.fg === 4)) {
                if (!FindPath(tile.x, tile.y - 2)) breakBlock(tile.x, tile.y); break;
            }
        }
    }
}

while (true) {
    findDirts();
}
