import { Item } from './item';

export class InventoryService {
	private items: Item[] = [];

	// Añadir un nuevo item
	addItem(item: Item): void {
		this.items.push(item);
		console.log(`Item added: ${item.name}`);
	}

	// Eliminar un item por su id
	removeItem(id: number): void {
		const index = this.items.findIndex(item => item.id === id);
		if (index !== -1) {
			const removedItem = this.items.splice(index, 1)[0];
			console.log(`Item removed: ${removedItem.name}`);
		} else {
			console.log(`Item with id ${id} not found`);
		}
	}

	// Actualizar cantidad o precio de un item
	updateItem(id: number, newQuantity?: number, newPrice?: number): void {
		const item = this.items.find(item => item.id === id);
		if (item) {
			if (newQuantity !== undefined) {
				item.quantity = newQuantity;
				console.log(`Updated quantity for ${item.name} to ${item.quantity}`);
			}
			if (newPrice !== undefined) {
				item.price = newPrice;
				console.log(`Updated price for ${item.name} to ${item.price}`);
			}
		} else {
			console.log(`Item with id ${id} not found`);
		}
	}

	// Buscar un item por su nombre
	findItemByName(name: string): Item[] {
		return this.items.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
	}

	// Listar todos los items
	listItems(): Item[] {
		return this.items;
	}
}
