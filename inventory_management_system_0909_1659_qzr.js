// 代码生成时间: 2025-09-09 16:59:45
// Define the Inventory class to manage inventory items
class Inventory {
    constructor() {
        this.items = []; // Array to store inventory items
    }

    /**
     * Adds a new item to the inventory
     * @param {Object} item - The item to be added
     */
    addItem(item) {
        if (!item.id || !item.name || !item.quantity) {
            throw new Error('Invalid item data');
        }
        const existingItemIndex = this.items.findIndex(i => i.id === item.id);
        if (existingItemIndex > -1) {
            this.items[existingItemIndex].quantity += item.quantity;
        } else {
            this.items.push(item);
        }
    }

    /**
     * Removes an item from the inventory
     * @param {number} id - The ID of the item to be removed
     */
    removeItem(id) {
        const itemIndex = this.items.findIndex(i => i.id === id);
        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1);
        } else {
            throw new Error('Item not found');
        }
    }

    /**
     * Updates the quantity of an existing item in the inventory
     * @param {number} id - The ID of the item to be updated
     * @param {number} quantity - The new quantity
     */
    updateItemQuantity(id, quantity) {
        const itemIndex = this.items.findIndex(i => i.id === id);
        if (itemIndex > -1) {
            if (quantity < 0) {
                throw new Error('Invalid quantity');
            }
            this.items[itemIndex].quantity = quantity;
        } else {
            throw new Error('Item not found');
        }
    }

    /**
     * Retrieves an item from the inventory by ID
     * @param {number} id - The ID of the item to retrieve
     * @returns {Object} The item object
     */
    getItemById(id) {
        const item = this.items.find(i => i.id === id);
        if (!item) {
            throw new Error('Item not found');
        }
        return item;
    }

    /**
     * Lists all items in the inventory
     * @returns {Array} The array of all items
     */
    listItems() {
        return this.items;
    }
}

// Create an instance of the Inventory class
const inventory = new Inventory();

// Example usage:
try {
    inventory.addItem({ id: 1, name: 'Widget', quantity: 10 });
    inventory.addItem({ id: 2, name: 'Gadget', quantity: 5 });
    inventory.updateItemQuantity(1, 15);
    console.log(inventory.getItemById(1));
    console.log(inventory.listItems());
    inventory.removeItem(2);
    console.log(inventory.listItems());
} catch (error) {
    console.error(error.message);
}

// jQuery UI for user interaction (assuming HTML elements are already set up)
$(document).ready(function() {
    // Function to handle adding an item to the inventory
    $('#add-item-button').click(function() {
        const itemId = $('#item-id').val();
        const itemName = $('#item-name').val();
        const itemQuantity = parseInt($('#item-quantity').val(), 10);

        try {
            inventory.addItem({ id: itemId, name: itemName, quantity: itemQuantity });
            alert('Item added successfully!');
            // Update the UI accordingly
        } catch (error) {
            alert(error.message);
        }
    });

    // Function to handle removing an item from the inventory
    $('#remove-item-button').click(function() {
        const itemId = parseInt($('#item-id').val(), 10);

        try {
            inventory.removeItem(itemId);
            alert('Item removed successfully!');
            // Update the UI accordingly
        } catch (error) {
            alert(error.message);
        }
    });

    // Function to handle updating an item's quantity in the inventory
    $('#update-item-button').click(function() {
        const itemId = parseInt($('#item-id').val(), 10);
        const newQuantity = parseInt($('#new-quantity').val(), 10);

        try {
            inventory.updateItemQuantity(itemId, newQuantity);
            alert('Item quantity updated successfully!');
            // Update the UI accordingly
        } catch (error) {
            alert(error.message);
        }
    });

    // Function to handle listing all items in the inventory
    $('#list-items-button').click(function() {
        try {
            const items = inventory.listItems();
            console.log(items);
            // Update the UI accordingly to display the items
        } catch (error) {
            console.error(error.message);
        }
    });
});