window.onload = function() {
  // Array de opciones para cada parte de la excusa
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // Genera índices aleatorios para cada array
  let randomWhoIndex = Math.floor(Math.random() * who.length);
  let randomActionIndex = Math.floor(Math.random() * action.length);
  let randomWhatIndex = Math.floor(Math.random() * what.length);
  let randomWhenIndex = Math.floor(Math.random() * when.length);

  // Obtiene las partes aleatorias de la excusa
  let randomWho = who[randomWhoIndex];
  let randomAction = action[randomActionIndex];
  let randomWhat = what[randomWhatIndex];
  let randomWhen = when[randomWhenIndex];

  // Construye la excusa
  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  // Muestra la excusa dentro del elemento con el ID "excuse" en HTML
  document.getElementById("excuse").innerText = excuse;
};
