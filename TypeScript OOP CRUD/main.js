"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inventoryService_1 = require("./inventoryService");
// Crear instancia de InventoryService
var inventory = new inventoryService_1.InventoryService();
// Crear algunos items
var item1 = { id: 1, name: 'Laptop', quantity: 10, price: 1000 };
var item2 = { id: 2, name: 'Mouse', quantity: 50, price: 25 };
var item3 = { id: 3, name: 'Keyboard', quantity: 30, price: 45 };
// Añadir items
inventory.addItem(item1);
inventory.addItem(item2);
inventory.addItem(item3);
// Listar todos los items
console.log('All items:', inventory.listItems());
// Buscar item por nombre
console.log('Search by name "Mouse":', inventory.findItemByName('Mouse'));
// Actualizar cantidad y precio de un item
inventory.updateItem(1, 8, 950);
console.log('After update:', inventory.listItems());
// Eliminar un item
inventory.removeItem(2);
console.log('After deletion:', inventory.listItems());
