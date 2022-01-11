var namesList = document.getElementById('names');
let names = [
  {firstname : 'Luphumzo', Surname : 'Mtukuse'},
  {firstname : 'Babalo', Surname: 'Nqatalala'},
  {firstname : 'Abongile', Surname: 'Fente'},
  {firstname :'Live', Surname: 'Nako' },
  {firstname : 'Nande', Surname: 'Bija'},
  {firstname :'Sisipho', Surname:'Futshane'},
  {firstname :'Sisipho', Surname:'Nkatha'},
  {firstname: 'Siyanda', Surname:'Ncamazana'},
  {firstname: 'Siyanda', Surname:'Ncamazana'},
];
  
countnames = data => {
  var count = document.getElementById('counter');

  if (data) {
    count.innerHTML = 'There are a total of ' + data + ' names';
  } else {
    count.innerHTML = 'No names';
    document.getElementById('naam').style.display = 'none';
  }
};
// Read: GET
getnames = () => {
  var data = '';
  if (names.length > 0) {
    for (i = 0; i < names.length; i++) {
      data += '<tr>';
      data += '<td>' + names[i].firstname + " " + names[i].Surname + '</td>';
      data += '<td><button onclick="editname(' + i + ')">Edit</button></td>';
      data += '<td><button onclick="deletename(' + i + ')">Delete</button></td>';
      data += '</tr>';
    }
  }

  countnames(names.length);
  return namesList.innerHTML = data;
};
// Create: POST
addname = () => {
  var nameAdded = document.getElementById('add-naam');
  var SurnameAdded = document.getElementById('add-Surname');
  // Get the value
  var nameDetails = {
      firstname :  nameAdded.value.trim(),
      Surname: SurnameAdded.value.trim()
  }

  if (nameDetails) {
    // addCountry the new value
    names.push(nameDetails);
    // Reset input value
    nameAdded.value = '';
    // Dislay the new list
    getnames();
  }
};
// Update: PUT
editname = item => {
  var editname = document.getElementById('edit-naam');
   var editSurname = document.getElementById('edit-Surname');
  // Display value in the field
  editname.value = names[item].firstname;
  editSurname.value = names[item].Surname;
  // Display fields
  document.getElementById('editForm').style.display = 'block';

  document.getElementById('saveEdit').onsubmit = () => {
    // Get value
    var name = editname.value;
    if (name) {
      // editCountry value
      names.splice(item, 1, name.trim());
      // Display the new list
      getnames();
      // Hide fields
      closeInput();
    }
  }
};
// Delete: Delete
deletename= item => {
  // deleteCountry the current row
  names.splice(item, 1);
  // Display the new list
  getnames();
};

getnames();

closeInput = () => {
  document.getElementById('editForm').style.display = 'none';
}