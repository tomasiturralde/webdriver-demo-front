const assert = require('assert')

describe('home page', () => {
  let formHeader;
  let listHeader;


  beforeEach(() => {
    browser.url('');
    formHeader = $('#form-title');
    listHeader = $('#list-title');
  })

  it('should have the right titles', () => {
    assert.strictEqual(formHeader.getText(), 'User Form');
    assert.strictEqual(listHeader.getText(), 'User List');
  })

  it('should add a new user', () => {
    const name = 'nombre' + Math.floor(Math.random() * (1000 + 1));
    const email = 'mail@austral.edu' + Math.floor(Math.random() * (1000 + 1));
    const street = 'calle' + Math.floor(Math.random() * (1000 + 1));
    const zipCode =  Math.floor(Math.random() * (1000 + 1));

    $('#name').addValue(name);
    browser.pause(500);
    $('#email').addValue(email);
    browser.pause(500);
    $('#street').addValue(street);
    browser.pause(500);
    $('#zipCode').addValue(zipCode);
    browser.pause(500);
    $('[name=submit]').click();
    browser.pause(1000);

    assert.strictEqual($('#last-added').getText(), 'Last added user:' + name);

    const lastUser = $$('.card')[0];
    assert.strictEqual(lastUser.$('#user-name').getText(), name);
    assert.strictEqual(lastUser.$('#user-email').getText(), 'Email: ' + email);
    assert.strictEqual(lastUser.$('#user-street').getText(), 'Street: ' + street);
    assert.strictEqual(lastUser.$('#user-zipCode').getText(), 'Zip Code: ' + zipCode);
  })

  it('should go to the second screen and come back', () => {
    $('#second-screen-button').click();
    browser.pause(1000);

    const secondScreen = $('p');
    assert.strictEqual(secondScreen.getText(), 'second-screen works!');

    $('#home-button').click();
    browser.pause(1000);

    assert.strictEqual(formHeader.getText(), 'User Form');
    assert.strictEqual(listHeader.getText(), 'User List');
  })
})
