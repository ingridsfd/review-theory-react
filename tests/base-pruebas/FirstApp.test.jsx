import { render } from '@testing-library/react';
import { FirstApp } from '../../src/FirstApp.jsx';

describe('Pruebas en <FirstApp />', () => {
	test('debe hacer match con el snapshot', () => {
		const title = 'Hola, Soy Goku';
		render(<FirstApp title={title} />);
	});
});
