var qoutes = [
  {
    qoute: "Be yourself; everyone else is already taken.",
    name: "Oscar Wilde",
  },
  {
    qoute:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    name: "Albert Einstein",
  },
  {
    qoute: "You only live once, but if you do it right, once is enough.",
    name: "Mae West",
  },
  {
    qoute: "Be the change that you wish to see in the world.",
    name: "Mahatma Gandhi",
  },
  {
    qoute:
      "In three words I can sum up everything I've learned about life: it goes on.",
    name: "Robert Frost",
  },
  {
    qoute: "If you tell the truth, you don't have to remember anything.",
    name: "Mark Twain",
  },
];

function display() {
  if (qoutes.length == 0) {
    qoutes = [
      {
        qoute: "Be yourself; everyone else is already taken.",
        name: "Oscar Wilde",
      },
      {
        qoute:
          "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        name: "Albert Einstein",
      },
      {
        qoute: "You only live once, but if you do it right, once is enough.",
        name: "Mae West",
      },
      {
        qoute: "Be the change that you wish to see in the world.",
        name: "Mahatma Gandhi",
      },
      {
        qoute:
          "In three words I can sum up everything I've learned about life: it goes on.",
        name: "Robert Frost",
      },
      {
        qoute: "If you tell the truth, you don't have to remember anything.",
        name: "Mark Twain",
      },
    ];
  }
  var cartona = "";
  var random = Math.floor(Math.random() * qoutes.length);
  cartona += `<p class="text-capitalize fs-2 mb-4">
            "${qoutes[random].qoute}"
          </p>
          <h3 class="text-capitalize fs-1">-- ${qoutes[random].name}</h3>`;
  document.getElementById("qoute").innerHTML = cartona;
  qoutes.splice(random, 1);
}
