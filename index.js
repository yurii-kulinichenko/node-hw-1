const contacts = require('./contacts');

const argv = require('yargs').argv;

function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            const contacts = await contacts.listContacts();
            console.log(contacts);
            break;

        case 'get':
            const contact = await contacts.
            break;

        case 'add':
            // ... name email phone
            break;

        case 'remove':
            // ... id
            break;

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv);
