export class ResortsBinder {
    private resortsDefinitions: Map<string, number[]> = new Map();

    constructor() {
        // Turkiye
        this.resortsDefinitions.set("Аланія", [339, 1573, 1572, 1574, 1766, 1575, 1576, 1577, 1578, 1579, 1580]);
        this.resortsDefinitions.set("Анталія", [10, 26, 2502, 1582, 1583, 1581]);
        this.resortsDefinitions.set("Кемер", [342, 1589, 1591, 1592, 1593, 1594, 1590]);
        this.resortsDefinitions.set("Стамбул", [11, 1668, 2590, 1679, 2578, 2591, 1673, 1618, 2564, 1617, 1666, 1675, 1620, 1613, 1680, 1676, 1667, 1615, 21, 1665, 1670, 1621, 1612, 1677, 1644, 1674]);

        // Egypt
        this.resortsDefinitions.set("Хургада", [16, 1316, 1314, 1317, 1326, 1315, 1313, 1318]);
        this.resortsDefinitions.set("Шарм ель Шейх", [17, 1360, 1347, 1843, 2380, 1841, 1844, 1845, 1846, 1850, 1840, 1839, 1849]);

        // Spain
        this.resortsDefinitions.set("Барселона", [352, 219]);
        this.resortsDefinitions.set("Майорка", [273, 1207, 1213, 1512, 2373, 1513, 1210, 1208, 1217, 1219, 2451, 1220, 1216, 1221, 1222, 1223, 1224, 1225, 1209, 1212, 1211, 1227, 1228, 1229, 1230, 1495, 1231, 1232, 1521, 1215]);
        this.resortsDefinitions.set("Тенеріфе", [105, 222, 2655, 328, 847, 754, 327, 513, 335, 852]);
    }

    public get(): Map<string, number[]> {
        return this.resortsDefinitions;
    }

}
