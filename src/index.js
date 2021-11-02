const venom = require('venom-bot');

venom.create().then((client) => start(client));

function start(client) {
    client.onMessage((message) => {
        if (message.body === 'Hi' && message.isGroupMsg === false) {
            client.sendText(message.from, 'Bem vindo ao Betinho, o assistente virtual!');
        }
    });
}