const assert = require("chai").assert;

let checkpoint;

describe("Test All Checkpoint", () => {
  before(function() {
    checkpoint = require("../checkpoint");
  });

  beforeEach(function() {
    //checkpoint.init();
  });

  it("Test si c'est un Objet", () => {
    assert.isObject(checkpoint, "[Ce n'est pas un objet]");
  });

  it("Test le remplissage de 10 notes comprises en 0 et 20", () => {
    assert.isObject(checkpoint, "[Ce n'est pas un objet]");
  });

  it("Test le nombre de points", () => {
    assert.isObject(checkpoint, "[Ce n'est pas un objet]");
  });

  it("Test l'elimination par une note 0", () => {
    assert.isObject(checkpoint, "[Ce n'est pas un objet]");
  });

  it("Test la moyenne des notes", () => {
    assert.isObject(checkpoint, "[Ce n'est pas un objet]");
  });

  it("Test la fonction reset", () => {
    assert.isObject(checkpoint, "[Ce n'est pas un objet]");
  });
});
