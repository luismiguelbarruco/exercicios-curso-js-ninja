(function(win, doc){
	'use strict';

    class DOM {
        constructor(element) {
            this.element = this.getDOMElements(element);
        }

        getDOMElements = (element) => doc.querySelectorAll(element); 

        on = (event, callback) => this.element.forEach(element => element.addEventListener(event, callback));

        off = (event, callback) => this.element.forEach(element => element.removeEventListener(event, callback));

        get = () => this.element;

        forEach = (func) => Array.prototype.forEach.call(this.element, func);

        map = (func) => Array.prototype.map.call(this.element, func);

        filter = (func) => Array.prototype.filter.call(this.element, func);

        reduce = (func) => Array.prototype.reduce.call(this.element, func);

        reduceRight = (func) => Array.prototype.reduceRight.call(this.element, func);

        every = (func) => Array.prototype.every.call(this.element, func);

        some = (func) => Array.prototype.some.call(this.element, func);

        static getArgument = (obj) => Object.prototype.toString.call(obj);
        
        static isArray = () => this.getArgument(this[0]) === '[object Array]';

        static isObject(){
            return this.getArgument(arguments[0]) === '[object Object]';
        };

        static isFunction(){
            return this.getArgument(arguments[0]) === '[object Function]';
        };

        static isNumber(){
            return this.getArgument(arguments[0]) === '[object Number]';
        };

        static isString(){
            return this.getArgument(arguments[0]) === '[object String]';
        };

        static isBoolean(){
            return this.getArgument(arguments[0]) === '[object Boolean]';
        };

        static isNull(){
            return this.getArgument(arguments[0]) === '[object Null]' || this.is(arguments[0]) === '[object Undefined]';
        };

        static appendTextToField(selectedField, data){
            let field = doc.querySelector(selectedField);
            field.textContent = data;
        };
    };

	win.DOM = DOM;

})(window, document);