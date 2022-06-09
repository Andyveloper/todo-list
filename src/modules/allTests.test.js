/* @jest-environment jsdom */


test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBe(null);
})

describe("Content should be editable", () => {
  it ("should be editable", () => {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', `list-item1`);
    listItem.classList.add('list-items');
    listItem.setAttribute('id', 1);
    listItem.innerHTML = `
    <input class="check check1" id="1" type="checkbox">
    <label for="1" class="tick js-tick"></label>
    <span id="editable1" contenteditable="true">todo.description</span>
    <button class="delete-todo js-delete-todo">
    <i class="fa-solid fa-trash-can"></i>
    </button>
  `;

    expect(listItem.innerHTML).toBe(`
    <input class="check check1" id="1" type="checkbox">
    <label for="1" class="tick js-tick"></label>
    <span id="editable1" contenteditable="true">todo.description</span>
    <button class="delete-todo js-delete-todo">
    <i class="fa-solid fa-trash-can"></i>
    </button>
  `)
    expect(listItem.innerHTML).toBeTruthy();
  }) 
})

