const contacts = require('./db/contacts');

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const list = await contacts.listContacts();
            return console.table(list);

        case 'get':
            const contact = await contacts.getContactById(id);
            return console.table(contact);

        case 'add':
            const newContact = await contacts.addContact({
                name,
                email,
                phone,
            });
            return console.table(newContact);

        case 'remove':
            const deletedContact = await contacts.removeContact(id);
            return console.table(deletedContact);

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
