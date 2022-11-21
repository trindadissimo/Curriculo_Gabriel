Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'OX97L9kpEJGknlcnhJFvTDACfJebKBseMvCTexVX', // This is your Application ID
  'J1NJJDr8QUvjzzRSrIrg3WVJPiu55fmStmQFT7yz' // This is your Javascript key
);

const Objetivos = Parse.Object.extend("Objetivos");

const list = document.getElementById('objective-list');

const readObjective = async () => {

    const queryP = new Parse.Query(Objetivos);
    try {

        const results = await queryP.find();
        list.innerHTML = "";

        for (const objetivos of results) {

            const objetivo = objetivos.get("objective")
            list.innerHTML += '<li>' + objetivo + '';

        }

    } catch (error) {
        console.error("Error while fetching Tarefa", error);
    }
}

readObjective();