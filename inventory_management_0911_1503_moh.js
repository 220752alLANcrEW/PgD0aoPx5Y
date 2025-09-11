// 代码生成时间: 2025-09-11 15:03:40
 * It includes error handling and is structured for maintainability and extensibility.
 *
 * @author Your Name
 * @version 1.0
 */

// Define the InventoryManager class
class InventoryManager {
    constructor() {
        this.items = []; // Initialize an empty array to store inventory items
    }

    // Add an item to the inventory
    addItem(item) {
        if (!item || typeof item !== 'object' || !item.id || !item.name || !item.quantity) {
            throw new Error('Invalid item object provided.');
        }
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this.items.push(item);
        }
    }

    // Remove an item from the inventory
    removeItem(itemId) {
        const index = this.items.findIndex(item => item.id === itemId);
        if (index === -1) {
            throw new Error('Item not found in inventory.');
        }
        this.items.splice(index, 1);
    }

    // Update an item's quantity
    updateItem(itemId, newQuantity) {
        const item = this.items.find(item => item.id === itemId);
        if (!item) {
            throw new Error('Item not found in inventory.');
        }
        if (newQuantity < 0) {
            throw new Error('Invalid quantity. Quantity cannot be negative.');
        }
        item.quantity = newQuantity;
    }

    // Get all items in the inventory
    getAllItems() {
        return this.items;
    }

    // Get an item by its ID
    getItemById(itemId) {
        const item = this.items.find(item => item.id === itemId);
        if (!item) {
            throw new Error('Item not found in inventory.');
        }
        return item;
    }
}

// Example usage
try {
    const inventory = new InventoryManager();
    inventory.addItem({id: 1, name: 'Apple', quantity: 10});
    inventory.addItem({id: 2, name: 'Banana', quantity: 5});
    console.log(inventory.getAllItems());
    inventory.updateItem(1, 15);
    console.log(inventory.getItemById(1));
    inventory.removeItem(2);
    console.log(inventory.getAllItems());
} catch (error) {
    console.error(error.message);
}
