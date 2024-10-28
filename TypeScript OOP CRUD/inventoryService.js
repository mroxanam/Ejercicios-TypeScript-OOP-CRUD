"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
var InventoryService = /** @class */ (function () {
    function InventoryService() {
        this.items = [];
    }
    // Añadir un nuevo item
    InventoryService.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("Item added: ".concat(item.name));
    };
    // Eliminar un item por su id
    InventoryService.prototype.removeItem = function (id) {
        var index = this.items.findIndex(function (item) { return item.id === id; });
        if (index !== -1) {
            var removedItem = this.items.splice(index, 1)[0];
            console.log("Item removed: ".concat(removedItem.name));
        }
        else {
            console.log("Item with id ".concat(id, " not found"));
        }
    };
    // Actualizar cantidad o precio de un item
    InventoryService.prototype.updateItem = function (id, newQuantity, newPrice) {
        var item = this.items.find(function (item) { return item.id === id; });
        if (item) {
            if (newQuantity !== undefined) {
                item.quantity = newQuantity;
                console.log("Updated quantity for ".concat(item.name, " to ").concat(item.quantity));
            }
            if (newPrice !== undefined) {
                item.price = newPrice;
                console.log("Updated price for ".concat(item.name, " to ").concat(item.price));
            }
        }
        else {
            console.log("Item with id ".concat(id, " not found"));
        }
    };
    // Buscar un item por su nombre
    InventoryService.prototype.findItemByName = function (name) {
        return this.items.filter(function (item) { return item.name.toLowerCase().includes(name.toLowerCase()); });
    };
    // Listar todos los items
    InventoryService.prototype.listItems = function () {
        return this.items;
    };
    return InventoryService;
}());
exports.InventoryService = InventoryService;
