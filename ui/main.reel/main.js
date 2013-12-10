/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    subs: {
        value: [
            { display_name: "HTML", url: "/r/html5" },
            { display_name: "Programming", url: "/r/programming" },
            { display_name: "Coding", url: "/r/coding" },
            { display_name: "Comp Sci", url: "/r/compsci" },
            { display_name: "Web Dev", url: "/r/webdev" },
            { display_name: "Startups", url: "/r/startups" }
        ]
      }
});
