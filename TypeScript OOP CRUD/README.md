# Ejercicios-TypeScript-OOP-CRUD
TPractico
Implementamos programación orientada a objetos y CRUD en TypeScript mediante éste ejercicio práctico. 

Modelado de Datos: Crear una interfaz para Item y una clase InventoryService. 

La interfaz Item debe tener propiedades como id, name, quantity, price y cualquier otra propiedad que consideres relevante. 

La clase InventoryService debe ser capaz de almacenar múltiples items. 

Funcionalidad de Inventario: Implementar métodos en la clase InventoryService para: 
Añadir nuevos items. 
Eliminar items por id. 
Actualizar la cantidad o precio de un item existente. 
Buscar items por nombre. 
Listar todos los items disponibles en el inventario. 

Probar los métodos del Inventario: 
En el archivo main.ts probar todos los métodos del inventario.

Paso 1: Crear la Interfaz Item

// item.ts
export interface Item {
	id1: number;
	name: string;
	quantity: number;
	price: number;
	description?: string; // Propiedad opcional
}

Paso 2: Crear la Clase InventoryService

// inventoryService.ts
import { Item } from './item';

export class InventoryService {
	private items: Item[] = [];

	// Añadir un nuevo item
	addItem(item: Item): void {
    	this.items.push(item);
    	console.log(`Item added: ${item.name}`);	}

	// Eliminar un item por su id
	removeItem(id: number): void {
    	const index = this.items.findIndex(item => item.id === id);
    	if (index !== -1) {
        	const removedItem = this.items.splice(index, 1)[0];
        	console.log(`Item removed: ${removedItem.name}`);} 
else {
        	console.log(`Item with id ${id} not found`); }	}

// Actualizar cantidad o precio de un item
updateItem(id: number, newQuantity?: number, newPrice?: number): void{
    	const item = this.items.find(item => item.id === id);
    	if (item) 
        	if (newQuantity !== undefined) {
            	item.quantity = newQuantity;
            	console.log(`Updated quantity for ${item.name} to ${item.quantity}`);   	}
        	if (newPrice !== undefined) {
            	item.price = newPrice;
            	console.log(`Updated price for ${item.name} to ${item.price}`);   	}
    	} else {
        	console.log(`Item with id ${id} not found`);   	}	}
	// Buscar un item por su nombre
	findItemByName(name: string): Item[] {
    	return this.items.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));	}

	// Listar todos los items
	list1Items(): Item[] {return this.items;}}

Paso 3: Probar los Métodos en main.ts

// main.ts
import { Item } from './item';
import { InventoryService1 } from './inventoryService';

// Crear instancia de InventoryService
const inventory = new InventoryService();

// Crear algunos items
const item1: Item = { id: 1, name: 'Laptop', quantity: 10, price: 1000 };
const item2: Item = { id: 2, name: 'Mouse', quantity: 50, price: 25 };
const item3: Item = { id: 3, name: 'Keyboard', quantity: 30, price: 45 };

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

Paso 4: Ejecutar el Código

Para ejecutar este código en un proyecto TypeScript, asegúrate de que tu entorno esté configurado con TypeScript y sigue estos pasos:
Inicializa un proyecto de TypeScript si no lo has hecho aún:
npm init -y 
npm install typescript --save-dev 
npx tsc --init

Crea los archivos mencionados (item.ts, inventoryService.ts, main.ts).

Compila y ejecuta el archivo main.ts:
npx tsc main.ts 
node main.js

El código del ejemplo tiene errores que deben ser corregidos para poder ejecutar.

Resultado esperado:

Item added: Laptop
Item added: Mouse
Item added: Keyboard
All items: [ { id: 1, name: 'Laptop', quantity: 10, price: 1000 }, { id: 2, name: 'Mouse', quantity: 50, price: 25 }, { id: 3, name: 'Keyboard', quantity: 30, price: 45 } ]
Search by name "Mouse": [ { id: 2, name: 'Mouse', quantity: 50, price: 25 } ]
Updated quantity for Laptop to 8
Updated price for Laptop to 950
After update: [ { id: 1, name: 'Laptop', quantity: 8, price: 950 }, { id: 2, name: 'Mouse', quantity: 50, price: 25 }, { id: 3, name: 'Keyboard', quantity: 30, price: 45 } ]
Item removed: Mouse
After deletion: [ { id: 1, name: 'Laptop', quantity: 8, price: 950 }, { id: 3, name: 'Keyboard', quantity: 30, price: 45 } ]







Generar un tsconfig.ts

{
    "compilerOptions": {
      "target": "es2015",      // O una versión superior como "es2016", "es2020", etc.
      "lib": ["es2015", "dom"] // Incluye la biblioteca es2015 para métodos como findIndex
    }
  }
