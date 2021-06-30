const person = () => {
    var saveName = 'Name';
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name
        }
    }
}

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Alex');
console.log(newPerson.getName());

// Les dejo el mismo ejemplo pero usando getter y setter

const person = () => {
    let name = 'Name'

    return {
        get name () {
        return name
        },

        set name (value) {
        name = value
        }
    }
}

const newPerson = person()
console.log(newPerson.name)
newPerson.name = 'Jousmo'
console.log(newPerson.name)