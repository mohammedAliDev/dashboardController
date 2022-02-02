import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
import LocationPin from '../Assets/Icons/LocationPin';

export const getRequiredSVGPinByCategory = (myStyle) => {
	const pin = <LocationPin {...myStyle} />;
	const iconMarkup = renderToStaticMarkup(pin);
	const customMarketIcon = divIcon({
		className: 'custom-icon',
		html: iconMarkup,
	});
	return customMarketIcon;
};
