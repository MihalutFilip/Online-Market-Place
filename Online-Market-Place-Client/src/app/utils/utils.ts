export class Utils {
    static getRandomColor() {
        var colorCodes = ['#fe4a49', '#2ab7ca', '#fed766', '#e6e6ea', '#f4f4f8',
            '#eee3e7', '#ead5dc', '#eec9d2', '#f4b6c2', '#f6abb6',
            '#011f4b', '#03396c', '#005b96', '#6497b1', '#b3cde0',
            '#051e3e', '#251e3e', '#451e3e', '#651e3e', '#851e3e',
            '#dec3c3', '#e7d3d3', '#f0e4e4', '#f9f4f4', '#ffffff',
            '#4a4e4d', '#0e9aa7', '#3da4ab', '#f6cd61', '#fe8a71',
            '#2a4d69', '#4b86b4', '#adcbe3', '#e7eff6', '#63ace5',
            '#fe9c8f', '#feb2a8', '#fec8c1', '#fad9c1', '#f9caa7',
            '#009688', '#35a79c', '#54b2a9', '#65c3ba', '#83d0c9',
            '#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf'];

        return colorCodes[this.getRandomInt(colorCodes.length)];
    }

    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}