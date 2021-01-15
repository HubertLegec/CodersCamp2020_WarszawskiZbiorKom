import { SearchManager } from '../src/app/SearchManager';
import { getByRole, waitFor, fireEvent, queryByText, findByText } from '@testing-library/dom';
import '@testing-library/jest-dom';

//przy imporcie searchmanagera jest błąd 'Missing class properties transform'
describe('SearchManager', () => {
  let container;

  function createContainerForInput() {
    const div = document.createElement('div');
    div.id = 'zbiorkom-app';
    return div;
  }

  beforeEach(() => {
    document.body.innerHTML = '';
    container = createContainerForInput();
    document.body.append(container);
  });

  test('creates input into div', () => {
    const searchManager = new SearchManager('zbiorkom-app', () => []);

    searchManager.createInput();

    expect(getByRole(container, 'textbox')).toBeInTheDocument();
  });

  test('created input id equals "autoComplete"', () => {
    const searchManager = new SearchManager('zbiorkom-app', () => []);

    searchManager.createInput();

    expect(getByRole(container, 'textbox').id).toEqual('autoComplete');
  });

  test('displays suggestions', async () => {
    const availableStops = [
      { name: 'Marszałkowska', number: '01' },
      { name: 'Puławska', number: '02' },
    ];
    const searchManager = new SearchManager('zbiorkom-app', () => availableStops);
    const input = searchManager.createInput();

    fireEvent.focus(input);
    fireEvent.input(input, { target: { value: 'Ma' } });

    const matchingStop = await findByText(container, containsIgnoringHtmlTags('Marszałkowska 01'));
    expect(matchingStop).toBeInTheDocument();
    await waitFor(() => expect(queryByText(container, containsIgnoringHtmlTags('Puławska 02'))).not.toBeInTheDocument());
  });

  function containsIgnoringHtmlTags(text) {
    return (content, node) => {
      const hasText = node => node.textContent.indexOf(text) >= 0;
      const childrenDontHaveText = Array.from(node.children)
        .every(child => !hasText(child));
      return hasText(node) && childrenDontHaveText;
    }
  }
});
