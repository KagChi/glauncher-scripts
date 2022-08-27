/** @noSelf
 * @info Prints messages to console.
 * @example LogToConsole("Hello World");
*/
declare function LogToConsole(...args: any[]): void;

/** @noSelf
 * @info To edit toggle in PowerKuy feature.
 * @example EditToggle("ModFly", true);
*/
declare function EditToggle(type: string, enabled: boolean): void;

/** @noSelf
 * @info To Send a Raw Packet to Growtopia Server.
 * @example SendPacketRaw(false, { });
*/
declare function SendPacketRaw(toClient: boolean, packet: any): void;

/** @noSelf
 * @info To add cooldown in your script.
 * @example Sleep(180);
*/
declare function Sleep(timeout: number): void;

/** @noSelf
 * @info To get all Tile in Current World.
 * @example GetTiles();
*/
declare function GetTiles(): Tile[];

/** @noSelf
 * @info Auto Teleport use FindPath
 * @example FindPath(10, 10);
*/
declare function FindPath(x: number, y: number): boolean;

interface Tile {
    x: number;
    y: number;
    fg: number;
    bg: number;
    flag: number;
    readyharvest: boolean;
    extra: TileExtra;
}

interface TileExtra {
    label: string;
    owner: string;
    flag: number;
    type: number;
}
