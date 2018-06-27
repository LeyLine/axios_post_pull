// When the WALL-E button is clicked
document.getElementById("post-wall-e").onclick = function () {
  // Create an object with data to submit
  const characterInfo = {
    name: 'WALL-E',
    occupation: 'Waste Allocation Robot',
    weapon: 'Head laser'
  };
  // Make a POST request
  axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
    .then(response => {
      console.log('post success');
      console.log(response);
    })
    .catch(error => {
      console.log('Oh No! Error!');
      console.log(error);
    });
};

function showFeedback(postResponse) {
  const newCharacterHtml =
    `
      <li>
        <h3> ${response.data.name} </h3>
        <p> Id: ${response.data.id} </p>
      </li>
    `;
  document.getElementById("characters-list").innerHTML += newCharacterHtml;
}

document.getElementById("character-form").onsubmit = function () {
  event.preventDefault();

  const characterInfo = {
    name: document.getElementById("the-name-input").value,
    occupation: document.getElementById("the-occupation-input").value,
    weapon: document.getElementById("the-weapon-input").value
  };

  axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
    .then(response => {
      const newCharacterHtml = `
        <li>
          <h3> ${response.data.name} </h3>
          <p> Id: ${response.data.id} </p>
        </li>
        `;
      document.getElementById("characters-list").innerHTML += newCharacterHtml;
    })
    .catch(error => {
      console.log(error);
    });
};

document.getElementById("update-form").onsubmit = function () {
  event.preventDefault();

  const updateInfo = {
    name: document.getElementById("update-name-input").value,
    occupation: document.getElementById("update-occupation-input").value,
    weapon: document.getElementById("update-weapon-input").value
  };
  const charId = document.getElementById("character-id-input").value;

  axios.patch(`https://ih-crud-api.herokuapp.com/characters/${charId}`, updateInfo)
    .then(response => {
      console.log("Update SUCCESS!");
    })
    .catch(error => {
      console.log(error);
    });
};