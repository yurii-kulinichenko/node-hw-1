const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(_dirname, 'contacts.json');

const listContacts = async () => {
    const data = await fs.readFile(contactsPath, 'utf - 8');
    return JSON.parse(data);
};

function getContactById(contactId) {
    // ...твій код
}

function removeContact(contactId) {
    // ...твій код
}

function addContact(name, email, phone) {
    // ...твій код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
