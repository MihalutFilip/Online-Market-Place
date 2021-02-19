export class Utils {
    static getRandomColor() {
        var colorCodes = ['#2ab7ca', '#e6e6ea',
            '#ead5dc', '#f4b6c2', '#f6abb6',
            '#011f4b', '#03396c', '#005b96', '#6497b1', '#b3cde0',
            '#051e3e', '#251e3e', '#451e3e', '#651e3e',
            '#dec3c3', '#e7d3d3', '#f0e4e4', 
            '#4a4e4d', '#0e9aa7', '#3da4ab',];

        return colorCodes[this.getRandomInt(colorCodes.length)];
    }

    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}